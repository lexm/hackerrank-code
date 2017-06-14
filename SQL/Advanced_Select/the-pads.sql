SELECT CONCAT(Name, '(', LEFT(Occupation, 1), ')') FROM OCCUPATIONS
ORDER BY Name;

SELECT 'There are total', COUNT(*) as count, CONCAT(LCASE(Occupation), 's.') FROM OCCUPATIONS
GROUP BY Occupation
ORDER BY count, Occupation;

