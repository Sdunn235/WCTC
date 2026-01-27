/* 1. Create Countries table */
CREATE TABLE Countries (
CountryID   INT IDENTITY(1,1) PRIMARY KEY,
CountryName VARCHAR(15),
Continent   VARCHAR(20)
);


/* 2. Insert all distinct countries from Customers and Employees */
INSERT INTO Countries (CountryName)
SELECT DISTINCT Country
FROM Customers
UNION
SELECT DISTINCT Country
FROM Employees;

/* Looking at country list so that I can look up what continent they are on */
SELECT c.CountryID, c.CountryName, c.Continent
FROM Countries c;

UPDATE Countries
SET Continent = 'South America'
WHERE CountryName IN ('Argentina', 'Brazil', 'Venezuela');

UPDATE Countries
SET Continent = 'North America'
WHERE CountryName IN ('Canada', 'Mexico', 'US', 'USA');

UPDATE Countries
SET Continent = 'Europe'
WHERE CountryName IN ( 'Austria', 'Belgium', 'Denmark', 'Finland', 'France', 'Germany', 'Ireland',
    'Italy', 'Norway', 'Poland', 'Portugal', 'Spain', 'Sweden', 'Switzerland', 'UK'
);

/* Rechecking list to see if it properly updated */
SELECT c.CountryID, c.CountryName, c.Continent
FROM Countries c;

/* 3. Add CountryID column to Customers and Employees */
ALTER TABLE Customers
ADD CountryID INT;

ALTER TABLE Employees
ADD CountryID INT;

/* 3. Add foreign key constraints */
ALTER TABLE Customers
ADD CONSTRAINT FK_Customers_Countries
FOREIGN KEY (CountryID) REFERENCES Countries(CountryID);

ALTER TABLE Employees
ADD CONSTRAINT FK_Employees_Countries
FOREIGN KEY (CountryID) REFERENCES Countries(CountryID);


/* 3. Fill CountryID in Customers and Employees */
UPDATE Customers
SET CountryID = (
SELECT CountryID
FROM Countries
WHERE Countries.CountryName = Customers.Country
);

UPDATE Employees
SET CountryID = (
SELECT CountryID
FROM Countries
WHERE Countries.CountryName = Employees.Country
);

/* Checking change in data */
SELECT *
FROM Employees;

/* Checking change in data */
SELECT *
FROM Customers;

/* 4. Clean up US / USA duplicates */
/* First I looked at the IDs it returns */
SELECT CountryID, CountryName
FROM Countries
WHERE CountryName IN ('US', 'USA');

/* Updated US ID to USA's ID */
UPDATE Customers
SET CountryID = 21
WHERE CountryID = 20;

UPDATE Employees
SET CountryID = 21
WHERE CountryID = 20;

/* Deleted US entries */
DELETE FROM Countries
WHERE CountryID = 20;

/* Checking change in data */
SELECT *
FROM Employees;

/* Checking change in data */
SELECT *
FROM Customers;

/* Checking change in data */
SELECT *
FROM Countries;

/* 5. Remove Country column from Customers and Employees */
ALTER TABLE Customers
DROP COLUMN Country;

ALTER TABLE Employees
DROP COLUMN Country;

/* Checking change in data */
SELECT *
FROM Employees;

/* Checking change in data */
SELECT *
FROM Customers;