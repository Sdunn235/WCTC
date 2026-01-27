
-- Question 1
SELECT e.EmployeeID, 
LEFT(e.FirstName, 1) + '. ' + e.LastName AS FirstInitialLast, e.Extension,
LEFT(e.EmailAddress, CHARINDEX('@', e.EmailAddress) - 1) AS LoginName,
s.FirstName + ' ' + s.LastName AS SupervisorName
FROM Employees AS e
LEFT JOIN Employees AS s
ON s.EmployeeID = e.ReportsTo
WHERE e.TerminationDate IS NULL
ORDER BY e.LastName, e.FirstName

-- Question 2
SELECT p.ProductName, c.CategoryName,
ROUND(p.UnitPrice, 2)  CurrentPrice,
ROUND(p.UnitPrice * CASE
WHEN c.CategoryName IN ('Beverages','Condiments') THEN 1.20
WHEN c.CategoryName IN ('Meat/Poultry','Seafood')  THEN 1.15
ELSE 1.00
END
* CASE
WHEN s.CompanyName = 'New Orleans Cajun Delights' THEN 1.08
ELSE 1.00
END, 2)  NewPrice
FROM Products    p
JOIN Categories  c ON c.CategoryID = p.CategoryID
JOIN Suppliers   s ON s.SupplierID = p.SupplierID
ORDER BY c.CategoryName, p.ProductName


-- Question 3
SELECT p.ProductName,
ROUND(SUM(od.UnitPrice * od.Quantity * (1 - od.Discount)), 2) AS Revenue
FROM OrderDetails AS od
JOIN Products     AS p ON p.ProductID = od.ProductID
WHERE p.ProductName = 'Outback Lager'
GROUP BY p.ProductName


-- Question 4
SELECT o.OrderID, o.OrderDate,
ROUND(SUM(od.UnitPrice * od.Quantity * (1 - od.Discount)), 2) AS OrderTotal,
DATEDIFF(DAY, o.OrderDate, o.ShippedDate) AS DaysToShip
FROM Orders AS o
JOIN OrderDetails AS od ON od.OrderID = o.OrderID
WHERE o.ShippedDate IS NOT NULL
GROUP BY o.OrderID, o.OrderDate, o.ShippedDate
HAVING DATEDIFF(DAY, o.OrderDate, o.ShippedDate) > 9
ORDER BY DaysToShip DESC, o.OrderDate

-- Question 5
SELECT c.CustomerID, c.CompanyName,
LEFT(c.ContactName, CHARINDEX(' ', c.ContactName + ' ') - 1) AS ContactFirstName,
LTRIM(SUBSTRING( c.ContactName,
CHARINDEX(' ', c.ContactName + ' ') + 1,
LEN(c.ContactName))) AS ContactLastName
FROM Customers AS c
ORDER BY c.CompanyName

-- Question 6
SELECT c.CompanyName, c.Country AS CustomerCountry, o.OrderID, o.OrderDate, o.ShipCountry,
ROUND(SUM(od.UnitPrice * od.Quantity * (1 - od.Discount)), 2) AS OrderTotal
FROM Customers AS c
JOIN Orders    AS o  ON o.CustomerID = c.CustomerID
JOIN OrderDetails AS od ON od.OrderID = o.OrderID
WHERE c.Country IN ('UK','France','Germany','Spain','Sweden','Finland','Norway','Denmark','Portugal','Italy','Ireland','Belgium','Switzerland','Austria','Poland','Netherlands')
GROUP BY c.CompanyName, c.Country, o.OrderID, o.OrderDate, o.ShipCountry
HAVING SUM(od.UnitPrice * od.Quantity * (1 - od.Discount)) > 5000
ORDER BY c.Country, c.CompanyName, o.OrderDate
