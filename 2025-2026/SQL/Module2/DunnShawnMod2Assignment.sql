
-- 1. Products whose names contain an ‘a’ and a ‘c’ (include the supplier)
SELECT p.ProductName, s.CompanyName AS Supplier
FROM Products AS p
INNER JOIN Suppliers AS s ON p.SupplierID = s.SupplierID
WHERE p.ProductName LIKE '%a%'AND p.ProductName LIKE '%c%'
ORDER BY p.ProductName

-- 2. Orders shipped to Sweden, Denmark, Finland, Norway (include customer, basic order info, and contents)
SELECT c.CompanyName AS Customer,o.OrderID, o.OrderDate,o.ShippedDate,o.ShipCountry,p.ProductName,od.Quantity,od.UnitPrice
FROM Orders AS o
INNER JOIN Customers AS c ON o.CustomerID  = c.CustomerID
INNER JOIN OrderDetails AS od ON o.OrderID    = od.OrderID
INNER JOIN Products AS p  ON od.ProductID = p.ProductID
WHERE o.ShipCountry IN ('Sweden', 'Denmark', 'Finland', 'Norway')
ORDER BY o.OrderID, p.ProductName

-- 3. Unique products that were ordered during January 2020
SELECT DISTINCT p.ProductID, p.ProductName
FROM Orders AS o
INNER JOIN OrderDetails AS od ON o.OrderID    = od.OrderID
INNER JOIN Products AS p  ON od.ProductID = p.ProductID
WHERE o.OrderDate >= '2020-01-01' AND o.OrderDate  < '2020-02-01'
ORDER BY p.ProductName

-- 4. Employees who currently report to Kimberlee Johnson or James Riggle (show supervisor and employee)
SELECT m.FirstName + ' ' + m.LastName AS Supervisor, e.FirstName + ' ' + e.LastName AS Employee, e.JobTitle
FROM Employees AS e
INNER JOIN Employees AS m ON e.ReportsTo = m.EmployeeID
WHERE e.TerminationDate IS NULL
  AND (
        (m.FirstName = 'Kimberlee' AND m.LastName = 'Johnson') OR (m.FirstName = 'James'     AND m.LastName = 'Riggle')
      )
ORDER BY m.LastName, e.LastName

-- 5. Products that have not been purchased by customers
SELECT p.ProductID, p.ProductName
FROM Products AS p
LEFT JOIN OrderDetails AS od ON p.ProductID = od.ProductID
WHERE od.ProductID IS NULL
ORDER BY p.ProductName

-- 6. All suppliers and customers in Germany, with contacts/addresses and a label
SELECT 'Customer' AS CompanyType, c.CompanyName, c.ContactName, c.Address, c.City, c.PostalCode, c.Country, c.Phone
FROM Customers AS c
WHERE c.Country = 'Germany'

UNION ALL

SELECT 'Supplier' AS CompanyType, s.CompanyName, s.ContactName, s.Address, s.City, s.PostalCode, s.Country, s.Phone
FROM Suppliers AS s
WHERE s.Country = 'Germany'
ORDER BY CompanyType, CompanyName 



