
--Question 1
-- Subquery
SELECT c.city
FROM customers c
WHERE c.CompanyName = 'Seven Seas Imports'

--Main Query: Customers who are in London
SELECT c.CompanyName, c.City
FROM Customers c
WHERE c.City ='London'

--now put them together
SELECT c.CompanyName, c.City
FROM Customers c
WHERE c.City = (SELECT c.city
FROM Customers c
WHERE c.CompanyName = 'Seven Seas Imports')


-- Question 2
-- Subquery: Find the OrderID with the lowest freight cost
SELECT TOP 1 o.OrderID
FROM Orders AS o
ORDER BY o.Freight ASC

-- Main Query: Show order details for a specific order
SELECT od.OrderID, p.ProductName, od.Quantity
FROM OrderDetails AS od
JOIN Products AS p ON od.ProductID = p.ProductID
WHERE od.OrderID = 10248

-- Final Query: Items on the order that has the least freight cost
SELECT od.OrderID, p.ProductName, od.Quantity
FROM OrderDetails AS od
JOIN Products AS p ON od.ProductID = p.ProductID
WHERE od.OrderID = (
SELECT TOP 1 o.OrderID
FROM Orders AS o
ORDER BY o.Freight ASC)


-- Question 3
-- Subquery: Find the highest number of years worked among current employees
SELECT MAX(DATEDIFF(YEAR, e.HireDate, GETDATE()))
FROM Employees AS e
WHERE e.TerminationDate IS NULL;

-- Main Query: Show years of service for all current employees
SELECT e.FirstName, e.LastName,
DATEDIFF(YEAR, e.HireDate, GETDATE()) AS YearsOfService
FROM Employees AS e
WHERE e.TerminationDate IS NULL;

-- Final Query: All current employees with the longest years of service
SELECT e.FirstName, e.LastName,
DATEDIFF(YEAR, e.HireDate, GETDATE()) AS YearsOfService
FROM Employees AS e
WHERE e.TerminationDate IS NULL
AND DATEDIFF(YEAR, e.HireDate, GETDATE()) = (
SELECT MAX(DATEDIFF(YEAR, e2.HireDate, GETDATE()))
FROM Employees AS e2
WHERE e2.TerminationDate IS NULL)

-- Question 4
-- Subquery: Find the average units in stock for a specific category
SELECT AVG(p.UnitsInStock)
FROM Products AS p
WHERE p.CategoryID = 1
AND p.Discontinued = 0;

-- Main Query: List category, product, and stock info for Beverages and Condiments
SELECT c.CategoryName, p.ProductName, p.UnitsInStock
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID
WHERE c.CategoryName IN ('Beverages', 'Condiments')
AND p.Discontinued = 0

-- Final Query: Products below category average stock (excluding discontinued)
SELECT c.CategoryName, p.ProductName, p.UnitsInStock, (SELECT AVG(p2.UnitsInStock)
FROM Products AS p2
WHERE p2.CategoryID = p.CategoryID
AND p2.Discontinued = 0) AS CategoryAvgUnitsInStock
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID
WHERE p.Discontinued = 0
AND c.CategoryName IN ('Beverages', 'Condiments')
AND p.UnitsInStock < (
SELECT AVG(p3.UnitsInStock)
FROM Products AS p3
WHERE p3.CategoryID = p.CategoryID
AND p3.Discontinued = 0)
ORDER BY c.CategoryName, p.ProductName

--Question 5
-- Derived table: Average units in stock per active category
SELECT CategoryID, AVG(UnitsInStock) AS CategoryAvgUnitsInStock
FROM Products
WHERE Discontinued = 0
GROUP BY CategoryID

-- Main Query: List product and category info for Beverages and Condiments
SELECT c.CategoryName, p.ProductName, p.UnitsInStock
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID
WHERE c.CategoryName IN ('Beverages', 'Condiments')
AND p.Discontinued = 0

  -- Final Query: Products below category average using derived table
SELECT c.CategoryName, p.ProductName, p.UnitsInStock, ca.CategoryAvgUnitsInStock
FROM Products AS p
JOIN Categories AS c 
ON p.CategoryID = c.CategoryID
JOIN (
SELECT CategoryID, AVG(UnitsInStock) AS CategoryAvgUnitsInStock
FROM Products
WHERE Discontinued = 0
GROUP BY CategoryID) AS ca ON p.CategoryID = ca.CategoryID
WHERE p.Discontinued = 0
AND c.CategoryName IN ('Beverages', 'Condiments')
AND p.UnitsInStock < ca.CategoryAvgUnitsInStock
ORDER BY c.CategoryName, p.ProductName