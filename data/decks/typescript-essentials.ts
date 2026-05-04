import { Deck } from '@/types/flashcard';

export const typescriptEssentials: Deck = {
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
    },
    {
      id: '3-51',
      question: 'What is a function type in TypeScript?',
      answer: 'A function type defines the signature of a function including parameter types and return type.',
      code: `type Greet = (name: string) => string;

const greet: Greet = (name) => \`Hello, \${name}\`;

// Inline function type
function run(callback: (x: number) => void): void {
  callback(42);
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['function', 'types', 'signatures']
    },
    {
      id: '3-52',
      question: 'What is a class in TypeScript?',
      answer: 'TypeScript classes support OOP with typed properties, constructors, access modifiers, and inheritance.',
      code: `class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return \`\${this.name} makes a sound.\`;
  }
}

const dog = new Animal("Rex");
dog.speak(); // "Rex makes a sound."`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['class', 'oop', 'basics']
    },
    {
      id: '3-53',
      question: 'What are access modifiers in TypeScript?',
      answer: 'Access modifiers control visibility: public (default, anywhere), private (same class), protected (class + subclasses).',
      code: `class Person {
  public name: string;
  private age: number;
  protected id: string;

  constructor(name: string, age: number, id: string) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  getAge(): number { return this.age; } // ok inside class
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['access-modifiers', 'class', 'oop']
    },
    {
      id: '3-54',
      question: 'What is the Array type in TypeScript?',
      answer: 'Arrays can be typed using T[] or Array<T> syntax. Both are equivalent.',
      code: `const nums: number[] = [1, 2, 3];
const strs: Array<string> = ["a", "b", "c"];

// Read-only array
const readOnly: ReadonlyArray<number> = [1, 2, 3];
// readOnly.push(4); // Error

// Tuple (fixed-length)
const pair: [string, number] = ["Alice", 30];`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['arrays', 'types', 'basics']
    },
    {
      id: '3-55',
      question: 'What is the object type in TypeScript?',
      answer: 'object represents any non-primitive type. Use interface or type alias to describe object shapes.',
      code: `// object type (broad — avoid if possible)
let obj: object = { name: "Alice" };

// Better: typed shape
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30
};

// With interface
interface Product { id: number; name: string; }
const p: Product = { id: 1, name: "Widget" };`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['object', 'types', 'shapes']
    },
    {
      id: '3-56',
      question: 'How do you type function parameters with defaults in TypeScript?',
      answer: 'Default parameters are inferred from the default value. You can also explicitly type them.',
      code: `function greet(name: string = "Guest", times: number = 1): string {
  return \`\${name} (x\${times})\`;
}

greet();              // "Guest (x1)"
greet("Alice");       // "Alice (x1)"
greet("Bob", 3);      // "Bob (x3)"`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['defaults', 'parameters', 'functions']
    },
    {
      id: '3-57',
      question: 'What is a rest parameter in TypeScript?',
      answer: 'Rest parameters collect multiple arguments into a typed array using ...args syntax.',
      code: `function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);    // 6
sum(10, 20);     // 30

// With leading params
function log(level: string, ...msgs: string[]): void {
  msgs.forEach(m => console.log(\`[\${level}] \${m}\`));
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['rest', 'parameters', 'functions']
    },
    {
      id: '3-58',
      question: 'How do you type async functions in TypeScript?',
      answer: 'Async functions return Promise<T>. The return type annotation should use Promise<T>.',
      code: `async function fetchUser(id: number): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json() as Promise<User>;
}

// Arrow function
const getCount = async (): Promise<number> => {
  const data = await fetchData();
  return data.count;
};`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['async', 'promise', 'functions']
    },
    {
      id: '3-59',
      question: 'What is the boolean type in TypeScript?',
      answer: 'boolean represents true/false values. TypeScript also supports boolean literal types.',
      code: `let isActive: boolean = true;
let isLoggedIn: boolean = false;

// Boolean literal type
type YesNo = true | false; // same as boolean
type OnlyTrue = true;

function toggle(value: boolean): boolean {
  return !value;
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['boolean', 'types', 'primitives']
    },
    {
      id: '3-60',
      question: 'What is the number type in TypeScript?',
      answer: 'number represents all numeric values (integer, float, hex, octal, binary). TypeScript has no int vs float distinction.',
      code: `let decimal: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const roll: DiceRoll = 4;`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['number', 'types', 'primitives']
    },
    {
      id: '3-61',
      question: 'What is the string type in TypeScript?',
      answer: 'string represents text. TypeScript supports template literals and string literal types.',
      code: `let name: string = "Alice";
let greeting: string = \`Hello, \${name}\`;

// String literal types
type Direction = "north" | "south" | "east" | "west";
let dir: Direction = "north";

// Template literal types
type EventName = \`on\${string}\`;
let handler: EventName = "onClick"; // ok`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['string', 'types', 'literals']
    },
    {
      id: '3-62',
      question: 'What is the typeof operator in TypeScript?',
      answer: 'typeof can be used as a type guard at runtime and as a type query operator at compile time.',
      code: `// Runtime type guard
function double(x: string | number) {
  if (typeof x === "string") return x.repeat(2);
  return x * 2;
}

// Compile-time type query
const point = { x: 10, y: 20 };
type Point = typeof point; // { x: number; y: number }

function clone(p: typeof point) { return { ...p }; }`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['typeof', 'type-guard', 'operators']
    },
    {
      id: '3-63',
      question: 'What is the keyof operator in TypeScript?',
      answer: 'keyof produces a union of all property keys of a type.',
      code: `interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Alice", email: "a@b.com" };
getProperty(user, "name"); // "Alice"`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['keyof', 'types', 'operators']
    },
    {
      id: '3-64',
      question: 'What are overloads in TypeScript?',
      answer: 'Function overloads let you define multiple signatures for a function to handle different argument combinations.',
      code: `function format(value: string): string;
function format(value: number, decimals: number): string;
function format(value: string | number, decimals?: number): string {
  if (typeof value === "string") return value.trim();
  return value.toFixed(decimals ?? 2);
}

format("hello ");   // "hello"
format(3.14159, 2); // "3.14"`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['overloads', 'functions', 'signatures']
    },
    {
      id: '3-65',
      question: 'What is a getter and setter in TypeScript?',
      answer: 'get and set accessors define computed properties on classes with optional type checking.',
      code: `class Circle {
  private _radius: number = 0;

  get radius(): number { return this._radius; }
  set radius(value: number) {
    if (value < 0) throw new Error("Radius must be positive");
    this._radius = value;
  }
  get area(): number { return Math.PI * this._radius ** 2; }
}

const c = new Circle();
c.radius = 5;
console.log(c.area); // 78.54`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['getter', 'setter', 'class']
    },
    {
      id: '3-66',
      question: 'What is inheritance in TypeScript?',
      answer: 'Classes extend another class with extends. Use super() to call the parent constructor.',
      code: `class Animal {
  constructor(public name: string) {}
  move(distance: number): void {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

class Dog extends Animal {
  bark(): void { console.log("Woof!"); }
  // Override
  move(distance: number = 5): void {
    console.log("Dog is running...");
    super.move(distance);
  }
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['inheritance', 'extends', 'oop']
    },
    {
      id: '3-67',
      question: 'What is an abstract class in TypeScript?',
      answer: 'Abstract classes cannot be instantiated directly. They can define abstract methods that subclasses must implement.',
      code: `abstract class Shape {
  abstract area(): number;      // must implement
  describe(): string {          // concrete method
    return \`Area: \${this.area()}\`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
}

// new Shape(); // Error: abstract class`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['abstract', 'class', 'oop']
    },
    {
      id: '3-68',
      question: 'How do interfaces extend other interfaces in TypeScript?',
      answer: 'Interfaces use extends to inherit from one or more other interfaces.',
      code: `interface Named { name: string; }
interface Aged  { age: number; }

interface Person extends Named, Aged {
  email: string;
}

const p: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['interface', 'extends', 'inheritance']
    },
    {
      id: '3-69',
      question: 'What is declaration merging in TypeScript?',
      answer: 'TypeScript merges multiple interface declarations with the same name into one — useful for augmenting types.',
      code: `interface Window {
  myCustomProp: string;
}

// Both declarations are merged
interface Window {
  anotherProp: number;
}

// Window now has: myCustomProp, anotherProp (+ existing browser props)
window.myCustomProp = "hello";

// Works for augmenting third-party types too
declare module "express" {
  interface Request { user?: User; }
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['declaration-merging', 'interfaces', 'augmentation']
    },
    {
      id: '3-70',
      question: 'What is a const enum in TypeScript?',
      answer: 'const enum is fully inlined at compile time — enum references are replaced with their literal values, producing no runtime code.',
      code: `const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

const move = Direction.Up;
// Compiles to: const move = "UP";
// No Direction object exists at runtime

// Regular enum (creates a runtime object)
enum Status { Active = 1, Inactive = 0 }
console.log(Status[1]); // "Active" (reverse mapping)`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['const-enum', 'enum', 'performance']
    },
    {
      id: '3-71',
      question: 'What is a type-only import in TypeScript?',
      answer: 'import type imports only type information, erased at compile time with no runtime cost.',
      code: `// Only a type — erased at runtime
import type { User } from './types';
import type { Deck } from '@/types/flashcard';

// Mixed import
import { createUser, type UserRole } from './user';

// Why it matters
// Prevents accidental value import when you only need a type
// Faster builds (no runtime module evaluation needed)`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['import-type', 'imports', 'modules']
    },
    {
      id: '3-72',
      question: 'What is a namespace import in TypeScript?',
      answer: '* as ns imports all named exports from a module under a single namespace object.',
      code: `// math.ts
export const PI = 3.14;
export function add(a: number, b: number) { return a + b; }
export function multiply(a: number, b: number) { return a * b; }

// main.ts
import * as math from './math';

console.log(math.PI);             // 3.14
console.log(math.add(2, 3));      // 5
console.log(math.multiply(4, 5)); // 20`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['namespace-import', 'modules', 'imports']
    },
    {
      id: '3-73',
      question: 'What is the strict mode in TypeScript?',
      answer: 'strict in tsconfig.json enables a family of strict type checks including strictNullChecks, noImplicitAny, and others.',
      code: `// tsconfig.json
{
  "compilerOptions": {
    "strict": true
    // Enables all of:
    // strictNullChecks, noImplicitAny,
    // strictFunctionTypes, strictPropertyInitialization,
    // strictBindCallApply, noImplicitThis,
    // useUnknownInCatchVariables
  }
}

// With strict: variable must be initialized
class Service {
  name: string = "default"; // must initialize
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['strict', 'tsconfig', 'compiler']
    },
    {
      id: '3-74',
      question: 'What is the difference between undefined and null in TypeScript?',
      answer: 'undefined is an uninitialized value; null is an intentional absence. With strictNullChecks, neither is assignable to other types.',
      code: `// strictNullChecks: true
let a: string = "hello";
// a = null;      // Error
// a = undefined; // Error

let b: string | null = null;      // explicit nullable
let c: string | undefined;        // may not be set

// Optional vs nullable
function f(x?: string) {}  // x is string | undefined
function g(x: string | null) {} // x is string | null`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['null', 'undefined', 'strict']
    },
    {
      id: '3-75',
      question: 'What is the object spread type in TypeScript?',
      answer: 'Spreading objects merges their properties. TypeScript infers the resulting type from all spread sources.',
      code: `const base = { a: 1, b: 2 };
const extra = { c: 3, d: 4 };
const merged = { ...base, ...extra }; // { a:1, b:2, c:3, d:4 }

// Override property
const updated = { ...base, b: 99 }; // { a:1, b:99 }

// Function usage
function withDefaults<T>(opts: Partial<T>, defaults: T): T {
  return { ...defaults, ...opts };
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'easy',
      tags: ['spread', 'objects', 'types']
    },
    {
      id: '3-76',
      question: 'What are template literal types in TypeScript?',
      answer: 'Template literal types construct new string types by combining literal types using template literal syntax.',
      code: `type Color = "red" | "blue";
type Size  = "sm" | "md" | "lg";
type ClassName = \`\${Color}-\${Size}\`; // "red-sm" | "red-md" | ... | "blue-lg"

// EventMap pattern
type EventNames = "click" | "focus" | "blur";
type Handlers = { [K in EventNames as \`on\${Capitalize<K>}\`]: () => void };
// { onClick: ..., onFocus: ..., onBlur: ... }`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['template-literal-types', 'advanced', 'types']
    },
    {
      id: '3-77',
      question: 'What are recursive types in TypeScript?',
      answer: 'Recursive types reference themselves, useful for tree structures, deeply nested objects, and JSON-like data.',
      code: `type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};

const tree: TreeNode<string> = {
  value: "root",
  children: [
    { value: "child1", children: [] },
    { value: "child2", children: [{ value: "leaf", children: [] }] }
  ]
};`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['recursive', 'types', 'advanced']
    },
    {
      id: '3-78',
      question: 'What is the Awaited<T> utility type and how does it differ from Promise unwrapping?',
      answer: 'Awaited<T> recursively unwraps nested Promises, handling Promise<Promise<T>> chains. Essential for accurate async return types.',
      code: `type A = Awaited<Promise<string>>;                  // string
type B = Awaited<Promise<Promise<number>>>;           // number (recursive!)
type C = Awaited<string>;                             // string (non-promise passthrough)

// Without Awaited - wrong type
async function getUser(): Promise<User> { /* ... */ }
type Wrong = ReturnType<typeof getUser>;  // Promise<User>
type Right = Awaited<ReturnType<typeof getUser>>; // User`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['awaited', 'promises', 'utility']
    },
    {
      id: '3-79',
      question: 'What is a distributive conditional type?',
      answer: 'When a conditional type is applied to a union type, it distributes over each member of the union.',
      code: `// Distributes over union
type ToArray<T> = T extends unknown ? T[] : never;
type A = ToArray<string | number>; // string[] | number[]

// Prevent distribution with brackets
type ToArrayNonDist<T> = [T] extends [unknown] ? T[] : never;
type B = ToArrayNonDist<string | number>; // (string | number)[]

// Practical: filter union members
type NonNullable<T> = T extends null | undefined ? never : T;
type C = NonNullable<string | null | number>; // string | number`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['conditional', 'distributive', 'advanced']
    },
    {
      id: '3-80',
      question: 'What is variance in TypeScript generics?',
      answer: 'TypeScript 4.7 added explicit variance annotations (in/out) for covariant and contravariant type parameters.',
      code: `// Covariant (producer): out T
interface ReadonlyBox<out T> {
  get(): T;
}

// Contravariant (consumer): in T  
interface Writer<in T> {
  write(value: T): void;
}

// Invariant: in out T (both)
interface Ref<in out T> {
  get(): T;
  set(value: T): void;
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['variance', 'generics', 'advanced']
    },
    {
      id: '3-81',
      question: 'What is the NoInfer<T> utility type in TypeScript 5.4?',
      answer: 'NoInfer<T> prevents TypeScript from using a position for type inference, forcing the caller to be explicit.',
      code: `// Problem: T inferred from both args, widening to string
function createStore<T>(initial: T, fallback: T): T { return initial; }
createStore("active", "inactive"); // T = string

// Solution: NoInfer blocks fallback from influencing T
function createStore2<T>(initial: T, fallback: NoInfer<T>): T {
  return initial;
}
type Status = "active" | "inactive";
createStore2<Status>("active", "inactive"); // T = Status`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['noinfer', 'typescript54', 'generics']
    },
    {
      id: '3-82',
      question: 'What is the using keyword and Explicit Resource Management in TypeScript 5.2?',
      answer: 'using applies Symbol.dispose automatically at block exit. await using handles async cleanup. Requires tsconfig target ES2022+.',
      code: `class DB {
  [Symbol.dispose]() { console.log("DB closed"); }
  query(sql: string) { return []; }
}

function withDb() {
  using db = new DB();  // disposed at block exit
  return db.query("SELECT 1");
}
// "DB closed" printed automatically

// Async version
class File {
  async [Symbol.asyncDispose]() { await this.close(); }
}
async function readFile() {
  await using f = new File();
  // f closed on async exit
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['using', 'disposal', 'typescript52']
    },
    {
      id: '3-83',
      question: 'What is a higher-kinded type workaround in TypeScript?',
      answer: 'TypeScript lacks native higher-kinded types (HKT), but they can be simulated using interface maps and indexed access.',
      code: `// HKT simulation via interface "URI map"
interface URItoKind<A> {
  "Array": Array<A>;
  "Set":   Set<A>;
}
type URIS = keyof URItoKind<unknown>;

// HKT abstraction
type HKT<F extends URIS, A> = URItoKind<A>[F];

interface Functor<F extends URIS> {
  map<A, B>(fa: HKT<F, A>, f: (a: A) => B): HKT<F, B>;
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['hkt', 'generics', 'patterns']
    },
    {
      id: '3-84',
      question: 'What is type-safe builder pattern in TypeScript?',
      answer: 'Builders use generics to track which fields have been set at the type level, preventing calling build() before required fields.',
      code: `type Builder<T, Set extends keyof T = never> = {
  set<K extends keyof T>(key: K, val: T[K]): Builder<T, Set | K>;
  build(): [keyof T] extends [Set] ? T : never;
};

interface Config { host: string; port: number; }

function makeBuilder<T>(): Builder<T> {
  const obj: Partial<T> = {};
  return {
    set(k, v) { (obj as any)[k] = v; return this as any; },
    build() { return obj as any; }
  };
}
const c = makeBuilder<Config>().set("host","localhost").set("port",3000).build();`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['builder', 'pattern', 'generics']
    },
    {
      id: '3-85',
      question: 'What are key remapping in mapped types?',
      answer: 'as in mapped types renames keys using template literal types or conditional filtering.',
      code: `// Prefix all keys with "get"
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface User { name: string; age: number; }
type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number; }

// Filter keys (exclude functions)
type DataOnly<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['key-remapping', 'mapped-types', 'advanced']
    },
    {
      id: '3-86',
      question: 'What is the satisfies operator used for in practice?',
      answer: 'satisfies validates a value against a type while preserving the narrower inferred type — giving both type safety and precise types.',
      code: `type Palette = Record<string, [number, number, number] | string>;

// Without satisfies: typed as Palette, loses tuple info
const colors: Palette = { red: [255, 0, 0], blue: "blue" };
colors.red; // [number, number, number] | string (wide)

// With satisfies: validated AND preserves narrow type
const palette = {
  red:  [255, 0, 0],
  blue: "blue"
} satisfies Palette;
palette.red;      // [number, number, number] (narrow!)
palette.blue;     // string (narrow!)`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['satisfies', 'inference', 'advanced']
    },
    {
      id: '3-87',
      question: 'What is an opaque/branded type in TypeScript?',
      answer: 'Branded types wrap a primitive with a unique tag to prevent accidental mixing of semantically different values.',
      code: `// Nominal typing via branding
type UserId   = string & { readonly __brand: "UserId" };
type OrderId  = string & { readonly __brand: "OrderId" };

function makeUserId(id: string): UserId  { return id as UserId; }
function makeOrderId(id: string): OrderId { return id as OrderId; }

function getUser(id: UserId) { /* ... */ }

const uid = makeUserId("u-1");
const oid = makeOrderId("o-1");

getUser(uid);  // OK
// getUser(oid); // Error: OrderId is not assignable to UserId`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['branded-types', 'nominal', 'patterns']
    },
    {
      id: '3-88',
      question: 'What is the DeepReadonly mapped type pattern?',
      answer: 'DeepReadonly recursively makes all nested properties readonly, preventing mutation at any depth.',
      code: `type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

interface Config {
  db: { host: string; port: number; };
  app: { name: string; debug: boolean; };
}

const config: DeepReadonly<Config> = {
  db: { host: "localhost", port: 5432 },
  app: { name: "myapp", debug: false }
};
// config.db.host = "x"; // Error: readonly`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['deep-readonly', 'mapped-types', 'immutability']
    },
    {
      id: '3-89',
      question: 'What is module augmentation in TypeScript?',
      answer: 'Module augmentation adds new declarations to an existing external module without modifying its source.',
      code: `// Augment Express Request to include user
import "express";
declare module "express-serve-static-core" {
  interface Request {
    user?: { id: string; role: string };
  }
}

// Now available everywhere
app.use((req, res, next) => {
  req.user = { id: "1", role: "admin" }; // no type error
  next();
});`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['module-augmentation', 'declaration-merging', 'advanced']
    },
    {
      id: '3-90',
      question: 'What are const type parameters in TypeScript 5.0?',
      answer: 'const modifier on type parameters infers the narrowest literal type instead of a widened type — replacing as const in many cases.',
      code: `// Before TS 5.0: needed "as const"
function identity<T>(x: T) { return x; }
identity(["a", "b"]); // string[] (wide)
identity(["a", "b"] as const); // readonly ["a", "b"]

// TS 5.0: const type parameter
function identityConst<const T>(x: T) { return x; }
identityConst(["a", "b"]); // readonly ["a", "b"] (auto-narrow!)

function route<const T extends string>(path: T): T { return path; }
route("/users"); // type is "/users", not string`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['const-type-parameters', 'typescript50', 'inference']
    },
    {
      id: '3-91',
      question: 'What is variadic tuple types in TypeScript?',
      answer: 'Variadic tuple types use ...T to spread generic tuple types, enabling strongly-typed argument forwarding.',
      code: `type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
type AB = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]

// Typed prepend
type Prepend<T, Arr extends unknown[]> = [T, ...Arr];
type P = Prepend<string, [number, boolean]>; // [string, number, boolean]

// Forward args preserving types
function prefix<T extends unknown[]>(first: string, ...rest: T): [string, ...T] {
  return [first, ...rest];
}
prefix("a", 1, true); // [string, number, boolean]`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['variadic-tuples', 'generics', 'advanced']
    },
    {
      id: '3-92',
      question: 'What are abstract construct signatures in TypeScript?',
      answer: 'Abstract construct signatures type variables that can hold abstract classes (without allowing direct instantiation).',
      code: `abstract class Shape { abstract area(): number; }

// Can accept any constructor (including abstract)
function makeArray<T>(ctor: abstract new (...args: any[]) => T, n: number): T[] {
  // Note: can't call "new ctor()" directly — just stores the type
  return [];
}

// Mixin pattern: requires concrete constructors
type Constructor<T = {}> = new (...args: any[]) => T;
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['abstract', 'construct-signatures', 'mixins']
    },
    {
      id: '3-93',
      question: 'What is the infer keyword in conditional types?',
      answer: 'infer declares a type variable that is inferred within a conditional type, allowing extraction of sub-types.',
      code: `// Extract element type from array
type Unpack<T> = T extends (infer U)[] ? U : T;
type A = Unpack<string[]>; // string
type B = Unpack<number>;   // number

// Extract Promise value
type Resolve<T> = T extends Promise<infer R> ? R : T;
type C = Resolve<Promise<User>>; // User

// Extract function return type
type Ret<T> = T extends (...args: any[]) => infer R ? R : never;
type D = Ret<() => boolean>; // boolean`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['infer', 'conditional-types', 'advanced']
    },
    {
      id: '3-94',
      question: 'What is a Proxy type pattern in TypeScript?',
      answer: 'Typed Proxy wrappers use generics and get/set handler types to create safe observable or lazy objects.',
      code: `function createObservable<T extends object>(target: T, onChange: (key: keyof T) => void): T {
  return new Proxy(target, {
    set(obj, prop, value) {
      (obj as any)[prop] = value;
      onChange(prop as keyof T);
      return true;
    }
  }) as T;
}

const state = createObservable(
  { count: 0, name: "Alice" },
  (key) => console.log(\`Changed: \${String(key)}\`)
);
state.count = 5; // "Changed: count"`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['proxy', 'patterns', 'advanced']
    },
    {
      id: '3-95',
      question: 'What are template literal type manipulation utilities?',
      answer: 'TypeScript provides Uppercase<T>, Lowercase<T>, Capitalize<T>, Uncapitalize<T> for string type transformations.',
      code: `type U = Uppercase<"hello">;        // "HELLO"
type L = Lowercase<"WORLD">;        // "world"
type C = Capitalize<"foo">;         // "Foo"
type N = Uncapitalize<"FooBar">;    // "fooBar"

// Practical: SCREAMING_SNAKE to camelCase key transform
type CamelCase<S extends string> =
  S extends \`\${infer Head}_\${infer Tail}\`
    ? \`\${Lowercase<Head>}\${Capitalize<CamelCase<Tail>>}\`
    : Lowercase<S>;

type K = CamelCase<"FIRST_NAME">; // "firstName"`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['template-literal', 'string-manipulation', 'utility']
    },
    {
      id: '3-96',
      question: 'What is an interface with call signature in TypeScript?',
      answer: 'Interfaces with call signatures describe objects that are both callable as functions and have properties.',
      code: `interface Formatter {
  (value: number): string;   // call signature
  locale: string;            // property
  precision: number;         // property
}

const fmt: Formatter = Object.assign(
  (v: number) => v.toFixed(fmt.precision),
  { locale: "en-US", precision: 2 }
);

fmt(3.14159); // "3.14"
fmt.locale;   // "en-US"`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['call-signature', 'interfaces', 'advanced']
    },
    {
      id: '3-97',
      question: 'What is type-safe event emitter in TypeScript?',
      answer: 'A typed EventEmitter uses a generic event map to enforce correct argument types per event name.',
      code: `type EventMap = Record<string, any[]>;

class TypedEmitter<Events extends EventMap> {
  private listeners = new Map<keyof Events, Function[]>();

  on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this {
    const arr = this.listeners.get(event) ?? [];
    arr.push(listener);
    this.listeners.set(event, arr);
    return this;
  }

  emit<K extends keyof Events>(event: K, ...args: Events[K]): void {
    this.listeners.get(event)?.forEach(fn => fn(...args));
  }
}

type AppEvents = { login: [User]; error: [string, number] };
const emitter = new TypedEmitter<AppEvents>();
emitter.on("login", (user) => console.log(user.id));`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['event-emitter', 'generics', 'patterns']
    },
    {
      id: '3-98',
      question: 'What is the ConstructorParameters utility type?',
      answer: 'ConstructorParameters<T> extracts constructor parameter types as a tuple from a class or constructor function type.',
      code: `class HttpClient {
  constructor(
    private baseUrl: string,
    private timeout: number,
    private headers: Record<string, string>
  ) {}
}

type Params = ConstructorParameters<typeof HttpClient>;
// [baseUrl: string, timeout: number, headers: Record<string, string>]

// Useful for factory functions
function createClient(...args: ConstructorParameters<typeof HttpClient>) {
  return new HttpClient(...args);
}`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['constructor-parameters', 'utility', 'advanced']
    },
    {
      id: '3-99',
      question: 'What is the difference between structuraltype compatibility and nominal typing in TypeScript?',
      answer: 'TypeScript uses structural typing: types are compatible if shapes match. Nominal (name-based) typing can be simulated with brands.',
      code: `// Structural: compatible if shapes match (not names)
interface Cat  { name: string; meow(): void; }
interface Duck { name: string; meow(): void; }

const duck: Duck = { name: "Donald", meow() {} };
const cat: Cat = duck; // OK — same structure!

// Simulate nominal with brands
type Celsius    = number & { __unit: "C" };
type Fahrenheit = number & { __unit: "F" };

const temp: Celsius = 100 as Celsius;
// const f: Fahrenheit = temp; // Error — different brand`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['structural-typing', 'nominal', 'type-system']
    },
    {
      id: '3-100',
      question: 'What is the Flatten and DeepPartial pattern in TypeScript?',
      answer: 'DeepPartial recursively makes all nested properties optional. Flatten collapses intersection types for readability.',
      code: `// DeepPartial — all nested props optional
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// Flatten — collapses intersections into single object type
type Flatten<T> = { [K in keyof T]: T[K] };

interface Config {
  db: { host: string; port: number; };
  cache: { ttl: number; prefix: string; };
}

type PartialConfig = DeepPartial<Config>;
// db?: { host?: string; port?: number; } | undefined`,
      language: 'typescript',
      category: 'TypeScript',
      difficulty: 'hard',
      tags: ['deep-partial', 'flatten', 'utility-types']
    }
  ]
};
