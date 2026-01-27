-- Question 1:
-- List the company name(s) of the customer(s) whose orders were shipped on the most recent shipped date.
SELECT CompanyName
FROM Customers
WHERE CustomerID IN 
(
SELECT CustomerID
FROM Orders
WHERE ShippedDate = 
(
SELECT MAX(ShippedDate)
FROM Orders
WHERE ShippedDate IS NOT NULL
)
)


-- Question 2:
-- Determine which orders were shipped out on the same day as order 10977.
SELECT OrderID, CustomerID, ShippedDate
FROM Orders
WHERE ShippedDate = 
(
SELECT ShippedDate
FROM Orders
WHERE OrderID = 10977
)


-- Question 3:
-- Orders that are NOT shipped and were placed with a terminated employee.
-- Include OrderID, OrderTotal, and customer contact info.
SELECT o.OrderID,(
SELECT SUM(UnitPrice * Quantity * (1 - Discount)
)
FROM OrderDetails
WHERE OrderID = o.OrderID) AS OrderTotal, c.ContactName, c.ContactTitle, c.Phone, c.Fax
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE o.ShippedDate IS NULL
AND o.EmployeeID IN 
(
SELECT EmployeeID
FROM Employees
WHERE TerminationDate IS NOT NULL
)


-- Question 4:
-- Products with a unit price above the average unit price in their category.
SELECT ProductName, UnitPrice, CategoryID
FROM Products p
WHERE UnitPrice > 
(
SELECT AVG(UnitPrice)
FROM Products
WHERE CategoryID = p.CategoryID
)


-- Question 5:
-- Identify discontinued items that are out of stock AND
-- find the orders that contain these items (all in one query).
SELECT o.OrderID, c.CompanyName, c.ContactName, c.ContactTitle, c.Phone, c.Fax, p.ProductName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
WHERE p.ProductID IN 
(
SELECT ProductID
FROM Products
WHERE Discontinued = 1
AND UnitsInStock = 0
)


-- Question 6:
-- Suppliers who ONLY have discontinued products.
SELECT SupplierID, CompanyName, ContactName, Phone
FROM Suppliers s
WHERE NOT EXISTS 
(
SELECT *
FROM Products p
WHERE p.SupplierID = s.SupplierID
AND p.Discontinued = 0
)
