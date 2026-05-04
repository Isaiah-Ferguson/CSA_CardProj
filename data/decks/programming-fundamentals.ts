import { Deck } from '@/types/flashcard';

export const programmingFundamentals: Deck = {
  id: '9',
  name: 'Programming Fundamentals',
  description: 'Essential programming concepts and terminology for beginners',
  category: 'Fundamentals',
  cards: [
    {
      id: '9-1',
      question: 'What is pseudocode?',
      answer: 'Pseudocode is a plain language description of programming logic that uses simple, informal language to outline an algorithm without strict syntax rules.',
      code: `// Pseudocode example:
IF user is logged in THEN
  show dashboard
ELSE
  show login page
END IF`,
      language: 'plaintext',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['pseudocode', 'basics', 'algorithms']
    },
    {
      id: '9-2',
      question: 'What is JavaScript?',
      answer: 'JavaScript is a high-level, interpreted programming language primarily used for creating interactive web pages and web applications.',
      code: `// JavaScript example
console.log("Hello, World!");
let name = "JavaScript";`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['javascript', 'languages', 'basics']
    },
    {
      id: '9-3',
      question: 'What is a variable?',
      answer: 'A variable is a named storage location in memory that holds a value which can be changed during program execution.',
      code: `let age = 25;
let name = "John";
let isStudent = true;`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['variables', 'basics', 'data']
    },
    {
      id: '9-4',
      question: 'What is a function?',
      answer: 'A function is a reusable block of code that performs a specific task and can be called multiple times throughout a program.',
      code: `function greet(name) {
  return "Hello, " + name;
}

let message = greet("Alice");`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['functions', 'basics', 'code-organization']
    },
    {
      id: '9-5',
      question: 'What is a loop?',
      answer: 'A loop is a programming construct that repeats a block of code multiple times until a specified condition is met.',
      code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['loops', 'control-flow', 'basics']
    },
    {
      id: '9-6',
      question: 'What is an if statement?',
      answer: 'An if statement is a conditional statement that executes code only when a specified condition is true.',
      code: `if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['conditionals', 'control-flow', 'basics']
    },
    {
      id: '9-7',
      question: 'What is an array?',
      answer: 'An array is a data structure that stores multiple values in a single variable, accessed by index numbers.',
      code: `let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['arrays', 'data-structures', 'basics']
    },
    {
      id: '9-8',
      question: 'What is a string?',
      answer: 'A string is a data type that represents text, consisting of a sequence of characters enclosed in quotes.',
      code: `let message = "Hello, World!";
let name = 'Alice';`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['strings', 'data-types', 'basics']
    },
    {
      id: '9-9',
      question: 'What is a boolean?',
      answer: 'A boolean is a data type that can only have two values: true or false.',
      code: `let isActive = true;
let isComplete = false;

if (isActive) {
  console.log("Active");
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['boolean', 'data-types', 'basics']
    },
    {
      id: '9-10',
      question: 'What is a comment?',
      answer: 'A comment is text in code that is ignored by the compiler/interpreter, used to explain code or temporarily disable it.',
      code: `// This is a single-line comment

/* This is a
 multi-line comment */

let x = 5; // Comments can be at end of line`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['comments', 'documentation', 'basics']
    },
    {
      id: '9-11',
      question: 'What is debugging?',
      answer: 'Debugging is the process of finding and fixing errors (bugs) in code.',
      code: `console.log("Debug: value is", x);
// Use console.log to check values
// Use breakpoints in debugger`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['debugging', 'troubleshooting', 'basics']
    },
    {
      id: '9-12',
      question: 'What is an algorithm?',
      answer: 'An algorithm is a step-by-step set of instructions to solve a problem or complete a task.',
      code: `// Algorithm to find largest number
function findMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
      if (num > max) max = num;
  }
  return max;
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['algorithms', 'problem-solving', 'basics']
    },
    {
      id: '9-13',
      question: 'What is syntax?',
      answer: 'Syntax is the set of rules that defines the correct structure and format of code in a programming language.',
      code: `// Correct syntax
let x = 5;

// Syntax error
let y = ; // Missing value`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['syntax', 'language-rules', 'basics']
    },
    {
      id: '9-14',
      question: 'What is a parameter?',
      answer: 'A parameter is a variable in a function definition that receives a value when the function is called.',
      code: `function add(a, b) { // a and b are parameters
  return a + b;
}

add(5, 3); // 5 and 3 are arguments`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['parameters', 'functions', 'basics']
    },
    {
      id: '9-15',
      question: 'What is a return statement?',
      answer: 'A return statement ends function execution and specifies the value to be returned to the caller.',
      code: `function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5); // result = 20`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['return', 'functions', 'basics']
    },
    {
      id: '9-16',
      question: 'What is an object?',
      answer: 'An object is a collection of related data and/or functionality stored as key-value pairs.',
      code: `let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name); // "John"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['objects', 'data-structures', 'basics']
    },
    {
      id: '9-17',
      question: 'What is a constant?',
      answer: 'A constant is a variable whose value cannot be changed after it is assigned.',
      code: `const PI = 3.14159;
const MAX_SIZE = 100;

// PI = 3.14; // Error: cannot reassign`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['constants', 'variables', 'basics']
    },
    {
      id: '9-18',
      question: 'What is concatenation?',
      answer: 'Concatenation is the operation of joining two or more strings together.',
      code: `let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
// fullName = "John Doe"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['strings', 'concatenation', 'basics']
    },
    {
      id: '9-19',
      question: 'What is an operator?',
      answer: 'An operator is a symbol that performs an operation on one or more values (operands).',
      code: `let sum = 5 + 3;      // + is addition operator
let product = 4 * 2;  // * is multiplication
let isEqual = x == y; // == is comparison`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['operators', 'basics', 'expressions']
    },
    {
      id: '9-20',
      question: 'What is a data type?',
      answer: 'A data type defines the kind of value a variable can hold, such as numbers, strings, or booleans.',
      code: `let number = 42;        // Number
let text = "Hello";     // String
let isTrue = true;      // Boolean
let items = [1, 2, 3];  // Array`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['data-types', 'variables', 'basics']
    },
    {
      id: '9-21',
      question: 'What is a compiler?',
      answer: 'A compiler is a program that translates source code written in a high-level language into machine code.',
      code: `// C# code (compiled language)
public class Program {
  public static void Main() {
      Console.WriteLine("Hello");
  }
}
// Compiler converts this to machine code`,
      language: 'csharp',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['compiler', 'languages', 'basics']
    },
    {
      id: '9-22',
      question: 'What is an interpreter?',
      answer: 'An interpreter is a program that executes code line-by-line without compiling it first.',
      code: `// JavaScript is interpreted
console.log("This runs immediately");
// No compilation step needed`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['interpreter', 'languages', 'basics']
    },
    {
      id: '9-23',
      question: 'What is a while loop?',
      answer: 'A while loop repeats code as long as a specified condition is true.',
      code: `let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['loops', 'while', 'control-flow']
    },
    {
      id: '9-24',
      question: 'What is an index?',
      answer: 'An index is a number that represents the position of an element in an array or string, starting from 0.',
      code: `let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red" (index 0)
console.log(colors[2]); // "blue" (index 2)`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['arrays', 'index', 'basics']
    },
    {
      id: '9-25',
      question: 'What is null?',
      answer: 'Null is a special value that represents the intentional absence of any value.',
      code: `let user = null; // No user currently
if (user === null) {
  console.log("No user found");
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['null', 'data-types', 'basics']
    },
    {
      id: '9-26',
      question: 'What is undefined?',
      answer: 'Undefined means a variable has been declared but has not been assigned a value.',
      code: `let x;
console.log(x); // undefined

let obj = {};
console.log(obj.name); // undefined`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['undefined', 'data-types', 'basics']
    },
    {
      id: '9-27',
      question: 'What is a method?',
      answer: 'A method is a function that belongs to an object or class.',
      code: `let person = {
  name: "Alice",
  greet: function() {
      return "Hello, " + this.name;
  }
};

person.greet(); // "Hello, Alice"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['methods', 'objects', 'functions']
    },
    {
      id: '9-28',
      question: 'What is scope?',
      answer: 'Scope determines where variables can be accessed in your code (global, local, or block scope).',
      code: `let global = "I'm global";

function test() {
  let local = "I'm local";
  console.log(global); // Works
  console.log(local);  // Works
}

console.log(local); // Error: not accessible`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['scope', 'variables', 'basics']
    },
    {
      id: '9-29',
      question: 'What is an error?',
      answer: 'An error is a problem in code that prevents it from running correctly or produces unexpected results.',
      code: `// Syntax error
let x = ;

// Runtime error
console.log(undefinedVariable);

// Logic error
let sum = a - b; // Should be a + b`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['errors', 'debugging', 'basics']
    },
    {
      id: '9-30',
      question: 'What is a class?',
      answer: 'A class is a blueprint for creating objects with predefined properties and methods.',
      code: `class Car {
  constructor(brand) {
      this.brand = brand;
  }
  
  drive() {
      console.log(this.brand + " is driving");
  }
}

let myCar = new Car("Toyota");`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['classes', 'oop', 'basics']
    },
    {
      id: '9-31',
      question: 'What is HTML?',
      answer: 'HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
      language: 'html',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['html', 'web', 'basics']
    },
    {
      id: '9-32',
      question: 'What is CSS?',
      answer: 'CSS (Cascading Style Sheets) is a language used to style and layout web pages.',
      code: `h1 {
  color: blue;
  font-size: 24px;
}

.container {
  width: 100%;
  padding: 20px;
}`,
      language: 'css',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['css', 'web', 'styling']
    },
    {
      id: '9-33',
      question: 'What is a database?',
      answer: 'A database is an organized collection of structured data stored electronically for easy access and management.',
      code: `// Example database query
SELECT * FROM users
WHERE age > 18;`,
      language: 'sql',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['database', 'data', 'basics']
    },
    {
      id: '9-34',
      question: 'What is an API?',
      answer: 'API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other.',
      code: `// Using an API
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['api', 'web', 'basics']
    },
    {
      id: '9-35',
      question: 'What is a library?',
      answer: 'A library is a collection of pre-written code that provides useful functions and features you can use in your programs.',
      code: `// Using a library (jQuery example)
import $ from 'jquery';

$('#button').click(function() {
  alert('Clicked!');
});`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['libraries', 'code-reuse', 'basics']
    },
    {
      id: '9-36',
      question: 'What is a framework?',
      answer: 'A framework is a platform that provides a foundation and structure for building applications.',
      code: `// React framework example
function App() {
  return (
      <div>
          <h1>Hello React</h1>
      </div>
  );
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['frameworks', 'development', 'basics']
    },
    {
      id: '9-37',
      question: 'What is version control?',
      answer: 'Version control is a system that tracks changes to files over time, allowing you to recall specific versions later.',
      code: `// Git commands (version control)
git add .
git commit -m "Added new feature"
git push origin main`,
      language: 'bash',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['git', 'version-control', 'basics']
    },
    {
      id: '9-38',
      question: 'What is a bug?',
      answer: 'A bug is an error or flaw in code that causes it to produce incorrect or unexpected results.',
      code: `// Bug example
function add(a, b) {
  return a - b; // Bug: should be a + b
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['bugs', 'errors', 'debugging']
    },
    {
      id: '9-39',
      question: 'What is recursion?',
      answer: 'Recursion is when a function calls itself to solve a problem by breaking it into smaller instances.',
      code: `function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1); // Function calls itself
}

countdown(5); // 5, 4, 3, 2, 1`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['recursion', 'functions', 'basics']
    },
    {
      id: '9-40',
      question: 'What is a package?',
      answer: 'A package is a collection of code modules bundled together that can be installed and used in projects.',
      code: `// Installing a package
npm install express

// Using the package
const express = require('express');`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['packages', 'npm', 'dependencies']
    },
    {
      id: '9-41',
      question: 'What is JSON?',
      answer: 'JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data.',
      code: `{
  "name": "John",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "gaming"]
}`,
      language: 'json',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['json', 'data-format', 'basics']
    },
    {
      id: '9-42',
      question: 'What is a callback?',
      answer: 'A callback is a function passed as an argument to another function, to be executed later.',
      code: `function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Alice", function() {
  console.log("Callback executed!");
});`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['callbacks', 'functions', 'async']
    },
    {
      id: '9-43',
      question: 'What is an IDE?',
      answer: 'IDE (Integrated Development Environment) is software that provides tools for writing, testing, and debugging code.',
      code: `// Popular IDEs:
// - Visual Studio Code
// - IntelliJ IDEA
// - PyCharm
// - Eclipse`,
      language: 'plaintext',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['ide', 'tools', 'development']
    },
    {
      id: '9-44',
      question: 'What is a repository?',
      answer: 'A repository (repo) is a storage location for code, typically managed by version control systems like Git.',
      code: `// Creating a repository
git init
git remote add origin https://github.com/user/repo.git`,
      language: 'bash',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['repository', 'git', 'version-control']
    },
    {
      id: '9-45',
      question: 'What is a variable declaration?',
      answer: 'Variable declaration is the process of creating a variable and optionally assigning it an initial value.',
      code: `let x;           // Declaration
let y = 10;      // Declaration with initialization
const z = 20;    // Constant declaration`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['variables', 'declaration', 'basics']
    },
    {
      id: '9-46',
      question: 'What is a conditional statement?',
      answer: 'A conditional statement executes different code based on whether a condition is true or false.',
      code: `if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['conditionals', 'control-flow', 'basics']
    },
    {
      id: '9-47',
      question: 'What is a for loop?',
      answer: 'A for loop repeats code a specific number of times using a counter variable.',
      code: `for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Prints: 0, 1, 2, 3, 4`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['loops', 'for-loop', 'iteration']
    },
    {
      id: '9-48',
      question: 'What is a property?',
      answer: 'A property is a value associated with an object, accessed using dot notation or brackets.',
      code: `let car = {
  brand: "Toyota",
  year: 2020
};

console.log(car.brand);  // "Toyota"
console.log(car['year']); // 2020`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['properties', 'objects', 'basics']
    },
    {
      id: '9-49',
      question: 'What is an expression?',
      answer: 'An expression is a combination of values, variables, and operators that evaluates to a single value.',
      code: `let x = 5 + 3;        // Expression: 5 + 3
let y = x * 2;        // Expression: x * 2
let isValid = x > 5;  // Expression: x > 5`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['expressions', 'operators', 'basics']
    },
    {
      id: '9-50',
      question: 'What is a statement?',
      answer: 'A statement is a complete instruction that performs an action in a program.',
      code: `let x = 5;              // Assignment statement
console.log("Hello");   // Function call statement
if (x > 0) { }          // Conditional statement
for (let i = 0; i < 5; i++) { } // Loop statement`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'easy',
      tags: ['statements', 'syntax', 'basics']
    },
    {
      id: '9-51',
      question: 'What is the difference between pass by value and pass by reference?',
      answer: 'Pass by value copies the value; changes inside the function do not affect the original. Pass by reference passes a reference; changes affect the original.',
      code: `function addTen(n) { n += 10; } // pass by value
let x = 5;
addTen(x);
console.log(x); // still 5

function pushItem(arr) { arr.push(99); }
let nums = [1, 2];
pushItem(nums);
console.log(nums); // [1, 2, 99]`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['pass-by-value', 'pass-by-reference', 'memory']
    },
    {
      id: '9-52',
      question: 'What is a higher-order function?',
      answer: 'A higher-order function takes a function as an argument or returns a function.',
      code: `function apply(fn, value) {
  return fn(value);
}

const double = n => n * 2;
console.log(apply(double, 5)); // 10`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['higher-order-functions', 'functional', 'functions']
    },
    {
      id: '9-53',
      question: 'What is the difference between a stack and a queue?',
      answer: 'A stack is LIFO (Last In, First Out). A queue is FIFO (First In, First Out).',
      code: `// Stack (LIFO)
let stack = [];
stack.push(1); stack.push(2);
console.log(stack.pop()); // 2

// Queue (FIFO)
let queue = [];
queue.push(1); queue.push(2);
console.log(queue.shift()); // 1`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['stack', 'queue', 'data-structures']
    },
    {
      id: '9-54',
      question: 'What is type coercion?',
      answer: 'Type coercion is the automatic or implicit conversion of values from one data type to another.',
      code: `console.log("5" + 3);   // "53" (string concat)
console.log("5" - 3);   // 2  (number subtraction)
console.log(true + 1);  // 2
console.log(false + "x"); // "falsex"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['type-coercion', 'data-types', 'javascript']
    },
    {
      id: '9-55',
      question: 'What is the difference between synchronous and asynchronous code?',
      answer: 'Synchronous code runs line by line, blocking execution. Asynchronous code allows other code to run while waiting for a task to complete.',
      code: `// Synchronous
console.log("A");
console.log("B"); // Always after A

// Asynchronous
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C"); // C prints before B`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['async', 'synchronous', 'event-loop']
    },
    {
      id: '9-56',
      question: 'What is a promise?',
      answer: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation.',
      code: `const promise = new Promise((resolve, reject) => {
  if (success) resolve("Done!");
  else reject("Failed");
});

promise
  .then(result => console.log(result))
  .catch(err => console.error(err));`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['promises', 'async', 'javascript']
    },
    {
      id: '9-57',
      question: 'What is the difference between map() and forEach()?',
      answer: 'map() returns a new array with transformed values. forEach() just iterates without returning anything.',
      code: `const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

nums.forEach(n => console.log(n)); // just logs, no return`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['map', 'forEach', 'arrays']
    },
    {
      id: '9-58',
      question: 'What is destructuring?',
      answer: 'Destructuring extracts values from arrays or properties from objects into distinct variables.',
      code: `const [a, b] = [1, 2];
console.log(a); // 1

const { name, age } = { name: "Alice", age: 25 };
console.log(name); // "Alice"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['destructuring', 'es6', 'syntax']
    },
    {
      id: '9-59',
      question: 'What is the spread operator?',
      answer: 'The spread operator (...) expands an iterable (array/object) into individual elements.',
      code: `const a = [1, 2, 3];
const b = [...a, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 }; // { x:1, y:2 }`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['spread', 'es6', 'arrays']
    },
    {
      id: '9-60',
      question: 'What is closure?',
      answer: 'A closure is a function that retains access to variables from its outer scope even after that scope has closed.',
      code: `function makeCounter() {
  let count = 0;
  return function() {
      count++;
      return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['closures', 'scope', 'functions']
    },
    {
      id: '9-61',
      question: 'What is the difference between null and undefined?',
      answer: 'undefined means a variable has not been assigned a value. null is an intentional assignment meaning "no value".',
      code: `let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (quirk)`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['null', 'undefined', 'data-types']
    },
    {
      id: '9-62',
      question: 'What is short-circuit evaluation?',
      answer: 'Short-circuit evaluation stops evaluating a logical expression as soon as the result is determined.',
      code: `// && stops at first falsy value
false && console.log("never runs");

// || stops at first truthy value
const name = userInput || "Default";

// ?? null coalescing - stops at first non-null/undefined
const val = null ?? "fallback"; // "fallback"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['operators', 'logic', 'short-circuit']
    },
    {
      id: '9-63',
      question: 'What is the ternary operator?',
      answer: 'The ternary operator is a shorthand if-else using condition ? valueIfTrue : valueIfFalse.',
      code: `const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['ternary', 'operators', 'conditionals']
    },
    {
      id: '9-64',
      question: 'What is the difference between deep copy and shallow copy?',
      answer: 'A shallow copy copies only top-level properties. A deep copy recursively copies all nested objects.',
      code: `const original = { a: 1, b: { c: 2 } };

// Shallow copy
const shallow = { ...original };
shallow.b.c = 99; // also changes original.b.c!

// Deep copy
const deep = JSON.parse(JSON.stringify(original));`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['copy', 'objects', 'reference']
    },
    {
      id: '9-65',
      question: 'What is Array.filter()?',
      answer: 'filter() creates a new array with all elements that pass a test function.',
      code: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['filter', 'arrays', 'functional']
    },
    {
      id: '9-66',
      question: 'What is Array.reduce()?',
      answer: 'reduce() executes a reducer function on each element, accumulating a single result.',
      code: `const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['reduce', 'arrays', 'functional']
    },
    {
      id: '9-67',
      question: 'What is a template literal?',
      answer: 'Template literals use backticks and ${} to embed expressions inside strings.',
      code: `const name = "Alice";
const age = 25;
const msg = \`Hello, \${name}! You are \${age} years old.\`;
console.log(msg);`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['template-literals', 'strings', 'es6']
    },
    {
      id: '9-68',
      question: 'What is the event loop?',
      answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks and processing them when the call stack is empty.',
      code: `console.log("Start");

setTimeout(() => {
  console.log("Timeout"); // runs after call stack clears
}, 0);

console.log("End");
// Output: Start, End, Timeout`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['event-loop', 'async', 'javascript']
    },
    {
      id: '9-69',
      question: 'What is mutable vs immutable data?',
      answer: 'Mutable data can be changed after creation. Immutable data cannot be changed once created.',
      code: `// Mutable
let arr = [1, 2, 3];
arr.push(4); // modifies original

// Immutable approach
const newArr = [...arr, 4]; // creates new array

// Strings are immutable
let str = "hello";
str[0] = "H"; // No effect`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['immutability', 'data-types', 'state']
    },
    {
      id: '9-70',
      question: 'What is a switch statement?',
      answer: 'A switch statement evaluates an expression and executes code matching a case.',
      code: `const day = "Monday";

switch(day) {
  case "Monday":
      console.log("Start of week");
      break;
  case "Friday":
      console.log("End of week");
      break;
  default:
      console.log("Midweek");
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['switch', 'control-flow', 'conditionals']
    },
    {
      id: '9-71',
      question: 'What is a try/catch block?',
      answer: 'try/catch handles errors by running code in the try block and catching exceptions in the catch block.',
      code: `try {
  const data = JSON.parse("invalid json");
} catch (error) {
  console.error("Caught:", error.message);
} finally {
  console.log("Always runs");
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['error-handling', 'try-catch', 'exceptions']
    },
    {
      id: '9-72',
      question: 'What is inheritance in OOP?',
      answer: 'Inheritance allows a class to derive properties and methods from a parent class.',
      code: `class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + " makes a sound"; }
}

class Dog extends Animal {
  speak() { return this.name + " barks"; }
}

const d = new Dog("Rex");
console.log(d.speak()); // "Rex barks"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['inheritance', 'oop', 'classes']
    },
    {
      id: '9-73',
      question: 'What is encapsulation?',
      answer: 'Encapsulation hides internal state and requires all interaction through methods, protecting data integrity.',
      code: `class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
      if (amount > 0) this.#balance += amount;
  }

  getBalance() { return this.#balance; }
}

const acct = new BankAccount();
acct.deposit(100);
console.log(acct.getBalance()); // 100`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['encapsulation', 'oop', 'classes']
    },
    {
      id: '9-74',
      question: 'What is a default parameter?',
      answer: 'Default parameters provide fallback values when a function argument is not passed.',
      code: `function greet(name = "World") {
  return \`Hello, \${name}!\`;
}

console.log(greet());        // "Hello, World!"
console.log(greet("Alice")); // "Hello, Alice!"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['default-parameters', 'functions', 'es6']
    },
    {
      id: '9-75',
      question: 'What is the difference between a compiled and interpreted language?',
      answer: 'Compiled languages (C#, C++) translate all code to machine code before running. Interpreted languages (JavaScript, Python) execute code line by line at runtime.',
      code: `// C# - compiled
// csc Program.cs -> produces .exe

// JavaScript - interpreted
// node script.js -> runs directly

// Modern JS uses JIT (Just-In-Time) compilation
// which combines both approaches`,
      language: 'plaintext',
      category: 'Fundamentals',
      difficulty: 'medium',
      tags: ['compiled', 'interpreted', 'languages']
    },
    {
      id: '9-76',
      question: 'What is Big O notation?',
      answer: 'Big O notation describes the worst-case time or space complexity of an algorithm as input size grows.',
      code: `// O(1) - constant
function getFirst(arr) { return arr[0]; }

// O(n) - linear
function findItem(arr, val) {
  for (let i of arr) if (i === val) return i;
}

// O(n²) - quadratic
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length - i; j++) { /* ... */ }
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['big-o', 'complexity', 'algorithms']
    },
    {
      id: '9-77',
      question: 'What is a linked list?',
      answer: 'A linked list is a data structure where elements (nodes) contain a value and a pointer to the next node.',
      code: `class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() { this.head = null; }

  append(value) {
      const node = new Node(value);
      if (!this.head) { this.head = node; return; }
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
  }
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['linked-list', 'data-structures', 'pointers']
    },
    {
      id: '9-78',
      question: 'What is a binary search algorithm?',
      answer: 'Binary search finds a target in a sorted array by repeatedly halving the search space. O(log n) time complexity.',
      code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
  }
  return -1;
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['binary-search', 'algorithms', 'searching']
    },
    {
      id: '9-79',
      question: 'What is memoization?',
      answer: 'Memoization caches function results so the same inputs return the cached output instead of recalculating.',
      code: `function memoize(fn) {
  const cache = {};
  return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) return cache[key];
      return (cache[key] = fn(...args));
  };
}

const slowFib = n => n <= 1 ? n : slowFib(n-1) + slowFib(n-2);
const fastFib = memoize(slowFib);`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['memoization', 'optimization', 'functional']
    },
    {
      id: '9-80',
      question: 'What is polymorphism?',
      answer: 'Polymorphism allows different classes to be treated through the same interface, with each implementing its own version of a method.',
      code: `class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(s => console.log(s.area()));`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['polymorphism', 'oop', 'inheritance']
    },
    {
      id: '9-81',
      question: 'What is event delegation?',
      answer: 'Event delegation uses a single event listener on a parent element to handle events from child elements via bubbling.',
      code: `document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
      console.log("Clicked:", e.target.textContent);
  }
});
// One listener handles all <li> clicks, including new ones`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['event-delegation', 'dom', 'events']
    },
    {
      id: '9-82',
      question: 'What is prototypal inheritance in JavaScript?',
      answer: 'Objects in JavaScript inherit properties and methods from a prototype object via the prototype chain.',
      code: `function Animal(name) { this.name = name; }
Animal.prototype.speak = function() {
  return this.name + " speaks";
};

const dog = new Animal("Rex");
console.log(dog.speak()); // uses prototype method
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['prototype', 'inheritance', 'javascript']
    },
    {
      id: '9-83',
      question: 'What is a generator function?',
      answer: 'A generator function uses function* and yield to produce a sequence of values lazily.',
      code: `function* counter(start = 0) {
  while (true) {
      yield start++;
  }
}

const gen = counter(1);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['generators', 'iterators', 'es6']
    },
    {
      id: '9-84',
      question: 'What is the module pattern?',
      answer: 'The module pattern uses closures to create private state and expose a public API.',
      code: `const Counter = (function() {
  let count = 0; // private

  return {
      increment() { count++; },
      decrement() { count--; },
      getCount() { return count; }
  };
})();

Counter.increment();
console.log(Counter.getCount()); // 1`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['module-pattern', 'closures', 'design-patterns']
    },
    {
      id: '9-85',
      question: 'What is the difference between composition and inheritance?',
      answer: 'Inheritance is "is-a" relationship. Composition is "has-a" — combining small, focused behaviors instead of deep class hierarchies.',
      code: `// Inheritance (is-a)
class Employee extends Person { ... }

// Composition (has-a)
const canSwim = (state) => ({ swim: () => "swimming" });
const canFly  = (state) => ({ fly:  () => "flying" });

const createDuck = (name) => {
  const state = { name };
  return Object.assign({}, canSwim(state), canFly(state), { name });
};`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['composition', 'inheritance', 'oop']
    },
    {
      id: '9-86',
      question: 'What is debouncing?',
      answer: 'Debouncing delays function execution until after a specified wait period has elapsed since the last call.',
      code: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const onSearch = debounce((query) => {
  console.log("Searching:", query);
}, 300);`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['debounce', 'performance', 'events']
    },
    {
      id: '9-87',
      question: 'What is throttling?',
      answer: 'Throttling limits how often a function can be called, ensuring it executes at most once per interval.',
      code: `function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
          lastCall = now;
          return fn.apply(this, args);
      }
  };
}

const onScroll = throttle(() => console.log("scroll"), 200);`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['throttle', 'performance', 'events']
    },
    {
      id: '9-88',
      question: 'What is the Observer design pattern?',
      answer: 'The Observer pattern defines a one-to-many dependency so that when one object changes state, all dependents are notified.',
      code: `class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
      (this.events[event] ||= []).push(listener);
  }
  emit(event, data) {
      (this.events[event] || []).forEach(fn => fn(data));
  }
}

const emitter = new EventEmitter();
emitter.on("data", d => console.log("Got:", d));
emitter.emit("data", 42); // Got: 42`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['observer', 'design-patterns', 'events']
    },
    {
      id: '9-89',
      question: 'What is currying?',
      answer: 'Currying transforms a function with multiple arguments into a chain of functions each taking a single argument.',
      code: `function curry(fn) {
  return function curried(...args) {
      if (args.length >= fn.length) return fn(...args);
      return (...next) => curried(...args, ...next);
  };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2)(3)); // 6`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['currying', 'functional', 'functions']
    },
    {
      id: '9-90',
      question: 'What are WeakMap and WeakSet?',
      answer: 'WeakMap and WeakSet hold weak references to objects, allowing them to be garbage-collected when no other references exist.',
      code: `let obj = { name: "Alice" };
const wm = new WeakMap();
wm.set(obj, "metadata");
console.log(wm.get(obj)); // "metadata"

obj = null; // obj can now be garbage-collected
// wm entry is also removed automatically`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['weakmap', 'weakset', 'memory']
    },
    {
      id: '9-91',
      question: 'What is a Proxy object in JavaScript?',
      answer: 'A Proxy wraps an object and intercepts operations like get, set, and delete via handler traps.',
      code: `const handler = {
  get(target, key) {
      return key in target ? target[key] : \`\${key} not found\`;
  }
};

const obj = new Proxy({ name: "Alice" }, handler);
console.log(obj.name);  // "Alice"
console.log(obj.age);   // "age not found"`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['proxy', 'es6', 'metaprogramming']
    },
    {
      id: '9-92',
      question: 'What is tail call optimization?',
      answer: 'Tail call optimization (TCO) allows recursive calls in tail position to reuse the current stack frame, preventing stack overflow.',
      code: `// Non-tail recursive (risks stack overflow)
function factRec(n) { return n <= 1 ? 1 : n * factRec(n - 1); }

// Tail recursive (TCO eligible)
function factTail(n, acc = 1) {
  return n <= 1 ? acc : factTail(n - 1, n * acc);
}
console.log(factTail(5)); // 120`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['tail-call', 'recursion', 'optimization']
    },
    {
      id: '9-93',
      question: 'What is the difference between a tree and a graph?',
      answer: 'A tree is a hierarchical structure with a root and no cycles. A graph can have cycles, multiple parents, and disconnected nodes.',
      code: `// Tree node
class TreeNode {
  constructor(val) {
      this.val = val;
      this.children = [];
  }
}

// Graph (adjacency list)
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"]
};`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['tree', 'graph', 'data-structures']
    },
    {
      id: '9-94',
      question: 'What is dynamic programming?',
      answer: 'Dynamic programming solves complex problems by breaking them into subproblems, solving each once, and storing results.',
      code: `// Fibonacci with DP (bottom-up)
function fib(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}
console.log(fib(10)); // 55`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['dynamic-programming', 'algorithms', 'optimization']
    },
    {
      id: '9-95',
      question: 'What is the difference between breadth-first search (BFS) and depth-first search (DFS)?',
      answer: 'BFS explores level by level using a queue. DFS explores as deep as possible along each branch using a stack or recursion.',
      code: `// BFS
function bfs(root) {
  const queue = [root], result = [];
  while (queue.length) {
      const node = queue.shift();
      result.push(node.val);
      node.children.forEach(c => queue.push(c));
  }
  return result;
}

// DFS
function dfs(node) {
  if (!node) return;
  console.log(node.val);
  node.children.forEach(dfs);
}`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['bfs', 'dfs', 'algorithms']
    },
    {
      id: '9-96',
      question: 'What is the SOLID principle?',
      answer: 'SOLID is five OOP design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.',
      code: `// Single Responsibility: one reason to change
class UserValidator { validate(user) { ... } }
class UserRepository { save(user) { ... } }

// Open/Closed: open for extension, closed for modification
class Shape { area() { return 0; } }
class Circle extends Shape { area() { return Math.PI * r**2; } }`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['solid', 'design-principles', 'oop']
    },
    {
      id: '9-97',
      question: 'What is a hash map / hash table?',
      answer: 'A hash map stores key-value pairs and uses a hash function to compute an index for O(1) average-time lookup.',
      code: `// JavaScript objects and Map are hash maps
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

console.log(map.get("name")); // "Alice"
console.log(map.size);        // 2
console.log(map.has("age"));  // true`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['hash-map', 'data-structures', 'performance']
    },
    {
      id: '9-98',
      question: 'What is the difference between Object.freeze() and const?',
      answer: 'const prevents rebinding the variable. Object.freeze() prevents mutation of the object\'s properties.',
      code: `const obj = { x: 1 };
obj.x = 99; // works — const doesn't freeze content
console.log(obj.x); // 99

const frozen = Object.freeze({ x: 1 });
frozen.x = 99; // silently fails
console.log(frozen.x); // still 1`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['freeze', 'const', 'immutability']
    },
    {
      id: '9-99',
      question: 'What is the Singleton design pattern?',
      answer: 'Singleton ensures a class has only one instance and provides a global access point to it.',
      code: `class Database {
  static #instance = null;

  static getInstance() {
      if (!Database.#instance) {
          Database.#instance = new Database();
      }
      return Database.#instance;
  }

  query(sql) { console.log("Running:", sql); }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['singleton', 'design-patterns', 'oop']
    },
    {
      id: '9-100',
      question: 'What is function composition?',
      answer: 'Function composition combines multiple functions so the output of one becomes the input of the next.',
      code: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const add1  = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const transform = compose(square, double, add1);
console.log(transform(3)); // square(double(add1(3))) = square(8) = 64`,
      language: 'javascript',
      category: 'Fundamentals',
      difficulty: 'hard',
      tags: ['composition', 'functional', 'functions']
    }
  ]
};
