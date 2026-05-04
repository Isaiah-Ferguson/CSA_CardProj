import { Deck } from '@/types/flashcard';

export const decks: Deck[] = [
  {
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
  },
  {
    id: '2',
    name: 'React Fundamentals',
    description: 'Essential React concepts and patterns',
    category: 'React',
    cards: [
      {
        id: '2-1',
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM for efficient updates.',
        code: `import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['react', 'basics', 'fundamentals']
      },
      {
        id: '2-2',
        question: 'What is a component in React?',
        answer: 'A component is a reusable piece of UI. Components can be function components or class components.',
        code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['components', 'basics', 'fundamentals']
      },
      {
        id: '2-3',
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML-like code in JavaScript files.',
        code: `const element = <h1>Hello, world!</h1>;
const greeting = <div>Welcome {name}</div>;`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['jsx', 'syntax', 'basics']
      },
      {
        id: '2-4',
        question: 'What are props in React?',
        answer: 'Props (properties) are arguments passed to components. They are read-only and allow data to flow from parent to child components.',
        code: `function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greeting name="John" />`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['props', 'components', 'basics']
      },
      {
        id: '2-5',
        question: 'What is state in React?',
        answer: 'State is data that changes over time in a component. When state changes, React re-renders the component.',
        code: `const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['state', 'hooks', 'basics']
      },
      {
        id: '2-6',
        question: 'What is the useState hook?',
        answer: 'useState is a hook that lets you add state to function components. It returns the current state and a function to update it.',
        code: `const [name, setName] = useState('John');
const [age, setAge] = useState(25);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['useState', 'hooks', 'state']
      },
      {
        id: '2-7',
        question: 'What is the useEffect hook?',
        answer: 'useEffect lets you perform side effects in function components. It runs after render and can optionally clean up.',
        code: `useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['useEffect', 'hooks', 'side-effects']
      },
      {
        id: '2-8',
        question: 'What is the dependency array in useEffect?',
        answer: 'The dependency array tells React when to re-run the effect. An empty array runs once, no array runs every render, and with dependencies runs when they change.',
        code: `useEffect(() => {}, []);        // Once
useEffect(() => {});            // Every render
useEffect(() => {}, [count]);   // When count changes`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['useEffect', 'dependencies', 'hooks']
      },
      {
        id: '2-9',
        question: 'How do you handle events in React?',
        answer: 'Events in React use camelCase naming. Pass a function reference, not a function call.',
        code: `function handleClick() {
  console.log('Clicked!');
}

<button onClick={handleClick}>Click me</button>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['events', 'handlers', 'basics']
      },
      {
        id: '2-10',
        question: 'What is conditional rendering in React?',
        answer: 'Conditional rendering shows different UI based on conditions. You can use if statements, ternary operators, or && operator.',
        code: `{isLoggedIn ? <Dashboard /> : <Login />}
{showMessage && <p>Hello!</p>}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['conditional', 'rendering', 'basics']
      },
      {
        id: '2-11',
        question: 'How do you render lists in React?',
        answer: 'Use the map() method to transform arrays into JSX elements. Each element needs a unique key prop.',
        code: `const items = ['Apple', 'Banana', 'Orange'];
{items.map(item => (
  <li key={item}>{item}</li>
))}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['lists', 'map', 'rendering']
      },
      {
        id: '2-12',
        question: 'What is the key prop in React?',
        answer: 'The key prop helps React identify which items have changed, been added, or removed. Keys should be unique among siblings.',
        code: `{users.map(user => (
  <User key={user.id} data={user} />
))}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['key', 'lists', 'performance']
      },
      {
        id: '2-13',
        question: 'What are controlled components?',
        answer: 'Controlled components have their form data controlled by React state. The input value is set by state and updated via onChange.',
        code: `const [value, setValue] = useState('');

<input 
  value={value}
  onChange={e => setValue(e.target.value)}
/>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['forms', 'controlled', 'input']
      },
      {
        id: '2-14',
        question: 'What is the useContext hook?',
        answer: 'useContext lets you read and subscribe to context from your component. It avoids prop drilling.',
        code: `const theme = useContext(ThemeContext);
return <div className={theme}>Content</div>;`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useContext', 'context', 'hooks']
      },
      {
        id: '2-15',
        question: 'What is the useRef hook?',
        answer: 'useRef creates a mutable reference that persists across renders. It is commonly used to access DOM elements.',
        code: `const inputRef = useRef(null);

function focus() {
  inputRef.current.focus();
}

<input ref={inputRef} />`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['useRef', 'refs', 'hooks']
      },
      {
        id: '2-16',
        question: 'What is prop drilling?',
        answer: 'Prop drilling is passing props through multiple component layers to reach a deeply nested component. Context API can solve this.',
        code: `// Avoid this:
<A><B><C><D prop={data} /></C></B></A>

// Use Context instead`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['props', 'context', 'patterns']
      },
      {
        id: '2-17',
        question: 'What is the virtual DOM?',
        answer: 'The virtual DOM is a lightweight copy of the actual DOM. React updates the virtual DOM first, then efficiently updates only changed parts of the real DOM.',
        code: `// React handles this automatically
// Virtual DOM -> Diff -> Real DOM update`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['virtual-dom', 'performance', 'concepts']
      },
      {
        id: '2-18',
        question: 'What is the useReducer hook?',
        answer: 'useReducer is an alternative to useState for complex state logic. It uses a reducer function similar to Redux.',
        code: `const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'INCREMENT' });`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useReducer', 'hooks', 'state']
      },
      {
        id: '2-19',
        question: 'What is component composition?',
        answer: 'Component composition is building complex UIs by combining smaller, reusable components together.',
        code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card><Title /><Content /></Card>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['composition', 'patterns', 'components']
      },
      {
        id: '2-20',
        question: 'What are React fragments?',
        answer: 'Fragments let you group multiple elements without adding extra DOM nodes. Use <></> or <Fragment>.',
        code: `return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['fragments', 'jsx', 'basics']
      },
      {
        id: '2-21',
        question: 'What is the children prop?',
        answer: 'The children prop contains the content between component opening and closing tags. It allows component composition.',
        code: `function Container({ children }) {
  return <div className="container">{children}</div>;
}

<Container><p>Hello</p></Container>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['children', 'props', 'composition']
      },
      {
        id: '2-22',
        question: 'What is the useMemo hook?',
        answer: 'useMemo memoizes expensive calculations. It only recomputes when dependencies change, improving performance.',
        code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useMemo', 'performance', 'hooks']
      },
      {
        id: '2-23',
        question: 'What is the useCallback hook?',
        answer: 'useCallback memoizes functions to prevent unnecessary re-renders. Use it when passing callbacks to optimized child components.',
        code: `const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useCallback', 'performance', 'hooks']
      },
      {
        id: '2-24',
        question: 'What is lifting state up?',
        answer: 'Lifting state up means moving state to the closest common ancestor when multiple components need to share the same state.',
        code: `// Move state from Child to Parent
function Parent() {
  const [value, setValue] = useState('');
  return <Child value={value} onChange={setValue} />;
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['state', 'patterns', 'architecture']
      },
      {
        id: '2-25',
        question: 'What are default props?',
        answer: 'Default props provide fallback values when props are not passed to a component.',
        code: `function Button({ text = 'Click me', color = 'blue' }) {
  return <button style={{ color }}>{text}</button>;
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['props', 'defaults', 'components']
      },
      {
        id: '2-26',
        question: 'What is React.memo?',
        answer: 'React.memo is a higher-order component that memoizes a component. It prevents re-renders if props have not changed.',
        code: `const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['memo', 'performance', 'optimization']
      },
      {
        id: '2-27',
        question: 'What is the useLayoutEffect hook?',
        answer: 'useLayoutEffect runs synchronously after DOM mutations but before paint. Use it for DOM measurements or synchronous updates.',
        code: `useLayoutEffect(() => {
  const height = divRef.current.offsetHeight;
  setHeight(height);
}, []);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useLayoutEffect', 'hooks', 'dom']
      },
      {
        id: '2-28',
        question: 'What is the difference between state and props?',
        answer: 'State is internal and controlled by the component. Props are external and passed from parent components. State is mutable, props are read-only.',
        code: `// State: internal, mutable
const [count, setCount] = useState(0);

// Props: external, read-only
function Child({ name }) { }`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['state', 'props', 'fundamentals']
      },
      {
        id: '2-29',
        question: 'What is the StrictMode component?',
        answer: 'StrictMode is a development tool that highlights potential problems. It activates additional checks and warnings.',
        code: `<React.StrictMode>
  <App />
</React.StrictMode>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['strictmode', 'development', 'debugging']
      },
      {
        id: '2-30',
        question: 'What are custom hooks?',
        answer: 'Custom hooks are reusable functions that use React hooks. They let you extract component logic into reusable functions.',
        code: `function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['custom-hooks', 'hooks', 'reusability']
      },
      {
        id: '2-31',
        question: 'What is the useImperativeHandle hook?',
        answer: 'useImperativeHandle customizes the instance value exposed to parent components when using ref.',
        code: `useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus()
}));`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useImperativeHandle', 'hooks', 'refs']
      },
      {
        id: '2-32',
        question: 'What is the useDebugValue hook?',
        answer: 'useDebugValue displays a label for custom hooks in React DevTools.',
        code: `function useCustomHook(value) {
  useDebugValue(value ? 'Online' : 'Offline');
  return value;
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useDebugValue', 'hooks', 'debugging']
      },
      {
        id: '2-33',
        question: 'What is React.lazy?',
        answer: 'React.lazy enables code-splitting by dynamically importing components. Use with Suspense for loading states.',
        code: `const LazyComponent = React.lazy(() => import('./Component'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['lazy', 'code-splitting', 'performance']
      },
      {
        id: '2-34',
        question: 'What is Suspense?',
        answer: 'Suspense lets you display a fallback while waiting for components to load (lazy loading or data fetching).',
        code: `<Suspense fallback={<Spinner />}>
  <LazyComponent />
</Suspense>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['suspense', 'loading', 'async']
      },
      {
        id: '2-35',
        question: 'What is an error boundary?',
        answer: 'Error boundaries catch JavaScript errors in child components and display fallback UI instead of crashing.',
        code: `class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return this.props.children;
  }
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['error-boundary', 'errors', 'class']
      },
      {
        id: '2-36',
        question: 'What is the Portal API?',
        answer: 'Portals render children into a DOM node outside the parent component hierarchy.',
        code: `ReactDOM.createPortal(
  <Modal />,
  document.getElementById('modal-root')
);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['portal', 'dom', 'rendering']
      },
      {
        id: '2-37',
        question: 'What is forwardRef?',
        answer: 'forwardRef allows a component to pass a ref to a child component.',
        code: `const Input = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['forwardRef', 'refs', 'components']
      },
      {
        id: '2-38',
        question: 'What is the difference between createElement and JSX?',
        answer: 'JSX is syntactic sugar for React.createElement(). JSX is compiled to createElement calls.',
        code: `// JSX
<div>Hello</div>

// Compiled to
React.createElement('div', null, 'Hello')`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['jsx', 'createElement', 'fundamentals']
      },
      {
        id: '2-39',
        question: 'What is reconciliation?',
        answer: 'Reconciliation is the process React uses to diff the virtual DOM and update only changed parts of the real DOM.',
        code: `// React compares old and new virtual DOM
// Only updates changed elements efficiently`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['reconciliation', 'virtual-dom', 'performance']
      },
      {
        id: '2-40',
        question: 'What are synthetic events?',
        answer: 'Synthetic events are React\'s cross-browser wrapper around native browser events.',
        code: `function handleClick(e) {
  e.preventDefault(); // synthetic event
  console.log(e.nativeEvent); // native event
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['events', 'synthetic', 'browser']
      },
      {
        id: '2-41',
        question: 'What is the difference between controlled and uncontrolled components?',
        answer: 'Controlled components have values controlled by React state. Uncontrolled components store values in the DOM.',
        code: `// Controlled
<input value={value} onChange={e => setValue(e.target.value)} />

// Uncontrolled
<input ref={inputRef} />`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['controlled', 'uncontrolled', 'forms']
      },
      {
        id: '2-42',
        question: 'What is the Context API?',
        answer: 'Context provides a way to pass data through the component tree without prop drilling.',
        code: `const ThemeContext = React.createContext('light');

<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['context', 'state', 'provider']
      },
      {
        id: '2-43',
        question: 'What is the difference between useMemo and useCallback?',
        answer: 'useMemo memoizes values. useCallback memoizes functions. Both optimize performance.',
        code: `const value = useMemo(() => compute(a, b), [a, b]);
const callback = useCallback(() => doSomething(), []);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useMemo', 'useCallback', 'performance']
      },
      {
        id: '2-44',
        question: 'What is a higher-order component (HOC)?',
        answer: 'A HOC is a function that takes a component and returns a new component with additional props or behavior.',
        code: `function withAuth(Component) {
  return function AuthComponent(props) {
    return isAuth ? <Component {...props} /> : <Login />;
  };
}`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['hoc', 'patterns', 'composition']
      },
      {
        id: '2-45',
        question: 'What is render props pattern?',
        answer: 'Render props is a pattern where a component takes a function as a prop to determine what to render.',
        code: `<DataProvider render={data => (
  <div>{data.name}</div>
)} />`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['render-props', 'patterns', 'composition']
      },
      {
        id: '2-46',
        question: 'What is the useId hook?',
        answer: 'useId generates unique IDs for accessibility attributes that are stable across server and client.',
        code: `const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />`,
        language: 'javascript',
        category: 'React',
        difficulty: 'easy',
        tags: ['useId', 'hooks', 'accessibility']
      },
      {
        id: '2-47',
        question: 'What is the useTransition hook?',
        answer: 'useTransition marks state updates as non-urgent, allowing React to keep the UI responsive.',
        code: `const [isPending, startTransition] = useTransition();
startTransition(() => {
  setSearchQuery(value);
});`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useTransition', 'concurrent', 'performance']
      },
      {
        id: '2-48',
        question: 'What is the useDeferredValue hook?',
        answer: 'useDeferredValue defers updating a value to keep the UI responsive during expensive renders.',
        code: `const deferredQuery = useDeferredValue(searchQuery);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'medium',
        tags: ['useDeferredValue', 'concurrent', 'performance']
      },
      {
        id: '2-49',
        question: 'What is the useSyncExternalStore hook?',
        answer: 'useSyncExternalStore subscribes to external stores and ensures consistent reads during concurrent rendering.',
        code: `const snapshot = useSyncExternalStore(
  store.subscribe,
  store.getSnapshot
);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'hard',
        tags: ['useSyncExternalStore', 'external', 'store']
      },
      {
        id: '2-50',
        question: 'What is the useInsertionEffect hook?',
        answer: 'useInsertionEffect fires before DOM mutations. It\'s designed for CSS-in-JS libraries.',
        code: `useInsertionEffect(() => {
  // Insert styles before DOM updates
}, []);`,
        language: 'javascript',
        category: 'React',
        difficulty: 'hard',
        tags: ['useInsertionEffect', 'css-in-js', 'advanced']
      }
    ]
  },
  {
    id: '3',
    name: 'TypeScript Essentials',
    description: 'Essential TypeScript patterns and concepts',
    category: 'TypeScript',
    cards: [
      {
        id: '3-1',
        question: 'What is TypeScript?',
        answer: 'TypeScript is a superset of JavaScript that adds static typing. It compiles to plain JavaScript and helps catch errors at compile time.',
        code: `let message: string = "Hello";
let count: number = 42;
let isActive: boolean = true;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['typescript', 'basics', 'fundamentals']
      },
      {
        id: '3-2',
        question: 'What is a type annotation?',
        answer: 'Type annotations explicitly specify the type of a variable, parameter, or return value.',
        code: `let name: string = "John";
function greet(name: string): string {
  return "Hello, " + name;
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['types', 'annotations', 'basics']
      },
      {
        id: '3-3',
        question: 'What is type inference?',
        answer: 'Type inference is when TypeScript automatically determines the type based on the assigned value.',
        code: `let message = "Hello"; // inferred as string
let count = 42;        // inferred as number`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['inference', 'types', 'basics']
      },
      {
        id: '3-4',
        question: 'What is an interface?',
        answer: 'An interface defines the structure of an object. It specifies what properties and methods an object should have.',
        code: `interface Person {
  name: string;
  age: number;
  greet(): void;
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['interface', 'objects', 'basics']
      },
      {
        id: '3-5',
        question: 'What is a type alias?',
        answer: 'A type alias creates a new name for a type. It can represent primitives, unions, tuples, or any other type.',
        code: `type ID = string | number;
type Point = { x: number; y: number };`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['type', 'alias', 'basics']
      },
      {
        id: '3-6',
        question: 'What is the difference between type and interface?',
        answer: 'Interfaces can be extended and merged. Types are more flexible and can represent unions, intersections, and primitives.',
        code: `interface User {
  name: string;
}

type ID = string | number;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['type', 'interface', 'comparison']
      },
      {
        id: '3-7',
        question: 'What is a union type?',
        answer: 'A union type allows a value to be one of several types. Use the | operator to create unions.',
        code: `let value: string | number;
value = "hello";
value = 42;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['union', 'types', 'basics']
      },
      {
        id: '3-8',
        question: 'What is an intersection type?',
        answer: 'An intersection type combines multiple types into one. Use the & operator to create intersections.',
        code: `type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['intersection', 'types', 'basics']
      },
      {
        id: '3-9',
        question: 'What is the any type?',
        answer: 'The any type disables type checking. It allows any value and should be avoided when possible.',
        code: `let value: any = "hello";
value = 42;
value = true;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['any', 'types', 'basics']
      },
      {
        id: '3-10',
        question: 'What is the unknown type?',
        answer: 'unknown is a type-safe alternative to any. You must perform type checking before using an unknown value.',
        code: `let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['unknown', 'types', 'safety']
      },
      {
        id: '3-11',
        question: 'What is the never type?',
        answer: 'never represents values that never occur. It is used for functions that never return or always throw errors.',
        code: `function throwError(): never {
  throw new Error("Error!");
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['never', 'types', 'functions']
      },
      {
        id: '3-12',
        question: 'What is the void type?',
        answer: 'void represents the absence of a return value. It is used for functions that do not return anything.',
        code: `function log(message: string): void {
  console.log(message);
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['void', 'types', 'functions']
      },
      {
        id: '3-13',
        question: 'What are optional properties?',
        answer: 'Optional properties are marked with ? and may or may not be present in an object.',
        code: `interface User {
  name: string;
  age?: number;
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['optional', 'properties', 'interfaces']
      },
      {
        id: '3-14',
        question: 'What are readonly properties?',
        answer: 'readonly properties can only be assigned during initialization and cannot be modified afterward.',
        code: `interface Point {
  readonly x: number;
  readonly y: number;
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['readonly', 'properties', 'immutability']
      },
      {
        id: '3-15',
        question: 'What is a tuple?',
        answer: 'A tuple is an array with a fixed number of elements where each element has a specific type.',
        code: `let person: [string, number];
person = ["John", 30];`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['tuple', 'arrays', 'types']
      },
      {
        id: '3-16',
        question: 'What is an enum?',
        answer: 'An enum is a way to define a set of named constants. It makes code more readable and maintainable.',
        code: `enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['enum', 'constants', 'basics']
      },
      {
        id: '3-17',
        question: 'What are generics?',
        answer: 'Generics allow you to write reusable code that works with multiple types while maintaining type safety.',
        code: `function identity<T>(arg: T): T {
  return arg;
}
const result = identity<string>("hello");`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['generics', 'reusability', 'types']
      },
      {
        id: '3-18',
        question: 'What is a type assertion?',
        answer: 'Type assertion tells TypeScript to treat a value as a specific type. Use as or angle-bracket syntax.',
        code: `let value: any = "hello";
let length = (value as string).length;
let length2 = (<string>value).length;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['assertion', 'casting', 'types']
      },
      {
        id: '3-19',
        question: 'What is a literal type?',
        answer: 'Literal types allow you to specify exact values a variable can have.',
        code: `let direction: "up" | "down" | "left" | "right";
direction = "up";`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['literal', 'types', 'constants']
      },
      {
        id: '3-20',
        question: 'What is the Record utility type?',
        answer: 'Record creates an object type with specified keys and value types.',
        code: `type Roles = Record<string, boolean>;
const roles: Roles = {
  admin: true,
  user: false
};`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['record', 'utility', 'types']
      },
      {
        id: '3-21',
        question: 'What is the Partial utility type?',
        answer: 'Partial makes all properties of a type optional.',
        code: `interface User {
  name: string;
  age: number;
}
type PartialUser = Partial<User>;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['partial', 'utility', 'types']
      },
      {
        id: '3-22',
        question: 'What is the Required utility type?',
        answer: 'Required makes all properties of a type required (opposite of Partial).',
        code: `interface User {
  name?: string;
  age?: number;
}
type RequiredUser = Required<User>;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['required', 'utility', 'types']
      },
      {
        id: '3-23',
        question: 'What is the Pick utility type?',
        answer: 'Pick creates a type by selecting specific properties from another type.',
        code: `interface User {
  name: string;
  age: number;
  email: string;
}
type UserName = Pick<User, 'name' | 'email'>;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['pick', 'utility', 'types']
      },
      {
        id: '3-24',
        question: 'What is the Omit utility type?',
        answer: 'Omit creates a type by excluding specific properties from another type.',
        code: `interface User {
  name: string;
  age: number;
  password: string;
}
type PublicUser = Omit<User, 'password'>;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['omit', 'utility', 'types']
      },
      {
        id: '3-25',
        question: 'What is the Readonly utility type?',
        answer: 'Readonly makes all properties of a type read-only.',
        code: `interface User {
  name: string;
  age: number;
}
type ReadonlyUser = Readonly<User>;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['readonly', 'utility', 'immutability']
      },
      {
        id: '3-26',
        question: 'What is type narrowing?',
        answer: 'Type narrowing is refining a type to a more specific type using type guards like typeof, instanceof, or custom checks.',
        code: `function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['narrowing', 'guards', 'types']
      },
      {
        id: '3-27',
        question: 'What is a type guard?',
        answer: 'A type guard is a runtime check that narrows the type within a conditional block.',
        code: `function isString(value: any): value is string {
  return typeof value === "string";
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['guards', 'narrowing', 'types']
      },
      {
        id: '3-28',
        question: 'What is the keyof operator?',
        answer: 'keyof creates a union type of all property names of a type.',
        code: `interface User {
  name: string;
  age: number;
}
type UserKeys = keyof User; // "name" | "age"`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['keyof', 'operators', 'types']
      },
      {
        id: '3-29',
        question: 'What is the typeof operator in TypeScript?',
        answer: 'typeof extracts the type of a variable or property.',
        code: `const user = { name: "John", age: 30 };
type User = typeof user;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['typeof', 'operators', 'types']
      },
      {
        id: '3-30',
        question: 'What is a mapped type?',
        answer: 'Mapped types transform properties of an existing type into a new type.',
        code: `type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'hard',
        tags: ['mapped', 'advanced', 'types']
      },
      {
        id: '3-31',
        question: 'What is conditional type?',
        answer: 'Conditional types select types based on a condition, using the extends keyword.',
        code: `type IsString<T> = T extends string ? true : false;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['conditional', 'advanced', 'types']
      },
      {
        id: '3-32',
        question: 'What is the infer keyword?',
        answer: 'infer declares a type variable within a conditional type to extract and use types.',
        code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'hard',
        tags: ['infer', 'conditional', 'advanced']
      },
      {
        id: '3-33',
        question: 'What is the Exclude utility type?',
        answer: 'Exclude removes types from a union that are assignable to another type.',
        code: `type T = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['exclude', 'utility', 'types']
      },
      {
        id: '3-34',
        question: 'What is the Extract utility type?',
        answer: 'Extract extracts types from a union that are assignable to another type.',
        code: `type T = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // 'a' | 'b'`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['extract', 'utility', 'types']
      },
      {
        id: '3-35',
        question: 'What is the NonNullable utility type?',
        answer: 'NonNullable removes null and undefined from a type.',
        code: `type T = NonNullable<string | null | undefined>; // string`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['nonnullable', 'utility', 'types']
      },
      {
        id: '3-36',
        question: 'What is the Parameters utility type?',
        answer: 'Parameters extracts parameter types from a function type as a tuple.',
        code: `type T = Parameters<(a: string, b: number) => void>; // [string, number]`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['parameters', 'utility', 'functions']
      },
      {
        id: '3-37',
        question: 'What is the ReturnType utility type?',
        answer: 'ReturnType extracts the return type of a function.',
        code: `type T = ReturnType<() => string>; // string`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['returntype', 'utility', 'functions']
      },
      {
        id: '3-38',
        question: 'What is the InstanceType utility type?',
        answer: 'InstanceType extracts the instance type of a constructor function.',
        code: `class C { x = 0; }
type T = InstanceType<typeof C>; // C`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['instancetype', 'utility', 'classes']
      },
      {
        id: '3-39',
        question: 'What is the Awaited utility type?',
        answer: 'Awaited unwraps the type of a Promise.',
        code: `type T = Awaited<Promise<string>>; // string`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['awaited', 'utility', 'promises']
      },
      {
        id: '3-40',
        question: 'What is a discriminated union?',
        answer: 'A discriminated union uses a common property to narrow types in a union.',
        code: `type Shape = 
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number };`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['union', 'discriminated', 'patterns']
      },
      {
        id: '3-41',
        question: 'What is an index signature?',
        answer: 'Index signatures allow objects to have dynamic property names with specific value types.',
        code: `interface StringMap {
  [key: string]: string;
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['index', 'signature', 'objects']
      },
      {
        id: '3-42',
        question: 'What is a namespace?',
        answer: 'Namespaces organize code into logical groups and prevent global scope pollution.',
        code: `namespace Utils {
  export function log(msg: string) {
    console.log(msg);
  }
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['namespace', 'organization', 'modules']
      },
      {
        id: '3-43',
        question: 'What is a module?',
        answer: 'Modules are files with import/export statements. Each module has its own scope.',
        code: `export const value = 42;
import { value } from './module';`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['modules', 'import', 'export']
      },
      {
        id: '3-44',
        question: 'What is the declare keyword?',
        answer: 'declare tells TypeScript that a variable exists without providing implementation.',
        code: `declare const jQuery: any;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['declare', 'ambient', 'types']
      },
      {
        id: '3-45',
        question: 'What is a type predicate?',
        answer: 'Type predicates are user-defined type guards that narrow types.',
        code: `function isString(value: any): value is string {
  return typeof value === 'string';
}`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['predicate', 'guards', 'narrowing']
      },
      {
        id: '3-46',
        question: 'What is the satisfies operator?',
        answer: 'satisfies validates that a value matches a type without changing its inferred type.',
        code: `const config = { url: "https://..." } satisfies Config;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['satisfies', 'validation', 'types']
      },
      {
        id: '3-47',
        question: 'What is the as const assertion?',
        answer: 'as const creates a readonly, literal type instead of a wider type.',
        code: `const colors = ['red', 'blue'] as const;
// type: readonly ['red', 'blue']`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'medium',
        tags: ['const', 'assertion', 'literal']
      },
      {
        id: '3-48',
        question: 'What is the ! non-null assertion?',
        answer: 'The ! operator tells TypeScript that a value is not null or undefined.',
        code: `const value = getValue()!; // asserts non-null`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['assertion', 'non-null', 'operators']
      },
      {
        id: '3-49',
        question: 'What is the ?? nullish coalescing operator?',
        answer: '?? returns the right operand when the left is null or undefined.',
        code: `const value = input ?? 'default';`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['nullish', 'operators', 'es2020']
      },
      {
        id: '3-50',
        question: 'What is the ?. optional chaining operator?',
        answer: '?. safely accesses nested properties without throwing errors if a value is null or undefined.',
        code: `const name = user?.profile?.name;`,
        language: 'typescript',
        category: 'TypeScript',
        difficulty: 'easy',
        tags: ['optional', 'chaining', 'operators']
      }
    ]
  },
  {
    id: '4',
    name: 'CSS & HTML Fundamentals',
    description: 'CSS and HTML concepts for web development',
    category: 'CSS/HTML',
    cards: [
      {
        id: '4-1',
        question: 'What is HTML?',
        answer: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web content.',
        code: `<!DOCTYPE html>
<html>
  <head><title>Page Title</title></head>
  <body><h1>Hello World</h1></body>
</html>`,
        language: 'html',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['html', 'basics', 'fundamentals']
      },
      {
        id: '4-2',
        question: 'What is a semantic HTML element?',
        answer: 'Semantic elements clearly describe their meaning to both the browser and developer, like <header>, <nav>, <article>, <footer>.',
        code: `<article>
  <header><h1>Title</h1></header>
  <p>Content</p>
  <footer>Author</footer>
</article>`,
        language: 'html',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['semantic', 'html', 'elements']
      },
      {
        id: '4-3',
        question: 'What is the difference between div and span?',
        answer: 'div is a block-level element that takes full width. span is an inline element that only takes necessary width.',
        code: `<div>Block element</div>
<span>Inline element</span>`,
        language: 'html',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['div', 'span', 'elements']
      },
      {
        id: '4-4',
        question: 'What is CSS?',
        answer: 'CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning.',
        code: `h1 {
  color: blue;
  font-size: 24px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['css', 'basics', 'styling']
      },
      {
        id: '4-5',
        question: 'What are CSS selectors?',
        answer: 'CSS selectors target HTML elements to apply styles. Common selectors include element, class, and ID selectors.',
        code: `p { }           /* element */
.class { }      /* class */
#id { }         /* ID */`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['selectors', 'css', 'basics']
      },
      {
        id: '4-6',
        question: 'What is the box model?',
        answer: 'The box model describes how elements are rendered: content, padding, border, and margin from inside out.',
        code: `div {
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['box-model', 'layout', 'css']
      },
      {
        id: '4-7',
        question: 'What is the difference between margin and padding?',
        answer: 'Margin is space outside the border. Padding is space inside the border between content and border.',
        code: `div {
  margin: 20px;   /* outside */
  padding: 10px;  /* inside */
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['margin', 'padding', 'spacing']
      },
      {
        id: '4-8',
        question: 'What is display: flex?',
        answer: 'Flexbox is a layout model that arranges items in a flexible container. It makes alignment and distribution easy.',
        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['flexbox', 'layout', 'css']
      },
      {
        id: '4-9',
        question: 'What is display: grid?',
        answer: 'CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns.',
        code: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['grid', 'layout', 'css']
      },
      {
        id: '4-10',
        question: 'What is position: relative?',
        answer: 'position: relative positions an element relative to its normal position. It does not affect other elements.',
        code: `div {
  position: relative;
  top: 10px;
  left: 20px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['position', 'relative', 'css']
      },
      {
        id: '4-11',
        question: 'What is position: absolute?',
        answer: 'position: absolute positions an element relative to its nearest positioned ancestor. It is removed from normal flow.',
        code: `div {
  position: absolute;
  top: 0;
  right: 0;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['position', 'absolute', 'css']
      },
      {
        id: '4-12',
        question: 'What is position: fixed?',
        answer: 'position: fixed positions an element relative to the viewport. It stays in place when scrolling.',
        code: `.header {
  position: fixed;
  top: 0;
  width: 100%;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['position', 'fixed', 'css']
      },
      {
        id: '4-13',
        question: 'What is a CSS class?',
        answer: 'A class is a reusable style that can be applied to multiple elements. Use . to select classes in CSS.',
        code: `.button {
  background: blue;
  color: white;
}
<button class="button">Click</button>`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['class', 'selectors', 'css']
      },
      {
        id: '4-14',
        question: 'What is a CSS ID?',
        answer: 'An ID is a unique identifier for a single element. Use # to select IDs in CSS. IDs should be unique per page.',
        code: `#header {
  background: gray;
}
<div id="header">Header</div>`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['id', 'selectors', 'css']
      },
      {
        id: '4-15',
        question: 'What is the difference between inline and block elements?',
        answer: 'Block elements take full width and start on a new line. Inline elements only take necessary width and flow with text.',
        code: `/* Block: div, p, h1 */
/* Inline: span, a, img */`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['display', 'block', 'inline']
      },
      {
        id: '4-16',
        question: 'What is a pseudo-class?',
        answer: 'Pseudo-classes define special states of elements, like :hover, :focus, :first-child.',
        code: `a:hover {
  color: red;
}
li:first-child {
  font-weight: bold;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['pseudo-class', 'selectors', 'css']
      },
      {
        id: '4-17',
        question: 'What is a pseudo-element?',
        answer: 'Pseudo-elements style specific parts of elements, like ::before, ::after, ::first-letter.',
        code: `p::first-letter {
  font-size: 2em;
}
div::before {
  content: "→";
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['pseudo-element', 'selectors', 'css']
      },
      {
        id: '4-18',
        question: 'What is the z-index property?',
        answer: 'z-index controls the stacking order of positioned elements. Higher values appear on top.',
        code: `.modal {
  position: fixed;
  z-index: 1000;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['z-index', 'stacking', 'css']
      },
      {
        id: '4-19',
        question: 'What is a media query?',
        answer: 'Media queries apply styles based on device characteristics like screen width, enabling responsive design.',
        code: `@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['media-query', 'responsive', 'css']
      },
      {
        id: '4-20',
        question: 'What is the difference between class and id?',
        answer: 'Classes can be reused on multiple elements. IDs should be unique and used once per page. Classes have lower specificity.',
        code: `<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div id="unique">Unique</div>`,
        language: 'html',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['class', 'id', 'html']
      },
      {
        id: '4-21',
        question: 'What is CSS specificity?',
        answer: 'Specificity determines which CSS rule applies when multiple rules target the same element. ID > Class > Element.',
        code: `#id { }        /* 100 */
.class { }     /* 10 */
p { }          /* 1 */`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'medium',
        tags: ['specificity', 'cascade', 'css']
      },
      {
        id: '4-22',
        question: 'What is the !important rule?',
        answer: '!important overrides all other declarations. Use sparingly as it makes debugging difficult.',
        code: `p {
  color: red !important;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['important', 'override', 'css']
      },
      {
        id: '4-23',
        question: 'What is the difference between em and rem?',
        answer: 'em is relative to parent font size. rem is relative to root (html) font size. rem is more predictable.',
        code: `html { font-size: 16px; }
.parent { font-size: 2em; }  /* 32px */
.child { font-size: 2rem; }  /* 32px */`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['em', 'rem', 'units']
      },
      {
        id: '4-24',
        question: 'What is the viewport?',
        answer: 'The viewport is the visible area of a web page. Viewport units (vw, vh) are relative to viewport size.',
        code: `div {
  width: 100vw;  /* 100% of viewport width */
  height: 50vh;  /* 50% of viewport height */
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['viewport', 'units', 'responsive']
      },
      {
        id: '4-25',
        question: 'What is the difference between visibility: hidden and display: none?',
        answer: 'visibility: hidden hides element but keeps space. display: none removes element from layout completely.',
        code: `.hidden { visibility: hidden; }
.none { display: none; }`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['visibility', 'display', 'css']
      },
      {
        id: '4-26',
        question: 'What is the float property?',
        answer: 'float positions an element to the left or right, allowing text to wrap around it. Modern layouts use flexbox/grid instead.',
        code: `img {
  float: left;
  margin-right: 10px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['float', 'layout', 'css']
      },
      {
        id: '4-27',
        question: 'What is the clear property?',
        answer: 'clear prevents elements from floating beside a floated element. It moves the element below floated elements.',
        code: `.footer {
  clear: both;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['clear', 'float', 'css']
      },
      {
        id: '4-28',
        question: 'What is the overflow property?',
        answer: 'overflow controls what happens when content is too large for its container. Options: visible, hidden, scroll, auto.',
        code: `div {
  overflow: auto;
  max-height: 200px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['overflow', 'layout', 'css']
      },
      {
        id: '4-29',
        question: 'What is the transition property?',
        answer: 'transition creates smooth animations when CSS properties change. Specify property, duration, and timing function.',
        code: `button {
  transition: background 0.3s ease;
}
button:hover {
  background: blue;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['transition', 'animation', 'css']
      },
      {
        id: '4-30',
        question: 'What is the transform property?',
        answer: 'transform applies 2D or 3D transformations like rotate, scale, translate, and skew to elements.',
        code: `div {
  transform: rotate(45deg);
}
.scaled {
  transform: scale(1.5);
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['transform', 'animation', 'css']
      },
      {
        id: '4-31',
        question: 'What is the opacity property?',
        answer: 'opacity controls the transparency of an element. Values range from 0 (fully transparent) to 1 (fully opaque).',
        code: `div {
  opacity: 0.5;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['opacity', 'transparency', 'css']
      },
      {
        id: '4-32',
        question: 'What is the cursor property?',
        answer: 'cursor changes the mouse cursor when hovering over an element.',
        code: `button {
  cursor: pointer;
}
.disabled {
  cursor: not-allowed;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['cursor', 'interaction', 'css']
      },
      {
        id: '4-33',
        question: 'What is the box-sizing property?',
        answer: 'box-sizing controls how width and height are calculated. border-box includes padding and border in the total size.',
        code: `* {
  box-sizing: border-box;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['box-sizing', 'layout', 'css']
      },
      {
        id: '4-34',
        question: 'What is the outline property?',
        answer: 'outline draws a line outside the border. Unlike border, it does not affect layout or take up space.',
        code: `input:focus {
  outline: 2px solid blue;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['outline', 'focus', 'css']
      },
      {
        id: '4-35',
        question: 'What is the text-align property?',
        answer: 'text-align aligns text horizontally within an element. Values: left, right, center, justify.',
        code: `p {
  text-align: center;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['text-align', 'typography', 'css']
      },
      {
        id: '4-36',
        question: 'What is the line-height property?',
        answer: 'line-height sets the spacing between lines of text. It can be unitless, pixels, or percentages.',
        code: `p {
  line-height: 1.6;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['line-height', 'typography', 'css']
      },
      {
        id: '4-37',
        question: 'What is the font-family property?',
        answer: 'font-family specifies the font for text. Provide fallback fonts in case the first is unavailable.',
        code: `body {
  font-family: Arial, Helvetica, sans-serif;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['font-family', 'typography', 'css']
      },
      {
        id: '4-38',
        question: 'What is the font-weight property?',
        answer: 'font-weight controls the thickness of text. Values: normal, bold, or numeric (100-900).',
        code: `h1 {
  font-weight: bold;
}
p {
  font-weight: 400;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['font-weight', 'typography', 'css']
      },
      {
        id: '4-39',
        question: 'What is the text-decoration property?',
        answer: 'text-decoration adds decorative lines to text: underline, overline, line-through, or none.',
        code: `a {
  text-decoration: none;
}
.strikethrough {
  text-decoration: line-through;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['text-decoration', 'typography', 'css']
      },
      {
        id: '4-40',
        question: 'What is the text-transform property?',
        answer: 'text-transform changes text capitalization: uppercase, lowercase, capitalize, or none.',
        code: `h1 {
  text-transform: uppercase;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['text-transform', 'typography', 'css']
      },
      {
        id: '4-41',
        question: 'What is the background-image property?',
        answer: 'background-image sets an image as the background of an element.',
        code: `div {
  background-image: url('image.jpg');
  background-size: cover;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['background', 'images', 'css']
      },
      {
        id: '4-42',
        question: 'What is the background-size property?',
        answer: 'background-size controls the size of background images. Common values: cover, contain, or specific dimensions.',
        code: `div {
  background-size: cover;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['background', 'sizing', 'css']
      },
      {
        id: '4-43',
        question: 'What is the border-radius property?',
        answer: 'border-radius rounds the corners of an element. Can create circles or rounded rectangles.',
        code: `div {
  border-radius: 10px;
}
.circle {
  border-radius: 50%;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['border-radius', 'styling', 'css']
      },
      {
        id: '4-44',
        question: 'What is the box-shadow property?',
        answer: 'box-shadow adds shadow effects around an element. Specify offset, blur, spread, and color.',
        code: `div {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['box-shadow', 'effects', 'css']
      },
      {
        id: '4-45',
        question: 'What is the text-shadow property?',
        answer: 'text-shadow adds shadow effects to text. Specify offset, blur, and color.',
        code: `h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['text-shadow', 'effects', 'css']
      },
      {
        id: '4-46',
        question: 'What is the object-fit property?',
        answer: 'object-fit controls how images or videos fit within their container. Values: cover, contain, fill, none.',
        code: `img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['object-fit', 'images', 'css']
      },
      {
        id: '4-47',
        question: 'What is the gap property in Flexbox/Grid?',
        answer: 'gap sets spacing between flex or grid items. It replaces margin-based spacing.',
        code: `.container {
  display: flex;
  gap: 20px;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['gap', 'flexbox', 'grid']
      },
      {
        id: '4-48',
        question: 'What is the aspect-ratio property?',
        answer: 'aspect-ratio maintains a specific width-to-height ratio for an element.',
        code: `.video {
  aspect-ratio: 16 / 9;
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['aspect-ratio', 'layout', 'css']
      },
      {
        id: '4-49',
        question: 'What is the filter property?',
        answer: 'filter applies visual effects like blur, brightness, contrast, grayscale to elements.',
        code: `img {
  filter: blur(5px);
}
.grayscale {
  filter: grayscale(100%);
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'easy',
        tags: ['filter', 'effects', 'css']
      },
      {
        id: '4-50',
        question: 'What is the clip-path property?',
        answer: 'clip-path creates clipping regions to show only part of an element. Can create custom shapes.',
        code: `div {
  clip-path: circle(50%);
}
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}`,
        language: 'css',
        category: 'CSS/HTML',
        difficulty: 'medium',
        tags: ['clip-path', 'shapes', 'css']
      }
    ]
  },
  {
    id: '5',
    name: 'C# Fundamentals',
    description: 'Essential C# concepts and basics for beginners',
    category: 'C#',
    cards: [
      {
        id: '5-1',
        question: 'What is a variable in C#?',
        answer: 'A variable is a named storage location that holds a value. It has a type that determines what kind of data it can store.',
        code: `int age = 25;
string name = "John";
bool isActive = true;`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['variables', 'basics', 'fundamentals']
      },
      {
        id: '5-2',
        question: 'What is the difference between var and explicit type declaration?',
        answer: 'var allows the compiler to infer the type from the assigned value. Explicit type declaration specifies the type directly. Both are strongly typed at compile time.',
        code: `var name = "John"; // inferred as string
string name2 = "Jane"; // explicit string`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['variables', 'var', 'types']
      },
      {
        id: '5-3',
        question: 'What is a class in C#?',
        answer: 'A class is a blueprint for creating objects. It defines properties, methods, and events that objects of that class will have.',
        code: `public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['class', 'oop', 'basics']
      },
      {
        id: '5-4',
        question: 'What is an object in C#?',
        answer: 'An object is an instance of a class. It is created using the new keyword and has its own set of values for the properties defined in the class.',
        code: `Person person = new Person();
person.Name = "John";
person.Age = 30;`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['object', 'instance', 'oop']
      },
      {
        id: '5-5',
        question: 'What is a method in C#?',
        answer: 'A method is a block of code that performs a specific task. It can accept parameters and return a value.',
        code: `public int Add(int a, int b)
{
    return a + b;
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['methods', 'functions', 'basics']
      },
      {
        id: '5-6',
        question: 'What is a property in C#?',
        answer: 'A property is a member that provides a flexible mechanism to read, write, or compute the value of a private field. Properties use get and set accessors.',
        code: `public class Person
{
    private string _name;
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['properties', 'encapsulation', 'oop']
      },
      {
        id: '5-7',
        question: 'What is the difference between public and private?',
        answer: 'public members are accessible from anywhere. private members are only accessible within the same class.',
        code: `public class MyClass
{
    public int PublicField;
    private int PrivateField;
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['access-modifiers', 'encapsulation', 'oop']
      },
      {
        id: '5-8',
        question: 'What is a constructor in C#?',
        answer: 'A constructor is a special method that is called when an object is created. It has the same name as the class and no return type.',
        code: `public class Person
{
    public Person(string name)
    {
        Name = name;
    }
    public string Name { get; set; }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['constructor', 'initialization', 'oop']
      },
      {
        id: '5-9',
        question: 'What is inheritance in C#?',
        answer: 'Inheritance allows a class to inherit members from another class. The derived class inherits from the base class using a colon.',
        code: `public class Animal { }
public class Dog : Animal { }`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['inheritance', 'oop', 'basics']
      },
      {
        id: '5-10',
        question: 'What is an interface in C#?',
        answer: 'An interface defines a contract that classes can implement. It contains method signatures but no implementation.',
        code: `public interface IAnimal
{
    void MakeSound();
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['interface', 'abstraction', 'oop']
      },
      {
        id: '5-11',
        question: 'What is a namespace in C#?',
        answer: 'A namespace is used to organize code and prevent naming conflicts. It groups related classes together.',
        code: `namespace MyApp.Models
{
    public class Person { }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['namespace', 'organization', 'basics']
      },
      {
        id: '5-12',
        question: 'What is the difference between int and Int32?',
        answer: 'int is an alias for System.Int32. They are the same type, but int is the C# keyword while Int32 is the .NET type.',
        code: `int number1 = 10;
Int32 number2 = 10; // Same type`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['types', 'primitives', 'basics']
      },
      {
        id: '5-13',
        question: 'What is a string in C#?',
        answer: 'A string is a sequence of characters. Strings are immutable reference types in C#.',
        code: `string message = "Hello, World!";
string name = "John";`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['string', 'types', 'basics']
      },
      {
        id: '5-14',
        question: 'What is the difference between value types and reference types?',
        answer: 'Value types store data directly (int, bool, struct). Reference types store a reference to data (class, string, array).',
        code: `int x = 10; // value type
string s = "Hello"; // reference type`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['types', 'memory', 'fundamentals']
      },
      {
        id: '5-15',
        question: 'What is null in C#?',
        answer: 'null represents the absence of a value for reference types. Value types cannot be null unless they are nullable types.',
        code: `string name = null;
int? age = null; // nullable int`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['null', 'types', 'basics']
      },
      {
        id: '5-16',
        question: 'What is an array in C#?',
        answer: 'An array is a fixed-size collection of elements of the same type. Arrays are zero-indexed.',
        code: `int[] numbers = new int[5];
string[] names = { "John", "Jane" };`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['array', 'collections', 'basics']
      },
      {
        id: '5-17',
        question: 'What is a List in C#?',
        answer: 'A List is a dynamic collection that can grow or shrink in size. It is part of System.Collections.Generic.',
        code: `List<int> numbers = new List<int>();
numbers.Add(1);
numbers.Add(2);`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['list', 'collections', 'generics']
      },
      {
        id: '5-18',
        question: 'What is a for loop in C#?',
        answer: 'A for loop repeats a block of code a specific number of times. It has an initializer, condition, and iterator.',
        code: `for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['loops', 'control-flow', 'basics']
      },
      {
        id: '5-19',
        question: 'What is a foreach loop in C#?',
        answer: 'A foreach loop iterates over each element in a collection without needing an index.',
        code: `foreach (var item in collection)
{
    Console.WriteLine(item);
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['loops', 'collections', 'basics']
      },
      {
        id: '5-20',
        question: 'What is an if statement in C#?',
        answer: 'An if statement executes code conditionally based on a boolean expression.',
        code: `if (age >= 18)
{
    Console.WriteLine("Adult");
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['conditionals', 'control-flow', 'basics']
      },
      {
        id: '5-21',
        question: 'What is the difference between == and Equals()?',
        answer: '== compares references for reference types (unless overloaded). Equals() compares values and can be overridden.',
        code: `string a = "hello";
string b = "hello";
bool same1 = a == b; // true
bool same2 = a.Equals(b); // true`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['comparison', 'operators', 'basics']
      },
      {
        id: '5-22',
        question: 'What is a static member in C#?',
        answer: 'A static member belongs to the class itself rather than to instances. It is shared across all instances.',
        code: `public class Counter
{
    public static int Count = 0;
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['static', 'class-members', 'oop']
      },
      {
        id: '5-23',
        question: 'What is the this keyword in C#?',
        answer: 'this refers to the current instance of the class. It is used to access instance members.',
        code: `public class Person
{
    private string name;
    public void SetName(string name)
    {
        this.name = name;
    }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['this', 'keywords', 'oop']
      },
      {
        id: '5-24',
        question: 'What is method overloading in C#?',
        answer: 'Method overloading allows multiple methods with the same name but different parameters in the same class.',
        code: `public int Add(int a, int b) { return a + b; }
public double Add(double a, double b) { return a + b; }`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['overloading', 'methods', 'oop']
      },
      {
        id: '5-25',
        question: 'What is the virtual keyword in C#?',
        answer: 'virtual allows a method to be overridden in derived classes. The base implementation can still be called.',
        code: `public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Some sound");
    }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['virtual', 'inheritance', 'oop']
      },
      {
        id: '5-26',
        question: 'What is the override keyword in C#?',
        answer: 'override is used to provide a new implementation of a virtual method from a base class.',
        code: `public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Bark");
    }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['override', 'inheritance', 'oop']
      },
      {
        id: '5-27',
        question: 'What is a try-catch block in C#?',
        answer: 'try-catch is used for exception handling. Code in try is executed, and if an exception occurs, catch handles it.',
        code: `try
{
    int result = 10 / 0;
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['exceptions', 'error-handling', 'basics']
      },
      {
        id: '5-28',
        question: 'What is the using statement in C#?',
        answer: 'using ensures that IDisposable objects are properly disposed of when they go out of scope.',
        code: `using (var file = File.Open("file.txt"))
{
    // Use file
} // Automatically disposed`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['using', 'disposal', 'resources']
      },
      {
        id: '5-29',
        question: 'What is a Dictionary in C#?',
        answer: 'A Dictionary is a collection of key-value pairs. Keys must be unique and are used to access values.',
        code: `Dictionary<string, int> ages = new Dictionary<string, int>();
ages["John"] = 30;
ages["Jane"] = 25;`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['dictionary', 'collections', 'generics']
      },
      {
        id: '5-30',
        question: 'What is the difference between const and readonly?',
        answer: 'const is compile-time constant and must be initialized at declaration. readonly can be initialized at runtime in the constructor.',
        code: `public const int MaxValue = 100;
public readonly int MinValue;
public MyClass() { MinValue = 0; }`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['const', 'readonly', 'constants']
      },
      {
        id: '5-31',
        question: 'What is LINQ in C#?',
        answer: 'LINQ (Language Integrated Query) provides a consistent way to query data from different sources using C# syntax.',
        code: `var result = numbers.Where(n => n > 5).OrderBy(n => n);`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['linq', 'queries', 'data']
      },
      {
        id: '5-32',
        question: 'What is a delegate in C#?',
        answer: 'A delegate is a type that represents references to methods. It is similar to function pointers in C++.',
        code: `public delegate void MyDelegate(string message);
MyDelegate del = Console.WriteLine;
del("Hello");`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['delegate', 'functions', 'callbacks']
      },
      {
        id: '5-33',
        question: 'What is an event in C#?',
        answer: 'An event is a notification mechanism that allows a class to notify other classes when something happens.',
        code: `public event EventHandler MyEvent;
MyEvent?.Invoke(this, EventArgs.Empty);`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['events', 'delegates', 'notifications']
      },
      {
        id: '5-34',
        question: 'What is a lambda expression?',
        answer: 'A lambda expression is an anonymous function that can be used to create delegates or expression tree types.',
        code: `Func<int, int> square = x => x * x;
int result = square(5); // 25`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['lambda', 'functions', 'expressions']
      },
      {
        id: '5-35',
        question: 'What is async/await in C#?',
        answer: 'async/await enables asynchronous programming. async marks a method as asynchronous, await pauses execution until a task completes.',
        code: `public async Task<string> GetDataAsync()
{
    await Task.Delay(1000);
    return "Data";
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['async', 'await', 'tasks']
      },
      {
        id: '5-36',
        question: 'What is a Task in C#?',
        answer: 'Task represents an asynchronous operation. It is used for async programming and can return a value with Task<T>.',
        code: `Task<int> task = Task.Run(() => 42);
int result = await task;`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['task', 'async', 'threading']
      },
      {
        id: '5-37',
        question: 'What is the var keyword?',
        answer: 'var allows implicit typing where the compiler infers the type from the assigned value.',
        code: `var name = "John"; // string
var age = 30; // int`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['var', 'types', 'inference']
      },
      {
        id: '5-38',
        question: 'What is a tuple in C#?',
        answer: 'A tuple is a data structure that holds a fixed number of elements of different types.',
        code: `var person = ("John", 30);
Console.WriteLine(person.Item1); // John`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['tuple', 'data-structures', 'types']
      },
      {
        id: '5-39',
        question: 'What is pattern matching in C#?',
        answer: 'Pattern matching tests if a value has a certain shape and extracts information from it.',
        code: `if (obj is string s)
{
    Console.WriteLine(s.Length);
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['pattern-matching', 'is', 'types']
      },
      {
        id: '5-40',
        question: 'What is the switch expression?',
        answer: 'Switch expressions provide a concise syntax for pattern matching and returning values.',
        code: `string result = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    _ => "Other"
};`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['switch', 'expressions', 'patterns']
      },
      {
        id: '5-41',
        question: 'What is a record in C#?',
        answer: 'A record is a reference type that provides built-in functionality for encapsulating data with value-based equality.',
        code: `public record Person(string Name, int Age);
var person = new Person("John", 30);`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['record', 'types', 'immutability']
      },
      {
        id: '5-42',
        question: 'What is the null-coalescing operator ??',
        answer: '?? returns the left operand if it is not null, otherwise returns the right operand.',
        code: `string name = input ?? "Default";`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['null-coalescing', 'operators', 'null']
      },
      {
        id: '5-43',
        question: 'What is the null-conditional operator ?.',
        answer: '?. safely accesses members of an object. Returns null if the object is null instead of throwing an exception.',
        code: `int? length = name?.Length;`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['null-conditional', 'operators', 'null']
      },
      {
        id: '5-44',
        question: 'What is string interpolation?',
        answer: 'String interpolation allows embedding expressions inside string literals using $ and {}.',
        code: `string name = "John";
string message = $"Hello, {name}!";`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['string-interpolation', 'strings', 'formatting']
      },
      {
        id: '5-45',
        question: 'What is the nameof operator?',
        answer: 'nameof returns the name of a variable, type, or member as a string.',
        code: `string varName = nameof(myVariable);`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['nameof', 'operators', 'reflection']
      },
      {
        id: '5-46',
        question: 'What is an extension method?',
        answer: 'Extension methods add new methods to existing types without modifying them. They are static methods in static classes.',
        code: `public static class StringExtensions
{
    public static bool IsEmpty(this string str)
    {
        return string.IsNullOrEmpty(str);
    }
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['extension', 'methods', 'static']
      },
      {
        id: '5-47',
        question: 'What is IEnumerable in C#?',
        answer: 'IEnumerable is an interface that allows iteration over a collection. It is the base interface for all collections.',
        code: `IEnumerable<int> numbers = new List<int> { 1, 2, 3 };
foreach (int n in numbers) { }`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['ienumerable', 'collections', 'interfaces']
      },
      {
        id: '5-48',
        question: 'What is the yield keyword?',
        answer: 'yield is used in iterators to return elements one at a time without creating a full collection in memory.',
        code: `public IEnumerable<int> GetNumbers()
{
    yield return 1;
    yield return 2;
    yield return 3;
}`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['yield', 'iterators', 'collections']
      },
      {
        id: '5-49',
        question: 'What is boxing and unboxing?',
        answer: 'Boxing converts a value type to object. Unboxing extracts the value type from object. Both have performance costs.',
        code: `int num = 10;
object obj = num; // Boxing
int num2 = (int)obj; // Unboxing`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'medium',
        tags: ['boxing', 'unboxing', 'types']
      },
      {
        id: '5-50',
        question: 'What is the params keyword?',
        answer: 'params allows a method to accept a variable number of arguments as an array.',
        code: `public void Print(params int[] numbers)
{
    foreach (int n in numbers) Console.WriteLine(n);
}
Print(1, 2, 3, 4);`,
        language: 'csharp',
        category: 'C#',
        difficulty: 'easy',
        tags: ['params', 'methods', 'arrays']
      }
    ]
  },
  {
    id: '6',
    name: 'Entity Framework Core',
    description: 'EF Core concepts for database operations',
    category: 'EF Core',
    cards: [
      {
        id: '6-1',
        question: 'What is Entity Framework Core?',
        answer: 'EF Core is an Object-Relational Mapper (ORM) that enables .NET developers to work with databases using .NET objects.',
        code: `public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['ef-core', 'orm', 'basics']
      },
      {
        id: '6-2',
        question: 'What is a DbContext in EF Core?',
        answer: 'DbContext is the primary class for interacting with the database. It represents a session with the database.',
        code: `public class MyDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("connection-string");
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['dbcontext', 'basics', 'database']
      },
      {
        id: '6-3',
        question: 'What is a DbSet in EF Core?',
        answer: 'DbSet represents a collection of entities that can be queried from the database. Each DbSet corresponds to a table.',
        code: `public DbSet<Customer> Customers { get; set; }
public DbSet<Order> Orders { get; set; }`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['dbset', 'entities', 'basics']
      },
      {
        id: '6-4',
        question: 'What is an entity in EF Core?',
        answer: 'An entity is a class that maps to a database table. Each instance represents a row in the table.',
        code: `public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['entity', 'model', 'basics']
      },
      {
        id: '6-5',
        question: 'How do you add a new record in EF Core?',
        answer: 'Use the Add() method on DbSet, then call SaveChanges() to persist to the database.',
        code: `var product = new Product { Name = "Laptop" };
context.Products.Add(product);
context.SaveChanges();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['add', 'insert', 'crud']
      },
      {
        id: '6-6',
        question: 'How do you query data in EF Core?',
        answer: 'Use LINQ methods on DbSet to query data. Queries are executed when enumerated or when methods like ToList() are called.',
        code: `var products = context.Products
    .Where(p => p.Price > 100)
    .ToList();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['query', 'linq', 'read']
      },
      {
        id: '6-7',
        question: 'How do you update a record in EF Core?',
        answer: 'Retrieve the entity, modify its properties, then call SaveChanges() to update the database.',
        code: `var product = context.Products.Find(1);
product.Price = 150;
context.SaveChanges();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['update', 'modify', 'crud']
      },
      {
        id: '6-8',
        question: 'How do you delete a record in EF Core?',
        answer: 'Use the Remove() method on DbSet, then call SaveChanges() to delete from the database.',
        code: `var product = context.Products.Find(1);
context.Products.Remove(product);
context.SaveChanges();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['delete', 'remove', 'crud']
      },
      {
        id: '6-9',
        question: 'What is SaveChanges() in EF Core?',
        answer: 'SaveChanges() persists all changes made in the context to the database. It returns the number of affected rows.',
        code: `int rowsAffected = context.SaveChanges();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['savechanges', 'persist', 'basics']
      },
      {
        id: '6-10',
        question: 'What is a primary key in EF Core?',
        answer: 'A primary key uniquely identifies each record. By convention, a property named Id or ClassNameId is the primary key.',
        code: `public class Product
{
    public int Id { get; set; } // Primary key
    public string Name { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['primary-key', 'keys', 'basics']
      },
      {
        id: '6-11',
        question: 'What is the [Key] attribute in EF Core?',
        answer: 'The [Key] attribute explicitly marks a property as the primary key when it does not follow naming conventions.',
        code: `public class Product
{
    [Key]
    public int ProductCode { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['key', 'attributes', 'configuration']
      },
      {
        id: '6-12',
        question: 'What is the [Required] attribute in EF Core?',
        answer: 'The [Required] attribute makes a property non-nullable in the database. It is used for validation.',
        code: `public class Product
{
    [Required]
    public string Name { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['required', 'validation', 'attributes']
      },
      {
        id: '6-13',
        question: 'What is a migration in EF Core?',
        answer: 'A migration is a way to incrementally update the database schema to match changes in your model.',
        code: `// Command line
dotnet ef migrations add InitialCreate
dotnet ef database update`,
        language: 'bash',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['migrations', 'schema', 'database']
      },
      {
        id: '6-14',
        question: 'What is the difference between Add and AddRange?',
        answer: 'Add() adds a single entity. AddRange() adds multiple entities at once, which is more efficient.',
        code: `context.Products.Add(product);
context.Products.AddRange(product1, product2);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['add', 'addrange', 'crud']
      },
      {
        id: '6-15',
        question: 'What is eager loading in EF Core?',
        answer: 'Eager loading loads related data as part of the initial query using Include().',
        code: `var orders = context.Orders
    .Include(o => o.Customer)
    .ToList();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['eager-loading', 'include', 'relationships']
      },
      {
        id: '6-16',
        question: 'What is lazy loading in EF Core?',
        answer: 'Lazy loading automatically loads related data when it is accessed. Requires virtual navigation properties and a proxy.',
        code: `public class Order
{
    public virtual Customer Customer { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['lazy-loading', 'relationships', 'navigation']
      },
      {
        id: '6-17',
        question: 'What is a navigation property in EF Core?',
        answer: 'A navigation property defines a relationship between entities. It can be a reference or a collection.',
        code: `public class Order
{
    public Customer Customer { get; set; }
    public List<OrderItem> Items { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['navigation', 'relationships', 'basics']
      },
      {
        id: '6-18',
        question: 'What is a foreign key in EF Core?',
        answer: 'A foreign key is a property that references the primary key of another entity, establishing a relationship.',
        code: `public class Order
{
    public int CustomerId { get; set; }
    public Customer Customer { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['foreign-key', 'relationships', 'basics']
      },
      {
        id: '6-19',
        question: 'What is the Find() method in EF Core?',
        answer: 'Find() retrieves an entity by its primary key. It checks the context first before querying the database.',
        code: `var product = context.Products.Find(1);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['find', 'query', 'basics']
      },
      {
        id: '6-20',
        question: 'What is the difference between Find and FirstOrDefault?',
        answer: 'Find() searches by primary key and checks context first. FirstOrDefault() uses a predicate and always queries the database.',
        code: `var p1 = context.Products.Find(1);
var p2 = context.Products.FirstOrDefault(p => p.Id == 1);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['find', 'firstordefault', 'query']
      },
      {
        id: '6-21',
        question: 'What is AsNoTracking() in EF Core?',
        answer: 'AsNoTracking() returns entities that are not tracked by the context, improving performance for read-only queries.',
        code: `var products = context.Products
    .AsNoTracking()
    .ToList();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['asnotracking', 'performance', 'query']
      },
      {
        id: '6-22',
        question: 'What is the [Table] attribute in EF Core?',
        answer: 'The [Table] attribute specifies the database table name for an entity when it differs from the class name.',
        code: `[Table("tbl_Products")]
public class Product
{
    public int Id { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['table', 'attributes', 'configuration']
      },
      {
        id: '6-23',
        question: 'What is the [Column] attribute in EF Core?',
        answer: 'The [Column] attribute specifies the database column name for a property when it differs from the property name.',
        code: `public class Product
{
    [Column("product_name")]
    public string Name { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['column', 'attributes', 'configuration']
      },
      {
        id: '6-24',
        question: 'What is a one-to-many relationship in EF Core?',
        answer: 'A one-to-many relationship means one entity can be related to multiple entities of another type.',
        code: `public class Customer
{
    public List<Order> Orders { get; set; }
}
public class Order
{
    public Customer Customer { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['relationships', 'one-to-many', 'basics']
      },
      {
        id: '6-25',
        question: 'What is a one-to-one relationship in EF Core?',
        answer: 'A one-to-one relationship means each entity is related to exactly one entity of another type.',
        code: `public class User
{
    public UserProfile Profile { get; set; }
}
public class UserProfile
{
    public User User { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['relationships', 'one-to-one', 'basics']
      },
      {
        id: '6-26',
        question: 'What is the OnModelCreating method in EF Core?',
        answer: 'OnModelCreating is used to configure the model using Fluent API. It provides more control than attributes.',
        code: `protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Product>()
        .HasKey(p => p.Id);
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['onmodelcreating', 'fluent-api', 'configuration']
      },
      {
        id: '6-27',
        question: 'What is the difference between SaveChanges and SaveChangesAsync?',
        answer: 'SaveChanges() is synchronous. SaveChangesAsync() is asynchronous and should be used with await for better performance.',
        code: `context.SaveChanges();
await context.SaveChangesAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['savechanges', 'async', 'performance']
      },
      {
        id: '6-28',
        question: 'What is the [MaxLength] attribute in EF Core?',
        answer: 'The [MaxLength] attribute specifies the maximum length for a string or array property in the database.',
        code: `public class Product
{
    [MaxLength(100)]
    public string Name { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['maxlength', 'validation', 'attributes']
      },
      {
        id: '6-29',
        question: 'What is change tracking in EF Core?',
        answer: 'Change tracking monitors changes to entities so EF Core knows what to update in the database when SaveChanges() is called.',
        code: `var product = context.Products.Find(1);
product.Price = 200; // Tracked change
context.SaveChanges(); // Updates database`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['change-tracking', 'basics', 'context']
      },
      {
        id: '6-30',
        question: 'What is the difference between Update and Attach?',
        answer: 'Update() marks all properties as modified. Attach() marks the entity as unchanged. Use Update for disconnected scenarios.',
        code: `context.Products.Update(product); // All modified
context.Products.Attach(product); // Unchanged`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['update', 'attach', 'change-tracking']
      },
      {
        id: '6-31',
        question: 'What is AsNoTracking() in EF Core?',
        answer: 'AsNoTracking() returns entities without change tracking, improving performance for read-only queries.',
        code: `var products = context.Products.AsNoTracking().ToList();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['asnotracking', 'performance', 'queries']
      },
      {
        id: '6-32',
        question: 'What is a composite key in EF Core?',
        answer: 'A composite key uses multiple properties as the primary key. Configure using Fluent API.',
        code: `modelBuilder.Entity<OrderItem>()
    .HasKey(oi => new { oi.OrderId, oi.ProductId });`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['composite-key', 'fluent-api', 'keys']
      },
      {
        id: '6-33',
        question: 'What is the [NotMapped] attribute?',
        answer: '[NotMapped] excludes a property from being mapped to the database.',
        code: `public class Product
{
    [NotMapped]
    public string DisplayName { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['notmapped', 'attributes', 'mapping']
      },
      {
        id: '6-34',
        question: 'What is the [ForeignKey] attribute?',
        answer: '[ForeignKey] explicitly specifies which property is the foreign key for a navigation property.',
        code: `public class Order
{
    [ForeignKey("Customer")]
    public int CustomerId { get; set; }
    public Customer Customer { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['foreignkey', 'attributes', 'relationships']
      },
      {
        id: '6-35',
        question: 'What is the [Index] attribute?',
        answer: '[Index] creates a database index on one or more properties to improve query performance.',
        code: `[Index(nameof(Email), IsUnique = true)]
public class User
{
    public string Email { get; set; }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['index', 'attributes', 'performance']
      },
      {
        id: '6-36',
        question: 'What is explicit loading in EF Core?',
        answer: 'Explicit loading loads related data on demand using Load() method after the entity is retrieved.',
        code: `var customer = context.Customers.Find(1);
context.Entry(customer).Collection(c => c.Orders).Load();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['explicit-loading', 'relationships', 'loading']
      },
      {
        id: '6-37',
        question: 'What is the Entry() method?',
        answer: 'Entry() provides access to change tracking information and operations for an entity.',
        code: `var entry = context.Entry(product);
var state = entry.State;`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['entry', 'change-tracking', 'context']
      },
      {
        id: '6-38',
        question: 'What is a shadow property?',
        answer: 'Shadow properties exist in the EF Core model but not in the entity class. Configured via Fluent API.',
        code: `modelBuilder.Entity<Product>()
    .Property<DateTime>("LastModified");`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['shadow-property', 'fluent-api', 'advanced']
      },
      {
        id: '6-39',
        question: 'What is the HasData() method?',
        answer: 'HasData() seeds initial data into the database during migrations.',
        code: `modelBuilder.Entity<Product>().HasData(
    new Product { Id = 1, Name = "Product 1" }
);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['hasdata', 'seeding', 'migrations']
      },
      {
        id: '6-40',
        question: 'What is a value converter?',
        answer: 'Value converters transform property values when reading from or writing to the database.',
        code: `modelBuilder.Entity<Product>()
    .Property(p => p.Price)
    .HasConversion<decimal>();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['value-converter', 'conversion', 'advanced']
      },
      {
        id: '6-41',
        question: 'What is the ToListAsync() method?',
        answer: 'ToListAsync() asynchronously executes a query and returns results as a list.',
        code: `var products = await context.Products.ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['tolistasync', 'async', 'queries']
      },
      {
        id: '6-42',
        question: 'What is the SingleOrDefaultAsync() method?',
        answer: 'SingleOrDefaultAsync() returns the only element or null. Throws if more than one element exists.',
        code: `var product = await context.Products
    .SingleOrDefaultAsync(p => p.Id == 1);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['singleordefaultasync', 'async', 'queries']
      },
      {
        id: '6-43',
        question: 'What is the AnyAsync() method?',
        answer: 'AnyAsync() checks if any elements satisfy a condition without loading all data.',
        code: `bool exists = await context.Products
    .AnyAsync(p => p.Price > 100);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['anyasync', 'async', 'queries']
      },
      {
        id: '6-44',
        question: 'What is the CountAsync() method?',
        answer: 'CountAsync() returns the number of elements that satisfy a condition.',
        code: `int count = await context.Products.CountAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['countasync', 'async', 'queries']
      },
      {
        id: '6-45',
        question: 'What is the ExecuteDeleteAsync() method?',
        answer: 'ExecuteDeleteAsync() deletes entities matching a query without loading them into memory.',
        code: `await context.Products
    .Where(p => p.Price < 10)
    .ExecuteDeleteAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['executedeleteasync', 'bulk', 'performance']
      },
      {
        id: '6-46',
        question: 'What is the ExecuteUpdateAsync() method?',
        answer: 'ExecuteUpdateAsync() updates entities matching a query without loading them into memory.',
        code: `await context.Products
    .Where(p => p.Category == "Old")
    .ExecuteUpdateAsync(s => s.SetProperty(p => p.Category, "New"));`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['executeupdateasync', 'bulk', 'performance']
      },
      {
        id: '6-47',
        question: 'What is a DbContext transaction?',
        answer: 'Transactions ensure multiple operations succeed or fail together. Use BeginTransaction() for explicit transactions.',
        code: `using var transaction = context.Database.BeginTransaction();
try {
    context.SaveChanges();
    transaction.Commit();
} catch {
    transaction.Rollback();
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['transaction', 'database', 'consistency']
      },
      {
        id: '6-48',
        question: 'What is the Include() with ThenInclude()?',
        answer: 'ThenInclude() loads nested related data after an Include(). Used for multi-level relationships.',
        code: `var orders = context.Orders
    .Include(o => o.Customer)
        .ThenInclude(c => c.Address)
    .ToList();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['theninclude', 'eager-loading', 'relationships']
      },
      {
        id: '6-49',
        question: 'What is the Owned Entity Type?',
        answer: 'Owned entities are part of another entity and share the same table. Use OwnsOne() or OwnsMany().',
        code: `modelBuilder.Entity<Order>()
    .OwnsOne(o => o.ShippingAddress);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['owned-entity', 'fluent-api', 'relationships']
      },
      {
        id: '6-50',
        question: 'What is the difference between Add and AddRange?',
        answer: 'Add() adds a single entity. AddRange() adds multiple entities in one call, improving performance.',
        code: `context.Products.Add(product);
context.Products.AddRange(product1, product2, product3);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'easy',
        tags: ['add', 'addrange', 'crud']
      },
      {
        id: '6-51',
        question: 'How do you configure HasMany() with Fluent API?',
        answer: 'HasMany() configures a one-to-many relationship from the "one" side.',
        code: `modelBuilder.Entity<Customer>()
    .HasMany(c => c.Orders)
    .WithOne(o => o.Customer)
    .HasForeignKey(o => o.CustomerId);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['hasmany', 'fluent-api', 'relationships']
      },
      {
        id: '6-52',
        question: 'How do you configure HasOne() with Fluent API?',
        answer: 'HasOne() configures a one-to-one or many-to-one relationship.',
        code: `modelBuilder.Entity<Order>()
    .HasOne(o => o.Customer)
    .WithMany(c => c.Orders)
    .HasForeignKey(o => o.CustomerId)
    .OnDelete(DeleteBehavior.Restrict);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['hasone', 'fluent-api', 'relationships']
      },
      {
        id: '6-53',
        question: 'How do you configure a many-to-many relationship in EF Core?',
        answer: 'EF Core 5+ supports implicit many-to-many via collection navigation properties. Use Fluent API for join table configuration.',
        code: `// Implicit (EF Core 5+)
public class Student { public ICollection<Course> Courses { get; set; } }
public class Course  { public ICollection<Student> Students { get; set; } }

// Explicit join table
modelBuilder.Entity<Student>()
    .HasMany(s => s.Courses)
    .WithMany(c => c.Students)
    .UsingEntity(j => j.ToTable("StudentCourses"));`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['many-to-many', 'relationships', 'fluent-api']
      },
      {
        id: '6-54',
        question: 'How do you use Where() for filtering in EF Core?',
        answer: 'Where() translates a LINQ predicate to a SQL WHERE clause.',
        code: `var activeProducts = await context.Products
    .Where(p => p.IsActive && p.Price > 10)
    .OrderBy(p => p.Name)
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['where', 'linq', 'filtering']
      },
      {
        id: '6-55',
        question: 'How do you use Select() for projection in EF Core?',
        answer: 'Select() projects query results into a different shape, fetching only required columns.',
        code: `var names = await context.Products
    .Where(p => p.IsActive)
    .Select(p => new { p.Id, p.Name, p.Price })
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['select', 'projection', 'linq']
      },
      {
        id: '6-56',
        question: 'How do you use OrderBy() and OrderByDescending() in EF Core?',
        answer: 'OrderBy() sorts ascending. OrderByDescending() sorts descending. Use ThenBy() for secondary sorts.',
        code: `var products = await context.Products
    .OrderBy(p => p.Category)
    .ThenByDescending(p => p.Price)
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['orderby', 'sorting', 'linq']
      },
      {
        id: '6-57',
        question: 'How do you implement pagination with Skip() and Take()?',
        answer: 'Skip() skips N records; Take() fetches N records. Combine them for offset-based pagination.',
        code: `int page = 2, pageSize = 10;

var products = await context.Products
    .OrderBy(p => p.Id)
    .Skip((page - 1) * pageSize)
    .Take(pageSize)
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['pagination', 'skip', 'take']
      },
      {
        id: '6-58',
        question: 'How do you use GroupBy() in EF Core?',
        answer: 'GroupBy() groups results by a key. Use with aggregate functions like Count() or Sum().',
        code: `var grouped = await context.Orders
    .GroupBy(o => o.CustomerId)
    .Select(g => new
    {
        CustomerId = g.Key,
        OrderCount = g.Count(),
        TotalSpent = g.Sum(o => o.Total)
    })
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['groupby', 'aggregation', 'linq']
      },
      {
        id: '6-59',
        question: 'How do you use Sum(), Min(), Max(), and Average() in EF Core?',
        answer: 'These aggregate methods translate directly to SQL aggregates.',
        code: `decimal total   = await context.Orders.SumAsync(o => o.Total);
decimal cheapest = await context.Products.MinAsync(p => p.Price);
decimal priciest = await context.Products.MaxAsync(p => p.Price);
double avgPrice  = await context.Products.AverageAsync(p => (double)p.Price);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['aggregates', 'sum', 'linq']
      },
      {
        id: '6-60',
        question: 'How do you use FromSqlRaw() in EF Core?',
        answer: 'FromSqlRaw() allows raw SQL queries that return entities tracked by the context.',
        code: `var products = await context.Products
    .FromSqlRaw("SELECT * FROM Products WHERE Price > {0}", 100)
    .ToListAsync();

// Can chain LINQ after
var cheap = await context.Products
    .FromSqlRaw("SELECT * FROM Products")
    .Where(p => p.Price < 50)
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['fromsqlraw', 'raw-sql', 'queries']
      },
      {
        id: '6-61',
        question: 'How do you configure cascade delete with Fluent API?',
        answer: 'Use OnDelete() to set DeleteBehavior: Cascade, Restrict, SetNull, or NoAction.',
        code: `modelBuilder.Entity<Order>()
    .HasOne(o => o.Customer)
    .WithMany(c => c.Orders)
    .HasForeignKey(o => o.CustomerId)
    .OnDelete(DeleteBehavior.Cascade);   // Deleting Customer deletes Orders
    // or DeleteBehavior.Restrict        // Prevents delete if Orders exist
    // or DeleteBehavior.SetNull         // Sets FK to null on delete`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['cascade-delete', 'fluent-api', 'relationships']
      },
      {
        id: '6-62',
        question: 'How do you configure string max length with Fluent API?',
        answer: 'Use HasMaxLength() on the property builder in OnModelCreating.',
        code: `modelBuilder.Entity<Product>()
    .Property(p => p.Name)
    .HasMaxLength(100)
    .IsRequired();

modelBuilder.Entity<Product>()
    .Property(p => p.Description)
    .HasMaxLength(500)
    .IsRequired(false);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['hasmaxlength', 'fluent-api', 'configuration']
      },
      {
        id: '6-63',
        question: 'What is the difference between Code-First and Database-First?',
        answer: 'Code-First: you define C# classes and EF generates the database. Database-First: you scaffold classes from an existing database.',
        code: `// Code-First: define model, then migrate
dotnet ef migrations add InitialCreate
dotnet ef database update

// Database-First: scaffold from existing DB
dotnet ef dbcontext scaffold "ConnectionString" \\
    Microsoft.EntityFrameworkCore.SqlServer \\
    -o Models`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['code-first', 'database-first', 'migrations']
      },
      {
        id: '6-64',
        question: 'How do you register DbContext with Dependency Injection?',
        answer: 'Use AddDbContext<T>() in Program.cs, specifying the provider and connection string.',
        code: `// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=MyDb;Trusted_Connection=True;"
  }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['dependency-injection', 'dbcontext', 'configuration']
      },
      {
        id: '6-65',
        question: 'How do you use the IEntityTypeConfiguration<T> interface?',
        answer: 'IEntityTypeConfiguration<T> lets you split Fluent API configuration into separate files.',
        code: `public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Name).HasMaxLength(100).IsRequired();
        builder.HasIndex(p => p.Sku).IsUnique();
    }
}

// In OnModelCreating
modelBuilder.ApplyConfiguration(new ProductConfiguration());
// Or apply all at once:
modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['configuration', 'fluent-api', 'ientitytypeconfiguration']
      },
      {
        id: '6-66',
        question: 'How do you use the In-Memory provider for testing?',
        answer: 'Install Microsoft.EntityFrameworkCore.InMemory and configure it in test setup.',
        code: `var options = new DbContextOptionsBuilder<AppDbContext>()
    .UseInMemoryDatabase("TestDb")
    .Options;

using var context = new AppDbContext(options);
context.Products.Add(new Product { Name = "Test", Price = 10 });
await context.SaveChangesAsync();

var products = await context.Products.ToListAsync();
Assert.Single(products);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['in-memory', 'testing', 'unit-tests']
      },
      {
        id: '6-67',
        question: 'How do you track entity state manually in EF Core?',
        answer: 'Use context.Entry().State to manually set entity tracking state.',
        code: `var product = new Product { Id = 1, Name = "Updated Name", Price = 99 };

// Attach and mark as modified (for disconnected scenarios)
context.Entry(product).State = EntityState.Modified;
await context.SaveChangesAsync();

// Check state
var entry = context.Entry(product);
Console.WriteLine(entry.State); // Modified, Added, Deleted, Unchanged, Detached`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['entity-state', 'change-tracking', 'disconnected']
      },
      {
        id: '6-68',
        question: 'How do you query related data with projection (no Include)?',
        answer: 'Use Select() to project related data directly, avoiding separate Include() queries.',
        code: `var result = await context.Orders
    .Select(o => new OrderDto
    {
        Id = o.Id,
        Total = o.Total,
        CustomerName = o.Customer.Name,    // No Include needed
        ItemCount = o.Items.Count()
    })
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['projection', 'select', 'performance']
      },
      {
        id: '6-69',
        question: 'How do you use the [DatabaseGenerated] attribute?',
        answer: '[DatabaseGenerated] controls how a column value is generated by the database.',
        code: `public class Product
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime LastModified { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public Guid ExternalId { get; set; } // Set manually
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['databasegenerated', 'attributes', 'keys']
      },
      {
        id: '6-70',
        question: 'How do you configure a default column value in EF Core?',
        answer: 'Use HasDefaultValue() or HasDefaultValueSql() in Fluent API.',
        code: `modelBuilder.Entity<Product>()
    .Property(p => p.CreatedAt)
    .HasDefaultValueSql("GETUTCDATE()");

modelBuilder.Entity<Product>()
    .Property(p => p.IsActive)
    .HasDefaultValue(true);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['default-value', 'fluent-api', 'configuration']
      },
      {
        id: '6-71',
        question: 'How do you apply all entity configurations from an assembly?',
        answer: 'Use ApplyConfigurationsFromAssembly() to automatically apply all IEntityTypeConfiguration<T> classes.',
        code: `protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.ApplyConfigurationsFromAssembly(
        typeof(AppDbContext).Assembly);
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['configuration', 'assembly', 'fluent-api']
      },
      {
        id: '6-72',
        question: 'How do you revert a migration in EF Core?',
        answer: 'Use dotnet ef database update <PreviousMigrationName> to roll back, then remove the latest migration.',
        code: `# Roll back to a specific migration
dotnet ef database update PreviousMigrationName

# Remove the last migration file
dotnet ef migrations remove

# List all migrations
dotnet ef migrations list`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['migrations', 'rollback', 'database']
      },
      {
        id: '6-73',
        question: 'What is the difference between FirstOrDefaultAsync and SingleOrDefaultAsync?',
        answer: 'FirstOrDefaultAsync returns the first match (no error on multiple). SingleOrDefaultAsync throws if more than one record matches.',
        code: `// Returns first product with price > 10 (no error if many match)
var first = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 10);

// Returns exactly one, throws InvalidOperationException if > 1 match
var single = await context.Products
    .SingleOrDefaultAsync(p => p.Sku == "ABC-123");`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['firstordefault', 'singleordefault', 'queries']
      },
      {
        id: '6-74',
        question: 'How do you use DbContext.Database.ExecuteSqlRawAsync()?',
        answer: 'ExecuteSqlRawAsync() runs non-query SQL (INSERT/UPDATE/DELETE) and returns affected row count.',
        code: `int rows = await context.Database.ExecuteSqlRawAsync(
    "UPDATE Products SET IsActive = 0 WHERE Price < {0}", 5.00m);

Console.WriteLine($"{rows} rows updated");`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['executesqlrawasync', 'raw-sql', 'database']
      },
      {
        id: '6-75',
        question: 'How do you use DbContext pooling for performance?',
        answer: 'AddDbContextPool<T>() reuses DbContext instances, reducing allocation overhead in high-throughput apps.',
        code: `// Program.cs
builder.Services.AddDbContextPool<AppDbContext>(options =>
    options.UseSqlServer(connectionString),
    poolSize: 128); // default is 1024

// Note: Do not store state on the context when using pooling
// The context is reset between uses`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'medium',
        tags: ['dbcontext-pool', 'performance', 'dependency-injection']
      },
      {
        id: '6-76',
        question: 'What is a Global Query Filter in EF Core?',
        answer: 'Global Query Filters add a WHERE condition to all queries for an entity type automatically.',
        code: `protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    // Always filter out soft-deleted records
    modelBuilder.Entity<Product>()
        .HasQueryFilter(p => !p.IsDeleted);
}

// Normal query - IsDeleted = false is added automatically
var products = await context.Products.ToListAsync();

// Bypass the filter
var all = await context.Products.IgnoreQueryFilters().ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['global-query-filter', 'soft-delete', 'advanced']
      },
      {
        id: '6-77',
        question: 'How do you implement soft delete with a global query filter?',
        answer: 'Add IsDeleted flag, set it in an overridden SaveChangesAsync(), and add a global filter.',
        code: `public class AppDbContext : DbContext
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasQueryFilter(p => !p.IsDeleted);
    }

    public override Task<int> SaveChangesAsync(CancellationToken ct = default)
    {
        foreach (var entry in ChangeTracker.Entries<ISoftDelete>()
            .Where(e => e.State == EntityState.Deleted))
        {
            entry.State = EntityState.Modified;
            entry.Entity.IsDeleted = true;
        }
        return base.SaveChangesAsync(ct);
    }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['soft-delete', 'savechanges', 'global-filter']
      },
      {
        id: '6-78',
        question: 'What is TPH (Table Per Hierarchy) inheritance in EF Core?',
        answer: 'TPH maps all types in an inheritance hierarchy to a single table with a discriminator column.',
        code: `public class Animal  { public int Id { get; set; } public string Name { get; set; } }
public class Dog : Animal { public string Breed { get; set; } }
public class Cat : Animal { public bool IsIndoor { get; set; } }

// EF Core default: single Animals table with Discriminator column
// Query specific type
var dogs = await context.Animals.OfType<Dog>().ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['tph', 'inheritance', 'table-mapping']
      },
      {
        id: '6-79',
        question: 'What is TPT (Table Per Type) inheritance in EF Core?',
        answer: 'TPT maps each type in the hierarchy to its own table. Base properties in base table, derived in separate tables.',
        code: `[Table("Animals")]
public class Animal  { public int Id { get; set; } public string Name { get; set; } }

[Table("Dogs")]
public class Dog : Animal { public string Breed { get; set; } }

[Table("Cats")]
public class Cat : Animal { public bool IsIndoor { get; set; } }

// Or via Fluent API
modelBuilder.Entity<Dog>().ToTable("Dogs");
modelBuilder.Entity<Cat>().ToTable("Cats");`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['tpt', 'inheritance', 'table-mapping']
      },
      {
        id: '6-80',
        question: 'What is TPC (Table Per Concrete Type) in EF Core?',
        answer: 'TPC maps each concrete class to its own table. All properties (including inherited) are stored in each table. No joins needed.',
        code: `public abstract class Animal { public int Id { get; set; } public string Name { get; set; } }
public class Dog : Animal { public string Breed { get; set; } }
public class Cat : Animal { public bool IsIndoor { get; set; } }

// Configure TPC
modelBuilder.Entity<Dog>().UseTpcMappingStrategy();
modelBuilder.Entity<Cat>().UseTpcMappingStrategy();

// Dogs table: Id, Name, Breed
// Cats table: Id, Name, IsIndoor
// No shared Animals table`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['tpc', 'inheritance', 'table-mapping']
      },
      {
        id: '6-81',
        question: 'How do you implement optimistic concurrency with [Timestamp]?',
        answer: 'Add a byte[] RowVersion property with [Timestamp]. EF Core checks it on every UPDATE.',
        code: `public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }

    [Timestamp]
    public byte[] RowVersion { get; set; }
}

// EF Core adds WHERE RowVersion = @originalValue to UPDATE
// Throws DbUpdateConcurrencyException if another update happened
try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
    // Handle conflict: reload and retry or notify user
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['optimistic-concurrency', 'rowversion', 'timestamp']
      },
      {
        id: '6-82',
        question: 'How do you handle concurrency conflicts in EF Core?',
        answer: 'Catch DbUpdateConcurrencyException and resolve by keeping client, database, or merged values.',
        code: `try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
    var entry = ex.Entries.Single();
    var dbValues = await entry.GetDatabaseValuesAsync();

    if (dbValues == null)
    {
        // Entity deleted by another user
        return;
    }

    // Overwrite with database values (database wins)
    entry.OriginalValues.SetValues(dbValues);
    await context.SaveChangesAsync();
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['concurrency', 'conflict-resolution', 'savechanges']
      },
      {
        id: '6-83',
        question: 'What is table splitting in EF Core?',
        answer: 'Table splitting maps multiple entity types to the same database table, sharing the primary key.',
        code: `public class Order { public int Id { get; set; } public decimal Total { get; set; } }
public class OrderDetails { public int Id { get; set; } public string ShippingAddress { get; set; } }

modelBuilder.Entity<Order>().ToTable("Orders");
modelBuilder.Entity<OrderDetails>().ToTable("Orders");

modelBuilder.Entity<Order>()
    .HasOne(o => o.Details)
    .WithOne()
    .HasForeignKey<OrderDetails>(d => d.Id);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['table-splitting', 'fluent-api', 'advanced']
      },
      {
        id: '6-84',
        question: 'What is a compiled query in EF Core?',
        answer: 'Compiled queries cache query compilation, eliminating repeated translation overhead for frequently used queries.',
        code: `private static readonly Func<AppDbContext, int, Task<Product?>> GetByIdQuery =
    EF.CompileAsyncQuery((AppDbContext db, int id) =>
        db.Products.FirstOrDefault(p => p.Id == id));

// Usage - no re-compilation on each call
var product = await GetByIdQuery(context, 5);`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['compiled-query', 'performance', 'advanced']
      },
      {
        id: '6-85',
        question: 'What is the difference between IQueryable<T> and IEnumerable<T> in EF Core?',
        answer: 'IQueryable builds the query in the database (SQL). IEnumerable loads all data into memory first, then filters in C#.',
        code: `// IQueryable - filtering happens in SQL
IQueryable<Product> query = context.Products;
var cheap = await query.Where(p => p.Price < 50).ToListAsync(); // One SQL query

// IEnumerable - ALL products loaded first, THEN filtered in memory
IEnumerable<Product> allInMemory = await context.Products.ToListAsync();
var cheapInMemory = allInMemory.Where(p => p.Price < 50); // Inefficient!`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['iqueryable', 'ienumerable', 'performance']
      },
      {
        id: '6-86',
        question: 'What is the N+1 query problem in EF Core and how do you fix it?',
        answer: 'N+1 occurs when you execute 1 query then N queries in a loop. Fix with Include() (eager loading).',
        code: `// BAD - N+1: 1 query for customers + N queries for orders
var customers = await context.Customers.ToListAsync();
foreach (var c in customers)
    Console.WriteLine(c.Orders.Count); // Triggers separate SQL per customer!

// GOOD - 1 query with JOIN
var customers = await context.Customers
    .Include(c => c.Orders)
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['n-plus-1', 'performance', 'include']
      },
      {
        id: '6-87',
        question: 'How do you map an entity to a database view?',
        answer: 'Use ToView() in Fluent API. Views are read-only by default.',
        code: `public class ProductSummary
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int OrderCount { get; set; }
}

modelBuilder.Entity<ProductSummary>()
    .HasNoKey()
    .ToView("vw_ProductSummary");

// Query the view
var summaries = await context.Set<ProductSummary>().ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['views', 'toview', 'read-only']
      },
      {
        id: '6-88',
        question: 'How do you implement audit trails (CreatedAt/UpdatedAt) in EF Core?',
        answer: 'Override SaveChangesAsync() and set timestamps for Added/Modified entities.',
        code: `public interface IAuditable
{
    DateTime CreatedAt { get; set; }
    DateTime UpdatedAt { get; set; }
}

public override Task<int> SaveChangesAsync(CancellationToken ct = default)
{
    var now = DateTime.UtcNow;
    foreach (var entry in ChangeTracker.Entries<IAuditable>())
    {
        if (entry.State == EntityState.Added)
            entry.Entity.CreatedAt = now;
        if (entry.State is EntityState.Added or EntityState.Modified)
            entry.Entity.UpdatedAt = now;
    }
    return base.SaveChangesAsync(ct);
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['audit', 'savechanges', 'timestamps']
      },
      {
        id: '6-89',
        question: 'What is query splitting for collection includes?',
        answer: 'AsSplitQuery() splits a query with multiple collection includes into separate SQL queries, avoiding cartesian explosion.',
        code: `// Single query (cartesian explosion risk with many includes)
var orders = await context.Orders
    .Include(o => o.Items)
    .Include(o => o.Tags)
    .ToListAsync();

// Split queries (separate SQL per include, better for large collections)
var orders = await context.Orders
    .Include(o => o.Items)
    .Include(o => o.Tags)
    .AsSplitQuery()
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['split-query', 'performance', 'include']
      },
      {
        id: '6-90',
        question: 'How do you use EF Core with savepoints in transactions?',
        answer: 'Savepoints let you roll back to a point within a transaction without aborting the whole transaction.',
        code: `await using var transaction = await context.Database.BeginTransactionAsync();

context.Products.Add(new Product { Name = "A" });
await context.SaveChangesAsync();
await transaction.CreateSavepointAsync("AfterA");

try
{
    context.Products.Add(new Product { Name = "B", Price = -1 }); // bad
    await context.SaveChangesAsync();
}
catch
{
    await transaction.RollbackToSavepointAsync("AfterA");
}

await transaction.CommitAsync(); // Only "A" is saved`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['transactions', 'savepoints', 'advanced']
      },
      {
        id: '6-91',
        question: 'What is an EF Core interceptor?',
        answer: 'Interceptors hook into EF Core operations (commands, connections, SaveChanges) to add cross-cutting logic.',
        code: `public class QueryLoggingInterceptor : DbCommandInterceptor
{
    public override ValueTask<DbDataReader> ReaderExecutedAsync(
        DbCommand command,
        CommandExecutedEventData eventData,
        DbDataReader result,
        CancellationToken cancellationToken = default)
    {
        Console.WriteLine($"Query took {eventData.Duration.TotalMs}ms");
        return new ValueTask<DbDataReader>(result);
    }
}

// Register
builder.Services.AddDbContext<AppDbContext>(o => o
    .UseSqlServer(connStr)
    .AddInterceptors(new QueryLoggingInterceptor()));`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['interceptors', 'advanced', 'logging']
      },
      {
        id: '6-92',
        question: 'How do you configure a many-to-many relationship with a payload (extra columns)?',
        answer: 'Create an explicit join entity with the extra columns and configure it with HasMany/WithMany via the join entity.',
        code: `public class Student   { public int Id { get; set; } public ICollection<Enrollment> Enrollments { get; set; } }
public class Course    { public int Id { get; set; } public ICollection<Enrollment> Enrollments { get; set; } }
public class Enrollment
{
    public int StudentId { get; set; } public Student Student { get; set; }
    public int CourseId  { get; set; } public Course  Course  { get; set; }
    public DateTime EnrolledAt { get; set; } // payload
    public decimal Grade { get; set; }        // payload
}

modelBuilder.Entity<Enrollment>().HasKey(e => new { e.StudentId, e.CourseId });`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['many-to-many', 'join-entity', 'payload']
      },
      {
        id: '6-93',
        question: 'What is the IDbContextFactory<T> and when should you use it?',
        answer: 'IDbContextFactory<T> creates DbContext instances on demand. Use in background services or Blazor where DI-scoped contexts are unsafe.',
        code: `// Register
builder.Services.AddDbContextFactory<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// Usage in background service
public class ReportService
{
    private readonly IDbContextFactory<AppDbContext> _factory;
    public ReportService(IDbContextFactory<AppDbContext> factory)
        => _factory = factory;

    public async Task RunAsync()
    {
        await using var context = await _factory.CreateDbContextAsync();
        var report = await context.Orders.SumAsync(o => o.Total);
    }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['dbcontextfactory', 'background-services', 'advanced']
      },
      {
        id: '6-94',
        question: 'How do you use EF Core with database functions (UDFs)?',
        answer: 'Map user-defined functions with [DbFunction] or HasDbFunction() in Fluent API.',
        code: `public static class DbFunctions
{
    [DbFunction("CalculateDiscount", "dbo")]
    public static decimal CalculateDiscount(decimal price, int qty) =>
        throw new NotSupportedException(); // Translated to SQL, never runs in C#
}

// In OnModelCreating
modelBuilder.HasDbFunction(
    typeof(DbFunctions).GetMethod(nameof(DbFunctions.CalculateDiscount))!);

// Use in LINQ
var result = await context.Products
    .Select(p => new { p.Name, Discount = DbFunctions.CalculateDiscount(p.Price, 5) })
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['database-functions', 'udf', 'linq']
      },
      {
        id: '6-95',
        question: 'What is the ModelSnapshot in EF Core migrations?',
        answer: 'ModelSnapshot is an auto-generated C# file that represents the current state of the model. EF Core uses it to compute migration diffs.',
        code: `// AppDbContextModelSnapshot.cs (auto-generated, do not edit manually)
[DbContext(typeof(AppDbContext))]
partial class AppDbContextModelSnapshot : ModelSnapshot
{
    protected override void BuildModel(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity("Product", b =>
        {
            b.Property<int>("Id").ValueGeneratedOnAdd();
            b.Property<string>("Name").HasMaxLength(100);
            b.HasKey("Id");
            b.ToTable("Products");
        });
    }
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['model-snapshot', 'migrations', 'advanced']
      },
      {
        id: '6-96',
        question: 'How do you configure value objects as owned entities?',
        answer: 'Use OwnsOne() to embed a value object (e.g., Address) as owned columns in the owning entity table.',
        code: `public class Order
{
    public int Id { get; set; }
    public Address ShippingAddress { get; set; }
}
public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string PostalCode { get; set; }
}

modelBuilder.Entity<Order>().OwnsOne(o => o.ShippingAddress, sa =>
{
    sa.Property(a => a.Street).HasColumnName("ShipStreet").HasMaxLength(200);
    sa.Property(a => a.City).HasColumnName("ShipCity").HasMaxLength(100);
});`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['owned-entities', 'value-objects', 'fluent-api']
      },
      {
        id: '6-97',
        question: 'How do you use FromSqlInterpolated() safely in EF Core?',
        answer: 'FromSqlInterpolated() uses parameterized SQL automatically, preventing SQL injection from interpolated values.',
        code: `string category = userInput; // potentially unsafe input
decimal minPrice = 10m;

// SAFE - values are parameterized automatically
var products = await context.Products
    .FromSqlInterpolated(
        $"SELECT * FROM Products WHERE Category = {category} AND Price > {minPrice}")
    .ToListAsync();

// Equivalent to:
// SELECT * FROM Products WHERE Category = @p0 AND Price > @p1`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['fromsqlinterpolated', 'sql-injection', 'security']
      },
      {
        id: '6-98',
        question: 'How do you use EF Core with JSON columns?',
        answer: 'EF Core 7+ supports mapping JSON columns to C# types using ToJson() in Fluent API.',
        code: `public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ProductMetadata Metadata { get; set; } // stored as JSON
}
public class ProductMetadata
{
    public string[] Tags { get; set; }
    public Dictionary<string, string> Attributes { get; set; }
}

modelBuilder.Entity<Product>().OwnsOne(p => p.Metadata, m => m.ToJson());

// Query JSON properties in LINQ
var tagged = await context.Products
    .Where(p => p.Metadata.Tags.Contains("sale"))
    .ToListAsync();`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['json-columns', 'ef-core-7', 'advanced']
      },
      {
        id: '6-99',
        question: 'How do you use ExecuteUpdate() for bulk updates without loading entities?',
        answer: 'ExecuteUpdate() (EF Core 7+) runs a SET query directly without loading entities into memory.',
        code: `// Update all products in a category without loading them
int updated = await context.Products
    .Where(p => p.Category == "Electronics")
    .ExecuteUpdateAsync(setters => setters
        .SetProperty(p => p.IsActive, false)
        .SetProperty(p => p.UpdatedAt, DateTime.UtcNow));

Console.WriteLine($"{updated} products deactivated");`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['executeupdate', 'bulk', 'ef-core-7']
      },
      {
        id: '6-100',
        question: 'How do you implement a generic repository with EF Core?',
        answer: 'Create a generic repository class with common CRUD methods backed by DbSet<T>.',
        code: `public class Repository<T> where T : class
{
    protected readonly AppDbContext _db;
    protected readonly DbSet<T> _set;

    public Repository(AppDbContext db) { _db = db; _set = db.Set<T>(); }

    public async Task<T?> GetByIdAsync(int id) => await _set.FindAsync(id);
    public async Task<List<T>> GetAllAsync() => await _set.ToListAsync();
    public async Task AddAsync(T entity) => await _set.AddAsync(entity);
    public void Delete(T entity) => _set.Remove(entity);
    public async Task SaveAsync() => await _db.SaveChangesAsync();
}`,
        language: 'csharp',
        category: 'EF Core',
        difficulty: 'hard',
        tags: ['generic-repository', 'patterns', 'design']
      }
    ]
  },
  {
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
      }
    ]
  },
  {
    id: '8',
    name: 'C# Web API & JavaScript Fetch',
    description: 'Building REST APIs with C# and consuming them with JavaScript',
    category: 'Web API',
    cards: [
      {
        id: '8-1',
        question: 'What is a REST API?',
        answer: 'REST (Representational State Transfer) is an architectural style for building web services that use HTTP methods to perform CRUD operations on resources.',
        code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll() => Ok(products);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['rest', 'api', 'basics']
      },
      {
        id: '8-2',
        question: 'What are the main HTTP methods used in REST APIs?',
        answer: 'GET (retrieve), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove).',
        code: `[HttpGet] // Retrieve
[HttpPost] // Create
[HttpPut] // Update
[HttpPatch] // Partial update
[HttpDelete] // Delete`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['http-methods', 'rest', 'crud']
      },
      {
        id: '8-3',
        question: 'How do you create a basic Web API controller in C#?',
        answer: 'Inherit from ControllerBase, add [ApiController] and [Route] attributes.',
        code: `[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetUsers()
    {
        return Ok(new[] { "User1", "User2" });
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['controller', 'api', 'basics']
      },
      {
        id: '8-4',
        question: 'What is the fetch API in JavaScript?',
        answer: 'fetch() is a modern JavaScript API for making HTTP requests that returns a Promise.',
        code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'javascript', 'http']
      },
      {
        id: '8-5',
        question: 'How do you make a GET request with fetch?',
        answer: 'Call fetch with the URL. By default, fetch uses the GET method.',
        code: `const response = await fetch('https://api.example.com/users');
const data = await response.json();
console.log(data);`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'get', 'javascript']
      },
      {
        id: '8-6',
        question: 'How do you make a POST request with fetch?',
        answer: 'Pass a configuration object with method: "POST" and body containing the data.',
        code: `fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
})
.then(response => response.json())
.then(data => console.log(data));`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'post', 'javascript']
      },
      {
        id: '8-7',
        question: 'What does [ApiController] attribute do?',
        answer: 'Enables automatic model validation, binding source inference, and standardized error responses.',
        code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    // Automatic 400 response for invalid models
    [HttpPost]
    public IActionResult Create(Product product) => Ok(product);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['attributes', 'controller', 'validation']
      },
      {
        id: '8-8',
        question: 'How do you return different HTTP status codes in C# Web API?',
        answer: 'Use methods like Ok() (200), Created() (201), BadRequest() (400), NotFound() (404).',
        code: `[HttpGet("{id}")]
public IActionResult GetById(int id)
{
    var item = items.Find(x => x.Id == id);
    if (item == null)
        return NotFound();
    return Ok(item);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['status-codes', 'responses', 'http']
      },
      {
        id: '8-9',
        question: 'What is model binding in Web API?',
        answer: 'Model binding automatically maps HTTP request data to action method parameters.',
        code: `[HttpPost]
public IActionResult Create([FromBody] Product product)
{
    // product is automatically populated from request body
    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['model-binding', 'parameters', 'data']
      },
      {
        id: '8-10',
        question: 'What are the binding source attributes?',
        answer: '[FromBody], [FromRoute], [FromQuery], [FromHeader], [FromForm] specify where to get parameter values.',
        code: `[HttpGet("{id}")]
public IActionResult Get(
    [FromRoute] int id,
    [FromQuery] string filter,
    [FromHeader] string authorization)
{
    return Ok(new { id, filter, authorization });
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['binding', 'attributes', 'parameters']
      },
      {
        id: '8-11',
        question: 'How do you handle errors in fetch requests?',
        answer: 'Use .catch() for network errors and check response.ok for HTTP errors.',
        code: `fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  })
  .catch(error => console.error('Error:', error));`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'error-handling', 'javascript']
      },
      {
        id: '8-12',
        question: 'What is CORS and why is it important?',
        answer: 'CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access your API.',
        code: `// In Program.cs
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

app.UseCors("AllowAll");`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['cors', 'security', 'configuration']
      },
      {
        id: '8-13',
        question: 'How do you add query parameters to a fetch request?',
        answer: 'Append them to the URL or use URLSearchParams.',
        code: `const params = new URLSearchParams({
  search: 'laptop',
  category: 'electronics',
  limit: 10
});

fetch(\`https://api.example.com/products?\${params}\`)
  .then(response => response.json())
  .then(data => console.log(data));`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'query-params', 'url']
      },
      {
        id: '8-14',
        question: 'What is content negotiation in Web API?',
        answer: 'Content negotiation allows the API to return different formats (JSON, XML) based on Accept header.',
        code: `[HttpGet]
public IActionResult Get()
{
    var data = new { Name = "Product", Price = 99.99 };
    // Returns JSON or XML based on Accept header
    return Ok(data);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['content-negotiation', 'formats', 'headers']
      },
      {
        id: '8-15',
        question: 'How do you add custom headers to a fetch request?',
        answer: 'Pass a headers object in the fetch configuration.',
        code: `fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value'
  }
})
.then(response => response.json());`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'headers', 'authentication']
      },
      {
        id: '8-16',
        question: 'What is dependency injection in Web API?',
        answer: 'DI is a design pattern where dependencies are provided to a class rather than created by it.',
        code: `public class ProductsController : ControllerBase
{
    private readonly IProductService _service;
    
    public ProductsController(IProductService service)
    {
        _service = service;
    }
    
    [HttpGet]
    public IActionResult Get() => Ok(_service.GetAll());
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['dependency-injection', 'design-patterns', 'services']
      },
      {
        id: '8-17',
        question: 'How do you register services for dependency injection?',
        answer: 'Use AddScoped, AddTransient, or AddSingleton in Program.cs.',
        code: `// In Program.cs
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddSingleton<IConfigService, ConfigService>();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['dependency-injection', 'services', 'lifetime']
      },
      {
        id: '8-18',
        question: 'How do you make a DELETE request with fetch?',
        answer: 'Set method to DELETE in the fetch configuration.',
        code: `fetch('https://api.example.com/users/123', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer token123'
  }
})
.then(response => {
  if (response.ok) {
    console.log('Deleted successfully');
  }
});`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'delete', 'http']
      },
      {
        id: '8-19',
        question: 'What is async/await with fetch?',
        answer: 'async/await provides a cleaner syntax for working with Promises.',
        code: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Failed');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['async-await', 'fetch', 'promises']
      },
      {
        id: '8-20',
        question: 'How do you validate models in Web API?',
        answer: 'Use data annotations on model properties. [ApiController] automatically validates.',
        code: `public class Product
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [Range(0.01, 10000)]
    public decimal Price { get; set; }
}

[HttpPost]
public IActionResult Create(Product product)
{
    // Automatically returns 400 if invalid
    return Ok(product);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['validation', 'data-annotations', 'models']
      },
      {
        id: '8-21',
        question: 'What is IActionResult?',
        answer: 'IActionResult is an interface representing the result of an action method.',
        code: `[HttpGet("{id}")]
public IActionResult GetById(int id)
{
    var item = FindItem(id);
    if (item == null)
        return NotFound(); // Returns 404
    return Ok(item); // Returns 200 with data
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['action-result', 'responses', 'return-types']
      },
      {
        id: '8-22',
        question: 'How do you handle PUT requests with fetch?',
        answer: 'Set method to PUT and include the updated data in the body.',
        code: `fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Updated',
    email: 'john.new@example.com'
  })
})
.then(response => response.json());`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'put', 'update']
      },
      {
        id: '8-23',
        question: 'What is routing in Web API?',
        answer: 'Routing maps HTTP requests to controller actions based on URL patterns.',
        code: `[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet] // GET api/products
    [HttpGet("{id}")] // GET api/products/5
    [HttpGet("search/{term}")] // GET api/products/search/laptop
    public IActionResult Search(string term) => Ok();
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['routing', 'urls', 'attributes']
      },
      {
        id: '8-24',
        question: 'How do you return created resources properly?',
        answer: 'Use CreatedAtAction or CreatedAtRoute with the location of the new resource.',
        code: `[HttpPost]
public IActionResult Create(Product product)
{
    product.Id = GenerateId();
    products.Add(product);
    
    return CreatedAtAction(
        nameof(GetById),
        new { id = product.Id },
        product
    );
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['post', 'created', 'status-codes']
      },
      {
        id: '8-25',
        question: 'What is the difference between response.json() and response.text()?',
        answer: 'response.json() parses JSON, response.text() returns plain text. Both return Promises.',
        code: `// For JSON data
const data = await response.json();

// For plain text
const text = await response.text();

// For binary data
const blob = await response.blob();`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['fetch', 'response', 'parsing']
      },
      {
        id: '8-26',
        question: 'How do you implement pagination in Web API?',
        answer: 'Accept page and pageSize parameters, return subset of data with metadata.',
        code: `[HttpGet]
public IActionResult GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
{
    var items = allItems
        .Skip((page - 1) * pageSize)
        .Take(pageSize);
    
    return Ok(new {
        data = items,
        page,
        pageSize,
        total = allItems.Count
    });
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['pagination', 'query-params', 'data']
      },
      {
        id: '8-27',
        question: 'How do you abort a fetch request?',
        answer: 'Use AbortController to cancel fetch requests.',
        code: `const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    }
  });

// Abort the request
controller.abort();`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'abort', 'cancel']
      },
      {
        id: '8-28',
        question: 'What is middleware in ASP.NET Core?',
        answer: 'Middleware are components that handle requests and responses in the pipeline.',
        code: `// In Program.cs
app.UseHttpsRedirection();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['middleware', 'pipeline', 'configuration']
      },
      {
        id: '8-29',
        question: 'How do you handle file uploads in Web API?',
        answer: 'Use IFormFile parameter with [FromForm] attribute.',
        code: `[HttpPost("upload")]
public async Task<IActionResult> Upload([FromForm] IFormFile file)
{
    if (file == null || file.Length == 0)
        return BadRequest("No file uploaded");
    
    var path = Path.Combine("uploads", file.FileName);
    using var stream = new FileStream(path, FileMode.Create);
    await file.CopyToAsync(stream);
    
    return Ok(new { fileName = file.FileName });
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['file-upload', 'forms', 'files']
      },
      {
        id: '8-30',
        question: 'How do you send files with fetch?',
        answer: 'Use FormData to send files in a POST request.',
        code: `const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('description', 'My file');

fetch('https://api.example.com/upload', {
  method: 'POST',
  body: formData
  // Don't set Content-Type, browser sets it automatically
})
.then(response => response.json());`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'formdata', 'file-upload']
      },
      {
        id: '8-31',
        question: 'What is ActionResult<T>?',
        answer: 'ActionResult<T> allows returning either T or IActionResult, providing better type safety.',
        code: `[HttpGet("{id}")]
public ActionResult<Product> GetById(int id)
{
    var product = products.Find(p => p.Id == id);
    if (product == null)
        return NotFound();
    return product; // Implicitly converts to Ok(product)
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['action-result', 'generics', 'return-types']
      },
      {
        id: '8-32',
        question: 'How do you implement filtering in Web API?',
        answer: 'Accept filter parameters in query string and apply them to the data.',
        code: `[HttpGet]
public IActionResult GetAll(
    [FromQuery] string category,
    [FromQuery] decimal? minPrice,
    [FromQuery] decimal? maxPrice)
{
    var query = products.AsQueryable();
    
    if (!string.IsNullOrEmpty(category))
        query = query.Where(p => p.Category == category);
    if (minPrice.HasValue)
        query = query.Where(p => p.Price >= minPrice);
    if (maxPrice.HasValue)
        query = query.Where(p => p.Price <= maxPrice);
    
    return Ok(query.ToList());
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['filtering', 'query-params', 'linq']
      },
      {
        id: '8-33',
        question: 'How do you set a timeout for fetch requests?',
        answer: 'Use AbortController with setTimeout.',
        code: `async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['fetch', 'timeout', 'abort']
      },
      {
        id: '8-34',
        question: 'What is API versioning?',
        answer: 'API versioning allows multiple versions of an API to coexist for backward compatibility.',
        code: `[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    [MapToApiVersion("1.0")]
    public IActionResult GetV1() => Ok("Version 1");
    
    [HttpGet]
    [MapToApiVersion("2.0")]
    public IActionResult GetV2() => Ok("Version 2");
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['versioning', 'api-design', 'routing']
      },
      {
        id: '8-35',
        question: 'How do you handle authentication tokens in fetch?',
        answer: 'Include the token in the Authorization header.',
        code: `const token = localStorage.getItem('authToken');

fetch('https://api.example.com/protected', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json());`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'authentication', 'jwt']
      },
      {
        id: '8-36',
        question: 'What is the difference between AddScoped, AddTransient, and AddSingleton?',
        answer: 'Scoped: per request, Transient: per injection, Singleton: one instance for app lifetime.',
        code: `// Singleton - one instance for entire app
builder.Services.AddSingleton<IConfigService, ConfigService>();

// Scoped - one instance per HTTP request
builder.Services.AddScoped<IUserService, UserService>();

// Transient - new instance every time
builder.Services.AddTransient<IEmailService, EmailService>();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['dependency-injection', 'lifetime', 'services']
      },
      {
        id: '8-37',
        question: 'How do you implement sorting in Web API?',
        answer: 'Accept sort parameters and apply ordering to the query.',
        code: `[HttpGet]
public IActionResult GetAll(
    [FromQuery] string sortBy = "name",
    [FromQuery] string order = "asc")
{
    var query = products.AsQueryable();
    
    query = sortBy.ToLower() switch
    {
        "price" => order == "desc" 
            ? query.OrderByDescending(p => p.Price)
            : query.OrderBy(p => p.Price),
        _ => order == "desc"
            ? query.OrderByDescending(p => p.Name)
            : query.OrderBy(p => p.Name)
    };
    
    return Ok(query.ToList());
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['sorting', 'query-params', 'linq']
      },
      {
        id: '8-38',
        question: 'How do you retry failed fetch requests?',
        answer: 'Implement a retry function with exponential backoff.',
        code: `async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return await response.json();
      throw new Error(\`HTTP \${response.status}\`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, i) * 1000)
      );
    }
  }
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['fetch', 'retry', 'error-handling']
      },
      {
        id: '8-39',
        question: 'What is content type negotiation?',
        answer: 'The API returns different content types (JSON, XML) based on Accept header.',
        code: `// Configure in Program.cs
builder.Services.AddControllers()
    .AddXmlSerializerFormatters();

// Client specifies format
fetch('https://api.example.com/data', {
  headers: {
    'Accept': 'application/json' // or 'application/xml'
  }
});`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['content-negotiation', 'formats', 'headers']
      },
      {
        id: '8-40',
        question: 'How do you implement PATCH in Web API?',
        answer: 'Use JsonPatchDocument for partial updates.',
        code: `[HttpPatch("{id}")]
public IActionResult Patch(int id, [FromBody] JsonPatchDocument<Product> patch)
{
    var product = products.Find(p => p.Id == id);
    if (product == null) return NotFound();
    
    patch.ApplyTo(product);
    return Ok(product);
}

// Client usage
fetch('/api/products/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify([
    { op: 'replace', path: '/price', value: 29.99 }
  ])
});`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['patch', 'partial-update', 'json-patch']
      },
      {
        id: '8-41',
        question: 'How do you handle multiple concurrent fetch requests?',
        answer: 'Use Promise.all() to execute multiple requests in parallel.',
        code: `async function fetchMultiple() {
  try {
    const [users, products, orders] = await Promise.all([
      fetch('https://api.example.com/users').then(r => r.json()),
      fetch('https://api.example.com/products').then(r => r.json()),
      fetch('https://api.example.com/orders').then(r => r.json())
    ]);
    
    return { users, products, orders };
  } catch (error) {
    console.error('One or more requests failed:', error);
  }
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'promises', 'parallel']
      },
      {
        id: '8-42',
        question: 'What is rate limiting in APIs?',
        answer: 'Rate limiting restricts the number of requests a client can make in a time period.',
        code: `// Using AspNetCoreRateLimit package
builder.Services.AddMemoryCache();
builder.Services.Configure<IpRateLimitOptions>(options =>
{
    options.GeneralRules = new List<RateLimitRule>
    {
        new RateLimitRule
        {
            Endpoint = "*",
            Limit = 100,
            Period = "1m"
        }
    };
});`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['rate-limiting', 'security', 'throttling']
      },
      {
        id: '8-43',
        question: 'How do you implement search functionality in Web API?',
        answer: 'Accept a search term and filter data using LINQ.',
        code: `[HttpGet("search")]
public IActionResult Search([FromQuery] string q)
{
    if (string.IsNullOrWhiteSpace(q))
        return BadRequest("Search term required");
    
    var results = products
        .Where(p => p.Name.Contains(q, StringComparison.OrdinalIgnoreCase) ||
                    p.Description.Contains(q, StringComparison.OrdinalIgnoreCase))
        .ToList();
    
    return Ok(results);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['search', 'filtering', 'linq']
      },
      {
        id: '8-44',
        question: 'How do you handle request/response logging?',
        answer: 'Use middleware to log HTTP requests and responses.',
        code: `public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    
    public RequestLoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine(\$"Request: {context.Request.Method} {context.Request.Path}\");
        await _next(context);
        Console.WriteLine(\$"Response: {context.Response.StatusCode}\");
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['middleware', 'logging', 'debugging']
      },
      {
        id: '8-45',
        question: 'How do you implement caching with fetch?',
        answer: 'Use the cache option in fetch or implement manual caching.',
        code: `// Browser cache control
fetch('https://api.example.com/data', {
  cache: 'force-cache' // Use cached version if available
});

// Manual caching
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  const data = await fetch(url).then(r => r.json());
  cache.set(url, data);
  return data;
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'caching', 'performance']
      },
      {
        id: '8-46',
        question: 'What is response compression in Web API?',
        answer: 'Response compression reduces payload size using gzip or brotli.',
        code: `// In Program.cs
builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
    options.Providers.Add<BrotliCompressionProvider>();
    options.Providers.Add<GzipCompressionProvider>();
});

app.UseResponseCompression();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['compression', 'performance', 'optimization']
      },
      {
        id: '8-47',
        question: 'How do you implement health checks in Web API?',
        answer: 'Use built-in health check middleware to monitor API status.',
        code: `// In Program.cs
builder.Services.AddHealthChecks()
    .AddDbContextCheck<AppDbContext>();

app.MapHealthChecks("/health");

// Check endpoint
fetch('https://api.example.com/health')
  .then(response => response.json())
  .then(data => console.log('Health:', data));`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['health-checks', 'monitoring', 'diagnostics']
      },
      {
        id: '8-48',
        question: 'How do you handle OPTIONS requests (preflight)?',
        answer: 'CORS middleware automatically handles OPTIONS preflight requests.',
        code: `// Server handles OPTIONS automatically with CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient", policy =>
    {
        policy.WithOrigins("https://example.com")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Browser sends OPTIONS before actual request
// No action needed in JavaScript`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['cors', 'preflight', 'options']
      },
      {
        id: '8-49',
        question: 'What is the difference between 200 OK and 204 No Content?',
        answer: '200 returns data in response body, 204 indicates success with no content to return.',
        code: `[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    var product = products.Find(p => p.Id == id);
    if (product == null) return NotFound();
    
    products.Remove(product);
    return NoContent(); // 204 - successful deletion, no body
}

[HttpGet("{id}")]
public IActionResult Get(int id)
{
    var product = products.Find(p => p.Id == id);
    return Ok(product); // 200 - returns product data
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['status-codes', 'http', 'responses']
      },
      {
        id: '8-50',
        question: 'How do you implement request validation middleware?',
        answer: 'Create custom middleware to validate requests before they reach controllers.',
        code: `public class ValidationMiddleware
{
    private readonly RequestDelegate _next;
    
    public ValidationMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Method == "POST" && 
            !context.Request.HasJsonContentType())
        {
            context.Response.StatusCode = 415;
            await context.Response.WriteAsync("Content-Type must be application/json");
            return;
        }
        
        await _next(context);
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['middleware', 'validation', 'requests']
      },
      {
        id: '8-51',
        question: 'What is JWT authentication and how do you implement it in Web API?',
        answer: 'JWT (JSON Web Token) is a compact token format for securely transmitting claims. Configure bearer authentication in Program.cs.',
        code: `// Program.cs
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(config["Jwt:Key"]!)),
            ValidateIssuer = true,
            ValidIssuer = config["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = config["Jwt:Audience"]
        };
    });

app.UseAuthentication();
app.UseAuthorization();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['jwt', 'authentication', 'security']
      },
      {
        id: '8-52',
        question: 'How do you generate a JWT token in C#?',
        answer: 'Use JwtSecurityTokenHandler to create and sign a token with claims.',
        code: `public string GenerateToken(string userId, string email)
{
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, userId),
        new Claim(ClaimTypes.Email, email)
    };

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        issuer: _config["Jwt:Issuer"],
        audience: _config["Jwt:Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddHours(1),
        signingCredentials: creds);

    return new JwtSecurityTokenHandler().WriteToken(token);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['jwt', 'token', 'authentication']
      },
      {
        id: '8-53',
        question: 'How do you protect endpoints with [Authorize] in Web API?',
        answer: 'Add [Authorize] to controllers or actions to require authentication. Use [AllowAnonymous] to override.',
        code: `[ApiController]
[Route("api/[controller]")]
[Authorize] // All actions require auth
public class OrdersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll() => Ok(orders);

    [HttpGet("public")]
    [AllowAnonymous] // This one is open
    public IActionResult GetPublic() => Ok("Public data");
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['authorize', 'security', 'authentication']
      },
      {
        id: '8-54',
        question: 'How do you send a JWT token with fetch?',
        answer: 'Store the token and include it in the Authorization header as Bearer.',
        code: `async function fetchProtected(url) {
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    headers: {
      "Authorization": \`Bearer \${token}\`,
      "Content-Type": "application/json"
    }
  });

  if (response.status === 401) {
    // Token expired, redirect to login
    window.location.href = "/login";
    return;
  }

  return await response.json();
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['jwt', 'fetch', 'authorization']
      },
      {
        id: '8-55',
        question: 'What is the Repository pattern in Web API?',
        answer: 'The Repository pattern abstracts data access logic behind an interface, decoupling the controller from the data layer.',
        code: `public interface IProductRepository
{
    Task<IEnumerable<Product>> GetAllAsync();
    Task<Product?> GetByIdAsync(int id);
    Task AddAsync(Product product);
    Task DeleteAsync(int id);
}

public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _db;
    public ProductRepository(AppDbContext db) => _db = db;

    public async Task<IEnumerable<Product>> GetAllAsync() =>
        await _db.Products.ToListAsync();
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['repository-pattern', 'design-patterns', 'data-access']
      },
      {
        id: '8-56',
        question: 'How do you use Entity Framework Core with Web API?',
        answer: 'Install EF Core, create a DbContext, register it in Program.cs, and use it in repositories or controllers.',
        code: `public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Product> Products => Set<Product>();
}

// In Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// In controller
[HttpGet]
public async Task<IActionResult> GetAll()
{
    var products = await _context.Products.ToListAsync();
    return Ok(products);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['entity-framework', 'database', 'ef-core']
      },
      {
        id: '8-57',
        question: 'What is a DTO (Data Transfer Object)?',
        answer: 'A DTO is a plain object used to transfer data between layers, hiding internal model details.',
        code: `// Domain model
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string PasswordHash { get; set; } // Don't expose!
}

// DTO - safe to return to client
public class UserDto
{
    public int Id { get; set; }
    public string Name { get; set; }
}

[HttpGet("{id}")]
public ActionResult<UserDto> GetUser(int id)
{
    var user = _repo.GetById(id);
    return new UserDto { Id = user.Id, Name = user.Name };
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['dto', 'models', 'api-design']
      },
      {
        id: '8-58',
        question: 'How do you use AutoMapper in Web API?',
        answer: 'AutoMapper maps between models and DTOs automatically based on matching property names.',
        code: `// Profile
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Product, ProductDto>();
        CreateMap<CreateProductDto, Product>();
    }
}

// In Program.cs
builder.Services.AddAutoMapper(typeof(MappingProfile));

// In controller
[HttpGet("{id}")]
public ActionResult<ProductDto> Get(int id)
{
    var product = _repo.GetById(id);
    return _mapper.Map<ProductDto>(product);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['automapper', 'dto', 'mapping']
      },
      {
        id: '8-59',
        question: 'How do you use async/await in C# Web API controllers?',
        answer: 'Mark action methods as async Task<IActionResult> and await async operations.',
        code: `[HttpGet]
public async Task<IActionResult> GetAll()
{
    var products = await _productService.GetAllAsync();
    return Ok(products);
}

[HttpPost]
public async Task<IActionResult> Create([FromBody] CreateProductDto dto)
{
    var product = await _productService.CreateAsync(dto);
    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['async-await', 'controllers', 'performance']
      },
      {
        id: '8-60',
        question: 'How do you implement global exception handling in Web API?',
        answer: 'Use UseExceptionHandler middleware or a custom exception filter to catch unhandled exceptions.',
        code: `// Program.cs - minimal approach
app.UseExceptionHandler(appError =>
{
    appError.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var feature = context.Features.Get<IExceptionHandlerFeature>();
        if (feature != null)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 500,
                Message = "Internal Server Error",
                Detail = feature.Error.Message
            });
        }
    });
});`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['exception-handling', 'middleware', 'errors']
      },
      {
        id: '8-61',
        question: 'What is Swagger/OpenAPI and how do you enable it?',
        answer: 'Swagger generates interactive API documentation. Use Swashbuckle to enable it in ASP.NET Core.',
        code: `// Program.cs
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "My API",
        Version = "v1"
    });
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['swagger', 'openapi', 'documentation']
      },
      {
        id: '8-62',
        question: 'How do you read configuration values in Web API?',
        answer: 'Inject IConfiguration or use the Options pattern to read from appsettings.json.',
        code: `// appsettings.json
{
  "AppSettings": {
    "MaxPageSize": 50,
    "ApiKey": "secret"
  }
}

// Using IConfiguration
public class ProductsController : ControllerBase
{
    private readonly IConfiguration _config;
    public ProductsController(IConfiguration config) => _config = config;

    [HttpGet]
    public IActionResult Get()
    {
        var maxSize = _config.GetValue<int>("AppSettings:MaxPageSize");
        return Ok(maxSize);
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['configuration', 'appsettings', 'iconfig']
      },
      {
        id: '8-63',
        question: 'How do you use the Options pattern in Web API?',
        answer: 'Create a settings class, bind it to configuration, and inject IOptions<T> into your services.',
        code: `public class JwtSettings
{
    public string Key { get; set; } = "";
    public string Issuer { get; set; } = "";
}

// Program.cs
builder.Services.Configure<JwtSettings>(
    builder.Configuration.GetSection("JwtSettings"));

// Service
public class TokenService
{
    private readonly JwtSettings _settings;
    public TokenService(IOptions<JwtSettings> options)
        => _settings = options.Value;
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['options-pattern', 'configuration', 'services']
      },
      {
        id: '8-64',
        question: 'How do you intercept fetch requests globally (request interceptor)?',
        answer: 'Wrap fetch in a custom function to add common headers or handle responses globally.',
        code: `const originalFetch = window.fetch;

window.fetch = async function(url, options = {}) {
  const token = localStorage.getItem("token");

  const mergedOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": \`Bearer \${token}\` } : {}),
      ...options.headers
    }
  };

  const response = await originalFetch(url, mergedOptions);

  if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return response;
};`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['fetch', 'interceptor', 'authentication']
      },
      {
        id: '8-65',
        question: 'What is response streaming and how does fetch handle it?',
        answer: 'fetch exposes the response body as a ReadableStream for processing large responses incrementally.',
        code: `async function streamResponse(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    console.log(decoder.decode(value));
  }
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['streaming', 'fetch', 'readablestream']
      },
      {
        id: '8-66',
        question: 'How do you implement role-based authorization in Web API?',
        answer: 'Add roles to JWT claims and use [Authorize(Roles = "...")] on controllers or actions.',
        code: `// Add role claim when creating token
claims.Add(new Claim(ClaimTypes.Role, "Admin"));

// Protect by role
[HttpDelete("{id}")]
[Authorize(Roles = "Admin")]
public IActionResult Delete(int id)
{
    _productService.Delete(id);
    return NoContent();
}

// Multiple roles
[Authorize(Roles = "Admin,Manager")]
public IActionResult Update(int id, Product p) { ... }`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['roles', 'authorization', 'security']
      },
      {
        id: '8-67',
        question: 'What is policy-based authorization in Web API?',
        answer: 'Policies allow complex authorization rules beyond simple role checks.',
        code: `// Program.cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MinAge18", policy =>
        policy.RequireClaim("age", "18", "19", "20"));

    options.AddPolicy("AdminOrManager", policy =>
        policy.RequireRole("Admin", "Manager"));
});

// Controller
[HttpGet("restricted")]
[Authorize(Policy = "MinAge18")]
public IActionResult Restricted() => Ok("Allowed");`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['policy', 'authorization', 'claims']
      },
      {
        id: '8-68',
        question: 'How do you use IHttpClientFactory to call external APIs from Web API?',
        answer: 'Register a named or typed HttpClient and inject it into services.',
        code: `// Program.cs
builder.Services.AddHttpClient("weather", client =>
{
    client.BaseAddress = new Uri("https://api.weather.com/");
    client.DefaultRequestHeaders.Add("Accept", "application/json");
});

// Service
public class WeatherService
{
    private readonly HttpClient _client;

    public WeatherService(IHttpClientFactory factory)
        => _client = factory.CreateClient("weather");

    public async Task<string> GetWeatherAsync(string city)
    {
        var response = await _client.GetAsync($"forecast?city={city}");
        return await response.Content.ReadAsStringAsync();
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['httpclient', 'external-api', 'http']
      },
      {
        id: '8-69',
        question: 'How do you handle concurrent fetch requests with Promise.allSettled()?',
        answer: 'Promise.allSettled() waits for all promises regardless of rejection, returning status for each.',
        code: `async function fetchAll(urls) {
  const results = await Promise.allSettled(
    urls.map(url => fetch(url).then(r => r.json()))
  );

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(\`URL \${i}: success\`, result.value);
    } else {
      console.error(\`URL \${i}: failed\`, result.reason);
    }
  });
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'promise-allsettled', 'error-handling']
      },
      {
        id: '8-70',
        question: 'What is a custom action filter in Web API?',
        answer: 'Action filters run code before or after action methods execute, useful for logging, validation, or modifying results.',
        code: `public class LogActionFilter : IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context)
    {
        Console.WriteLine($"Executing: {context.ActionDescriptor.DisplayName}");
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        Console.WriteLine($"Executed: {context.ActionDescriptor.DisplayName}");
    }
}

// Register globally
builder.Services.AddControllers(options =>
    options.Filters.Add<LogActionFilter>());`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['action-filters', 'middleware', 'logging']
      },
      {
        id: '8-71',
        question: 'How do you implement soft delete in Web API?',
        answer: 'Add an IsDeleted flag to the model and filter it in queries instead of removing from the database.',
        code: `public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsDeleted { get; set; } = false;
}

[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    var product = await _db.Products.FindAsync(id);
    if (product == null) return NotFound();
    product.IsDeleted = true;
    await _db.SaveChangesAsync();
    return NoContent();
}

// Query - always exclude deleted
var active = await _db.Products
    .Where(p => !p.IsDeleted)
    .ToListAsync();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['soft-delete', 'database', 'patterns']
      },
      {
        id: '8-72',
        question: 'How do you read a JSON response body only once with fetch?',
        answer: 'Response bodies can only be consumed once. Use response.clone() if you need to read the body multiple times.',
        code: `async function fetchAndLog(url) {
  const response = await fetch(url);

  // Clone before consuming
  const clone = response.clone();

  // Log raw text
  const text = await clone.text();
  console.log("Raw:", text);

  // Parse original as JSON
  const data = await response.json();
  return data;
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'response-body', 'clone']
      },
      {
        id: '8-73',
        question: 'What is minimal API in ASP.NET Core?',
        answer: 'Minimal APIs define routes and handlers directly in Program.cs without controllers.',
        code: `var app = builder.Build();

app.MapGet("/api/products", async (AppDbContext db) =>
    await db.Products.ToListAsync());

app.MapGet("/api/products/{id}", async (int id, AppDbContext db) =>
    await db.Products.FindAsync(id) is Product p
        ? Results.Ok(p)
        : Results.NotFound());

app.MapPost("/api/products", async (Product product, AppDbContext db) =>
{
    db.Products.Add(product);
    await db.SaveChangesAsync();
    return Results.Created($"/api/products/{product.Id}", product);
});`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['minimal-api', 'aspnet', 'routing']
      },
      {
        id: '8-74',
        question: 'How do you implement cursor-based pagination?',
        answer: 'Cursor pagination uses a pointer (last seen ID) instead of page numbers, improving performance on large datasets.',
        code: `[HttpGet]
public async Task<IActionResult> GetAll(
    [FromQuery] int? lastId,
    [FromQuery] int limit = 20)
{
    var query = _db.Products.OrderBy(p => p.Id);

    if (lastId.HasValue)
        query = (IOrderedQueryable<Product>)query
            .Where(p => p.Id > lastId.Value);

    var items = await query.Take(limit).ToListAsync();
    var nextCursor = items.LastOrDefault()?.Id;

    return Ok(new { items, nextCursor });
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['pagination', 'cursor', 'performance']
      },
      {
        id: '8-75',
        question: 'How do you send a PATCH request with fetch using JSON Patch?',
        answer: 'Send an array of JSON Patch operations with Content-Type application/json-patch+json.',
        code: `const patch = [
  { op: "replace", path: "/name", value: "New Name" },
  { op: "add",     path: "/tags/-", value: "new-tag" },
  { op: "remove",  path: "/oldField" }
];

const response = await fetch('/api/products/5', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json-patch+json'
  },
  body: JSON.stringify(patch)
});

const updated = await response.json();`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['patch', 'json-patch', 'fetch']
      },
      {
        id: '8-76',
        question: 'What is ILogger and how do you use it in Web API?',
        answer: 'ILogger<T> is the built-in logging interface. Inject it into controllers or services.',
        code: `public class ProductsController : ControllerBase
{
    private readonly ILogger<ProductsController> _logger;

    public ProductsController(ILogger<ProductsController> logger)
        => _logger = logger;

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        _logger.LogInformation("Getting product {Id}", id);
        var product = _service.GetById(id);
        if (product == null)
        {
            _logger.LogWarning("Product {Id} not found", id);
            return NotFound();
        }
        return Ok(product);
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['logging', 'ilogger', 'debugging']
      },
      {
        id: '8-77',
        question: 'How do you use Server-Sent Events (SSE) with fetch?',
        answer: 'Use EventSource for SSE, or fetch with a ReadableStream for custom streaming.',
        code: `// Using EventSource (simpler)
const eventSource = new EventSource('/api/events');
eventSource.onmessage = (e) => console.log('Event:', e.data);
eventSource.onerror = () => eventSource.close();

// Using fetch for streaming
const response = await fetch('/api/stream');
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(decoder.decode(value));
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['sse', 'streaming', 'real-time']
      },
      {
        id: '8-78',
        question: 'What is output caching in ASP.NET Core Web API?',
        answer: 'Output caching stores HTTP responses and serves them from cache for subsequent identical requests.',
        code: `// Program.cs
builder.Services.AddOutputCache(options =>
{
    options.AddBasePolicy(builder => builder.Cache());
});
app.UseOutputCache();

// Controller
[HttpGet]
[OutputCache(Duration = 60)] // Cache for 60 seconds
public async Task<IActionResult> GetAll()
{
    var products = await _db.Products.ToListAsync();
    return Ok(products);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['caching', 'output-cache', 'performance']
      },
      {
        id: '8-79',
        question: 'How do you build a reusable fetch hook for React-style usage?',
        answer: 'Wrap fetch in a function that manages loading/error/data state and returns them.',
        code: `async function useFetch(url, options = {}) {
  let data = null, error = null, loading = true;

  try {
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    data = await response.json();
  } catch (e) {
    error = e;
  } finally {
    loading = false;
  }

  return { data, error, loading };
}

const { data, error } = await useFetch('/api/products');`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'reusable', 'patterns']
      },
      {
        id: '8-80',
        question: 'What is a background service in ASP.NET Core?',
        answer: 'Background services run long-running tasks in the background using IHostedService or BackgroundService.',
        code: `public class DataSyncService : BackgroundService
{
    private readonly ILogger<DataSyncService> _logger;

    public DataSyncService(ILogger<DataSyncService> logger)
        => _logger = logger;

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Syncing data...");
            await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);
        }
    }
}

// Program.cs
builder.Services.AddHostedService<DataSyncService>();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['background-service', 'hosted-service', 'tasks']
      },
      {
        id: '8-81',
        question: 'How do you add XML support to a Web API response?',
        answer: 'Call AddXmlSerializerFormatters() and the client sets Accept: application/xml.',
        code: `// Program.cs
builder.Services.AddControllers()
    .AddXmlSerializerFormatters();

// Client request
fetch('/api/products', {
  headers: { 'Accept': 'application/xml' }
})
.then(res => res.text())
.then(xml => console.log(xml));`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'easy',
        tags: ['xml', 'content-negotiation', 'formatters']
      },
      {
        id: '8-82',
        question: 'How do you implement a custom result type (IActionResult) in Web API?',
        answer: 'Implement IActionResult and override ExecuteResultAsync to write a custom response.',
        code: `public class CsvResult : IActionResult
{
    private readonly IEnumerable<string[]> _rows;
    public CsvResult(IEnumerable<string[]> rows) => _rows = rows;

    public async Task ExecuteResultAsync(ActionContext context)
    {
        context.HttpContext.Response.ContentType = "text/csv";
        await using var writer = new StreamWriter(context.HttpContext.Response.Body);
        foreach (var row in _rows)
            await writer.WriteLineAsync(string.Join(",", row));
    }
}

[HttpGet("export")]
public IActionResult Export() =>
    new CsvResult(new[] { new[] { "Id", "Name" }, new[] { "1", "Apple" } });`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['custom-result', 'iactionresult', 'responses']
      },
      {
        id: '8-83',
        question: 'How do you use fetch with cookies (credentials)?',
        answer: 'Set credentials option to include, same-origin, or omit to control cookie sending.',
        code: `// Include cookies in cross-origin requests
fetch('https://api.example.com/user', {
  credentials: 'include'
});

// Same-origin only (default in older browsers)
fetch('/api/profile', {
  credentials: 'same-origin'
});

// Never send cookies
fetch('https://api.example.com/public', {
  credentials: 'omit'
});`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'credentials', 'cookies']
      },
      {
        id: '8-84',
        question: 'What is the difference between 401 Unauthorized and 403 Forbidden?',
        answer: '401 means authentication is required or failed. 403 means the user is authenticated but lacks permission.',
        code: `[HttpGet("admin-only")]
public IActionResult AdminOnly()
{
    // 401 - if no token / invalid token (handled by middleware)
    // 403 - if valid token but wrong role
    if (!User.IsInRole("Admin"))
        return Forbid(); // 403

    return Ok("Admin data");
}

// 401 fetch handling
if (response.status === 401) redirect("/login");
if (response.status === 403) showError("Access denied");`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['status-codes', 'authentication', 'authorization']
      },
      {
        id: '8-85',
        question: 'How do you implement distributed caching with Redis in Web API?',
        answer: 'Use IDistributedCache backed by Redis for caching shared across multiple server instances.',
        code: `// Program.cs
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "localhost:6379";
});

// Service
public async Task<Product?> GetProductAsync(int id)
{
    var key = $"product:{id}";
    var cached = await _cache.GetStringAsync(key);
    if (cached != null) return JsonSerializer.Deserialize<Product>(cached);

    var product = await _db.Products.FindAsync(id);
    if (product != null)
        await _cache.SetStringAsync(key,
            JsonSerializer.Serialize(product),
            new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
            });
    return product;
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['redis', 'caching', 'distributed']
      },
      {
        id: '8-86',
        question: 'How do you track upload progress with fetch?',
        answer: 'fetch does not natively support upload progress. Use XMLHttpRequest for progress events.',
        code: `function uploadWithProgress(url, file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        onProgress(percent);
      }
    });

    xhr.addEventListener("load", () => resolve(xhr.response));
    xhr.addEventListener("error", reject);

    xhr.open("POST", url);
    const formData = new FormData();
    formData.append("file", file);
    xhr.send(formData);
  });
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['upload', 'progress', 'xhr']
      },
      {
        id: '8-87',
        question: 'What is SignalR and when would you use it over fetch?',
        answer: 'SignalR provides real-time bidirectional communication over WebSockets. Use it for live notifications, chat, or dashboards instead of polling with fetch.',
        code: `// Server (Hub)
public class ChatHub : Hub
{
    public async Task SendMessage(string user, string message)
    {
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
}

// Client (JavaScript)
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

connection.on("ReceiveMessage", (user, msg) =>
    console.log(\`\${user}: \${msg}\`));

await connection.start();
await connection.invoke("SendMessage", "Alice", "Hello!");`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['signalr', 'websockets', 'real-time']
      },
      {
        id: '8-88',
        question: 'How do you implement HATEOAS in Web API?',
        answer: 'HATEOAS includes hypermedia links in responses to guide clients to possible next actions.',
        code: `[HttpGet("{id}")]
public IActionResult GetById(int id)
{
    var product = _repo.GetById(id);
    if (product == null) return NotFound();

    var response = new
    {
        product.Id,
        product.Name,
        product.Price,
        links = new[]
        {
            new { rel = "self",   href = $"/api/products/{id}", method = "GET"    },
            new { rel = "update", href = $"/api/products/{id}", method = "PUT"    },
            new { rel = "delete", href = $"/api/products/{id}", method = "DELETE" }
        }
    };

    return Ok(response);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['hateoas', 'api-design', 'hypermedia']
      },
      {
        id: '8-89',
        question: 'How do you validate environment-specific configuration on startup?',
        answer: 'Use IStartupFilter or validate IOptions<T> on startup to catch misconfigurations early.',
        code: `public class DatabaseSettings
{
    [Required]
    public string ConnectionString { get; set; } = "";
    
    [Range(1, 100)]
    public int MaxPoolSize { get; set; } = 10;
}

// Program.cs - validate on startup
builder.Services
    .AddOptions<DatabaseSettings>()
    .Bind(builder.Configuration.GetSection("Database"))
    .ValidateDataAnnotations()
    .ValidateOnStart();`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['configuration', 'validation', 'startup']
      },
      {
        id: '8-90',
        question: 'How do you implement optimistic concurrency in Web API?',
        answer: 'Use ETags or a RowVersion column. The client sends the ETag back; if it changed, return 412 Precondition Failed.',
        code: `[HttpPut("{id}")]
public async Task<IActionResult> Update(
    int id,
    [FromBody] Product product,
    [FromHeader(Name = "If-Match")] string? etag)
{
    var existing = await _db.Products.FindAsync(id);
    if (existing == null) return NotFound();

    var currentEtag = $"\"{existing.RowVersion}\"";
    if (etag != null && etag != currentEtag)
        return StatusCode(412, "Resource was modified");

    existing.Name = product.Name;
    await _db.SaveChangesAsync();
    Response.Headers["ETag"] = $"\"{existing.RowVersion}\"";
    return Ok(existing);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['concurrency', 'etag', 'optimistic-locking']
      },
      {
        id: '8-91',
        question: 'How do you batch multiple API requests into one with fetch?',
        answer: 'Use Promise.all for parallel requests or call a batch endpoint that accepts multiple operations.',
        code: `// Parallel fetch (client-side batching)
async function batchFetch(ids) {
  const requests = ids.map(id =>
    fetch(\`/api/products/\${id}\`).then(r => r.json())
  );
  return await Promise.all(requests);
}

// Server-side batch endpoint
// POST /api/products/batch
// Body: { ids: [1, 2, 3] }
[HttpPost("batch")]
public async Task<IActionResult> Batch([FromBody] BatchRequest req)
{
    var products = await _db.Products
        .Where(p => req.Ids.Contains(p.Id))
        .ToListAsync();
    return Ok(products);
}`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['batch', 'fetch', 'performance']
      },
      {
        id: '8-92',
        question: 'What is the difference between IActionResult and ActionResult<T>?',
        answer: 'IActionResult can return any result type. ActionResult<T> constrains the success type, enabling better Swagger docs and type inference.',
        code: `// IActionResult - flexible but no type info
[HttpGet("{id}")]
public IActionResult GetFlexible(int id)
{
    var p = _repo.Get(id);
    return p == null ? NotFound() : Ok(p);
}

// ActionResult<T> - type-safe success response
[HttpGet("{id}")]
public ActionResult<Product> GetTyped(int id)
{
    var p = _repo.Get(id);
    if (p == null) return NotFound();
    return p; // Implicit Ok(p)
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['action-result', 'return-types', 'swagger']
      },
      {
        id: '8-93',
        question: 'How do you implement API key authentication in Web API?',
        answer: 'Create middleware or an attribute that checks a custom header for a valid API key.',
        code: `public class ApiKeyMiddleware
{
    private readonly RequestDelegate _next;
    private const string API_KEY_HEADER = "X-Api-Key";

    public ApiKeyMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context, IConfiguration config)
    {
        if (!context.Request.Headers.TryGetValue(API_KEY_HEADER, out var key) ||
            key != config["ApiKey"])
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("Invalid API Key");
            return;
        }
        await _next(context);
    }
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['api-key', 'authentication', 'middleware']
      },
      {
        id: '8-94',
        question: 'How do you cancel a fetch request when a component unmounts?',
        answer: 'Use AbortController and call abort() in a cleanup function.',
        code: `function loadData(elementId) {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json())
    .then(data => {
      document.getElementById(elementId).textContent = JSON.stringify(data);
    })
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err);
    });

  // Return cleanup function
  return () => controller.abort();
}

const cleanup = loadData("output");
// Later...
cleanup(); // Cancels the request`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['fetch', 'abort', 'cleanup']
      },
      {
        id: '8-95',
        question: 'What is problem details (RFC 7807) and how do you return it?',
        answer: 'Problem Details is a standardized error response format. ASP.NET Core returns it automatically with [ApiController].',
        code: `// Auto-generated by [ApiController] for 400+ errors
// {
//   "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
//   "title": "One or more validation errors occurred.",
//   "status": 400,
//   "errors": { "Name": ["The Name field is required."] }
// }

// Custom problem details
[HttpGet("{id}")]
public IActionResult Get(int id)
{
    if (id <= 0)
        return Problem(
            title: "Invalid ID",
            detail: "ID must be a positive integer",
            statusCode: 400,
            type: "https://example.com/errors/invalid-id");
    return Ok(_repo.Get(id));
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'medium',
        tags: ['problem-details', 'error-format', 'rfc7807']
      },
      {
        id: '8-96',
        question: 'How do you version a Web API using URL path versioning?',
        answer: 'Include version in the route template and use [ApiVersion] attribute.',
        code: `// Install: Microsoft.AspNetCore.Mvc.Versioning
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
});

[ApiController]
[Route("api/v{version:apiVersion}/products")]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
public class ProductsController : ControllerBase
{
    [HttpGet, MapToApiVersion("1.0")]
    public IActionResult GetV1() => Ok("V1 response");

    [HttpGet, MapToApiVersion("2.0")]
    public IActionResult GetV2() => Ok(new { version = 2, data = "V2 response" });
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['versioning', 'routing', 'api-design']
      },
      {
        id: '8-97',
        question: 'How do you implement idempotent POST requests in Web API?',
        answer: 'Use an idempotency key header to prevent duplicate processing of the same request.',
        code: `[HttpPost]
public async Task<IActionResult> CreateOrder(
    [FromBody] CreateOrderDto dto,
    [FromHeader(Name = "Idempotency-Key")] string? idempotencyKey)
{
    if (idempotencyKey != null)
    {
        var existing = await _cache.GetAsync<Order>(idempotencyKey);
        if (existing != null) return Ok(existing); // Return cached result
    }

    var order = await _orderService.CreateAsync(dto);

    if (idempotencyKey != null)
        await _cache.SetAsync(idempotencyKey, order,
            TimeSpan.FromHours(24));

    return CreatedAtAction(nameof(GetById), new { id = order.Id }, order);
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['idempotency', 'post', 'api-design']
      },
      {
        id: '8-98',
        question: 'How do you implement server-side request deduplication with fetch?',
        answer: 'Cache in-flight promises by URL so duplicate concurrent requests share the same response.',
        code: `const inFlight = new Map();

async function deduplicatedFetch(url) {
  if (inFlight.has(url)) {
    return inFlight.get(url); // Return same promise
  }

  const promise = fetch(url)
    .then(r => r.json())
    .finally(() => inFlight.delete(url));

  inFlight.set(url, promise);
  return promise;
}

// Two calls at the same time — only one HTTP request made
deduplicatedFetch('/api/products');
deduplicatedFetch('/api/products');`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['deduplication', 'fetch', 'performance']
      },
      {
        id: '8-99',
        question: 'What is the Unit of Work pattern in Web API?',
        answer: 'Unit of Work groups multiple database operations into a single transaction that succeeds or fails together.',
        code: `public interface IUnitOfWork : IDisposable
{
    IProductRepository Products { get; }
    IOrderRepository Orders { get; }
    Task<int> SaveChangesAsync();
}

public class UnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _db;
    public IProductRepository Products { get; }
    public IOrderRepository Orders { get; }

    public UnitOfWork(AppDbContext db)
    {
        _db = db;
        Products = new ProductRepository(db);
        Orders   = new OrderRepository(db);
    }

    public Task<int> SaveChangesAsync() => _db.SaveChangesAsync();
    public void Dispose() => _db.Dispose();
}`,
        language: 'csharp',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['unit-of-work', 'design-patterns', 'transactions']
      },
      {
        id: '8-100',
        question: 'How do you implement a circuit breaker for fetch requests?',
        answer: 'A circuit breaker stops calling a failing service after a threshold, returning errors immediately until a recovery period passes.',
        code: `class CircuitBreaker {
  constructor(threshold = 3, timeout = 10000) {
    this.failures = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.state = "closed"; // closed | open | half-open
    this.nextAttempt = Date.now();
  }

  async call(fn) {
    if (this.state === "open") {
      if (Date.now() < this.nextAttempt)
        throw new Error("Circuit is OPEN");
      this.state = "half-open";
    }

    try {
      const result = await fn();
      this.failures = 0;
      this.state = "closed";
      return result;
    } catch (e) {
      this.failures++;
      if (this.failures >= this.threshold) {
        this.state = "open";
        this.nextAttempt = Date.now() + this.timeout;
      }
      throw e;
    }
  }
}

const breaker = new CircuitBreaker();
await breaker.call(() =>
  fetch('/api/products').then(r => r.json())
);`,
        language: 'javascript',
        category: 'Web API',
        difficulty: 'hard',
        tags: ['circuit-breaker', 'resilience', 'error-handling']
      }
    ]
  },
  {
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
  }
];
