import { Deck } from '@/types/flashcard';

export const sqlFundamentals: Deck = {
  id: '7',
  name: 'SQL Fundamentals',
  description: 'Essential SQL concepts for database queries and operations',
  category: 'SQL',
  cards: [
    {
      id: '7-1',
      question: 'What is SQL?',
      answer: 'SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.',
      code: `SELECT * FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['basics', 'introduction', 'database']
    },
    {
      id: '7-2',
      question: 'What is the SELECT statement used for?',
      answer: 'SELECT retrieves data from one or more tables in a database.',
      code: `SELECT name, email FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['select', 'queries', 'basics']
    },
    {
      id: '7-3',
      question: 'What does the WHERE clause do?',
      answer: 'WHERE filters records based on specified conditions.',
      code: `SELECT * FROM users WHERE age > 18;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['where', 'filtering', 'conditions']
    },
    {
      id: '7-4',
      question: 'What is the INSERT statement?',
      answer: 'INSERT adds new records to a table.',
      code: `INSERT INTO users (name, email) 
VALUES ('John', 'john@example.com');`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['insert', 'crud', 'basics']
    },
    {
      id: '7-5',
      question: 'What is the UPDATE statement?',
      answer: 'UPDATE modifies existing records in a table.',
      code: `UPDATE users 
SET email = 'newemail@example.com' 
WHERE id = 1;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['update', 'crud', 'basics']
    },
    {
      id: '7-6',
      question: 'What is the DELETE statement?',
      answer: 'DELETE removes records from a table.',
      code: `DELETE FROM users WHERE id = 1;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['delete', 'crud', 'basics']
    },
    {
      id: '7-7',
      question: 'What is a primary key?',
      answer: 'A primary key uniquely identifies each record in a table. It must contain unique values and cannot be NULL.',
      code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['primary-key', 'constraints', 'tables']
    },
    {
      id: '7-8',
      question: 'What is a foreign key?',
      answer: 'A foreign key is a field that references the primary key in another table, establishing a relationship between tables.',
      code: `CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['foreign-key', 'relationships', 'constraints']
    },
    {
      id: '7-9',
      question: 'What does ORDER BY do?',
      answer: 'ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order.',
      code: `SELECT * FROM users ORDER BY name ASC;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['order-by', 'sorting', 'queries']
    },
    {
      id: '7-10',
      question: 'What is the LIMIT clause?',
      answer: 'LIMIT restricts the number of rows returned by a query.',
      code: `SELECT * FROM users LIMIT 10;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['limit', 'pagination', 'queries']
    },
    {
      id: '7-11',
      question: 'What is the COUNT function?',
      answer: 'COUNT returns the number of rows that match a specified condition.',
      code: `SELECT COUNT(*) FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['count', 'aggregate', 'functions']
    },
    {
      id: '7-12',
      question: 'What is the SUM function?',
      answer: 'SUM returns the total sum of a numeric column.',
      code: `SELECT SUM(price) FROM orders;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['sum', 'aggregate', 'functions']
    },
    {
      id: '7-13',
      question: 'What is the AVG function?',
      answer: 'AVG returns the average value of a numeric column.',
      code: `SELECT AVG(age) FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['avg', 'aggregate', 'functions']
    },
    {
      id: '7-14',
      question: 'What is the MAX function?',
      answer: 'MAX returns the largest value in a column.',
      code: `SELECT MAX(price) FROM products;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['max', 'aggregate', 'functions']
    },
    {
      id: '7-15',
      question: 'What is the MIN function?',
      answer: 'MIN returns the smallest value in a column.',
      code: `SELECT MIN(price) FROM products;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['min', 'aggregate', 'functions']
    },
    {
      id: '7-16',
      question: 'What is GROUP BY?',
      answer: 'GROUP BY groups rows with the same values into summary rows, often used with aggregate functions.',
      code: `SELECT country, COUNT(*) 
FROM users 
GROUP BY country;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['group-by', 'aggregate', 'grouping']
    },
    {
      id: '7-17',
      question: 'What is HAVING clause?',
      answer: 'HAVING filters groups created by GROUP BY, similar to WHERE but for aggregated data.',
      code: `SELECT country, COUNT(*) 
FROM users 
GROUP BY country 
HAVING COUNT(*) > 5;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['having', 'group-by', 'filtering']
    },
    {
      id: '7-18',
      question: 'What is an INNER JOIN?',
      answer: 'INNER JOIN returns records that have matching values in both tables.',
      code: `SELECT users.name, orders.total 
FROM users 
INNER JOIN orders ON users.id = orders.user_id;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['inner-join', 'joins', 'relationships']
    },
    {
      id: '7-19',
      question: 'What is a LEFT JOIN?',
      answer: 'LEFT JOIN returns all records from the left table and matching records from the right table. NULL for non-matches.',
      code: `SELECT users.name, orders.total 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['left-join', 'joins', 'relationships']
    },
    {
      id: '7-20',
      question: 'What is a RIGHT JOIN?',
      answer: 'RIGHT JOIN returns all records from the right table and matching records from the left table.',
      code: `SELECT users.name, orders.total 
FROM users 
RIGHT JOIN orders ON users.id = orders.user_id;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['right-join', 'joins', 'relationships']
    },
    {
      id: '7-21',
      question: 'What is DISTINCT?',
      answer: 'DISTINCT removes duplicate values from the result set.',
      code: `SELECT DISTINCT country FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['distinct', 'duplicates', 'queries']
    },
    {
      id: '7-22',
      question: 'What is the LIKE operator?',
      answer: 'LIKE searches for a specified pattern in a column. Use % for wildcard.',
      code: `SELECT * FROM users WHERE name LIKE 'John%';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['like', 'pattern-matching', 'operators']
    },
    {
      id: '7-23',
      question: 'What is the IN operator?',
      answer: 'IN allows you to specify multiple values in a WHERE clause.',
      code: `SELECT * FROM users WHERE country IN ('USA', 'Canada', 'UK');`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['in', 'operators', 'filtering']
    },
    {
      id: '7-24',
      question: 'What is the BETWEEN operator?',
      answer: 'BETWEEN selects values within a given range (inclusive).',
      code: `SELECT * FROM products WHERE price BETWEEN 10 AND 50;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['between', 'operators', 'range']
    },
    {
      id: '7-25',
      question: 'What is NULL in SQL?',
      answer: 'NULL represents missing or unknown data. Use IS NULL or IS NOT NULL to check for NULL values.',
      code: `SELECT * FROM users WHERE email IS NULL;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['null', 'data-types', 'basics']
    },
    {
      id: '7-26',
      question: 'What is an alias in SQL?',
      answer: 'An alias gives a table or column a temporary name using AS keyword.',
      code: `SELECT name AS customer_name, email AS contact 
FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['alias', 'as', 'queries']
    },
    {
      id: '7-27',
      question: 'What is CREATE TABLE?',
      answer: 'CREATE TABLE creates a new table in the database.',
      code: `CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2)
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['create-table', 'ddl', 'tables']
    },
    {
      id: '7-28',
      question: 'What is ALTER TABLE?',
      answer: 'ALTER TABLE modifies an existing table structure (add, modify, or drop columns).',
      code: `ALTER TABLE users ADD COLUMN phone VARCHAR(20);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['alter-table', 'ddl', 'tables']
    },
    {
      id: '7-29',
      question: 'What is DROP TABLE?',
      answer: 'DROP TABLE deletes a table and all its data permanently.',
      code: `DROP TABLE old_users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['drop-table', 'ddl', 'tables']
    },
    {
      id: '7-30',
      question: 'What is a subquery?',
      answer: 'A subquery is a query nested inside another query.',
      code: `SELECT name FROM users 
WHERE id IN (SELECT user_id FROM orders WHERE total > 100);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['subquery', 'nested-queries', 'advanced']
    },
    {
      id: '7-31',
      question: 'What is UNION?',
      answer: 'UNION combines the result sets of two or more SELECT statements, removing duplicates.',
      code: `SELECT name FROM customers 
UNION 
SELECT name FROM suppliers;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['union', 'set-operations', 'queries']
    },
    {
      id: '7-32',
      question: 'What is UNION ALL?',
      answer: 'UNION ALL combines result sets like UNION but keeps all duplicates.',
      code: `SELECT name FROM customers 
UNION ALL 
SELECT name FROM suppliers;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['union-all', 'set-operations', 'queries']
    },
    {
      id: '7-33',
      question: 'What is an index?',
      answer: 'An index improves query performance by creating a data structure for faster lookups.',
      code: `CREATE INDEX idx_email ON users(email);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['index', 'performance', 'optimization']
    },
    {
      id: '7-34',
      question: 'What is a UNIQUE constraint?',
      answer: 'UNIQUE ensures all values in a column are different.',
      code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['unique', 'constraints', 'tables']
    },
    {
      id: '7-35',
      question: 'What is a NOT NULL constraint?',
      answer: 'NOT NULL ensures a column cannot have NULL values.',
      code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['not-null', 'constraints', 'tables']
    },
    {
      id: '7-36',
      question: 'What is a DEFAULT constraint?',
      answer: 'DEFAULT provides a default value for a column when no value is specified.',
      code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  status VARCHAR(20) DEFAULT 'active'
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['default', 'constraints', 'tables']
    },
    {
      id: '7-37',
      question: 'What is the AND operator?',
      answer: 'AND combines multiple conditions, all must be true.',
      code: `SELECT * FROM users WHERE age > 18 AND country = 'USA';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['and', 'operators', 'logic']
    },
    {
      id: '7-38',
      question: 'What is the OR operator?',
      answer: 'OR combines conditions where at least one must be true.',
      code: `SELECT * FROM users WHERE country = 'USA' OR country = 'Canada';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['or', 'operators', 'logic']
    },
    {
      id: '7-39',
      question: 'What is the NOT operator?',
      answer: 'NOT negates a condition.',
      code: `SELECT * FROM users WHERE NOT country = 'USA';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['not', 'operators', 'logic']
    },
    {
      id: '7-40',
      question: 'What is CASE statement?',
      answer: 'CASE provides conditional logic in SQL queries, similar to if-else.',
      code: `SELECT name,
  CASE 
      WHEN age < 18 THEN 'Minor'
      WHEN age >= 18 THEN 'Adult'
  END AS age_group
FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['case', 'conditional', 'logic']
    },
    {
      id: '7-41',
      question: 'What is CONCAT function?',
      answer: 'CONCAT combines two or more strings into one.',
      code: `SELECT CONCAT(first_name, ' ', last_name) AS full_name 
FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['concat', 'string-functions', 'functions']
    },
    {
      id: '7-42',
      question: 'What is UPPER function?',
      answer: 'UPPER converts a string to uppercase.',
      code: `SELECT UPPER(name) FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['upper', 'string-functions', 'functions']
    },
    {
      id: '7-43',
      question: 'What is LOWER function?',
      answer: 'LOWER converts a string to lowercase.',
      code: `SELECT LOWER(email) FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['lower', 'string-functions', 'functions']
    },
    {
      id: '7-44',
      question: 'What is LENGTH function?',
      answer: 'LENGTH returns the number of characters in a string.',
      code: `SELECT name, LENGTH(name) AS name_length FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['length', 'string-functions', 'functions']
    },
    {
      id: '7-45',
      question: 'What is ROUND function?',
      answer: 'ROUND rounds a number to a specified number of decimal places.',
      code: `SELECT ROUND(price, 2) FROM products;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['round', 'numeric-functions', 'functions']
    },
    {
      id: '7-46',
      question: 'What is NOW function?',
      answer: 'NOW returns the current date and time.',
      code: `SELECT NOW() AS current_timestamp;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['now', 'date-functions', 'functions']
    },
    {
      id: '7-47',
      question: 'What is a transaction?',
      answer: 'A transaction is a sequence of SQL operations treated as a single unit. Use COMMIT to save or ROLLBACK to undo.',
      code: `BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['transaction', 'acid', 'advanced']
    },
    {
      id: '7-48',
      question: 'What is a view?',
      answer: 'A view is a virtual table based on a SQL query. It does not store data but displays data from other tables.',
      code: `CREATE VIEW active_users AS 
SELECT * FROM users WHERE status = 'active';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['view', 'virtual-table', 'advanced']
    },
    {
      id: '7-49',
      question: 'What is the difference between DELETE and TRUNCATE?',
      answer: 'DELETE removes specific rows and can be rolled back. TRUNCATE removes all rows, is faster, and cannot be rolled back.',
      code: `DELETE FROM users WHERE id = 1;
TRUNCATE TABLE logs;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['delete', 'truncate', 'differences']
    },
    {
      id: '7-50',
      question: 'What is normalization?',
      answer: 'Normalization organizes database tables to reduce redundancy and improve data integrity by dividing large tables into smaller ones.',
      code: `-- Instead of storing customer info in every order
-- Create separate customers and orders tables
CREATE TABLE customers (id INT, name VARCHAR(100));
CREATE TABLE orders (id INT, customer_id INT, total DECIMAL);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'medium',
      tags: ['normalization', 'database-design', 'theory']
    },
    {
      id: '7-51',
      question: 'What is the OFFSET clause?',
      answer: 'OFFSET skips a specified number of rows. Used with LIMIT for pagination.',
      code: `-- Page 2: skip first 10, get next 10
SELECT * FROM products
ORDER BY id
LIMIT 10 OFFSET 10;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['offset', 'pagination', 'queries']
    },
    {
      id: '7-52',
      question: 'What is the FULL OUTER JOIN?',
      answer: 'FULL OUTER JOIN returns all rows from both tables. NULL fills in where no match exists on either side.',
      code: `SELECT u.name, o.total
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;
-- Returns all users AND all orders (nulls where no match)`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['full-outer-join', 'joins', 'relationships']
    },
    {
      id: '7-53',
      question: 'What is a CROSS JOIN?',
      answer: 'CROSS JOIN returns the Cartesian product of two tables — every row from table A paired with every row from table B.',
      code: `SELECT colors.name, sizes.label
FROM colors
CROSS JOIN sizes;
-- 3 colors × 4 sizes = 12 rows`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['cross-join', 'joins', 'cartesian']
    },
    {
      id: '7-54',
      question: 'What is the COALESCE function?',
      answer: 'COALESCE returns the first non-NULL value from a list of arguments.',
      code: `SELECT name, COALESCE(phone, email, 'no contact') AS contact
FROM users;

-- Replace NULL prices with 0
SELECT name, COALESCE(discount, 0) AS discount
FROM products;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['coalesce', 'null', 'functions']
    },
    {
      id: '7-55',
      question: 'What is the NULLIF function?',
      answer: 'NULLIF returns NULL if two expressions are equal, otherwise returns the first expression. Useful to avoid division by zero.',
      code: `-- Avoid division by zero
SELECT total / NULLIF(quantity, 0) AS unit_price
FROM orders;

-- Returns NULL when values match
SELECT NULLIF(status, 'active') FROM users;
-- Returns NULL where status = 'active', else returns status`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['nullif', 'null', 'functions']
    },
    {
      id: '7-56',
      question: 'What is the TRIM function in SQL?',
      answer: 'TRIM removes leading and trailing spaces (or specified characters) from a string.',
      code: `SELECT TRIM('  hello  ');        -- 'hello'
SELECT LTRIM('  hello  ');       -- 'hello  '
SELECT RTRIM('  hello  ');       -- '  hello'
SELECT TRIM('x' FROM 'xxhelloxx'); -- 'hello'`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['trim', 'string-functions', 'functions']
    },
    {
      id: '7-57',
      question: 'What is the SUBSTRING function?',
      answer: 'SUBSTRING extracts part of a string starting at a position for a given length.',
      code: `SELECT SUBSTRING('Hello World', 1, 5);  -- 'Hello'
SELECT SUBSTRING('Hello World', 7);     -- 'World'

-- With FROM/FOR syntax (standard SQL)
SELECT SUBSTRING('Hello World' FROM 1 FOR 5); -- 'Hello'

SELECT SUBSTRING(email FROM 1 FOR POSITION('@' IN email) - 1) AS username
FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['substring', 'string-functions', 'functions']
    },
    {
      id: '7-58',
      question: 'What is the REPLACE function in SQL?',
      answer: 'REPLACE substitutes all occurrences of a substring within a string.',
      code: `SELECT REPLACE('Hello World', 'World', 'SQL'); -- 'Hello SQL'

-- Clean phone numbers
SELECT REPLACE(REPLACE(phone, '-', ''), ' ', '') AS clean_phone
FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['replace', 'string-functions', 'functions']
    },
    {
      id: '7-59',
      question: 'What is CAST in SQL?',
      answer: 'CAST converts a value from one data type to another.',
      code: `SELECT CAST('42' AS INTEGER);          -- 42
SELECT CAST(3.99 AS INTEGER);          -- 3
SELECT CAST(price AS VARCHAR(10))      -- '9.99'
FROM products;

-- Date conversion
SELECT CAST('2024-01-15' AS DATE);

-- Alternative syntax (many databases)
SELECT '42'::INTEGER;  -- PostgreSQL`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['cast', 'conversion', 'types']
    },
    {
      id: '7-60',
      question: 'What is the DATE_FORMAT / FORMAT function?',
      answer: 'Date formatting functions convert date values to readable strings. Syntax varies by database.',
      code: `-- MySQL
SELECT DATE_FORMAT(created_at, '%Y-%m-%d') AS date FROM orders;
SELECT DATE_FORMAT(NOW(), '%M %d, %Y');  -- 'January 15, 2024'

-- SQL Server
SELECT FORMAT(created_at, 'yyyy-MM-dd') FROM orders;

-- PostgreSQL
SELECT TO_CHAR(created_at, 'YYYY-MM-DD') FROM orders;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['date-format', 'date-functions', 'functions']
    },
    {
      id: '7-61',
      question: 'What is the YEAR, MONTH, DAY functions?',
      answer: 'These extract specific parts of a date value.',
      code: `SELECT YEAR(created_at), MONTH(created_at), DAY(created_at)
FROM orders;

-- PostgreSQL / standard SQL
SELECT EXTRACT(YEAR  FROM created_at) AS yr,
       EXTRACT(MONTH FROM created_at) AS mo,
       EXTRACT(DAY   FROM created_at) AS dy
FROM orders;

-- Filter by year
SELECT * FROM orders WHERE YEAR(created_at) = 2024;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['year', 'month', 'date-functions']
    },
    {
      id: '7-62',
      question: 'What is the DATEDIFF function?',
      answer: 'DATEDIFF calculates the difference between two dates.',
      code: `-- MySQL: days between dates
SELECT DATEDIFF('2024-12-31', '2024-01-01'); -- 365

-- SQL Server
SELECT DATEDIFF(day, '2024-01-01', '2024-12-31'); -- 365

-- PostgreSQL
SELECT '2024-12-31'::date - '2024-01-01'::date; -- 365

-- Days since order
SELECT DATEDIFF(NOW(), created_at) AS days_old FROM orders;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['datediff', 'date-functions', 'calculations']
    },
    {
      id: '7-63',
      question: 'What is the AUTO_INCREMENT / SERIAL constraint?',
      answer: 'AUTO_INCREMENT (MySQL) or SERIAL (PostgreSQL) automatically generates a unique integer for each new row.',
      code: `-- MySQL
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

-- PostgreSQL
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

-- SQL Server
CREATE TABLE users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100)
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['auto-increment', 'serial', 'primary-key']
    },
    {
      id: '7-64',
      question: 'What is a CHECK constraint?',
      answer: 'CHECK ensures column values satisfy a condition. Rows that violate the check are rejected.',
      code: `CREATE TABLE products (
  id    INT PRIMARY KEY,
  name  VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) CHECK (price >= 0),
  stock INT          CHECK (stock >= 0),
  rating DECIMAL(2,1) CHECK (rating BETWEEN 0 AND 5)
);

-- Named constraint
ALTER TABLE orders
ADD CONSTRAINT chk_status
CHECK (status IN ('pending','shipped','delivered','cancelled'));`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['check', 'constraints', 'validation']
    },
    {
      id: '7-65',
      question: 'What is SELECT INTO in SQL?',
      answer: 'SELECT INTO creates a new table from the results of a SELECT query.',
      code: `-- SQL Server / PostgreSQL
SELECT * INTO users_backup FROM users;

-- Copy only active users
SELECT id, name, email
INTO active_users_backup
FROM users
WHERE is_active = 1;

-- MySQL uses CREATE TABLE ... SELECT
CREATE TABLE users_backup AS
SELECT * FROM users;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['select-into', 'ddl', 'backup']
    },
    {
      id: '7-66',
      question: 'What is INSERT INTO SELECT?',
      answer: 'INSERT INTO SELECT copies data from one table into another existing table.',
      code: `-- Copy all rows
INSERT INTO users_archive
SELECT * FROM users WHERE created_at < '2023-01-01';

-- Copy specific columns
INSERT INTO contacts (name, email)
SELECT name, email FROM users WHERE is_active = 0;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['insert-select', 'crud', 'copy']
    },
    {
      id: '7-67',
      question: 'What is the TRUNCATE statement?',
      answer: 'TRUNCATE removes all rows from a table instantly. Faster than DELETE but cannot be rolled back in most databases.',
      code: `TRUNCATE TABLE logs;
-- Equivalent to DELETE FROM logs but:
-- 1. Faster (deallocates data pages)
-- 2. Resets AUTO_INCREMENT counter
-- 3. Cannot have a WHERE clause
-- 4. Cannot be rolled back (in MySQL)

-- Safely check before truncate
SELECT COUNT(*) FROM logs; -- verify first`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['truncate', 'ddl', 'tables']
    },
    {
      id: '7-68',
      question: 'What is the EXISTS operator?',
      answer: 'EXISTS checks if a subquery returns any rows. Returns TRUE if at least one row exists.',
      code: `-- Users who have placed orders
SELECT name FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- NOT EXISTS: users with no orders
SELECT name FROM users u
WHERE NOT EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['exists', 'subquery', 'operators']
    },
    {
      id: '7-69',
      question: 'What is the ANY / ALL operator?',
      answer: 'ANY returns true if any subquery value satisfies the condition. ALL requires all values to satisfy it.',
      code: `-- Price higher than ANY product in category 2
SELECT name, price FROM products
WHERE price > ANY (
  SELECT price FROM products WHERE category_id = 2
);

-- Price higher than ALL products in category 2
SELECT name, price FROM products
WHERE price > ALL (
  SELECT price FROM products WHERE category_id = 2
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['any', 'all', 'subquery']
    },
    {
      id: '7-70',
      question: 'What is the FLOOR and CEILING function?',
      answer: 'FLOOR rounds a number down to the nearest integer. CEILING rounds up.',
      code: `SELECT FLOOR(4.7);    -- 4
SELECT CEILING(4.1);  -- 5
SELECT CEIL(4.1);     -- 5 (alias)

-- Practical: price tiers
SELECT name,
  FLOOR(price / 10) * 10 AS price_tier
FROM products;
-- 15.99 → tier 10, 25.50 → tier 20`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['floor', 'ceiling', 'numeric-functions']
    },
    {
      id: '7-71',
      question: 'What is the IFNULL / ISNULL function?',
      answer: 'IFNULL (MySQL) / ISNULL (SQL Server) returns a replacement value when the expression is NULL.',
      code: `-- MySQL
SELECT name, IFNULL(phone, 'N/A') AS phone FROM users;

-- SQL Server
SELECT name, ISNULL(phone, 'N/A') AS phone FROM users;

-- Standard SQL equivalent
SELECT name, COALESCE(phone, 'N/A') AS phone FROM users;

-- In expressions
SELECT price * IFNULL(discount_rate, 1.0) AS final_price
FROM products;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['ifnull', 'isnull', 'null']
    },
    {
      id: '7-72',
      question: 'What is a composite key in SQL?',
      answer: 'A composite key uses two or more columns together as the primary key to uniquely identify a row.',
      code: `CREATE TABLE order_items (
  order_id   INT,
  product_id INT,
  quantity   INT,
  price      DECIMAL(10,2),
  PRIMARY KEY (order_id, product_id)  -- composite key
);

-- A row is unique by the combination of both columns
INSERT INTO order_items VALUES (1, 101, 2, 9.99);
INSERT INTO order_items VALUES (1, 102, 1, 4.99); -- ok, different product`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['composite-key', 'primary-key', 'constraints']
    },
    {
      id: '7-73',
      question: 'What is the SELF JOIN?',
      answer: 'A self join joins a table to itself. Useful for hierarchical data like employees and managers.',
      code: `-- Employee and their manager (same table)
SELECT e.name AS employee,
       m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Find pairs of products in same category
SELECT a.name, b.name, a.category_id
FROM products a
JOIN products b ON a.category_id = b.category_id
               AND a.id < b.id;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['self-join', 'joins', 'hierarchy']
    },
    {
      id: '7-74',
      question: 'What is the GROUP_CONCAT / STRING_AGG function?',
      answer: 'GROUP_CONCAT (MySQL) / STRING_AGG (PostgreSQL/SQL Server) concatenates values from multiple rows into a single string.',
      code: `-- MySQL
SELECT user_id,
  GROUP_CONCAT(tag ORDER BY tag SEPARATOR ', ') AS tags
FROM user_tags
GROUP BY user_id;

-- PostgreSQL / SQL Server
SELECT user_id,
  STRING_AGG(tag, ', ' ORDER BY tag) AS tags
FROM user_tags
GROUP BY user_id;
-- Output: user 1 → "admin, editor, viewer"`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['group-concat', 'string-agg', 'aggregate']
    },
    {
      id: '7-75',
      question: 'What is the EXPLAIN / EXPLAIN ANALYZE statement?',
      answer: 'EXPLAIN shows the query execution plan. EXPLAIN ANALYZE actually runs the query and shows real execution times.',
      code: `-- MySQL / PostgreSQL
EXPLAIN SELECT * FROM orders WHERE user_id = 5;
-- Shows: table scan vs index scan, rows examined, cost

-- PostgreSQL detailed
EXPLAIN ANALYZE
SELECT o.id, u.name
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.total > 100;
-- Shows actual rows, loops, execution time`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'easy',
      tags: ['explain', 'performance', 'optimization']
    },
    {
      id: '7-76',
      question: 'What is a Common Table Expression (CTE)?',
      answer: 'A CTE (WITH clause) defines a temporary named result set that can be referenced in the main query. Improves readability and allows recursion.',
      code: `WITH monthly_sales AS (
  SELECT
    DATE_FORMAT(created_at, '%Y-%m') AS month,
    SUM(total) AS revenue
  FROM orders
  GROUP BY month
),
ranked AS (
  SELECT *, RANK() OVER (ORDER BY revenue DESC) AS rnk
  FROM monthly_sales
)
SELECT * FROM ranked WHERE rnk <= 3;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['cte', 'with', 'advanced']
    },
    {
      id: '7-77',
      question: 'What are window functions in SQL?',
      answer: 'Window functions perform calculations across a set of rows related to the current row without collapsing rows like GROUP BY.',
      code: `SELECT
  name,
  department,
  salary,
  AVG(salary) OVER (PARTITION BY department) AS dept_avg,
  salary - AVG(salary) OVER (PARTITION BY department) AS diff_from_avg,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept
FROM employees;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['window-functions', 'over', 'analytics']
    },
    {
      id: '7-78',
      question: 'What is the RANK, DENSE_RANK, and ROW_NUMBER difference?',
      answer: 'ROW_NUMBER: unique sequential number. RANK: skips numbers on ties. DENSE_RANK: no gaps on ties.',
      code: `SELECT name, score,
  ROW_NUMBER()  OVER (ORDER BY score DESC) AS row_num,
  RANK()        OVER (ORDER BY score DESC) AS rnk,
  DENSE_RANK()  OVER (ORDER BY score DESC) AS dense_rnk
FROM leaderboard;

-- Scores: 100, 100, 90
-- ROW_NUMBER:  1, 2, 3
-- RANK:        1, 1, 3   (gap!)
-- DENSE_RANK:  1, 1, 2   (no gap)`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['rank', 'dense-rank', 'row-number']
    },
    {
      id: '7-79',
      question: 'What is LAG and LEAD in SQL window functions?',
      answer: 'LAG accesses the previous row value. LEAD accesses the next row value. Both use the OVER clause.',
      code: `SELECT
  order_date,
  total,
  LAG(total,  1, 0) OVER (ORDER BY order_date) AS prev_total,
  LEAD(total, 1, 0) OVER (ORDER BY order_date) AS next_total,
  total - LAG(total) OVER (ORDER BY order_date)  AS day_over_day
FROM daily_sales
ORDER BY order_date;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['lag', 'lead', 'window-functions']
    },
    {
      id: '7-80',
      question: 'What is a recursive CTE?',
      answer: 'A recursive CTE references itself to traverse hierarchical data like org charts, category trees, or bill-of-materials.',
      code: `WITH RECURSIVE org_chart AS (
  -- Anchor: top-level employees (no manager)
  SELECT id, name, manager_id, 0 AS depth
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive: employees under previous level
  SELECT e.id, e.name, e.manager_id, oc.depth + 1
  FROM employees e
  JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY depth, name;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['recursive-cte', 'hierarchy', 'advanced']
    },
    {
      id: '7-81',
      question: 'What is a stored procedure in SQL?',
      answer: 'A stored procedure is a named, reusable block of SQL that can accept parameters and is stored in the database.',
      code: `-- MySQL
DELIMITER $$
CREATE PROCEDURE GetUserOrders(IN userId INT, IN minTotal DECIMAL(10,2))
BEGIN
  SELECT o.id, o.total, o.created_at
  FROM orders o
  WHERE o.user_id = userId
    AND o.total >= minTotal
  ORDER BY o.created_at DESC;
END$$
DELIMITER ;

-- Call
CALL GetUserOrders(5, 50.00);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['stored-procedure', 'procedures', 'reusability']
    },
    {
      id: '7-82',
      question: 'What is a trigger in SQL?',
      answer: 'A trigger is a procedure that automatically fires on INSERT, UPDATE, or DELETE events on a table.',
      code: `-- Audit log trigger (MySQL)
CREATE TRIGGER after_user_update
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
  INSERT INTO audit_log (table_name, action, old_val, new_val, changed_at)
  VALUES ('users', 'UPDATE', OLD.email, NEW.email, NOW());
END;

-- Prevent deletion of admin users (BEFORE trigger)
CREATE TRIGGER before_user_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
  IF OLD.role = 'admin' THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete admin';
  END IF;
END;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['trigger', 'events', 'automation']
    },
    {
      id: '7-83',
      question: 'What is the PIVOT operation in SQL?',
      answer: 'PIVOT transforms rows into columns. SQL Server has a native PIVOT keyword; other databases use conditional aggregation.',
      code: `-- Conditional aggregation (universal)
SELECT
  user_id,
  SUM(CASE WHEN month = 'Jan' THEN total ELSE 0 END) AS jan,
  SUM(CASE WHEN month = 'Feb' THEN total ELSE 0 END) AS feb,
  SUM(CASE WHEN month = 'Mar' THEN total ELSE 0 END) AS mar
FROM monthly_sales
GROUP BY user_id;

-- SQL Server native PIVOT
SELECT * FROM monthly_sales
PIVOT (SUM(total) FOR month IN ([Jan],[Feb],[Mar])) AS pvt;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['pivot', 'aggregation', 'advanced']
    },
    {
      id: '7-84',
      question: 'What are ACID properties in SQL transactions?',
      answer: 'ACID: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions independent), Durability (committed data persists).',
      code: `BEGIN TRANSACTION;

-- Atomicity: both updates succeed or both fail
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If anything fails, rollback restores both
-- ROLLBACK;

-- If both succeed, commit persists changes
COMMIT;
-- Durability: data survives crashes after COMMIT`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['acid', 'transactions', 'theory']
    },
    {
      id: '7-85',
      question: 'What is transaction isolation levels?',
      answer: 'Isolation levels control how concurrent transactions see each other\'s changes: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.',
      code: `-- Set isolation level (MySQL)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN;
SELECT balance FROM accounts WHERE id = 1; -- reads committed data
COMMIT;

-- Levels and problems they prevent:
-- READ UNCOMMITTED: allows dirty reads
-- READ COMMITTED:   prevents dirty reads
-- REPEATABLE READ:  prevents non-repeatable reads (MySQL default)
-- SERIALIZABLE:     prevents phantom reads (strictest)`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['isolation', 'transactions', 'concurrency']
    },
    {
      id: '7-86',
      question: 'What is a materialized view?',
      answer: 'A materialized view stores the query result physically on disk, unlike a regular view. Must be refreshed to reflect updated data.',
      code: `-- PostgreSQL
CREATE MATERIALIZED VIEW sales_summary AS
SELECT
  DATE_TRUNC('month', created_at) AS month,
  SUM(total) AS revenue,
  COUNT(*) AS orders
FROM orders
GROUP BY 1;

-- Refresh when data changes
REFRESH MATERIALIZED VIEW sales_summary;
-- REFRESH MATERIALIZED VIEW CONCURRENTLY sales_summary; -- no lock

-- Query is fast (pre-computed)
SELECT * FROM sales_summary WHERE month >= '2024-01-01';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['materialized-view', 'performance', 'advanced']
    },
    {
      id: '7-87',
      question: 'What is query optimization with indexes?',
      answer: 'Composite indexes, covering indexes, and index selectivity significantly impact query performance. Use EXPLAIN to verify index usage.',
      code: `-- Composite index: supports queries on (user_id), (user_id, status), (user_id, status, created_at)
CREATE INDEX idx_orders_user_status_date
ON orders (user_id, status, created_at DESC);

-- Covering index: includes all needed columns (no table lookup)
CREATE INDEX idx_products_covering
ON products (category_id, is_active)
INCLUDE (name, price);  -- SQL Server / PostgreSQL

-- Verify index is used
EXPLAIN SELECT * FROM orders WHERE user_id = 1 AND status = 'shipped';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['indexes', 'performance', 'optimization']
    },
    {
      id: '7-88',
      question: 'What is the NTILE window function?',
      answer: 'NTILE(n) divides rows into n equal buckets and assigns each row a bucket number — useful for percentile calculations.',
      code: `-- Divide customers into 4 quartiles by total spend
SELECT
  customer_id,
  total_spend,
  NTILE(4) OVER (ORDER BY total_spend DESC) AS quartile
FROM customer_totals;
-- quartile 1 = top 25%, quartile 4 = bottom 25%

-- Percentile ranks
SELECT name, score,
  NTILE(100) OVER (ORDER BY score) AS percentile
FROM test_results;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['ntile', 'window-functions', 'analytics']
    },
    {
      id: '7-89',
      question: 'What is FIRST_VALUE and LAST_VALUE in window functions?',
      answer: 'FIRST_VALUE returns the first value and LAST_VALUE returns the last value in a window frame.',
      code: `SELECT
  name,
  department,
  salary,
  FIRST_VALUE(name) OVER (
    PARTITION BY department ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS highest_earner,
  LAST_VALUE(salary) OVER (
    PARTITION BY department ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS lowest_salary
FROM employees;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['first-value', 'last-value', 'window-functions']
    },
    {
      id: '7-90',
      question: 'What is database sharding?',
      answer: 'Sharding horizontally partitions data across multiple database instances. Each shard holds a subset of rows based on a shard key.',
      code: `-- Conceptual: shard by user_id range
-- Shard 1: users with id 1–1,000,000    → db-shard-1
-- Shard 2: users with id 1,000,001–2M   → db-shard-2
-- Shard 3: users with id 2,000,001–3M   → db-shard-3

-- Or hash-based sharding:
-- shard = hash(user_id) % num_shards

-- Benefits: horizontal scale, smaller indexes
-- Drawbacks: cross-shard JOINs are expensive,
--            re-sharding is complex`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['sharding', 'scalability', 'architecture']
    },
    {
      id: '7-91',
      question: 'What is the PERCENT_RANK and CUME_DIST window function?',
      answer: 'PERCENT_RANK gives relative rank as a percentage (0-1). CUME_DIST gives cumulative distribution — fraction of rows ≤ current.',
      code: `SELECT
  name,
  salary,
  ROUND(PERCENT_RANK() OVER (ORDER BY salary) * 100, 1) AS pct_rank,
  ROUND(CUME_DIST()    OVER (ORDER BY salary) * 100, 1) AS cum_dist
FROM employees;

-- pct_rank: 0 for lowest, 1 for highest
-- CUME_DIST: fraction of employees earning <= this salary
-- e.g. CUME_DIST = 0.8 means 80% earn same or less`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['percent-rank', 'cume-dist', 'window-functions']
    },
    {
      id: '7-92',
      question: 'What is a database function (UDF)?',
      answer: 'User-Defined Functions (UDFs) encapsulate reusable logic that returns a value. Unlike procedures, they can be used in SELECT statements.',
      code: `-- PostgreSQL scalar function
CREATE OR REPLACE FUNCTION calculate_discount(
  price DECIMAL,
  rate  DECIMAL
) RETURNS DECIMAL AS $$
BEGIN
  RETURN price - (price * rate / 100);
END;
$$ LANGUAGE plpgsql;

-- Use in queries
SELECT name, price, calculate_discount(price, 10) AS discounted
FROM products;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['udf', 'functions', 'reusability']
    },
    {
      id: '7-93',
      question: 'What is SUM with OVER (running total)?',
      answer: 'SUM() OVER with ORDER BY and a frame clause computes running totals without collapsing rows.',
      code: `SELECT
  order_date,
  daily_revenue,
  SUM(daily_revenue) OVER (
    ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total,
  SUM(daily_revenue) OVER (
    PARTITION BY YEAR(order_date)
    ORDER BY order_date
  ) AS yearly_running_total
FROM daily_sales;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['running-total', 'window-functions', 'sum']
    },
    {
      id: '7-94',
      question: 'What is INTERSECT in SQL?',
      answer: 'INTERSECT returns only rows that appear in both result sets — the opposite of EXCEPT.',
      code: `-- Users who are both customers AND newsletter subscribers
SELECT email FROM customers
INTERSECT
SELECT email FROM newsletter_subscribers;

-- vs UNION (all from both)
SELECT email FROM customers
UNION
SELECT email FROM newsletter_subscribers;

-- vs EXCEPT (in first but NOT second)
SELECT email FROM customers
EXCEPT
SELECT email FROM newsletter_subscribers;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['intersect', 'set-operations', 'queries']
    },
    {
      id: '7-95',
      question: 'What is database partitioning?',
      answer: 'Partitioning splits a large table into smaller physical pieces (partitions) while appearing as one table. Improves query performance and maintenance.',
      code: `-- Range partitioning by year (MySQL)
CREATE TABLE orders (
  id         INT,
  total      DECIMAL(10,2),
  created_at DATE
)
PARTITION BY RANGE (YEAR(created_at)) (
  PARTITION p2022 VALUES LESS THAN (2023),
  PARTITION p2023 VALUES LESS THAN (2024),
  PARTITION p2024 VALUES LESS THAN (2025),
  PARTITION pmax  VALUES LESS THAN MAXVALUE
);

-- Query only scans relevant partition (partition pruning)
SELECT * FROM orders WHERE created_at >= '2024-01-01';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['partitioning', 'performance', 'scalability']
    },
    {
      id: '7-96',
      question: 'What is the difference between correlated and non-correlated subqueries?',
      answer: 'Non-correlated subqueries run once. Correlated subqueries reference the outer query and run once per outer row.',
      code: `-- Non-correlated: runs once, result reused
SELECT name FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Correlated: references outer query, runs per row (slow on large tables)
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
  SELECT AVG(salary) FROM employees
  WHERE department_id = e.department_id  -- references outer e
);
-- Tip: often rewrite correlated subqueries as JOINs for performance`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['correlated-subquery', 'performance', 'advanced']
    },
    {
      id: '7-97',
      question: 'What is table inheritance / denormalization trade-offs?',
      answer: 'Normalization reduces redundancy but requires JOINs. Denormalization stores redundant data for faster reads at the cost of consistency.',
      code: `-- Normalized (3NF): requires JOIN to get full order
SELECT o.id, u.name, u.email, a.street, a.city
FROM orders o
JOIN users u    ON o.user_id    = u.id
JOIN addresses a ON o.address_id = a.id;

-- Denormalized (snapshot): faster reads, redundant data
CREATE TABLE orders_denorm (
  id         INT PRIMARY KEY,
  user_name  VARCHAR(100),   -- copied at order time
  user_email VARCHAR(200),
  ship_street VARCHAR(200),  -- snapshot of address
  ship_city   VARCHAR(100)
);`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['normalization', 'denormalization', 'design']
    },
    {
      id: '7-98',
      question: 'What is optimistic vs pessimistic locking?',
      answer: 'Pessimistic locking locks rows on read (SELECT FOR UPDATE). Optimistic locking uses a version column to detect conflicts at write time.',
      code: `-- Pessimistic: lock row immediately
BEGIN;
SELECT * FROM inventory WHERE product_id = 1 FOR UPDATE;
UPDATE inventory SET stock = stock - 1 WHERE product_id = 1;
COMMIT;

-- Optimistic: check version at update time
BEGIN;
SELECT stock, version FROM inventory WHERE product_id = 1;
-- ... application processes ...
UPDATE inventory
SET stock = stock - 1, version = version + 1
WHERE product_id = 1 AND version = 5; -- fails if someone else updated
-- Check rows_affected = 0 → conflict detected
COMMIT;`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['locking', 'concurrency', 'transactions']
    },
    {
      id: '7-99',
      question: 'What are JSON operations in SQL?',
      answer: 'Modern databases support JSON columns with operators to query, extract, and modify JSON data.',
      code: `-- MySQL JSON
CREATE TABLE events (id INT, data JSON);
INSERT INTO events VALUES (1, '{"name":"click","x":10,"y":20}');

SELECT data->>'$.name'  AS event_name,
       data->>'$.x'     AS x
FROM events;

-- PostgreSQL JSON/JSONB
SELECT data->>'name' AS event_name FROM events;
SELECT data->'user'->>'email' AS email FROM events;

-- Filter by JSON field
SELECT * FROM events WHERE data->>'$.name' = 'click';`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['json', 'advanced', 'modern-sql']
    },
    {
      id: '7-100',
      question: 'What is a query execution plan and how do you read it?',
      answer: 'Execution plans show how the database engine retrieves data: scan type, join algorithm, index usage, estimated cost, and row estimates.',
      code: `EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
ORDER BY order_count DESC;

-- Key things to look for:
-- Seq Scan → full table scan (add index if expensive)
-- Index Scan / Index Only Scan → fast lookup
-- Hash Join vs Nested Loop → depends on data size
-- Rows: actual vs estimated (bad estimates → stale stats)
-- Cost: startup_cost..total_cost (lower = better)`,
      language: 'sql',
      category: 'SQL',
      difficulty: 'hard',
      tags: ['execution-plan', 'explain', 'optimization']
    }
  ]
};
