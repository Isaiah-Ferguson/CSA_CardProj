import { Deck } from '@/types/flashcard';

export const decks: Deck[] = [
  {
    id: '1',
    name: 'JavaScript Fundamentals',
    description: 'Core JavaScript concepts every developer should know',
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
    description: 'Essential CSS and HTML concepts for web development',
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
    description: 'Essential EF Core concepts for database operations',
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
  }
];
