-- Question 1
SELECT c.CategoryName,
COUNT (p.ProductID) AS ProductCount
FROM Categories AS c
JOIN Products AS p
ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
-- Question 2
SELECT s.CompanyName, p.ProductName,  
COALESCE(COUNT(od.OrderID), 0) AS TimesOrdered          
FROM Suppliers AS s
JOIN Products  AS p
ON p.SupplierID = s.SupplierID
LEFT JOIN OrderDetails AS od
ON od.ProductID = p.ProductID
WHERE (s.CompanyName) = 'KARKKI OY' 
GROUP BY (s.CompanyName), (p.ProductName)
ORDER BY ProductName
-- Question 3
SELECT TOP 1 p.ProductName,
SUM(od.Quantity) AS TotalUnitsSold
FROM OrderDetails AS od
JOIN Orders AS o 
ON o.OrderID = od.OrderID
JOIN Products AS p 
ON p.ProductID = od.ProductID
WHERE o.OrderDate BETWEEN '2019-01-01' AND '2019-12-31'
GROUP BY p.ProductName
ORDER BY TotalUnitsSold DESC
-- Question 4
SELECT p.ProductName,
FORMAT(SUM(od.UnitPrice * od.Quantity * (1 - od.Discount)), 'C', 'en-US') AS TotalSales
FROM Products AS p
JOIN OrderDetails AS od 
ON p.ProductID = od.ProductID
WHERE p.ProductName = 'Chai'
GROUP BY p.ProductName;
-- Question 5
SELECT OrderID, 
FORMAT(SUM(Quantity * UnitPrice*(1 - Discount)), 'C', 'en-US') AS OrderTotal
FROM OrderDetails
GROUP BY OrderID
HAVING SUM(Quantity * UnitPrice*(1 - Discount)) >= 10000
ORDER BY SUM(Quantity * UnitPrice*(1 - Discount)) DESC;
