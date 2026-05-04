import { Deck } from '@/types/flashcard';

export const javascriptFundamentals: Deck = {
  id: '1',
  name: 'JavaScript Fundamentals',
  description: 'JavaScript concepts every developer should know',
  category: 'JavaScript',
  cards: [
    {
      id: '1-1',
      question: 'What is a variable in JavaScript?',
      answer: 'A variable is a named container that stores a value. Variables can be declared using var, let, or const.',
      code: `let name = "John";
const age = 30;
var city = "New York";`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['variables', 'basics', 'fundamentals']
    },
    {
      id: '1-2',
      question: 'What is the difference between let and const?',
      answer: 'let allows you to reassign values, while const creates a constant reference that cannot be reassigned. However, const objects can still have their properties modified.',
      code: `let x = 5;
x = 10; // OK

const y = 5;
y = 10; // Error`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['variables', 'const', 'let']
    },
    {
      id: '1-3',
      question: 'What is a function in JavaScript?',
      answer: 'A function is a reusable block of code that performs a specific task. Functions can accept parameters and return values.',
      code: `function greet(name) {
return "Hello, " + name;
}
console.log(greet("John"));`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['functions', 'basics', 'fundamentals']
    },
    {
      id: '1-4',
      question: 'What is an arrow function?',
      answer: 'An arrow function is a shorter syntax for writing functions. It uses => and has a lexical this binding.',
      code: `const add = (a, b) => a + b;
const greet = name => "Hello, " + name;`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['arrow-functions', 'es6', 'functions']
    },
    {
      id: '1-5',
      question: 'What is an array in JavaScript?',
      answer: 'An array is an ordered collection of values. Arrays can hold multiple values of any type and are zero-indexed.',
      code: `const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['arrays', 'data-structures', 'basics']
    },
    {
      id: '1-6',
      question: 'What is an object in JavaScript?',
      answer: 'An object is a collection of key-value pairs. Objects are used to store related data and functionality together.',
      code: `const person = {
name: "John",
age: 30,
city: "New York"
};`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['objects', 'data-structures', 'basics']
    },
    {
      id: '1-7',
      question: 'What is the difference between == and ===?',
      answer: '== compares values with type coercion, while === compares both value and type without coercion (strict equality).',
      code: `5 == "5"  // true
5 === "5" // false`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['comparison', 'operators', 'equality']
    },
    {
      id: '1-8',
      question: 'What is a string in JavaScript?',
      answer: 'A string is a sequence of characters used to represent text. Strings can be created with single quotes, double quotes, or backticks.',
      code: `const str1 = 'Hello';
const str2 = "World";
const str3 = \`Hello World\`;`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['strings', 'data-types', 'basics']
    },
    {
      id: '1-9',
      question: 'What is a template literal?',
      answer: 'Template literals use backticks and allow embedded expressions with ${} syntax. They also support multi-line strings.',
      code: `const name = "John";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // "Hello, John!"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['template-literals', 'strings', 'es6']
    },
    {
      id: '1-10',
      question: 'What is the typeof operator?',
      answer: 'typeof returns a string indicating the type of a value. It is useful for checking data types.',
      code: `typeof 42        // "number"
typeof "hello"   // "string"
typeof true      // "boolean"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['typeof', 'operators', 'types']
    },
    {
      id: '1-11',
      question: 'What is null in JavaScript?',
      answer: 'null is a special value that represents the intentional absence of any object value. It is a primitive value.',
      code: `let value = null;
console.log(value); // null`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['null', 'primitives', 'basics']
    },
    {
      id: '1-12',
      question: 'What is undefined in JavaScript?',
      answer: 'undefined means a variable has been declared but not assigned a value. It is also the default return value of functions.',
      code: `let x;
console.log(x); // undefined`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['undefined', 'primitives', 'basics']
    },
    {
      id: '1-13',
      question: 'What is a for loop?',
      answer: 'A for loop repeats a block of code a specific number of times. It has initialization, condition, and increment parts.',
      code: `for (let i = 0; i < 5; i++) {
console.log(i);
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['loops', 'control-flow', 'basics']
    },
    {
      id: '1-14',
      question: 'What is a while loop?',
      answer: 'A while loop repeats a block of code as long as a condition is true. The condition is checked before each iteration.',
      code: `let i = 0;
while (i < 5) {
console.log(i);
i++;
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['loops', 'control-flow', 'basics']
    },
    {
      id: '1-15',
      question: 'What is an if statement?',
      answer: 'An if statement executes code conditionally based on whether a condition is true or false.',
      code: `if (age >= 18) {
console.log("Adult");
} else {
console.log("Minor");
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['conditionals', 'control-flow', 'basics']
    },
    {
      id: '1-16',
      question: 'What is the ternary operator?',
      answer: 'The ternary operator is a shorthand for if-else. It uses the syntax: condition ? valueIfTrue : valueIfFalse.',
      code: `const age = 20;
const status = age >= 18 ? "Adult" : "Minor";`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['ternary', 'operators', 'conditionals']
    },
    {
      id: '1-17',
      question: 'What is the spread operator?',
      answer: 'The spread operator (...) expands an array or object into individual elements. It is useful for copying and merging.',
      code: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj = { ...person, age: 31 };`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['spread', 'operators', 'es6']
    },
    {
      id: '1-18',
      question: 'What is array destructuring?',
      answer: 'Array destructuring allows you to extract values from arrays into separate variables in a single statement.',
      code: `const [first, second] = [1, 2, 3];
console.log(first);  // 1
console.log(second); // 2`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['destructuring', 'arrays', 'es6']
    },
    {
      id: '1-19',
      question: 'What is object destructuring?',
      answer: 'Object destructuring extracts properties from objects into variables. The variable names must match property names.',
      code: `const { name, age } = person;
console.log(name); // "John"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['destructuring', 'objects', 'es6']
    },
    {
      id: '1-20',
      question: 'What is the map() method?',
      answer: 'map() creates a new array by calling a function on every element of the original array. It does not modify the original array.',
      code: `const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['map', 'arrays', 'methods']
    },
    {
      id: '1-21',
      question: 'What is the filter() method?',
      answer: 'filter() creates a new array with elements that pass a test function. It returns only elements where the function returns true.',
      code: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['filter', 'arrays', 'methods']
    },
    {
      id: '1-22',
      question: 'What is the reduce() method?',
      answer: 'reduce() executes a reducer function on each array element, resulting in a single output value. It accumulates values.',
      code: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 10`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['reduce', 'arrays', 'methods']
    },
    {
      id: '1-23',
      question: 'What is a closure in JavaScript?',
      answer: 'A closure is a function that has access to variables in its outer scope, even after the outer function has returned.',
      code: `function outer() {
let count = 0;
return function inner() {
  count++;
  return count;
};
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['closures', 'scope', 'functions']
    },
    {
      id: '1-24',
      question: 'What is the this keyword?',
      answer: 'this refers to the object that is executing the current function. Its value depends on how the function is called.',
      code: `const person = {
name: "John",
greet() {
  console.log(this.name);
}
};`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['this', 'context', 'objects']
    },
    {
      id: '1-25',
      question: 'What is a Promise?',
      answer: 'A Promise represents a value that may be available now, in the future, or never. It has three states: pending, fulfilled, or rejected.',
      code: `const promise = new Promise((resolve, reject) => {
setTimeout(() => resolve("Done!"), 1000);
});`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['promises', 'async', 'es6']
    },
    {
      id: '1-26',
      question: 'What is async/await?',
      answer: 'async/await is syntactic sugar for Promises. async functions return Promises, and await pauses execution until a Promise resolves.',
      code: `async function fetchData() {
const response = await fetch(url);
const data = await response.json();
return data;
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['async', 'await', 'promises']
    },
    {
      id: '1-27',
      question: 'What is the difference between null and undefined?',
      answer: 'undefined means a variable has been declared but not assigned. null is an intentional assignment representing no value.',
      code: `let x;           // undefined
let y = null;    // null`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['null', 'undefined', 'types']
    },
    {
      id: '1-28',
      question: 'What is the forEach() method?',
      answer: 'forEach() executes a function for each array element. Unlike map(), it does not return a new array.',
      code: `const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n));`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['foreach', 'arrays', 'methods']
    },
    {
      id: '1-29',
      question: 'What is JSON?',
      answer: 'JSON (JavaScript Object Notation) is a text format for storing and transporting data. Use JSON.parse() to parse and JSON.stringify() to convert.',
      code: `const obj = { name: "John", age: 30 };
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['json', 'data', 'parsing']
    },
    {
      id: '1-30',
      question: 'What is the event loop?',
      answer: 'The event loop handles asynchronous operations. It checks the call stack and task queues, executing callbacks when the stack is empty.',
      code: `console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// Output: 1, 3, 2`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['event-loop', 'async', 'runtime']
    },
    {
      id: '1-31',
      question: 'What is the find() method?',
      answer: 'find() returns the first element in an array that satisfies a test function. Returns undefined if no element is found.',
      code: `const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
const user = users.find(u => u.id === 2);`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['find', 'arrays', 'methods']
    },
    {
      id: '1-32',
      question: 'What is the some() method?',
      answer: 'some() tests whether at least one element passes a test function. Returns true or false.',
      code: `const numbers = [1, 2, 3, 4];
const hasEven = numbers.some(n => n % 2 === 0); // true`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['some', 'arrays', 'methods']
    },
    {
      id: '1-33',
      question: 'What is the every() method?',
      answer: 'every() tests whether all elements pass a test function. Returns true only if all elements pass.',
      code: `const numbers = [2, 4, 6];
const allEven = numbers.every(n => n % 2 === 0); // true`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['every', 'arrays', 'methods']
    },
    {
      id: '1-34',
      question: 'What is the includes() method?',
      answer: 'includes() checks if an array contains a specific value. Returns true or false.',
      code: `const fruits = ['apple', 'banana', 'orange'];
fruits.includes('banana'); // true`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['includes', 'arrays', 'methods']
    },
    {
      id: '1-35',
      question: 'What is the concat() method?',
      answer: 'concat() merges two or more arrays into a new array without modifying the original arrays.',
      code: `const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2); // [1, 2, 3, 4]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['concat', 'arrays', 'methods']
    },
    {
      id: '1-36',
      question: 'What is the slice() method?',
      answer: 'slice() returns a shallow copy of a portion of an array. It does not modify the original array.',
      code: `const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4); // [2, 3, 4]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['slice', 'arrays', 'methods']
    },
    {
      id: '1-37',
      question: 'What is the splice() method?',
      answer: 'splice() changes an array by removing, replacing, or adding elements. It modifies the original array.',
      code: `const arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['splice', 'arrays', 'methods']
    },
    {
      id: '1-38',
      question: 'What is the push() method?',
      answer: 'push() adds one or more elements to the end of an array and returns the new length.',
      code: `const arr = [1, 2];
arr.push(3, 4); // arr is now [1, 2, 3, 4]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['push', 'arrays', 'methods']
    },
    {
      id: '1-39',
      question: 'What is the pop() method?',
      answer: 'pop() removes the last element from an array and returns that element.',
      code: `const arr = [1, 2, 3];
const last = arr.pop(); // last is 3, arr is [1, 2]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['pop', 'arrays', 'methods']
    },
    {
      id: '1-40',
      question: 'What is the shift() method?',
      answer: 'shift() removes the first element from an array and returns that element.',
      code: `const arr = [1, 2, 3];
const first = arr.shift(); // first is 1, arr is [2, 3]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['shift', 'arrays', 'methods']
    },
    {
      id: '1-41',
      question: 'What is the unshift() method?',
      answer: 'unshift() adds one or more elements to the beginning of an array and returns the new length.',
      code: `const arr = [3, 4];
arr.unshift(1, 2); // arr is now [1, 2, 3, 4]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['unshift', 'arrays', 'methods']
    },
    {
      id: '1-42',
      question: 'What is the join() method?',
      answer: 'join() creates a string by concatenating all array elements, separated by a specified separator.',
      code: `const arr = ['Hello', 'World'];
const str = arr.join(' '); // "Hello World"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['join', 'arrays', 'strings']
    },
    {
      id: '1-43',
      question: 'What is the split() method?',
      answer: 'split() divides a string into an array of substrings based on a separator.',
      code: `const str = "Hello World";
const arr = str.split(' '); // ['Hello', 'World']`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['split', 'strings', 'arrays']
    },
    {
      id: '1-44',
      question: 'What is the reverse() method?',
      answer: 'reverse() reverses the order of elements in an array. It modifies the original array.',
      code: `const arr = [1, 2, 3];
arr.reverse(); // arr is now [3, 2, 1]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['reverse', 'arrays', 'methods']
    },
    {
      id: '1-45',
      question: 'What is the sort() method?',
      answer: 'sort() sorts array elements in place. By default, it converts elements to strings and sorts alphabetically.',
      code: `const arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]
arr.sort((a, b) => b - a); // [3, 2, 1]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['sort', 'arrays', 'methods']
    },
    {
      id: '1-46',
      question: 'What is Object.keys()?',
      answer: 'Object.keys() returns an array of an object\'s own property names.',
      code: `const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj); // ['a', 'b', 'c']`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['object', 'keys', 'methods']
    },
    {
      id: '1-47',
      question: 'What is Object.values()?',
      answer: 'Object.values() returns an array of an object\'s own property values.',
      code: `const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj); // [1, 2, 3]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['object', 'values', 'methods']
    },
    {
      id: '1-48',
      question: 'What is Object.entries()?',
      answer: 'Object.entries() returns an array of an object\'s key-value pairs as arrays.',
      code: `const obj = {a: 1, b: 2};
const entries = Object.entries(obj); // [['a', 1], ['b', 2]]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['object', 'entries', 'methods']
    },
    {
      id: '1-49',
      question: 'What is the rest parameter?',
      answer: 'The rest parameter (...) collects remaining arguments into an array. It must be the last parameter.',
      code: `function sum(...numbers) {
return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['rest', 'parameters', 'es6']
    },
    {
      id: '1-50',
      question: 'What is default parameter?',
      answer: 'Default parameters allow you to set default values for function parameters if no value is provided.',
      code: `function greet(name = 'Guest') {
return \`Hello, \${name}\`;
}
greet(); // "Hello, Guest"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'easy',
      tags: ['default', 'parameters', 'functions']
    },
    {
      id: '1-51',
      question: 'What is optional chaining (?.)?',
      answer: 'Optional chaining returns undefined instead of throwing an error when accessing properties on null or undefined.',
      code: `const user = null;

// Without optional chaining - throws TypeError
// console.log(user.address.city);

// With optional chaining - returns undefined safely
console.log(user?.address?.city); // undefined

const arr = null;
console.log(arr?.[0]);       // undefined
console.log(arr?.length);    // undefined`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['optional-chaining', 'es2020', 'null-safety']
    },
    {
      id: '1-52',
      question: 'What is the nullish coalescing operator (??)?',
      answer: '?? returns the right-hand value only when the left is null or undefined (not falsy).',
      code: `const value = null ?? "default";   // "default"
const zero  = 0    ?? "default";   // 0 (not null/undefined)
const empty = ""   ?? "default";   // "" (not null/undefined)
const undef = undefined ?? "fallback"; // "fallback"

// vs || which treats all falsy values as "missing"
const a = 0 || "default";  // "default" (may be unexpected)
const b = 0 ?? "default";  // 0 (intended behavior)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['nullish-coalescing', 'es2020', 'operators']
    },
    {
      id: '1-53',
      question: 'What are logical assignment operators (&&=, ||=, ??=)?',
      answer: 'Logical assignment combines a logical operator with assignment. Only assigns if the condition is met.',
      code: `let a = null;
a ??= "default"; // a = "default" (assigned because a was null)

let b = 1;
b &&= 99;        // b = 99 (assigned because b was truthy)

let c = 0;
c ||= 42;        // c = 42 (assigned because c was falsy)

// Useful for initializing object properties
const config = {};
config.timeout ??= 3000; // Only sets if not already set`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['logical-assignment', 'es2021', 'operators']
    },
    {
      id: '1-54',
      question: 'What is Array.from()?',
      answer: 'Array.from() creates an array from an array-like or iterable object.',
      code: `// From string
Array.from("hello");        // ['h','e','l','l','o']

// From Set (deduplicate)
Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]

// From NodeList
Array.from(document.querySelectorAll("p"));

// With mapping function
Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['array-from', 'arrays', 'es6']
    },
    {
      id: '1-55',
      question: 'What is the flat() method?',
      answer: 'flat() creates a new array with sub-array elements flattened up to the specified depth.',
      code: `const nested = [1, [2, 3], [4, [5, 6]]];

nested.flat();     // [1, 2, 3, 4, [5, 6]]  (depth 1)
nested.flat(2);    // [1, 2, 3, 4, 5, 6]    (depth 2)
nested.flat(Infinity); // fully flattens any depth`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['flat', 'arrays', 'es2019']
    },
    {
      id: '1-56',
      question: 'What is the flatMap() method?',
      answer: 'flatMap() maps each element then flattens the result by one level. Equivalent to map() followed by flat(1).',
      code: `const sentences = ["Hello World", "Foo Bar"];

// map then flat
sentences.map(s => s.split(" ")).flat();
// ['Hello', 'World', 'Foo', 'Bar']

// flatMap is shorter
sentences.flatMap(s => s.split(" "));
// ['Hello', 'World', 'Foo', 'Bar']

// Useful for expanding items
[1, 2, 3].flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['flatmap', 'arrays', 'es2019']
    },
    {
      id: '1-57',
      question: 'What is Object.assign()?',
      answer: 'Object.assign() copies enumerable own properties from source objects into a target object.',
      code: `const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// Shallow clone
const clone = Object.assign({}, target);

// Merge multiple sources
const merged = Object.assign({}, obj1, obj2, obj3);`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['object-assign', 'objects', 'cloning']
    },
    {
      id: '1-58',
      question: 'What is a getter and setter in JavaScript?',
      answer: 'Getters and setters are accessor properties that run functions when a property is read or written.',
      code: `const person = {
_name: "Alice",
get name() {
  return this._name.toUpperCase();
},
set name(value) {
  if (typeof value !== "string") throw new TypeError("Name must be string");
  this._name = value;
}
};

console.log(person.name); // "ALICE"
person.name = "Bob";
console.log(person.name); // "BOB"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['getters', 'setters', 'objects']
    },
    {
      id: '1-59',
      question: 'What is the in operator in JavaScript?',
      answer: 'The in operator returns true if a property exists in an object or its prototype chain.',
      code: `const car = { make: "Toyota", model: "Camry" };

"make" in car;      // true
"year" in car;      // false
"toString" in car;  // true (inherited from Object.prototype)

// Common use: check if key exists before accessing
if ("make" in car) {
console.log(car.make);
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['in-operator', 'objects', 'properties']
    },
    {
      id: '1-60',
      question: 'What is instanceof in JavaScript?',
      answer: 'instanceof tests whether an object was created by a constructor, checking the prototype chain.',
      code: `class Animal {}
class Dog extends Animal {}

const d = new Dog();
d instanceof Dog;    // true
d instanceof Animal; // true (prototype chain)
d instanceof Object; // true

// Primitives
"hello" instanceof String; // false (primitives are not objects)
[] instanceof Array;       // true`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['instanceof', 'prototype', 'classes']
    },
    {
      id: '1-61',
      question: 'What is the for...of loop?',
      answer: 'for...of iterates over iterable objects (arrays, strings, Sets, Maps). It gives values, not indices.',
      code: `const arr = [10, 20, 30];
for (const value of arr) {
console.log(value); // 10, 20, 30
}

// String
for (const char of "hello") console.log(char); // h, e, l, l, o

// Map entries
const map = new Map([["a", 1], ["b", 2]]);
for (const [key, val] of map) console.log(key, val);`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['for-of', 'iterables', 'loops']
    },
    {
      id: '1-62',
      question: 'What is the for...in loop?',
      answer: 'for...in iterates over the enumerable string-keyed properties of an object, including inherited ones.',
      code: `const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
console.log(key, obj[key]); // a 1, b 2, c 3
}

// Warning: includes inherited enumerable properties
// Use hasOwnProperty to filter
for (const key in obj) {
if (Object.hasOwn(obj, key)) {
  console.log(key);
}
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['for-in', 'objects', 'loops']
    },
    {
      id: '1-63',
      question: 'What is a Set in JavaScript?',
      answer: 'A Set is a collection of unique values. Duplicates are automatically ignored.',
      code: `const set = new Set([1, 2, 2, 3, 3]);
console.log(set.size); // 3
set.add(4);
set.has(2); // true
set.delete(1);

// Convert to array
const arr = [...set]; // [2, 3, 4]

// Remove duplicates from array
const unique = [...new Set([1, 1, 2, 3, 3])]; // [1, 2, 3]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['set', 'data-structures', 'es6']
    },
    {
      id: '1-64',
      question: 'What is a Map in JavaScript?',
      answer: 'A Map is a key-value store where any type can be a key (unlike plain objects which only allow strings/symbols).',
      code: `const map = new Map();
map.set("name", "Alice");
map.set(42, "answer");
map.set({ id: 1 }, "object key");

map.get("name"); // "Alice"
map.has(42);     // true
map.size;        // 3

// Iterate
for (const [key, value] of map) {
console.log(key, value);
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['map', 'data-structures', 'es6']
    },
    {
      id: '1-65',
      question: 'What is a generator function?',
      answer: 'A generator function uses function* and yield to produce a sequence of values lazily, one at a time.',
      code: `function* counter(start = 0) {
while (true) {
  yield start++;
}
}

const gen = counter(1);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

// Finite generator
function* range(from, to) {
for (let i = from; i <= to; i++) yield i;
}
[...range(1, 5)]; // [1, 2, 3, 4, 5]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['generators', 'iterators', 'es6']
    },
    {
      id: '1-66',
      question: 'What is Promise.race()?',
      answer: 'Promise.race() settles as soon as the first promise settles, whether fulfilled or rejected.',
      code: `const slow = new Promise(res => setTimeout(() => res("slow"), 3000));
const fast = new Promise(res => setTimeout(() => res("fast"), 500));
const fail = new Promise((_, rej) => setTimeout(() => rej("error"), 1000));

const result = await Promise.race([slow, fast]);
console.log(result); // "fast" (resolves first)

// Timeout pattern
const timeout = new Promise((_, rej) =>
setTimeout(() => rej(new Error("Timeout")), 2000));

const data = await Promise.race([fetchData(), timeout]);`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['promise-race', 'promises', 'async']
    },
    {
      id: '1-67',
      question: 'What is Promise.any()?',
      answer: 'Promise.any() resolves with the first fulfilled promise. It only rejects if all promises reject (AggregateError).',
      code: `const p1 = Promise.reject("fail 1");
const p2 = Promise.resolve("success");
const p3 = Promise.reject("fail 3");

const result = await Promise.any([p1, p2, p3]);
console.log(result); // "success"

// All reject
try {
await Promise.any([Promise.reject("a"), Promise.reject("b")]);
} catch (e) {
console.log(e instanceof AggregateError); // true
console.log(e.errors); // ["a", "b"]
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['promise-any', 'promises', 'es2021']
    },
    {
      id: '1-68',
      question: 'What is structuredClone()?',
      answer: 'structuredClone() creates a true deep clone of an object, including nested objects, arrays, dates, and more.',
      code: `const original = {
name: "Alice",
address: { city: "NYC" },
date: new Date(),
nums: [1, 2, 3]
};

const clone = structuredClone(original);
clone.address.city = "LA";

console.log(original.address.city); // "NYC" (not affected)
console.log(clone.date instanceof Date); // true (Date preserved)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['structuredclone', 'deep-clone', 'objects']
    },
    {
      id: '1-69',
      question: 'What is the globalThis object?',
      answer: 'globalThis provides a standard way to access the global object in any environment (browser, Node.js, workers).',
      code: `// Browser:  globalThis === window
// Node.js:  globalThis === global
// Worker:   globalThis === self

// Universal code that works everywhere
globalThis.myGlobal = "shared";

// Check environment
if (typeof globalThis.window !== "undefined") {
console.log("Running in browser");
} else {
console.log("Running in Node.js");
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['globalthis', 'environments', 'es2020']
    },
    {
      id: '1-70',
      question: 'What is the AbortController?',
      answer: 'AbortController allows you to cancel async operations like fetch requests.',
      code: `const controller = new AbortController();
const { signal } = controller;

// Cancel after 3 seconds
setTimeout(() => controller.abort(), 3000);

try {
const res = await fetch("/api/data", { signal });
const data = await res.json();
} catch (err) {
if (err.name === "AbortError") {
  console.log("Request was cancelled");
}
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['abortcontroller', 'fetch', 'cancellation']
    },
    {
      id: '1-71',
      question: 'What is the Symbol type?',
      answer: 'Symbol creates a unique, immutable primitive value, often used as object property keys to avoid name collisions.',
      code: `const id1 = Symbol("id");
const id2 = Symbol("id");
id1 === id2; // false (always unique)

const user = {
[id1]: 123, // Symbol as key
name: "Alice"
};

console.log(user[id1]); // 123
// Symbol keys are hidden from for...in, JSON.stringify
console.log(Object.keys(user)); // ["name"]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['symbol', 'primitives', 'es6']
    },
    {
      id: '1-72',
      question: 'What is Object.fromEntries()?',
      answer: 'Object.fromEntries() converts an iterable of key-value pairs (like a Map or array) into a plain object.',
      code: `// From Map
const map = new Map([["a", 1], ["b", 2]]);
Object.fromEntries(map); // { a: 1, b: 2 }

// From array of pairs
Object.fromEntries([["x", 10], ["y", 20]]); // { x: 10, y: 20 }

// Practical: transform object values
const prices = { apple: 1, banana: 0.5 };
const doubled = Object.fromEntries(
Object.entries(prices).map(([k, v]) => [k, v * 2])
);
// { apple: 2, banana: 1 }`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['object-fromentries', 'objects', 'es2019']
    },
    {
      id: '1-73',
      question: 'What is Array.at()?',
      answer: 'Array.at() returns an element at a given index. Negative indices count from the end.',
      code: `const arr = [10, 20, 30, 40, 50];

arr.at(0);   // 10  (first element)
arr.at(-1);  // 50  (last element)
arr.at(-2);  // 40  (second to last)

// vs bracket notation
arr[arr.length - 1]; // 50 (verbose)
arr.at(-1);          // 50 (concise)

// Works on strings too
"hello".at(-1); // "o"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['array-at', 'arrays', 'es2022']
    },
    {
      id: '1-74',
      question: 'What is the String.matchAll() method?',
      answer: 'matchAll() returns an iterator of all regex matches in a string, including capture groups.',
      code: `const str = "cat bat sat";
const regex = /([a-z])at/g;

const matches = [...str.matchAll(regex)];
// Each match: [fullMatch, group1, ...] with index
matches.forEach(m => {
console.log(m[0], m[1], "at index", m.index);
});
// "cat" "c" at index 0
// "bat" "b" at index 4
// "sat" "s" at index 8`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['matchall', 'regex', 'strings']
    },
    {
      id: '1-75',
      question: 'What is the difference between Object.keys(), Object.values(), and Object.entries()?',
      answer: 'keys() returns property names, values() returns property values, entries() returns [key, value] pairs — all as arrays.',
      code: `const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);    // ["a", "b", "c"]
Object.values(obj);  // [1, 2, 3]
Object.entries(obj); // [["a", 1], ["b", 2], ["c", 3]]

// Common pattern: iterate object
for (const [key, value] of Object.entries(obj)) {
console.log(\`\${key} = \${value}\`);
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'medium',
      tags: ['object-keys', 'object-values', 'object-entries']
    },
    {
      id: '1-76',
      question: 'What is the Proxy object in JavaScript?',
      answer: 'Proxy wraps an object and intercepts fundamental operations like property access, assignment, and function calls.',
      code: `const handler = {
get(target, prop) {
  return prop in target ? target[prop] : \`Property "\${prop}" not found\`;
},
set(target, prop, value) {
  if (typeof value !== "number") throw new TypeError("Only numbers allowed");
  target[prop] = value;
  return true;
}
};

const obj = new Proxy({}, handler);
obj.x = 42;
console.log(obj.x);     // 42
console.log(obj.y);     // 'Property "y" not found'`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['proxy', 'metaprogramming', 'es6']
    },
    {
      id: '1-77',
      question: 'How does the prototype chain work in JavaScript?',
      answer: 'Every object has a [[Prototype]] link. Property lookup walks up the chain until found or null is reached.',
      code: `const animal = {
speak() { return \`\${this.name} makes a noise.\`; }
};

const dog = Object.create(animal);
dog.name = "Rex";

dog.speak(); // "Rex makes a noise." (found on prototype)

// Inspect the chain
Object.getPrototypeOf(dog) === animal; // true
Object.getPrototypeOf(animal) === Object.prototype; // true
Object.getPrototypeOf(Object.prototype); // null (end of chain)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['prototype-chain', 'inheritance', 'objects']
    },
    {
      id: '1-78',
      question: 'What is the difference between call(), apply(), and bind()?',
      answer: 'All three set `this`. call() passes args individually, apply() passes args as an array, bind() returns a new function with `this` bound.',
      code: `function greet(greeting, punctuation) {
return \`\${greeting}, \${this.name}\${punctuation}\`;
}
const user = { name: "Alice" };

greet.call(user,  "Hello", "!");   // "Hello, Alice!"
greet.apply(user, ["Hi", "?"]);    // "Hi, Alice?"

const boundGreet = greet.bind(user, "Hey");
boundGreet(".");  // "Hey, Alice."  (this + first arg pre-bound)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['call', 'apply', 'bind']
    },
    {
      id: '1-79',
      question: 'What is a WeakMap in JavaScript?',
      answer: 'WeakMap holds key-value pairs where keys must be objects. Keys are weakly referenced, allowing garbage collection.',
      code: `const cache = new WeakMap();

function process(obj) {
if (cache.has(obj)) return cache.get(obj);
const result = expensiveCompute(obj);
cache.set(obj, result);
return result;
}

// When obj is garbage collected, the WeakMap entry is removed too
// WeakMap is not iterable (no .keys(), .values(), .entries())`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['weakmap', 'memory', 'garbage-collection']
    },
    {
      id: '1-80',
      question: 'What is a WeakSet in JavaScript?',
      answer: 'WeakSet stores weakly referenced objects. Objects are automatically removed when garbage collected.',
      code: `const visited = new WeakSet();

function markVisited(node) {
visited.add(node);
}

function isVisited(node) {
return visited.has(node);
}

const el = document.getElementById("btn");
markVisited(el);
isVisited(el); // true

// When el is removed from DOM and dereferenced,
// it is automatically removed from the WeakSet`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['weakset', 'memory', 'garbage-collection']
    },
    {
      id: '1-81',
      question: 'What is the Iterator protocol in JavaScript?',
      answer: 'An iterator is an object with a next() method that returns { value, done }. The Iterator protocol defines this contract.',
      code: `function makeRange(start, end) {
let current = start;
return {
  next() {
    if (current <= end) {
      return { value: current++, done: false };
    }
    return { value: undefined, done: true };
  }
};
}

const iter = makeRange(1, 3);
iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: false }
iter.next(); // { value: 3, done: false }
iter.next(); // { value: undefined, done: true }`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['iterator', 'protocol', 'es6']
    },
    {
      id: '1-82',
      question: 'How does Symbol.iterator make an object iterable?',
      answer: 'Add a [Symbol.iterator]() method that returns an iterator to make a custom object work with for...of.',
      code: `class Range {
constructor(start, end) {
  this.start = start;
  this.end   = end;
}
[Symbol.iterator]() {
  let current = this.start;
  const end = this.end;
  return {
    next() {
      return current <= end
        ? { value: current++, done: false }
        : { value: undefined, done: true };
    }
  };
}
}

for (const n of new Range(1, 5)) console.log(n); // 1 2 3 4 5
[...new Range(1, 3)]; // [1, 2, 3]`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['symbol-iterator', 'iterable', 'protocol']
    },
    {
      id: '1-83',
      question: 'What is a tagged template literal?',
      answer: 'A tagged template is a function call where the function receives the template parts and interpolated values as arguments.',
      code: `function highlight(strings, ...values) {
return strings.reduce((result, str, i) => {
  const val = values[i] !== undefined
    ? \`<b>\${values[i]}</b>\`
    : "";
  return result + str + val;
}, "");
}

const name = "Alice";
const score = 95;
const html = highlight\`Hello \${name}, your score is \${score}!\`;
// "Hello <b>Alice</b>, your score is <b>95</b>!"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['tagged-templates', 'template-literals', 'advanced']
    },
    {
      id: '1-84',
      question: 'What is the difference between microtasks and macrotasks?',
      answer: 'Microtasks (Promises, queueMicrotask) run before the next macrotask (setTimeout, setInterval, I/O). Microtask queue is drained completely first.',
      code: `console.log("1 - sync");

setTimeout(() => console.log("4 - macrotask"), 0);

Promise.resolve()
.then(() => console.log("2 - microtask"))
.then(() => console.log("3 - microtask 2"));

console.log("1b - sync");

// Output order: 1 - sync, 1b - sync, 2 - microtask, 3 - microtask 2, 4 - macrotask`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['microtasks', 'macrotasks', 'event-loop']
    },
    {
      id: '1-85',
      question: 'What are ES Modules (import/export)?',
      answer: 'ES Modules provide static imports/exports. They are async, strict mode by default, and resolved at parse time.',
      code: `// math.js - named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator { /* ... */ }

// main.js - named imports
import Calculator, { PI, add } from "./math.js";
import * as math from "./math.js"; // namespace import

// Dynamic import (lazy loading)
const { add: addFn } = await import("./math.js");`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['es-modules', 'import', 'export']
    },
    {
      id: '1-86',
      question: 'What is memoization in JavaScript?',
      answer: 'Memoization caches the results of expensive function calls and returns the cached result for repeated inputs.',
      code: `function memoize(fn) {
const cache = new Map();
return function(...args) {
  const key = JSON.stringify(args);
  if (cache.has(key)) return cache.get(key);
  const result = fn.apply(this, args);
  cache.set(key, result);
  return result;
};
}

const slowFib = n => n <= 1 ? n : slowFib(n-1) + slowFib(n-2);
const fastFib = memoize(slowFib);

fastFib(40); // Computed once, subsequent calls instant`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['memoization', 'performance', 'functional']
    },
    {
      id: '1-87',
      question: 'What is currying in JavaScript?',
      answer: 'Currying transforms a function with multiple arguments into a chain of functions each taking one argument.',
      code: `function curry(fn) {
return function curried(...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...more) => curried(...args, ...more);
};
}

const add = curry((a, b, c) => a + b + c);

add(1)(2)(3);     // 6
add(1, 2)(3);     // 6
add(1)(2, 3);     // 6
add(1, 2, 3);     // 6`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['currying', 'functional', 'closures']
    },
    {
      id: '1-88',
      question: 'What is function composition in JavaScript?',
      answer: 'Function composition combines multiple functions so that the output of one becomes the input of the next.',
      code: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe    = (...fns) => x => fns.reduce((v, f) => f(v), x);

const double  = x => x * 2;
const addOne  = x => x + 1;
const square  = x => x * x;

// compose: right-to-left
const transform = compose(square, addOne, double);
transform(3); // square(addOne(double(3))) = square(7) = 49

// pipe: left-to-right
const process = pipe(double, addOne, square);
process(3); // square(addOne(double(3))) = 49`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['composition', 'functional', 'pipe']
    },
    {
      id: '1-89',
      question: 'What is the Observer pattern in JavaScript?',
      answer: 'The Observer pattern lets objects subscribe to events and get notified when state changes.',
      code: `class EventEmitter {
#listeners = new Map();

on(event, fn) {
  if (!this.#listeners.has(event)) this.#listeners.set(event, []);
  this.#listeners.get(event).push(fn);
}

off(event, fn) {
  const fns = this.#listeners.get(event) ?? [];
  this.#listeners.set(event, fns.filter(f => f !== fn));
}

emit(event, ...args) {
  (this.#listeners.get(event) ?? []).forEach(fn => fn(...args));
}
}

const emitter = new EventEmitter();
emitter.on("data", d => console.log("Received:", d));
emitter.emit("data", { id: 1 }); // "Received: { id: 1 }"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['observer', 'design-patterns', 'events']
    },
    {
      id: '1-90',
      question: 'What is the Singleton pattern in JavaScript?',
      answer: 'The Singleton pattern ensures a class has only one instance and provides a global access point to it.',
      code: `class Database {
static #instance = null;
#connection;

constructor(url) {
  if (Database.#instance) return Database.#instance;
  this.#connection = \`Connected to \${url}\`;
  Database.#instance = this;
}

getConnection() { return this.#connection; }
}

const db1 = new Database("mongodb://localhost");
const db2 = new Database("postgres://localhost");

db1 === db2; // true (same instance)
db2.getConnection(); // "Connected to mongodb://localhost"`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['singleton', 'design-patterns', 'classes']
    },
    {
      id: '1-91',
      question: 'What is debounce in JavaScript?',
      answer: 'Debounce delays function execution until after a pause in calls. Only the last call in a burst executes.',
      code: `function debounce(fn, delay) {
let timer;
return function(...args) {
  clearTimeout(timer);
  timer = setTimeout(() => fn.apply(this, args), delay);
};
}

const search = debounce((query) => {
console.log("Searching for:", query);
}, 300);

// User types rapidly - only final value triggers search
search("j");
search("ja");
search("jav");
search("java"); // Only this executes (after 300ms pause)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['debounce', 'performance', 'events']
    },
    {
      id: '1-92',
      question: 'What is throttle in JavaScript?',
      answer: 'Throttle limits function execution to once per interval, ignoring calls in between.',
      code: `function throttle(fn, interval) {
let lastTime = 0;
return function(...args) {
  const now = Date.now();
  if (now - lastTime >= interval) {
    lastTime = now;
    fn.apply(this, args);
  }
};
}

const onScroll = throttle(() => {
console.log("Scroll event handled at", Date.now());
}, 200);

window.addEventListener("scroll", onScroll);
// Fires at most once every 200ms regardless of scroll speed`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['throttle', 'performance', 'events']
    },
    {
      id: '1-93',
      question: 'What is an async generator in JavaScript?',
      answer: 'An async generator function uses async function* with yield to produce a sequence of Promises consumed with for await...of.',
      code: `async function* paginate(url) {
let page = 1;
while (true) {
  const res = await fetch(\`\${url}?page=\${page}\`);
  const data = await res.json();
  if (!data.items.length) return;
  yield data.items;
  page++;
}
}

for await (const items of paginate("/api/products")) {
console.log("Page of items:", items);
if (items.length < 10) break; // last page
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['async-generators', 'async', 'iterators']
    },
    {
      id: '1-94',
      question: 'What is the Reflect API?',
      answer: 'Reflect provides methods mirroring Proxy traps for performing default object operations. It improves Proxy handlers.',
      code: `const obj = { x: 1 };

// Reflect mirrors Object and function operations
Reflect.has(obj, "x");           // true  (like "x" in obj)
Reflect.get(obj, "x");           // 1     (like obj.x)
Reflect.set(obj, "y", 2);        // true  (sets obj.y = 2)
Reflect.deleteProperty(obj, "x");// true

// Best used in Proxy handlers to call default behavior
const proxy = new Proxy(obj, {
get(target, prop, receiver) {
  console.log("Getting:", prop);
  return Reflect.get(target, prop, receiver); // correct 'this' binding
}
});`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['reflect', 'metaprogramming', 'proxy']
    },
    {
      id: '1-95',
      question: 'What are private class fields (#) in JavaScript?',
      answer: 'Private fields use # prefix. They are truly private — inaccessible outside the class, even from subclasses.',
      code: `class BankAccount {
#balance = 0;
#owner;

constructor(owner, initial) {
  this.#owner = owner;
  this.#balance = initial;
}

deposit(amount) { this.#balance += amount; }
get balance()   { return this.#balance; }

static #fee = 2.50; // private static
static getFee() { return BankAccount.#fee; }
}

const acct = new BankAccount("Alice", 100);
acct.deposit(50);
acct.balance;      // 150
acct.#balance;     // SyntaxError (truly private)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['private-fields', 'classes', 'encapsulation']
    },
    {
      id: '1-96',
      question: 'What is the Module pattern in JavaScript?',
      answer: 'The Module pattern uses IIFE and closures to create private state and expose a public API.',
      code: `const counter = (() => {
let count = 0; // private

return {
  increment() { count++; },
  decrement() { count--; },
  reset()     { count = 0; },
  get value() { return count; }
};
})();

counter.increment();
counter.increment();
counter.value;   // 2
counter.count;   // undefined (private)`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['module-pattern', 'closures', 'iife']
    },
    {
      id: '1-97',
      question: 'What is the difference between deep copy and shallow copy?',
      answer: 'Shallow copy duplicates the top-level structure; nested objects are still shared. Deep copy duplicates everything recursively.',
      code: `const original = { a: 1, nested: { b: 2 } };

// Shallow copy - nested object is shared
const shallow = { ...original };
shallow.nested.b = 99;
original.nested.b; // 99 (mutated!)

// Deep copy - fully independent
const deep = structuredClone(original);
deep.nested.b = 42;
original.nested.b; // 99 (unchanged)

// Other deep copy methods
const json = JSON.parse(JSON.stringify(original)); // loses Dates/undefined`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['deep-copy', 'shallow-copy', 'cloning']
    },
    {
      id: '1-98',
      question: 'What is tail call optimization?',
      answer: 'Tail call optimization reuses the current stack frame when a function\'s last action is a call to another function, preventing stack overflow.',
      code: `// Non-tail recursive (adds stack frame each call)
function factorial(n) {
if (n <= 1) return 1;
return n * factorial(n - 1); // NOT a tail call (multiplication after)
}

// Tail recursive (tail call - last action is the recursive call)
function factTail(n, acc = 1) {
if (n <= 1) return acc;
return factTail(n - 1, n * acc); // tail call
}

// JavaScript engines with TCO (strict mode in some engines):
"use strict";
factTail(10000); // No stack overflow with TCO`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['tail-call', 'recursion', 'optimization']
    },
    {
      id: '1-99',
      question: 'What is the difference between synchronous and asynchronous iteration?',
      answer: 'Synchronous iteration uses for...of with Symbol.iterator. Asynchronous iteration uses for await...of with Symbol.asyncIterator.',
      code: `// Sync iterator
const syncRange = {
[Symbol.iterator]() {
  let i = 0;
  return { next: () => i < 3 ? { value: i++, done: false } : { done: true } };
}
};
for (const n of syncRange) console.log(n); // 0, 1, 2

// Async iterator
const asyncRange = {
[Symbol.asyncIterator]() {
  let i = 0;
  return {
    async next() {
      await new Promise(r => setTimeout(r, 100));
      return i < 3 ? { value: i++, done: false } : { done: true };
    }
  };
}
};
for await (const n of asyncRange) console.log(n); // 0, 1, 2`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['async-iteration', 'iterators', 'for-await-of']
    },
    {
      id: '1-100',
      question: 'What is the Temporal Dead Zone (TDZ)?',
      answer: 'TDZ is the period between entering a scope and a let/const declaration being evaluated. Accessing the variable in TDZ throws a ReferenceError.',
      code: `// var - hoisted and initialized to undefined (no TDZ)
console.log(x); // undefined
var x = 5;

// let/const - hoisted but NOT initialized (TDZ)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// TDZ inside blocks
{
// TDZ for z starts here
console.log(z); // ReferenceError
let z = "value"; // TDZ ends here
}`,
      language: 'javascript',
      category: 'JavaScript',
      difficulty: 'hard',
      tags: ['tdz', 'hoisting', 'let-const']
    }
  ]
};
