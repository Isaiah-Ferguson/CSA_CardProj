import { Deck } from '@/types/flashcard';

export const csharpFundamentals: Deck = {
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
    },
    {
      id: '5-51',
      question: 'What is the ternary operator in C#?',
      answer: 'The ternary operator ?: is a shorthand for an if-else statement. It returns one of two values based on a condition.',
      code: `int age = 20;
string status = age >= 18 ? "Adult" : "Minor";
Console.WriteLine(status); // "Adult"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['ternary', 'operators', 'conditionals']
    },
    {
      id: '5-52',
      question: 'What is the difference between while and do-while?',
      answer: 'while checks condition before executing. do-while executes once then checks the condition — guaranteed at least one run.',
      code: `int i = 0;
while (i < 3) { Console.WriteLine(i); i++; } // 0, 1, 2

int j = 5;
do { Console.WriteLine(j); j++; } while (j < 3); // 5 (runs once even though false)`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['loops', 'while', 'do-while']
    },
    {
      id: '5-53',
      question: 'What is a constant in C#?',
      answer: 'A constant is a value that cannot change at runtime. Declared with const, it must be assigned at declaration.',
      code: `public class MathConstants
{
  public const double Pi = 3.14159265358979;
  public const int MaxRetries = 3;
}

Console.WriteLine(MathConstants.Pi);`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['const', 'constants', 'basics']
    },
    {
      id: '5-54',
      question: 'What are the C# arithmetic operators?',
      answer: 'C# supports +, -, *, /, % (modulus), and ** is not supported — use Math.Pow() for exponentiation.',
      code: `int a = 10, b = 3;
Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3 (integer division)
Console.WriteLine(a % b);  // 1 (remainder)
Console.WriteLine(Math.Pow(a, b)); // 1000.0`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['operators', 'arithmetic', 'basics']
    },
    {
      id: '5-55',
      question: 'What is a switch statement in C#?',
      answer: 'A switch statement selects one of many code blocks to execute based on a variable value.',
      code: `int day = 3;
switch (day)
{
  case 1: Console.WriteLine("Monday"); break;
  case 2: Console.WriteLine("Tuesday"); break;
  case 3: Console.WriteLine("Wednesday"); break;
  default: Console.WriteLine("Other"); break;
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['switch', 'conditionals', 'control-flow']
    },
    {
      id: '5-56',
      question: 'What is the difference between break and continue?',
      answer: 'break exits the loop entirely. continue skips the current iteration and moves to the next one.',
      code: `for (int i = 0; i < 5; i++)
{
  if (i == 2) continue; // skip 2
  if (i == 4) break;    // stop at 4
  Console.WriteLine(i); // 0, 1, 3
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['break', 'continue', 'loops']
    },
    {
      id: '5-57',
      question: 'What is a Dictionary in C#?',
      answer: 'A Dictionary<TKey, TValue> stores key-value pairs with fast O(1) lookup by key.',
      code: `var ages = new Dictionary<string, int>
{
  ["Alice"] = 30,
  ["Bob"]   = 25
};

ages["Charlie"] = 28;
Console.WriteLine(ages["Alice"]); // 30

if (ages.TryGetValue("Bob", out int age))
  Console.WriteLine(age); // 25`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['dictionary', 'collections', 'generics']
    },
    {
      id: '5-58',
      question: 'What are the common string methods in C#?',
      answer: 'Common string methods include ToUpper(), ToLower(), Trim(), Contains(), StartsWith(), EndsWith(), Replace(), Substring(), Split().',
      code: `string s = "  Hello, World!  ";
s.Trim();            // "Hello, World!"
s.ToUpper();         // "  HELLO, WORLD!  "
s.Contains("World"); // true
s.Replace("World", "C#"); // "  Hello, C#!  "
s.Split(',');        // ["  Hello", " World!  "]
s.Substring(7, 5);   // "Hello"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['strings', 'methods', 'basics']
    },
    {
      id: '5-59',
      question: 'What is the difference between Convert.ToInt32() and int.Parse()?',
      answer: 'int.Parse() converts a string to int, throws on null. Convert.ToInt32() handles null (returns 0) and accepts more types.',
      code: `string s = "42";
int a = int.Parse(s);            // 42
int b = Convert.ToInt32(s);      // 42
int c = Convert.ToInt32(null);   // 0 (no exception)
// int.Parse(null) throws ArgumentNullException

// Safest approach - int.TryParse
if (int.TryParse(s, out int result))
  Console.WriteLine(result); // 42`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['conversion', 'parsing', 'types']
    },
    {
      id: '5-60',
      question: 'What is the Console class in C#?',
      answer: 'Console provides methods for input and output. WriteLine() prints with newline, ReadLine() reads user input.',
      code: `Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");

Console.Write("No newline");   // stays on same line
Console.Error.WriteLine("Error message"); // stderr`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'easy',
      tags: ['console', 'io', 'basics']
    },
    {
      id: '5-61',
      question: 'What is polymorphism in C#?',
      answer: 'Polymorphism allows objects of different types to be treated as a common base type. Methods behave differently based on the actual object.',
      code: `public class Animal  { public virtual string Speak() => "..."; }
public class Dog : Animal { public override string Speak() => "Woof"; }
public class Cat : Animal { public override string Speak() => "Meow"; }

Animal[] animals = { new Dog(), new Cat(), new Dog() };
foreach (var a in animals)
  Console.WriteLine(a.Speak()); // Woof, Meow, Woof`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['polymorphism', 'oop', 'virtual']
    },
    {
      id: '5-62',
      question: 'What is an abstract class in C#?',
      answer: 'An abstract class cannot be instantiated. It can have abstract members (no implementation) and concrete members. Derived classes must implement abstract members.',
      code: `public abstract class Shape
{
  public abstract double Area();           // must implement
  public void Print() => Console.WriteLine($"Area: {Area()}"); // concrete
}

public class Circle : Shape
{
  public double Radius { get; set; }
  public override double Area() => Math.PI * Radius * Radius;
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['abstract', 'oop', 'inheritance']
    },
    {
      id: '5-63',
      question: 'What is an enum in C#?',
      answer: 'An enum is a value type that defines a set of named integer constants. Useful for representing a fixed set of values.',
      code: `public enum DayOfWeek { Monday = 1, Tuesday, Wednesday, Thursday, Friday }

DayOfWeek today = DayOfWeek.Wednesday;
Console.WriteLine(today);        // Wednesday
Console.WriteLine((int)today);   // 3

// Flags enum for bit operations
[Flags]
public enum Permissions { None = 0, Read = 1, Write = 2, Execute = 4 }
var perm = Permissions.Read | Permissions.Write; // 3`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['enum', 'types', 'constants']
    },
    {
      id: '5-64',
      question: 'What is a struct in C#?',
      answer: 'A struct is a value type that can contain data and methods. Copied on assignment, stored on the stack. Good for small, immutable data.',
      code: `public struct Point
{
  public double X { get; init; }
  public double Y { get; init; }
  public double DistanceTo(Point other) =>
      Math.Sqrt(Math.Pow(X - other.X, 2) + Math.Pow(Y - other.Y, 2));
}

Point p1 = new Point { X = 0, Y = 0 };
Point p2 = new Point { X = 3, Y = 4 };
Console.WriteLine(p1.DistanceTo(p2)); // 5`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['struct', 'value-types', 'oop']
    },
    {
      id: '5-65',
      question: 'What is exception handling in C#?',
      answer: 'try/catch/finally handles runtime errors. try contains risky code, catch handles errors, finally always runs.',
      code: `try
{
  int result = int.Parse("abc"); // throws FormatException
}
catch (FormatException ex)
{
  Console.WriteLine($"Format error: {ex.Message}");
}
catch (Exception ex) // catch-all
{
  Console.WriteLine($"Error: {ex.Message}");
}
finally
{
  Console.WriteLine("Always runs"); // cleanup here
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['exceptions', 'try-catch', 'error-handling']
    },
    {
      id: '5-66',
      question: 'What is a generic class in C#?',
      answer: 'Generic classes work with any type specified at instantiation, providing type safety and code reuse.',
      code: `public class Stack<T>
{
  private readonly List<T> _items = new();

  public void Push(T item) => _items.Add(item);
  public T Pop()
  {
      var item = _items[^1];
      _items.RemoveAt(_items.Count - 1);
      return item;
  }
  public bool IsEmpty => _items.Count == 0;
}

var stack = new Stack<int>();
stack.Push(1); stack.Push(2);
Console.WriteLine(stack.Pop()); // 2`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['generics', 'types', 'collections']
    },
    {
      id: '5-67',
      question: 'What are delegates in C#?',
      answer: 'A delegate is a type-safe function pointer. It holds references to methods with a specific signature.',
      code: `public delegate int Operation(int a, int b);

int Add(int a, int b) => a + b;
int Multiply(int a, int b) => a * b;

Operation op = Add;
Console.WriteLine(op(3, 4));  // 7

op = Multiply;
Console.WriteLine(op(3, 4));  // 12

// Multicast delegate
op += Add; // chains both methods`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['delegates', 'functions', 'events']
    },
    {
      id: '5-68',
      question: 'What are events in C#?',
      answer: 'Events allow classes to notify subscribers when something happens. Built on delegates with += and -= subscription.',
      code: `public class Button
{
  public event EventHandler? Click;
  public void OnClick() => Click?.Invoke(this, EventArgs.Empty);
}

var btn = new Button();
btn.Click += (sender, e) => Console.WriteLine("Button clicked!");
btn.OnClick(); // "Button clicked!"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['events', 'delegates', 'observer']
    },
    {
      id: '5-69',
      question: 'What is LINQ in C#?',
      answer: 'LINQ (Language Integrated Query) provides a consistent syntax to query collections, databases, and XML using C# expressions.',
      code: `int[] numbers = { 5, 2, 8, 1, 9, 3 };

// Method syntax
var result = numbers
  .Where(n => n > 3)
  .OrderBy(n => n)
  .Select(n => n * 2)
  .ToList(); // [10, 16, 18]

// Query syntax
var result2 = from n in numbers
            where n > 3
            orderby n
            select n * 2;`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['linq', 'queries', 'collections']
    },
    {
      id: '5-70',
      question: 'What is a lambda expression in C#?',
      answer: 'A lambda expression is an anonymous function using the => operator. Used with delegates and LINQ.',
      code: `// Expression lambda
Func<int, int> square = x => x * x;
Console.WriteLine(square(5)); // 25

// Statement lambda
Action<string> greet = name =>
{
  string msg = $"Hello, {name}!";
  Console.WriteLine(msg);
};
greet("Alice"); // "Hello, Alice!"

// With LINQ
var evens = new[] { 1, 2, 3, 4 }.Where(x => x % 2 == 0);`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['lambda', 'delegates', 'functional']
    },
    {
      id: '5-71',
      question: 'What is async/await in C#?',
      answer: 'async/await enables asynchronous programming without blocking threads. Methods marked async can await Tasks.',
      code: `public async Task<string> FetchDataAsync(string url)
{
  using var client = new HttpClient();
  string content = await client.GetStringAsync(url);
  return content;
}

// Usage
string data = await FetchDataAsync("https://api.example.com/data");
Console.WriteLine(data);`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['async', 'await', 'tasks']
    },
    {
      id: '5-72',
      question: 'What is the using statement in C#?',
      answer: 'using ensures IDisposable objects are disposed when done. Automatically calls Dispose() on scope exit.',
      code: `// using statement
using (var reader = new StreamReader("file.txt"))
{
  string content = reader.ReadToEnd();
}
// reader.Dispose() called automatically

// using declaration (C# 8+)
using var reader2 = new StreamReader("file.txt");
string text = reader2.ReadToEnd();
// Disposed at end of enclosing scope`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['using', 'idisposable', 'memory']
    },
    {
      id: '5-73',
      question: 'What is the virtual keyword in C#?',
      answer: 'virtual allows a method to be overridden in derived classes. Base implementation runs if not overridden.',
      code: `public class Logger
{
  public virtual void Log(string message) =>
      Console.WriteLine($"[LOG] {message}");
}

public class FileLogger : Logger
{
  public override void Log(string message)
  {
      base.Log(message); // call base
      File.AppendAllText("log.txt", message + "\n");
  }
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['virtual', 'override', 'oop']
    },
    {
      id: '5-74',
      question: 'What is a partial class in C#?',
      answer: 'A partial class splits a class definition across multiple files. All parts are combined at compile time.',
      code: `// Person.cs
public partial class Person
{
  public string Name { get; set; }
  public int Age { get; set; }
}

// Person.Validation.cs
public partial class Person
{
  public bool IsValid() => !string.IsNullOrEmpty(Name) && Age > 0;
}

// Usage
var p = new Person { Name = "Alice", Age = 30 };
p.IsValid(); // true`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['partial', 'classes', 'organization']
    },
    {
      id: '5-75',
      question: 'What is string.IsNullOrEmpty() vs string.IsNullOrWhiteSpace()?',
      answer: 'IsNullOrEmpty() returns true for null or "". IsNullOrWhiteSpace() also returns true for whitespace-only strings.',
      code: `string a = null;
string b = "";
string c = "   ";
string d = "hello";

string.IsNullOrEmpty(a);       // true
string.IsNullOrEmpty(b);       // true
string.IsNullOrEmpty(c);       // false (has whitespace)
string.IsNullOrWhiteSpace(c);  // true
string.IsNullOrWhiteSpace(d);  // false`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['strings', 'null', 'validation']
    },
    {
      id: '5-76',
      question: 'What is operator overloading in C#?',
      answer: 'Operator overloading lets you define custom behavior for operators like +, -, *, == for your types.',
      code: `public class Vector
{
  public double X { get; }
  public double Y { get; }
  public Vector(double x, double y) { X = x; Y = y; }

  public static Vector operator +(Vector a, Vector b) =>
      new Vector(a.X + b.X, a.Y + b.Y);

  public static bool operator ==(Vector a, Vector b) =>
      a.X == b.X && a.Y == b.Y;
}

var v1 = new Vector(1, 2);
var v2 = new Vector(3, 4);
var v3 = v1 + v2; // Vector(4, 6)`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['operator-overloading', 'oop', 'advanced']
    },
    {
      id: '5-77',
      question: 'What is the sealed keyword in C#?',
      answer: 'sealed prevents a class from being inherited or a virtual method from being further overridden.',
      code: `public sealed class Singleton
{
  private static Singleton? _instance;
  private Singleton() {}
  public static Singleton Instance =>
      _instance ??= new Singleton();
}
// Cannot inherit: class Child : Singleton {} // Error

// Sealing a method
public class Base    { public virtual void Do() {} }
public class Middle : Base { public sealed override void Do() {} }
public class Leaf   : Middle { /* public override void Do() {} // Error */ }`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['sealed', 'inheritance', 'oop']
    },
    {
      id: '5-78',
      question: 'What is the difference between is and as in C#?',
      answer: 'is checks if an object is a type (returns bool). as attempts a cast and returns null if it fails (no exception).',
      code: `object obj = "Hello";

// is
if (obj is string s)
  Console.WriteLine(s.Length); // pattern matching

// as
string? str = obj as string;
if (str != null)
  Console.WriteLine(str.ToUpper());

// Direct cast - throws InvalidCastException on failure
string str2 = (string)obj;`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['is', 'as', 'casting']
    },
    {
      id: '5-79',
      question: 'What is the HashSet<T> collection?',
      answer: 'HashSet<T> is an unordered collection of unique values with O(1) lookup, add, and remove operations.',
      code: `var set = new HashSet<int> { 1, 2, 3 };
set.Add(2);     // ignored (duplicate)
set.Add(4);
set.Contains(3); // true

// Set operations
var a = new HashSet<int> { 1, 2, 3 };
var b = new HashSet<int> { 2, 3, 4 };
a.IntersectWith(b); // a = { 2, 3 }
a.UnionWith(b);     // a = { 1, 2, 3, 4 }
a.ExceptWith(b);    // a = { 1 }`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['hashset', 'collections', 'generics']
    },
    {
      id: '5-80',
      question: 'What is the Queue<T> and Stack<T> collection?',
      answer: 'Queue<T> is FIFO (first in, first out). Stack<T> is LIFO (last in, first out).',
      code: `// Queue: FIFO
var queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
queue.Dequeue();  // "First"
queue.Peek();     // "Second" (no removal)

// Stack: LIFO
var stack = new Stack<int>();
stack.Push(1); stack.Push(2); stack.Push(3);
stack.Pop();   // 3
stack.Peek();  // 2`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'medium',
      tags: ['queue', 'stack', 'collections']
    },
    {
      id: '5-81',
      question: 'What is covariance and contravariance in C# generics?',
      answer: 'Covariance (out) allows a more derived type. Contravariance (in) allows a less derived type. Used with interfaces and delegates.',
      code: `// Covariance - out: can return more derived type
IEnumerable<string> strings = new List<string>();
IEnumerable<object> objects = strings; // valid with covariance

// Contravariance - in: can accept less derived type
Action<object> objectAction = obj => Console.WriteLine(obj);
Action<string> stringAction = objectAction; // valid with contravariance

// Custom covariant interface
public interface IProducer<out T> { T Produce(); }`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['covariance', 'contravariance', 'generics']
    },
    {
      id: '5-82',
      question: 'What is Func<T> and Action<T>?',
      answer: 'Func<T> is a built-in delegate that returns a value. Action<T> is a built-in delegate that returns void.',
      code: `// Func: last type param is return type
Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(3, 4)); // 7

Func<string, int> length = s => s.Length;
Console.WriteLine(length("hello")); // 5

// Action: no return value
Action<string> print = msg => Console.WriteLine(msg);
print("Hello");

// Predicate: shorthand for Func<T, bool>
Predicate<int> isEven = n => n % 2 == 0;`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['func', 'action', 'delegates']
    },
    {
      id: '5-83',
      question: 'What are Tuples in C#?',
      answer: 'Tuples group multiple values without a class. ValueTuple (C# 7+) supports named elements and deconstruction.',
      code: `// ValueTuple with named elements
var person = (Name: "Alice", Age: 30);
Console.WriteLine(person.Name); // "Alice"

// Return multiple values from method
(int Min, int Max) GetRange(int[] arr) =>
  (arr.Min(), arr.Max());

var (min, max) = GetRange(new[] { 3, 1, 4, 1, 5 });
Console.WriteLine($"Min: {min}, Max: {max}"); // Min: 1, Max: 5`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['tuples', 'valuetuple', 'deconstruction']
    },
    {
      id: '5-84',
      question: 'What are nullable reference types in C# 8+?',
      answer: 'Nullable reference types (#nullable enable) distinguish between T (non-nullable) and T? (nullable), enabling compile-time null safety.',
      code: `#nullable enable

string name = "Alice";   // cannot be null
string? maybeNull = null; // explicitly nullable

void Greet(string? input)
{
  // Must null-check before use
  if (input is null) return;
  Console.WriteLine(input.ToUpper()); // safe
}

// Null-forgiving operator (!)
string certainlyNotNull = maybeNull!; // suppress warning`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['nullable', 'null-safety', 'csharp8']
    },
    {
      id: '5-85',
      question: 'What is the IDisposable pattern in C#?',
      answer: 'IDisposable releases unmanaged resources (files, connections). Implement Dispose() and use with the using statement.',
      code: `public class ResourceManager : IDisposable
{
  private bool _disposed = false;
  private FileStream _stream = File.Open("data.bin", FileMode.Open);

  public void Dispose()
  {
      if (!_disposed)
      {
          _stream.Dispose();
          _disposed = true;
          GC.SuppressFinalize(this);
      }
  }

  ~ResourceManager() => Dispose(); // finalizer fallback
}

using var rm = new ResourceManager(); // auto-disposed`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['idisposable', 'memory', 'resources']
    },
    {
      id: '5-86',
      question: 'What is reflection in C#?',
      answer: 'Reflection inspects and manipulates types, members, and assemblies at runtime using the System.Reflection namespace.',
      code: `using System.Reflection;

Type type = typeof(string);
Console.WriteLine(type.Name);       // "String"
Console.WriteLine(type.FullName);   // "System.String"

// Get methods
foreach (var method in type.GetMethods().Take(3))
  Console.WriteLine(method.Name);

// Create instance dynamically
var instance = Activator.CreateInstance(typeof(List<int>));

// Invoke method by name
var result = type.GetMethod("ToUpper", Type.EmptyTypes)
  ?.Invoke("hello", null); // "HELLO"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['reflection', 'runtime', 'meta']
    },
    {
      id: '5-87',
      question: 'What is the lock keyword and thread safety in C#?',
      answer: 'lock ensures only one thread executes a block at a time, preventing race conditions on shared state.',
      code: `public class ThreadSafeCounter
{
  private int _count = 0;
  private readonly object _lock = new object();

  public void Increment()
  {
      lock (_lock)
      {
          _count++;  // only one thread at a time
      }
  }

  public int Value
  {
      get { lock (_lock) { return _count; } }
  }
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['lock', 'threading', 'concurrency']
    },
    {
      id: '5-88',
      question: 'What is the record type in C# and how does it differ from class?',
      answer: 'Records have value-based equality (compare by content, not reference), immutability, and auto-generated ToString/GetHashCode.',
      code: `public record Person(string Name, int Age);

var p1 = new Person("Alice", 30);
var p2 = new Person("Alice", 30);
var p3 = new Person("Bob",   25);

p1 == p2; // true  (value equality)
p1 == p3; // false

// Non-destructive mutation
var p4 = p1 with { Age = 31 };

// class comparison
class PersonClass { public string Name; }
var c1 = new PersonClass { Name = "A" };
var c2 = new PersonClass { Name = "A" };
c1 == c2; // false (reference equality)`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['record', 'equality', 'immutability']
    },
    {
      id: '5-89',
      question: 'What is dependency injection in C# / ASP.NET Core?',
      answer: 'DI provides dependencies to a class rather than creating them inside. Registered in the IoC container with lifetime: Singleton, Scoped, or Transient.',
      code: `// Service definition
public interface IEmailService { void Send(string to, string body); }
public class SmtpEmailService : IEmailService
{
  public void Send(string to, string body) => /* ... */;
}

// Registration (Program.cs)
builder.Services.AddScoped<IEmailService, SmtpEmailService>();
// AddSingleton: one instance for app lifetime
// AddTransient: new instance every injection

// Injection via constructor
public class OrderController
{
  private readonly IEmailService _email;
  public OrderController(IEmailService email) => _email = email;
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['dependency-injection', 'ioc', 'asp-net']
    },
    {
      id: '5-90',
      question: 'What are C# attributes?',
      answer: 'Attributes add declarative metadata to code elements. Read at runtime via reflection. Built-in examples: [Obsolete], [Required], [Authorize].',
      code: `[Obsolete("Use NewMethod() instead")]
public void OldMethod() { }

// Custom attribute
[AttributeUsage(AttributeTargets.Method)]
public class AuditAttribute : Attribute
{
  public string Action { get; }
  public AuditAttribute(string action) => Action = action;
}

[Audit("CreateOrder")]
public void CreateOrder() { /* ... */ }

// Read via reflection
var attr = typeof(MyClass)
  .GetMethod("CreateOrder")!
  .GetCustomAttribute<AuditAttribute>();
Console.WriteLine(attr?.Action); // "CreateOrder"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['attributes', 'reflection', 'metadata']
    },
    {
      id: '5-91',
      question: 'What is Span<T> in C#?',
      answer: 'Span<T> is a stack-allocated type that provides a safe view over contiguous memory. Used for high-performance, allocation-free slicing.',
      code: `int[] array = { 1, 2, 3, 4, 5, 6 };

Span<int> span = array;
Span<int> slice = span[2..5]; // [3, 4, 5] - no allocation!

slice[0] = 99; // modifies original array
Console.WriteLine(array[2]); // 99

// String slicing
string str = "Hello, World!";
ReadOnlySpan<char> chars = str.AsSpan(7, 5); // "World"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['span', 'performance', 'memory']
    },
    {
      id: '5-92',
      question: 'What is the init accessor in C#?',
      answer: 'init allows a property to be set during object initialization only (like a read-only property that works with object initializers).',
      code: `public class Person
{
  public string Name { get; init; }  // settable only at init
  public int Age { get; init; }
}

// OK - object initializer
var p = new Person { Name = "Alice", Age = 30 };

// Error - cannot set after construction
// p.Name = "Bob"; // CS8852

// Great for immutable DTOs
public record OrderRequest(string ProductId, int Quantity); // init under the hood`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['init', 'immutability', 'csharp9']
    },
    {
      id: '5-93',
      question: 'What is the with expression for records in C#?',
      answer: 'with creates a copy of a record with specific properties changed. Enables non-destructive mutation.',
      code: `public record Address(string Street, string City, string ZipCode);
public record Customer(string Name, Address Address);

var customer = new Customer("Alice", new Address("123 Main St", "NYC", "10001"));

// Non-destructive update - returns new record
var moved = customer with
{
  Address = customer.Address with { City = "LA", ZipCode = "90001" }
};

Console.WriteLine(customer.Address.City); // "NYC" (unchanged)
Console.WriteLine(moved.Address.City);    // "LA"`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['with-expression', 'records', 'immutability']
    },
    {
      id: '5-94',
      question: 'What is pattern matching in C# switch expressions?',
      answer: 'Switch expressions with patterns match on type, value, property, or relational conditions in a concise expression syntax.',
      code: `object obj = 42;

string description = obj switch
{
  int n when n < 0  => "negative",
  int n when n == 0 => "zero",
  int n             => $"positive: {n}",
  string s          => $"string: {s}",
  null              => "null",
  _                 => "other"
};

// Property pattern
var result = customer switch
{
  { Name: "Admin", Age: >= 18 } => "Admin Adult",
  { Age: < 18 }                 => "Minor",
  _                             => "Regular"
};`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['pattern-matching', 'switch-expression', 'csharp9']
    },
    {
      id: '5-95',
      question: 'What are CancellationTokens in C#?',
      answer: 'CancellationToken allows cooperative cancellation of async operations. Pass it through the call chain and check IsCancellationRequested.',
      code: `public async Task<List<Product>> GetProductsAsync(CancellationToken ct = default)
{
  using var client = new HttpClient();
  var response = await client.GetAsync("/api/products", ct);
  ct.ThrowIfCancellationRequested(); // throws OperationCanceledException
  return await response.Content.ReadFromJsonAsync<List<Product>>(ct);
}

// With timeout
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
try { await GetProductsAsync(cts.Token); }
catch (OperationCanceledException) { Console.WriteLine("Cancelled"); }`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['cancellationtoken', 'async', 'tasks']
    },
    {
      id: '5-96',
      question: 'What is the IAsyncEnumerable<T> interface?',
      answer: 'IAsyncEnumerable<T> enables async streaming — yielding items one at a time with await, consumed via await foreach.',
      code: `public async IAsyncEnumerable<int> GenerateAsync(
  [EnumeratorCancellation] CancellationToken ct = default)
{
  for (int i = 0; i < 10; i++)
  {
      await Task.Delay(100, ct);
      yield return i;
  }
}

// Consume
await foreach (var item in GenerateAsync())
{
  Console.WriteLine(item); // 0..9, one at a time
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['iasyncenumerable', 'async', 'streaming']
    },
    {
      id: '5-97',
      question: 'What is a record struct in C#?',
      answer: 'record struct combines struct (value type, stack allocation) with record (value equality, with expression, immutability).',
      code: `public readonly record struct Point(double X, double Y)
{
  public double Length => Math.Sqrt(X * X + Y * Y);
}

var p1 = new Point(3, 4);
var p2 = new Point(3, 4);

p1 == p2;     // true (value equality, no boxing)
p1.Length;    // 5

var p3 = p1 with { X = 6 }; // non-destructive mutation`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['record-struct', 'value-types', 'csharp10']
    },
    {
      id: '5-98',
      question: 'What is required members in C# 11?',
      answer: 'required properties must be set during object initialization. The compiler enforces this at compile time.',
      code: `public class Product
{
  public required string Name { get; set; }    // must be set
  public required decimal Price { get; set; }  // must be set
  public string? Description { get; set; }     // optional
}

// OK
var p = new Product { Name = "Widget", Price = 9.99m };

// Compile error: required member 'Price' not set
// var p2 = new Product { Name = "Widget" };`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['required', 'csharp11', 'initialization']
    },
    {
      id: '5-99',
      question: 'What is file-scoped namespace in C# 10?',
      answer: 'File-scoped namespaces use a single namespace declaration for the whole file, removing one level of nesting.',
      code: `// Traditional (C# 9 and earlier)
namespace MyApp.Models
{
  public class Product { }
  public class Order   { }
}

// File-scoped (C# 10+) — removes extra indentation
namespace MyApp.Models;

public class Product { }
public class Order   { }`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['file-scoped-namespace', 'csharp10', 'syntax']
    },
    {
      id: '5-100',
      question: 'What are primary constructors in C# 12?',
      answer: 'Primary constructors allow constructor parameters directly on the class declaration. Parameters are in scope throughout the class body.',
      code: `// Class with primary constructor (C# 12)
public class ProductService(IRepository repo, ILogger<ProductService> logger)
{
  public async Task<Product?> GetAsync(int id)
  {
      logger.LogInformation("Fetching {Id}", id); // repo and logger in scope
      return await repo.FindAsync<Product>(id);
  }
}

// Previously required
public class ProductServiceOld
{
  private readonly IRepository _repo;
  private readonly ILogger<ProductServiceOld> _logger;
  public ProductServiceOld(IRepository repo, ILogger<ProductServiceOld> logger)
  { _repo = repo; _logger = logger; }
}`,
      language: 'csharp',
      category: 'C#',
      difficulty: 'hard',
      tags: ['primary-constructor', 'csharp12', 'syntax']
    }
  ]
};
