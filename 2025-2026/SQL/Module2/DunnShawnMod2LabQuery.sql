--Question 1
SELECT c.CategoryName, p.ProductID, p.ProductName, p.UnitsInStock
FROM Categories c
INNER JOIN Products p
ON c.CategoryID = p.CategoryID
WHERE c.CategoryName = 'Produce'
ORDER BY p.ProductName 
--Question 2
SELECT DISTINCT c.CategoryName, s.CompanyName, s.ContactName, s.Phone
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE c.CategoryName = 'Confections'
--Question 3
SELECT o.OrderID, o.OrderDate, o.ShippedDate, s.CompanyName
FROM Orders o
JOIN Shippers s ON o.ShipVia = s.ShipperID
WHERE s.CompanyName = 'Speedy Express'
  AND o.ShippedDate = '2020-05-04'
--Question 4
SELECT c.CompanyName AS CustomerName, o.OrderID, o.OrderDate,
    o.ShippedDate, e.FirstName + ' ' + e.LastName AS SalesPerson,
    s.CompanyName AS ShipperName
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
INNER JOIN Shippers s ON o.ShipVia = s.ShipperID
WHERE c.CompanyName = 'Consolidated Holdings'
ORDER BY o.OrderDate
--Question 5
SELECT e.LastName, e.FirstName, e.JobTitle, m.FirstName + ' ' + m.LastName AS ManagerName
FROM Employees e
LEFT JOIN Employees m ON e.ReportsTo = m.EmployeeID
WHERE e.LastName BETWEEN 'A' AND 'Dzzz'
ORDER BY e.LastName