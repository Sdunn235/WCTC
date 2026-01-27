Select Country
from Employees 
where Country in ('US','USA','UK')
group by Country

select EmployeeID, FirstName, LastName, HireDate, TerminationDate
from Employees
where HireDate between '8/1/10' and '11/16/20' 
and TerminationDate is NULL

select ProductName ,UnitsInStock, UnitsOnOrder, Discontinued
from Products
where Discontinued = 1
Order By UnitsInStock DESC,ProductName

select Top 1 ProductName, UnitsInStock
from Products
Order By UnitsInStock DESC

Select ProductName, QuantityPerUnit
From Products
where QuantityPerUnit like '%box%'