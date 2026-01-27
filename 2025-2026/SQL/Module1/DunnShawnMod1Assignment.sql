SELECT TOP 10 *
FROM Orders
ORDER BY OrderDate DESC

SELECT FirstName + ' ' + LastName AS Name,
Address AS StreetAddress, 
	City + ', ' + StateOrRegion + ' ' + PostalCode AS [City/StateOrRegion/PostalCode]
FROM Employees;

SELECT *
FROM Orders
WHERE YEAR(ShippedDate)=2019 
	AND MONTH(ShippedDate) IN (8,10)
ORDER BY ShippedDate;

SELECT FirstName + ' ' + LastName AS Name, 
	TerminationDate
FROM Employees
WHERE TerminationDate IS NOT NULL

SELECT ProductName, UnitsInStock ,UnitsOnOrder
FROM Products
WHERE UnitsInStock = 0 AND UnitsOnOrder = 0
ORDER BY ProductName