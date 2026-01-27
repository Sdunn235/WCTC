-- Question 1
SELECT TOP 1 Code, Name, Population
FROM Country
WHERE Region = 'Southern Europe'
ORDER BY Population

-- Question 2
SELECT CountryCode, Language
FROM CountryLanguage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
WHERE CountryCode = 'VAT'

-- Question 3
SELECT Code, Name
FROM Country
JOIN CountryLanguage ON Country.Code = CountryLanguage.CountryCode
WHERE CountryLanguage.IsOfficial = 1
  AND Country.Region = 'Southern Europe'
GROUP BY Code, Name
HAVING COUNT(DISTINCT Language) = 1
   AND MAX(Language) = 'Italian'
   AND Code NOT IN ('VAT', 'ITA')

-- Question 4
SELECT City.Name
FROM City
JOIN Country ON City.CountryCode = Country.Code
WHERE Country.Code = 'SMR'
  AND City.Name <> Country.Name

-- Question 5
SELECT City.Name, Country.Name
FROM City
JOIN Country ON City.CountryCode = Country.Code
WHERE Country.Continent = 'South America'
  AND City.Name LIKE '%Serr%'

-- Question 6
SELECT City.Name AS Capital
FROM Country
JOIN City ON Country.Capital = City.ID
WHERE Country.Name = 'Brazil';

-- Question 7
SELECT Name, CountryCode, Population
FROM City
WHERE Population = 91084;