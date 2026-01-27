-- Question 1
SELECT TOP 1 Continent,
COUNT(*) AS CountryCount
FROM Country
GROUP BY Continent
ORDER BY CountryCount DESC

-- Question 2
SELECT TOP 1 Region,
SUM(Population) AS TotalPopulation
FROM Country
WHERE Continent = (
SELECT TOP 1 Continent
FROM Country
GROUP BY Continent
ORDER BY COUNT(*) DESC)
GROUP BY Region
ORDER BY SUM(Population) DESC

-- Question 3
SELECT TOP 1 Country.Name AS Country,
COUNT(City.ID) AS NumberOfCities
FROM Country
JOIN City
ON City.CountryCode = Country.Code
WHERE Country.Region = (
SELECT TOP 1 Region
FROM Country
WHERE Continent = (
SELECT TOP 1 Continent
FROM Country
GROUP BY Continent
ORDER BY COUNT(*) DESC)
GROUP BY Region
ORDER BY SUM(Population) DESC)
GROUP BY Country.Name
ORDER BY NumberOfCities DESC

-- Question 4
SELECT TOP 1 City.Name AS City, City.District,
LEN(City.Name) AS NameLength
FROM City
JOIN Country
ON Country.Code = City.CountryCode
WHERE Country.Name = (
SELECT TOP 1 Country.Name
FROM Country
JOIN City
ON City.CountryCode = Country.Code
WHERE Country.Region = (
SELECT TOP 1  Region
FROM Country
WHERE Continent = (
SELECT TOP 1 Continent
FROM Country
GROUP BY Continent
ORDER BY COUNT(*) DESC)
GROUP BY Region
ORDER BY SUM(Population) DESC)
GROUP BY Country.Name
ORDER BY COUNT(City.ID) DESC)
AND City.Name = City.District
ORDER BY LEN(City.Name) DESC, City.Name ASC

-- Question 5
SELECT Region,
SUM(Population) AS TotalPopulation
FROM Country
WHERE Continent <> 'Africa'
GROUP BY Region
HAVING SUM(Population) < 200000000
ORDER BY TotalPopulation DESC

-- Question 6
SELECT Country.Name AS Country, City.Name AS CapitalCity
FROM Country
JOIN City
ON City.ID = Country.Capital
WHERE Country.Name LIKE '% %'
AND Country.Code IN (
SELECT CountryCode
FROM CountryLanguage
WHERE Language = 'Arabic')
AND Country.Code IN (
SELECT CountryCode
FROM CountryLanguage
GROUP BY CountryCode
HAVING COUNT(Language) = 2)