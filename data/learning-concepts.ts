import { levelOne } from './level-one-concepts';
import { levelTwo } from './level-two-concepts';
import { levelThree } from './level-three-concepts';
import { levelFour } from './level-four-concepts';

export interface CodeExample {
  title: string;
  code: string;
  language: string;
  explanation: string;
}

export interface Comparison {
  title: string;
  options: {
    name: string;
    description: string;
    whenToUse: string;
    example: string;
  }[];
}

export interface Concept {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  codeExamples: CodeExample[];
  comparison?: Comparison;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  concepts: Concept[];
}

export interface Level {
  id: string;
  levelNumber: number;
  title: string;
  description: string;
  weeks: Week[];
}

export const learningLevels: Level[] = [
  {
    id: 'Combine',
    levelNumber: 0,
    title: 'The Combine',
    description: 'Master the fundamentals of C# programming - variables, control flow, data structures, and object-oriented basics',
    weeks: [
      {
        id: 'Combine-week-1',
        weekNumber: 1,
        title: 'C# Basics',
        description: 'Variables, strings, conditionals, and console I/O',
        concepts: [
          {
            id: 'variable-types',
            title: 'Variable Types in C#',
            description: 'Understanding different data types and when to use them',
            keyPoints: [
              'C# is strongly typed - every variable must have a declared type',
              'Value types (int, double, bool, char) store data directly',
              'Reference types (string, arrays, objects) store references to data',
              'Use var for type inference when the type is obvious',
              'Choose the right type based on the data you need to store'
            ],
            codeExamples: [
              {
                title: 'Common Value Types',
                code: `// Integer types
int age = 25;                    // Whole numbers (-2,147,483,648 to 2,147,483,647)
long population = 8000000000L;   // Large whole numbers
short temperature = -15;         // Small whole numbers (-32,768 to 32,767)
byte level = 100;                // Very small (0 to 255)

// Decimal types
double price = 19.99;            // Floating point (15-16 digits precision)
decimal money = 1234.56m;        // High precision for money (28-29 digits)
float ratio = 0.75f;             // Less precise floating point

// Other value types
bool isActive = true;            // true or false
char grade = 'A';                // Single character
DateTime today = DateTime.Now;   // Date and time`,
                language: 'csharp',
                explanation: 'Value types store actual data. Use int for whole numbers, double for decimals, bool for true/false, and char for single characters. The m suffix indicates decimal, f indicates float, and L indicates long.'
              },
              {
                title: 'Reference Types',
                code: `// String - sequence of characters
string name = "John Doe";
string message = "Hello, World!";

// Arrays - fixed-size collection
int[] scores = new int[5];
string[] names = { "Alice", "Bob", "Charlie" };

// Objects - instances of classes
Random random = new Random();
List<int> numbers = new List<int>();

// Null reference
string emptyName = null;  // Reference types can be null`,
                language: 'csharp',
                explanation: 'Reference types store a reference (memory address) to the actual data. Strings are immutable reference types. Arrays and objects are also reference types and can be null.'
              },
              {
                title: 'Type Inference with var',
                code: `// var lets the compiler infer the type
var age = 25;                    // Inferred as int
var price = 19.99;               // Inferred as double
var name = "Alice";              // Inferred as string
var isActive = true;             // Inferred as bool

// Still strongly typed - cannot change type
age = 30;        // OK - still an int
// age = "30";   // ERROR - cannot assign string to int

// Use var when type is obvious
var numbers = new List<int>();   // Obviously List<int>
var random = new Random();       // Obviously Random

// Don't use var when type is unclear
int count = GetCount();          // Better than var - shows return type`,
                language: 'csharp',
                explanation: 'var is type inference, not dynamic typing. The type is determined at compile time and cannot change. Use var when the type is obvious from the right side of the assignment.'
              },
              {
                title: 'Type Conversion',
                code: `// Implicit conversion (safe, no data loss)
int smallNumber = 100;
long bigNumber = smallNumber;    // int → long (OK)
double decimal = smallNumber;    // int → double (OK)

// Explicit conversion (cast - may lose data)
double price = 19.99;
int dollars = (int)price;        // 19 (loses decimal part)

long bigValue = 1000000;
int smallValue = (int)bigValue;  // OK if value fits

// String to number conversion
string input = "42";
int number = int.Parse(input);           // Throws exception if invalid
int.TryParse(input, out int result);     // Returns false if invalid

// Number to string conversion
int age = 25;
string ageText = age.ToString();         // "25"
string formatted = $"Age: {age}";        // "Age: 25"`,
                language: 'csharp',
                explanation: 'Implicit conversion happens automatically when safe. Explicit conversion requires a cast and may lose data. Use Parse() or TryParse() to convert strings to numbers.'
              }
            ],
            comparison: {
              title: 'Choosing the Right Type',
              options: [
                {
                  name: 'int',
                  description: 'Whole numbers without decimals',
                  whenToUse: 'Counting, indexing, IDs, ages, quantities',
                  example: 'int age = 25; int count = 100;'
                },
                {
                  name: 'double',
                  description: 'Numbers with decimals (floating point)',
                  whenToUse: 'Measurements, calculations, scientific data',
                  example: 'double temperature = 98.6; double distance = 5.5;'
                },
                {
                  name: 'decimal',
                  description: 'High precision decimals',
                  whenToUse: 'Money, financial calculations',
                  example: 'decimal price = 19.99m; decimal balance = 1000.50m;'
                },
                {
                  name: 'string',
                  description: 'Text and characters',
                  whenToUse: 'Names, messages, user input, any text',
                  example: 'string name = "Alice"; string message = "Hello";'
                }
              ]
            }
          },
          {
            id: 'string-operations',
            title: 'Concatenation & String Interpolation',
            description: 'Different ways to combine and format strings in C#',
            keyPoints: [
              'Concatenation uses the + operator to join strings',
              'String interpolation ($"") is the modern, preferred approach',
              'String.Format() is useful for complex formatting',
              'Strings are immutable - operations create new strings',
              'Choose interpolation for readability and performance'
            ],
            codeExamples: [
              {
                title: 'String Concatenation',
                code: `string firstName = "John";
string lastName = "Doe";

// Using + operator
string fullName = firstName + " " + lastName;
Console.WriteLine(fullName);  // "John Doe"

// Concatenating with numbers
int age = 25;
string message = "Age: " + age;
Console.WriteLine(message);  // "Age: 25"

// Multiple concatenations
string greeting = "Hello, " + firstName + " " + lastName + "!";
Console.WriteLine(greeting);  // "Hello, John Doe!"

// Concatenation creates new strings
string result = "Hello";
result = result + " World";  // Creates new string
result = result + "!";       // Creates another new string`,
                language: 'csharp',
                explanation: 'Concatenation joins strings with the + operator. Each concatenation creates a new string because strings are immutable. This can be inefficient with many operations.'
              },
              {
                title: 'String Interpolation (Preferred)',
                code: `string firstName = "John";
string lastName = "Doe";
int age = 25;
double price = 19.99;

// String interpolation with $""
string message = $"Hello, {firstName} {lastName}!";
Console.WriteLine(message);  // "Hello, John Doe!"

// Interpolation with expressions
string info = $"{firstName} is {age} years old";
Console.WriteLine(info);  // "John is 25 years old"

// Interpolation with calculations
int quantity = 5;
string total = $"Total: $ {price * quantity}";
Console.WriteLine(total);  // "Total: $99.95"

// Formatting numbers
decimal amount = 1234.5678m;
string formatted = $"Amount: {amount:C}";      // "Amount: $1,234.57"
string rounded = $"Value: {amount:F2}";        // "Value: 1234.57"

// Multi-line interpolation
string report = $@"
Name: {firstName} {lastName}
Age: {age}
Price: $ {price}
";`,
                language: 'csharp',
                explanation: 'String interpolation ($"") is cleaner and more readable than concatenation. You can embed expressions, format numbers, and even use multi-line strings with $@"".'
              },
              {
                title: 'String.Format() Method',
                code: `string firstName = "John";
int age = 25;
double price = 19.99;

// String.Format with placeholders
string message = string.Format("Hello, {0}!", firstName);
Console.WriteLine(message);  // "Hello, John!"

// Multiple placeholders
string info = string.Format("{0} is {1} years old", firstName, age);
Console.WriteLine(info);  // "John is 25 years old"

// Formatting numbers
string priceText = string.Format("Price: {0:C}", price);
Console.WriteLine(priceText);  // "Price: $19.99"

// Reusing placeholders
string repeated = string.Format("{0} {0} {0}", "Hello");
Console.WriteLine(repeated);  // "Hello Hello Hello"

// Alignment and padding
string aligned = string.Format("|{0,10}|{1,-10}|", "Right", "Left");
Console.WriteLine(aligned);  // "|     Right|Left      |"`,
                language: 'csharp',
                explanation: 'String.Format() uses numbered placeholders {0}, {1}, etc. Useful for templates or when you need to reuse values. String interpolation is generally preferred for readability.'
              },
              {
                title: 'Common String Methods',
                code: `string text = "Hello, World!";

// Length and case
int length = text.Length;              // 13
string upper = text.ToUpper();         // "HELLO, WORLD!"
string lower = text.ToLower();         // "hello, world!"

// Checking content
bool hasHello = text.Contains("Hello");     // true
bool startsWithH = text.StartsWith("H");    // true
bool endsWithEx = text.EndsWith("!");       // true

// Finding and extracting
int index = text.IndexOf("World");          // 7
string sub = text.Substring(0, 5);          // "Hello"
string sub2 = text.Substring(7);            // "World!"

// Replacing
string replaced = text.Replace("World", "C#");  // "Hello, C#!"

// Trimming whitespace
string padded = "  Hello  ";
string trimmed = padded.Trim();        // "Hello"

// Splitting
string csv = "apple,banana,orange";
string[] fruits = csv.Split(',');      // ["apple", "banana", "orange"]`,
                language: 'csharp',
                explanation: 'Strings have many built-in methods for manipulation. Remember that strings are immutable - these methods return new strings rather than modifying the original.'
              }
            ],
            comparison: {
              title: 'String Combination Methods',
              options: [
                {
                  name: 'String Interpolation ($"")',
                  description: 'Modern, readable syntax for embedding values',
                  whenToUse: 'Most situations - default choice for combining strings',
                  example: '$"Hello, {name}! You are {age} years old."'
                },
                {
                  name: 'Concatenation (+)',
                  description: 'Simple joining with plus operator',
                  whenToUse: 'Simple joins, older codebases',
                  example: '"Hello, " + name + "!"'
                },
                {
                  name: 'String.Format()',
                  description: 'Template-based formatting with placeholders',
                  whenToUse: 'Templates, localization, reusing values',
                  example: 'string.Format("Hello, {0}!", name)'
                }
              ]
            }
          },
          {
            id: 'conditional-statements',
            title: 'Conditional Statements',
            description: 'Making decisions in your code with if, else if, else, and switch',
            keyPoints: [
              'if statements execute code when a condition is true',
              'else if allows checking multiple conditions in sequence',
              'else provides a default when no conditions are true',
              'switch statements are cleaner for multiple specific value checks',
              'Use comparison operators: ==, !=, <, >, <=, >=',
              'Use logical operators: && (AND), || (OR), ! (NOT)'
            ],
            codeExamples: [
              {
                title: 'Basic if Statement',
                code: `int age = 18;

// Simple if
if (age >= 18)
{
    Console.WriteLine("You are an adult");
}

// if with else
if (age >= 18)
{
    Console.WriteLine("You can vote");
}
else
{
    Console.WriteLine("You cannot vote yet");
}

// Single line (no braces needed)
if (age >= 21)
    Console.WriteLine("You can drink");  // Only this line is in the if

// Multiple statements need braces
if (age >= 16)
{
    Console.WriteLine("You can drive");
    Console.WriteLine("Be safe!");
}`,
                language: 'csharp',
                explanation: 'if statements check a boolean condition. If true, the code block executes. Use braces {} for multiple statements. Single statements can omit braces but braces are recommended for clarity.'
              },
              {
                title: 'if-else if-else Chain',
                code: `int score = 85;

// Multiple conditions
if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else if (score >= 60)
{
    Console.WriteLine("Grade: D");
}
else
{
    Console.WriteLine("Grade: F");
}

// Only the first true condition executes
int number = 15;
if (number > 10)
    Console.WriteLine("Greater than 10");  // This executes
else if (number > 5)
    Console.WriteLine("Greater than 5");   // This is skipped
else
    Console.WriteLine("5 or less");        // This is skipped`,
                language: 'csharp',
                explanation: 'else if allows checking multiple conditions in order. Only the first true condition executes, then the rest are skipped. else provides a default when no conditions are true.'
              },
              {
                title: 'Logical Operators',
                code: `int age = 25;
bool hasLicense = true;
bool hasInsurance = true;

// AND operator (&&) - both must be true
if (age >= 16 && hasLicense)
{
    Console.WriteLine("You can drive");
}

// OR operator (||) - at least one must be true
if (age < 18 || age > 65)
{
    Console.WriteLine("Discounted ticket");
}

// NOT operator (!) - inverts the condition
if (!hasInsurance)
{
    Console.WriteLine("You need insurance");
}

// Combining operators
if ((age >= 18 && hasLicense) || age >= 21)
{
    Console.WriteLine("Can rent a car");
}

// Complex conditions
bool canVote = age >= 18;
bool isRegistered = true;
if (canVote && isRegistered && !hasVoted)
{
    Console.WriteLine("Please vote!");
}`,
                language: 'csharp',
                explanation: 'Logical operators combine conditions. && (AND) requires both to be true, || (OR) requires at least one to be true, ! (NOT) inverts the condition. Use parentheses for clarity with complex conditions.'
              },
              {
                title: 'switch Statement',
                code: `int dayNumber = 3;

// switch with int
switch (dayNumber)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 4:
        Console.WriteLine("Thursday");
        break;
    case 5:
        Console.WriteLine("Friday");
        break;
    case 6:
    case 7:
        Console.WriteLine("Weekend!");
        break;
    default:
        Console.WriteLine("Invalid day");
        break;
}

// switch with string
string command = "start";
switch (command.ToLower())
{
    case "start":
        Console.WriteLine("Starting...");
        break;
    case "stop":
        Console.WriteLine("Stopping...");
        break;
    case "pause":
        Console.WriteLine("Pausing...");
        break;
    default:
        Console.WriteLine("Unknown command");
        break;
}`,
                language: 'csharp',
                explanation: 'switch statements check a variable against multiple specific values. Each case must end with break. Multiple cases can share the same code. default handles any value not explicitly listed.'
              },
              {
                title: 'Comparison Operators',
                code: `int a = 10;
int b = 20;

// Equality
bool isEqual = (a == b);        // false (equal to)
bool notEqual = (a != b);       // true (not equal to)

// Relational
bool less = (a < b);            // true (less than)
bool greater = (a > b);         // false (greater than)
bool lessOrEqual = (a <= b);    // true (less than or equal)
bool greaterOrEqual = (a >= b); // false (greater than or equal)

// Using in if statements
if (a == b)
    Console.WriteLine("Equal");

if (a != b)
    Console.WriteLine("Not equal");

if (a < b)
    Console.WriteLine("a is less than b");

// String comparison
string name1 = "Alice";
string name2 = "alice";
bool same = (name1 == name2);              // false (case-sensitive)
bool sameIgnoreCase = name1.Equals(name2, 
    StringComparison.OrdinalIgnoreCase);   // true`,
                language: 'csharp',
                explanation: 'Comparison operators return boolean values. Use == for equality (not =, which is assignment). String comparison is case-sensitive by default. Use Equals() with StringComparison for case-insensitive checks.'
              }
            ],
            comparison: {
              title: 'if vs switch',
              options: [
                {
                  name: 'if-else if-else',
                  description: 'Check conditions with any boolean expression',
                  whenToUse: 'Ranges, complex conditions, different types of checks',
                  example: 'if (score >= 90) { } else if (score >= 80) { }'
                },
                {
                  name: 'switch',
                  description: 'Check a variable against specific values',
                  whenToUse: 'Multiple specific values, menu options, enums',
                  example: 'switch (dayNumber) { case 1: break; case 2: break; }'
                }
              ]
            }
          },
          {
            id: 'console-io',
            title: 'Console.WriteLine & Console.ReadLine',
            description: 'Reading input from users and displaying output to the console',
            keyPoints: [
              'Console.WriteLine() outputs text and moves to a new line',
              'Console.Write() outputs text without a new line',
              'Console.ReadLine() reads a full line of user input as a string',
              'Always validate and convert user input before using it',
              'Use prompts to tell users what input you expect'
            ],
            codeExamples: [
              {
                title: 'Console.WriteLine Basics',
                code: `// Output with new line
Console.WriteLine("Hello, World!");
Console.WriteLine("This is on a new line");

// Output without new line
Console.Write("Enter your name: ");
Console.Write("Still on same line");
Console.WriteLine();  // Just a new line

// Output variables
string name = "Alice";
int age = 25;
Console.WriteLine(name);
Console.WriteLine(age);

// Multiple values
Console.WriteLine("Name: " + name + ", Age: " + age);

// String interpolation
Console.WriteLine($"Name: {name}, Age: {age}");

// Empty line
Console.WriteLine();`,
                language: 'csharp',
                explanation: 'Console.WriteLine() outputs text and moves to the next line. Console.Write() outputs without moving to a new line. Use string interpolation or concatenation to include variables in output.'
              },
              {
                title: 'Console.ReadLine Basics',
                code: `// Reading string input
Console.Write("Enter your name: ");
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");

// Reading and converting to int
Console.Write("Enter your age: ");
string ageInput = Console.ReadLine();
int age = int.Parse(ageInput);
Console.WriteLine($"You are {age} years old");

// Reading multiple inputs
Console.Write("Enter first name: ");
string firstName = Console.ReadLine();

Console.Write("Enter last name: ");
string lastName = Console.ReadLine();

Console.WriteLine($"Full name: {firstName} {lastName}");

// Reading on same line as prompt
Console.Write("Enter city: ");
string city = Console.ReadLine();`,
                language: 'csharp',
                explanation: 'Console.ReadLine() reads user input as a string. It waits for the user to press Enter. Always store the result in a variable. Convert to other types (int, double) as needed.'
              },
              {
                title: 'Safe Input Conversion with TryParse',
                code: `// Unsafe - will crash if input is not a number
Console.Write("Enter age: ");
int age = int.Parse(Console.ReadLine());  // Crashes on "abc"

// Safe - handles invalid input
Console.Write("Enter age: ");
string input = Console.ReadLine();
if (int.TryParse(input, out int safeAge))
{
    Console.WriteLine($"Valid age: {safeAge}");
}
else
{
    Console.WriteLine("Invalid age entered");
}

// Loop until valid input
int validAge;
while (true)
{
    Console.Write("Enter your age: ");
    if (int.TryParse(Console.ReadLine(), out validAge))
    {
        break;  // Valid input, exit loop
    }
    Console.WriteLine("Please enter a valid number");
}
Console.WriteLine($"Age: {validAge}");`,
                language: 'csharp',
                explanation: 'int.Parse() throws an exception if input is invalid. int.TryParse() returns true/false and safely converts. Use TryParse() to handle invalid user input gracefully.'
              },
              {
                title: 'Complete Input/Output Example',
                code: `// Simple calculator program
Console.WriteLine("=== Simple Calculator ===");
Console.WriteLine();

// Get first number
Console.Write("Enter first number: ");
double num1;
while (!double.TryParse(Console.ReadLine(), out num1))
{
    Console.Write("Invalid. Enter first number: ");
}

// Get operation
Console.Write("Enter operation (+, -, *, /): ");
string operation = Console.ReadLine();

// Get second number
Console.Write("Enter second number: ");
double num2;
while (!double.TryParse(Console.ReadLine(), out num2))
{
    Console.Write("Invalid. Enter second number: ");
}

// Calculate and display result
double result = 0;
bool validOperation = true;

switch (operation)
{
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 != 0)
            result = num1 / num2;
        else
        {
            Console.WriteLine("Cannot divide by zero!");
            validOperation = false;
        }
        break;
    default:
        Console.WriteLine("Invalid operation!");
        validOperation = false;
        break;
}

if (validOperation)
{
    Console.WriteLine($"Result: {num1} {operation} {num2} = {result}");
}`,
                language: 'csharp',
                explanation: 'Complete example showing input validation, type conversion, conditionals, and formatted output. Always validate user input and handle edge cases like division by zero.'
              }
            ]
          },
          {
            id: 'assignment-operators',
            title: 'Assignment Operators',
            description: 'Understanding assignment and compound assignment operators in C#',
            keyPoints: [
              'The = operator assigns a value to a variable',
              'Compound operators combine assignment with arithmetic operations',
              '+=, -=, *=, /=, %= perform operation and assignment in one step',
              'Increment (++) and decrement (--) operators change value by 1',
              'Compound operators make code more concise and readable'
            ],
            codeExamples: [
              {
                title: 'Basic Assignment Operator',
                code: `// Simple assignment with =
int age = 25;
string name = "Alice";
double price = 19.99;
bool isActive = true;

// Assignment copies the value
int x = 10;
int y = x;      // y gets the value 10
x = 20;         // Changing x doesn't affect y
Console.WriteLine(y);  // Still 10

// Reassignment
int score = 0;
score = 50;     // score is now 50
score = 100;    // score is now 100`,
                language: 'csharp',
                explanation: 'The = operator assigns the value on the right to the variable on the left. It copies the value, so changing the original doesn\'t affect the copy.'
              },
              {
                title: 'Compound Assignment Operators',
                code: `int count = 10;

// Addition assignment (+=)
count += 5;     // Same as: count = count + 5
Console.WriteLine(count);  // 15

// Subtraction assignment (-=)
count -= 3;     // Same as: count = count - 3
Console.WriteLine(count);  // 12

// Multiplication assignment (*=)
count *= 2;     // Same as: count = count * 2
Console.WriteLine(count);  // 24

// Division assignment (/=)
count /= 4;     // Same as: count = count / 4
Console.WriteLine(count);  // 6

// Modulus assignment (%=)
count %= 4;     // Same as: count = count % 4
Console.WriteLine(count);  // 2`,
                language: 'csharp',
                explanation: 'Compound operators perform an operation and assignment together. count += 5 is shorthand for count = count + 5. This makes code more concise.'
              },
              {
                title: 'Increment and Decrement Operators',
                code: `int counter = 5;

// Post-increment (use value, then add 1)
int a = counter++;
Console.WriteLine(a);       // 5 (original value)
Console.WriteLine(counter); // 6 (incremented)

counter = 5;  // Reset

// Pre-increment (add 1, then use value)
int b = ++counter;
Console.WriteLine(b);       // 6 (incremented value)
Console.WriteLine(counter); // 6

counter = 5;  // Reset

// Post-decrement (use value, then subtract 1)
int c = counter--;
Console.WriteLine(c);       // 5 (original value)
Console.WriteLine(counter); // 4 (decremented)

counter = 5;  // Reset

// Pre-decrement (subtract 1, then use value)
int d = --counter;
Console.WriteLine(d);       // 4 (decremented value)
Console.WriteLine(counter); // 4`,
                language: 'csharp',
                explanation: 'Post-increment (x++) uses the current value then adds 1. Pre-increment (++x) adds 1 then uses the new value. Same logic applies to decrement (x-- and --x).'
              },
              {
                title: 'Practical Examples',
                code: `// Accumulating a total
double total = 0;
total += 10.50;  // Add first item
total += 5.25;   // Add second item
total += 8.75;   // Add third item
Console.WriteLine($"Total: $ {total}");  // $24.50

// Applying a discount
double price = 100;
price *= 0.9;    // Apply 10% discount (multiply by 0.9)
Console.WriteLine($ "Discounted: $ {price}");  // $90

// Counting in a loop
int count = 0;
for (int i = 0; i < 5; i++)
{
    count++;     // Increment counter
}
Console.WriteLine($"Count: {count}");  // 5

// Score tracking
int score = 100;
score -= 10;     // Lose 10 points
score += 25;     // Gain 25 points
score *= 2;      // Double bonus
Console.WriteLine($"Final score: {score}");  // 230`,
                language: 'csharp',
                explanation: 'Compound operators are commonly used for accumulating totals, applying calculations, counting iterations, and updating game scores.'
              },
              {
                title: 'String Concatenation with +=',
                code: `// Building strings with +=
string message = "Hello";
message += " ";
message += "World";
message += "!";
Console.WriteLine(message);  // "Hello World!"

// Building a list
string items = "";
items += "Apple, ";
items += "Banana, ";
items += "Orange";
Console.WriteLine(items);  // "Apple, Banana, Orange"

// Building formatted output
string report = "Report:\\n";
report += "Name: John\\n";
report += "Age: 25\\n";
report += "Score: 95\\n";
Console.WriteLine(report);`,
                language: 'csharp',
                explanation: 'The += operator also works with strings to append (add to the end). Each += creates a new string with the combined content.'
              }
            ],
            comparison: {
              title: 'Assignment Operator Comparison',
              options: [
                {
                  name: 'Simple Assignment (=)',
                  description: 'Assigns a value to a variable',
                  whenToUse: 'Setting initial values or replacing values completely',
                  example: 'int x = 10; x = 20;'
                },
                {
                  name: 'Compound Assignment (+=, -=, etc.)',
                  description: 'Performs operation and assigns result',
                  whenToUse: 'Modifying existing values, accumulating totals',
                  example: 'count += 5; total -= discount;'
                },
                {
                  name: 'Increment/Decrement (++, --)',
                  description: 'Adds or subtracts 1',
                  whenToUse: 'Counters, loops, incrementing by exactly 1',
                  example: 'count++; index--;'
                }
              ]
            }
          },
          {
            id: 'pseudocode',
            title: 'Pseudocode',
            description: 'Planning your code with plain language before writing actual code',
            keyPoints: [
              'Pseudocode is a plain-language description of code logic',
              'It helps plan your solution before writing actual code',
              'Use simple, clear language that anyone can understand',
              'Focus on the logic and steps, not syntax',
              'Pseudocode makes it easier to spot logical errors early'
            ],
            codeExamples: [
              {
                title: 'What is Pseudocode?',
                code: `// Pseudocode Example: Calculate average of three numbers
/*
START
  GET number1 from user
  GET number2 from user
  GET number3 from user
  
  SET sum = number1 + number2 + number3
  SET average = sum / 3
  
  DISPLAY average
END
*/

// Actual C# code based on pseudocode:
Console.Write("Enter first number: ");
double num1 = double.Parse(Console.ReadLine());

Console.Write("Enter second number: ");
double num2 = double.Parse(Console.ReadLine());

Console.Write("Enter third number: ");
double num3 = double.Parse(Console.ReadLine());

double sum = num1 + num2 + num3;
double average = sum / 3;

Console.WriteLine($"Average: {average}");`,
                language: 'csharp',
                explanation: 'Pseudocode uses plain language to describe the logic. It helps you think through the problem before worrying about syntax. Then you translate it to actual code.'
              },
              {
                title: 'Pseudocode for Conditionals',
                code: `// Pseudocode: Check if student passed
/*
START
  GET score from user
  
  IF score >= 60 THEN
    DISPLAY "You passed!"
  ELSE
    DISPLAY "You failed."
  END IF
END
*/

// C# Implementation:
Console.Write("Enter your score: ");
int score = int.Parse(Console.ReadLine());

if (score >= 60)
{
    Console.WriteLine("You passed!");
}
else
{
    Console.WriteLine("You failed.");
}`,
                language: 'csharp',
                explanation: 'Pseudocode for conditionals uses IF-THEN-ELSE structure. It clearly shows the decision logic before you write the actual if-else code.'
              },
              {
                title: 'Pseudocode for Loops',
                code: `// Pseudocode: Count from 1 to 10
/*
START
  SET counter = 1
  
  WHILE counter <= 10 DO
    DISPLAY counter
    INCREMENT counter by 1
  END WHILE
END
*/

// C# Implementation:
int counter = 1;

while (counter <= 10)
{
    Console.WriteLine(counter);
    counter++;
}`,
                language: 'csharp',
                explanation: 'Pseudocode for loops uses WHILE-DO or FOR structures. It shows the loop logic clearly: initialize, check condition, execute, update.'
              },
              {
                title: 'Complex Pseudocode Example',
                code: `// Pseudocode: Simple login system
/*
START
  SET maxAttempts = 3
  SET attempts = 0
  SET correctPassword = "secret123"
  SET isLoggedIn = false
  
  WHILE attempts < maxAttempts AND isLoggedIn is false DO
    DISPLAY "Enter password: "
    GET userPassword from user
    
    IF userPassword equals correctPassword THEN
      DISPLAY "Login successful!"
      SET isLoggedIn = true
    ELSE
      INCREMENT attempts by 1
      SET remaining = maxAttempts - attempts
      
      IF remaining > 0 THEN
        DISPLAY "Wrong password. " + remaining + " attempts left."
      ELSE
        DISPLAY "Account locked. Too many failed attempts."
      END IF
    END IF
  END WHILE
END
*/

// C# Implementation:
int maxAttempts = 3;
int attempts = 0;
string correctPassword = "secret123";
bool isLoggedIn = false;

while (attempts < maxAttempts && !isLoggedIn)
{
    Console.Write("Enter password: ");
    string userPassword = Console.ReadLine();
    
    if (userPassword == correctPassword)
    {
        Console.WriteLine("Login successful!");
        isLoggedIn = true;
    }
    else
    {
        attempts++;
        int remaining = maxAttempts - attempts;
        
        if (remaining > 0)
        {
            Console.WriteLine($"Wrong password. {remaining} attempts left.");
        }
        else
        {
            Console.WriteLine("Account locked. Too many failed attempts.");
        }
    }
}`,
                language: 'csharp',
                explanation: 'Complex pseudocode breaks down complicated logic into clear steps. Write pseudocode first to plan your approach, then translate each section to actual code.'
              },
              {
                title: 'Pseudocode Best Practices',
                code: `// GOOD Pseudocode - Clear and structured
/*
START
  GET temperature from user
  
  IF temperature > 100 THEN
    DISPLAY "Water is boiling"
  ELSE IF temperature > 32 THEN
    DISPLAY "Water is liquid"
  ELSE
    DISPLAY "Water is frozen"
  END IF
END
*/

// BAD Pseudocode - Too vague
/*
get temp
check temp
show result
*/

// BAD Pseudocode - Too much like actual code
/*
Console.Write("Enter temp: ");
int temp = int.Parse(Console.ReadLine());
if (temp > 100) { Console.WriteLine("Boiling"); }
*/

// GOOD - Right level of detail
/*
START Program
  INITIALIZE variables
  
  REPEAT until user quits
    DISPLAY menu options
    GET user choice
    
    CASE choice OF
      1: Call AddNumbers function
      2: Call SubtractNumbers function
      3: SET quit to true
      DEFAULT: DISPLAY error message
    END CASE
  END REPEAT
END Program
*/`,
                language: 'csharp',
                explanation: 'Good pseudocode is clear but not too detailed. Avoid being too vague or too close to actual code. Use consistent keywords like START, END, IF, WHILE, GET, DISPLAY, SET.'
              }
            ],
            comparison: {
              title: 'Pseudocode vs Actual Code',
              options: [
                {
                  name: 'Pseudocode',
                  description: 'Plain language description of logic',
                  whenToUse: 'Planning, designing, communicating ideas, learning',
                  example: 'IF score >= 90 THEN DISPLAY "A grade"'
                },
                {
                  name: 'Actual Code',
                  description: 'Syntax-correct programming language',
                  whenToUse: 'Implementation, execution, production',
                  example: 'if (score >= 90) { Console.WriteLine("A grade"); }'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'Combine-week-2',
        weekNumber: 2,
        title: 'Loops & TryParse',
        description: 'Repeating code with while, do-while, for, and foreach loops, plus safe input parsing',
        concepts: [
          {
            id: 'while-loops',
            title: 'While Loops',
            description: 'Repeating code while a condition is true',
            keyPoints: [
              'while loops check the condition before each iteration',
              'The loop continues as long as the condition is true',
              'Make sure the condition eventually becomes false to avoid infinite loops',
              'Use while when you do not know how many iterations you need',
              'Common uses: input validation, menu systems, game loops'
            ],
            codeExamples: [
              {
                title: 'Basic While Loop',
                code: `// Count from 1 to 5
int count = 1;
while (count <= 5)
{
    Console.WriteLine($"Count: {count}");
    count++;  // Increment to avoid infinite loop
}
// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// Sum numbers until reaching 100
int sum = 0;
int number = 1;
while (sum < 100)
{
    sum += number;
    number++;
}
Console.WriteLine($"Sum: {sum}, Numbers added: {number - 1}");`,
                language: 'csharp',
                explanation: 'while loops check the condition first. If true, the code block executes, then the condition is checked again. Always modify the condition variable inside the loop to eventually exit.'
              },
              {
                title: 'Input Validation with While',
                code: `// Keep asking until valid input
int age;
Console.Write("Enter your age (1-120): ");
while (!int.TryParse(Console.ReadLine(), out age) || age < 1 || age > 120)
{
    Console.Write("Invalid. Enter your age (1-120): ");
}
Console.WriteLine($"Valid age: {age}");

// Menu system
string choice;
while (true)
{
    Console.WriteLine("\\n1. Start Game");
    Console.WriteLine("2. Options");
    Console.WriteLine("3. Quit");
    Console.Write("Choose: ");
    choice = Console.ReadLine();
    
    if (choice == "1")
    {
        Console.WriteLine("Starting game...");
    }
    else if (choice == "2")
    {
        Console.WriteLine("Opening options...");
    }
    else if (choice == "3")
    {
        Console.WriteLine("Goodbye!");
        break;  // Exit the loop
    }
    else
    {
        Console.WriteLine("Invalid choice");
    }
}`,
                language: 'csharp',
                explanation: 'while loops are perfect for input validation - keep asking until you get valid input. Use while(true) with break to create menu systems that run until the user chooses to exit.'
              },
              {
                title: 'Common While Loop Patterns',
                code: `// Pattern 1: Counter loop
int i = 0;
while (i < 10)
{
    Console.WriteLine(i);
    i++;
}

// Pattern 2: Sentinel value
string input;
Console.WriteLine("Enter names (or 'quit' to stop):");
while ((input = Console.ReadLine()) != "quit")
{
    Console.WriteLine($"Hello, {input}!");
}

// Pattern 3: Flag-based loop
bool isRunning = true;
while (isRunning)
{
    Console.Write("Continue? (y/n): ");
    string response = Console.ReadLine();
    if (response.ToLower() == "n")
    {
        isRunning = false;
    }
}

// Pattern 4: Condition-based loop
Random random = new Random();
int target = random.Next(1, 11);
int guess = 0;
while (guess != target)
{
    Console.Write("Guess the number (1-10): ");
    int.TryParse(Console.ReadLine(), out guess);
    if (guess < target) Console.WriteLine("Too low!");
    else if (guess > target) Console.WriteLine("Too high!");
}
Console.WriteLine("Correct!");`,
                language: 'csharp',
                explanation: 'Common while loop patterns: counter loops, sentinel values (special value to stop), flag-based loops (boolean variable), and condition-based loops (loop until condition met).'
              }
            ]
          },
          {
            id: 'do-while-loops',
            title: 'Do-While Loops',
            description: 'Loops that always execute at least once',
            keyPoints: [
              'do-while checks the condition after each iteration',
              'The code block always executes at least once',
              'Use do-while when you need to run the code before checking the condition',
              'Common for menu systems and input validation',
              'The condition is at the bottom with a semicolon'
            ],
            codeExamples: [
              {
                title: 'Basic Do-While Loop',
                code: `// Always runs at least once
int count = 1;
do
{
    Console.WriteLine($"Count: {count}");
    count++;
} while (count <= 5);

// Runs once even if condition is false
int number = 10;
do
{
    Console.WriteLine("This runs once");
    number++;
} while (number < 5);  // False, but code already ran once`,
                language: 'csharp',
                explanation: 'do-while executes the code block first, then checks the condition. This guarantees at least one execution. Notice the semicolon after the while condition.'
              },
              {
                title: 'Menu System with Do-While',
                code: `// Menu that shows at least once
int choice;
do
{
    Console.WriteLine("\\n=== Main Menu ===");
    Console.WriteLine("1. New Game");
    Console.WriteLine("2. Load Game");
    Console.WriteLine("3. Settings");
    Console.WriteLine("4. Exit");
    Console.Write("Enter choice: ");
    
    int.TryParse(Console.ReadLine(), out choice);
    
    switch (choice)
    {
        case 1:
            Console.WriteLine("Starting new game...");
            break;
        case 2:
            Console.WriteLine("Loading game...");
            break;
        case 3:
            Console.WriteLine("Opening settings...");
            break;
        case 4:
            Console.WriteLine("Exiting...");
            break;
        default:
            Console.WriteLine("Invalid choice!");
            break;
    }
} while (choice != 4);`,
                language: 'csharp',
                explanation: 'do-while is perfect for menus - you want to show the menu at least once, then keep showing it until the user chooses to exit.'
              },
              {
                title: 'Input Validation with Do-While',
                code: `// Get valid number
int age;
do
{
    Console.Write("Enter your age (1-120): ");
} while (!int.TryParse(Console.ReadLine(), out age) || age < 1 || age > 120);
Console.WriteLine($"Age: {age}");

// Get yes/no answer
string answer;
do
{
    Console.Write("Do you agree? (yes/no): ");
    answer = Console.ReadLine().ToLower();
} while (answer != "yes" && answer != "no");
Console.WriteLine($"You answered: {answer}");

// Play again loop
string playAgain;
do
{
    Console.WriteLine("Playing game...");
    // Game code here
    
    Console.Write("Play again? (y/n): ");
    playAgain = Console.ReadLine().ToLower();
} while (playAgain == "y");`,
                language: 'csharp',
                explanation: 'do-while is ideal for input validation when you want to ask at least once, then keep asking until you get valid input. Also great for "play again" loops.'
              }
            ],
            comparison: {
              title: 'While vs Do-While',
              options: [
                {
                  name: 'while',
                  description: 'Checks condition before executing',
                  whenToUse: 'When the code might not need to run at all',
                  example: 'while (count < 10) { count++; }'
                },
                {
                  name: 'do-while',
                  description: 'Executes once, then checks condition',
                  whenToUse: 'When code must run at least once (menus, validation)',
                  example: 'do { ShowMenu(); } while (choice != 4);'
                }
              ]
            }
          },
          {
            id: 'for-loops',
            title: 'For Loops',
            description: 'Counting loops with initialization, condition, and increment',
            keyPoints: [
              'for loops are best when you know how many iterations you need',
              'Three parts: initialization, condition, increment',
              'Loop variable scope is limited to the loop',
              'Can count up or down',
              'Can increment by any amount'
            ],
            codeExamples: [
              {
                title: 'Basic For Loop',
                code: `// Count from 0 to 4
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"i = {i}");
}
// Output: i = 0, i = 1, i = 2, i = 3, i = 4

// Count from 1 to 10
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}

// Count backwards
for (int i = 10; i >= 1; i--)
{
    Console.WriteLine(i);
}
Console.WriteLine("Blastoff!");

// Increment by 2 (even numbers)
for (int i = 0; i <= 10; i += 2)
{
    Console.WriteLine(i);  // 0, 2, 4, 6, 8, 10
}`,
                language: 'csharp',
                explanation: 'for loops have three parts: initialization (int i = 0), condition (i < 5), and increment (i++). The loop variable i is only accessible inside the loop.'
              },
              {
                title: 'Nested For Loops',
                code: `// Multiplication table
for (int row = 1; row <= 5; row++)
{
    for (int col = 1; col <= 5; col++)
    {
        Console.Write($"{row * col,4}");  // 4-character width
    }
    Console.WriteLine();  // New line after each row
}

// Pattern printing
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
// Output:
// *
// **
// ***
// ****
// *****

// Grid coordinates
for (int x = 0; x < 3; x++)
{
    for (int y = 0; y < 3; y++)
    {
        Console.WriteLine($"({x}, {y})");
    }
}`,
                language: 'csharp',
                explanation: 'Nested for loops run one loop inside another. The inner loop completes all its iterations for each iteration of the outer loop. Useful for tables, grids, and patterns.'
              },
              {
                title: 'For Loop with Arrays',
                code: `// Array with for loop
string[] names = { "Alice", "Bob", "Charlie", "David" };

// Access by index
for (int i = 0; i < names.Length; i++)
{
    Console.WriteLine($"{i}: {names[i]}");
}

// Calculate sum
int[] numbers = { 10, 20, 30, 40, 50 };
int sum = 0;
for (int i = 0; i < numbers.Length; i++)
{
    sum += numbers[i];
}
Console.WriteLine($"Sum: {sum}");

// Find maximum
int[] scores = { 85, 92, 78, 95, 88 };
int max = scores[0];
for (int i = 1; i < scores.Length; i++)
{
    if (scores[i] > max)
    {
        max = scores[i];
    }
}
Console.WriteLine($"Highest score: {max}");`,
                language: 'csharp',
                explanation: 'for loops are perfect for arrays - use the index to access each element. Use array.Length for the condition to avoid going out of bounds.'
              }
            ]
          },
          {
            id: 'foreach-loops',
            title: 'Foreach Loops',
            description: 'Iterating through collections without indexes',
            keyPoints: [
              'foreach loops iterate through every element in a collection',
              'No need to manage indexes or check length',
              'Cleaner and safer than for loops for simple iteration',
              'Cannot modify the collection while iterating',
              'Works with arrays, lists, and other collections'
            ],
            codeExamples: [
              {
                title: 'Basic Foreach Loop',
                code: `// Iterate through array
string[] fruits = { "Apple", "Banana", "Orange", "Grape" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}

// Iterate through list
List<int> numbers = new List<int> { 10, 20, 30, 40, 50 };
foreach (int number in numbers)
{
    Console.WriteLine(number);
}

// Calculate sum
int[] scores = { 85, 92, 78, 95, 88 };
int total = 0;
foreach (int score in scores)
{
    total += score;
}
Console.WriteLine($"Total: {total}");
Console.WriteLine($"Average: {total / scores.Length}");`,
                language: 'csharp',
                explanation: 'foreach loops automatically iterate through every element. No indexes needed - just specify the type and variable name. Much cleaner than for loops when you need every element.'
              },
              {
                title: 'Foreach with Different Collections',
                code: `// Array of strings
string[] names = { "Alice", "Bob", "Charlie" };
foreach (string name in names)
{
    Console.WriteLine($"Hello, {name}!");
}

// List of integers
List<int> ages = new List<int> { 25, 30, 35, 40 };
foreach (int age in ages)
{
    if (age >= 30)
    {
        Console.WriteLine($"Age {age} is 30 or older");
    }
}

// Array of doubles
double[] prices = { 19.99, 29.99, 39.99 };
foreach (double price in prices)
{
    double withTax = price * 1.08;
    Console.WriteLine($"\\$\{price} + tax = \\$\{withTax:F2}");
}`,
                language: 'csharp',
                explanation: 'foreach works with any collection type - arrays, lists, etc. The loop variable is read-only - you can use it but cannot reassign it.'
              },
              {
                title: 'When to Use For vs Foreach',
                code: `int[] numbers = { 10, 20, 30, 40, 50 };

// Use foreach when you need every element
int sum = 0;
foreach (int num in numbers)
{
    sum += num;
}

// Use for when you need the index
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine($"Index {i}: {numbers[i]}");
}

// Use for when you need to modify the array
for (int i = 0; i < numbers.Length; i++)
{
    numbers[i] *= 2;  // Double each value
}

// Use for when you need to skip elements
for (int i = 0; i < numbers.Length; i += 2)
{
    Console.WriteLine(numbers[i]);  // Every other element
}

// Use for when going backwards
for (int i = numbers.Length - 1; i >= 0; i--)
{
    Console.WriteLine(numbers[i]);
}`,
                language: 'csharp',
                explanation: 'Use foreach for simple iteration through all elements. Use for when you need indexes, want to modify elements, skip elements, or iterate backwards.'
              }
            ],
            comparison: {
              title: 'Loop Types Comparison',
              options: [
                {
                  name: 'for',
                  description: 'Counter-based loop with index access',
                  whenToUse: 'Known iteration count, need index, modify elements',
                  example: 'for (int i = 0; i < array.Length; i++)'
                },
                {
                  name: 'foreach',
                  description: 'Iterate through all collection elements',
                  whenToUse: 'Simple iteration, no index needed, read-only',
                  example: 'foreach (var item in collection)'
                },
                {
                  name: 'while',
                  description: 'Condition-based loop, check before',
                  whenToUse: 'Unknown iteration count, condition-based',
                  example: 'while (condition) { }'
                },
                {
                  name: 'do-while',
                  description: 'Condition-based loop, check after',
                  whenToUse: 'Must run at least once (menus, validation)',
                  example: 'do { } while (condition);'
                }
              ]
            }
          },
          {
            id: 'tryparse',
            title: 'TryParse for Safe Input',
            description: 'Converting strings to numbers safely without crashes',
            keyPoints: [
              'Parse() throws exceptions on invalid input - can crash your program',
              'TryParse() returns true/false and safely converts',
              'Use out parameter to get the converted value',
              'Always use TryParse() for user input',
              'Available for int, double, decimal, bool, DateTime, and more'
            ],
            codeExamples: [
              {
                title: 'Parse vs TryParse',
                code: `// Parse - UNSAFE (will crash on invalid input)
Console.Write("Enter age: ");
string input1 = Console.ReadLine();
int age1 = int.Parse(input1);  // Crashes if user enters "abc"

// TryParse - SAFE (handles invalid input)
Console.Write("Enter age: ");
string input2 = Console.ReadLine();
if (int.TryParse(input2, out int age2))
{
    Console.WriteLine($"Valid age: {age2}");
}
else
{
    Console.WriteLine("Invalid age entered");
}

// TryParse returns bool
bool success = int.TryParse("123", out int result);
Console.WriteLine($"Success: {success}, Result: {result}");  // True, 123

bool failure = int.TryParse("abc", out int result2);
Console.WriteLine($"Success: {failure}, Result: {result2}");  // False, 0`,
                language: 'csharp',
                explanation: 'Parse() crashes on invalid input. TryParse() returns true if successful, false if not. The converted value is stored in the out parameter. Always use TryParse() for user input!'
              },
              {
                title: 'TryParse with Different Types',
                code: `// int.TryParse
if (int.TryParse("42", out int intValue))
    Console.WriteLine($"Int: {intValue}");

// double.TryParse
if (double.TryParse("3.14", out double doubleValue))
    Console.WriteLine($"Double: {doubleValue}");

// decimal.TryParse
if (decimal.TryParse("19.99", out decimal decimalValue))
    Console.WriteLine($"Decimal: {decimalValue}");

// bool.TryParse
if (bool.TryParse("true", out bool boolValue))
    Console.WriteLine($"Bool: {boolValue}");

// DateTime.TryParse
if (DateTime.TryParse("2024-03-25", out DateTime dateValue))
    Console.WriteLine($"Date: {dateValue}");

// Failed TryParse
if (!int.TryParse("not a number", out int failedValue))
    Console.WriteLine("Conversion failed");`,
                language: 'csharp',
                explanation: 'TryParse() is available for many types: int, double, decimal, bool, DateTime, and more. The pattern is always the same: returns bool, uses out parameter for the result.'
              },
              {
                title: 'Input Validation Loop',
                code: `// Keep asking until valid input
int age;
Console.Write("Enter your age: ");
while (!int.TryParse(Console.ReadLine(), out age))
{
    Console.Write("Invalid. Please enter a number: ");
}
Console.WriteLine($"Age: {age}");

// With range validation
int score;
do
{
    Console.Write("Enter score (0-100): ");
} while (!int.TryParse(Console.ReadLine(), out score) || score < 0 || score > 100);
Console.WriteLine($"Score: {score}");

// With custom error messages
double price;
bool validInput = false;
while (!validInput)
{
    Console.Write("Enter price: $");
    string input = Console.ReadLine();
    
    if (!double.TryParse(input, out price))
    {
        Console.WriteLine("Error: Please enter a valid number");
    }
    else if (price < 0)
    {
        Console.WriteLine("Error: Price cannot be negative");
    }
    else
    {
        validInput = true;
    }
}
Console.WriteLine($"Price: \\$\{price:F2}");`,
                language: 'csharp',
                explanation: 'Combine TryParse() with loops for robust input validation. Keep asking until you get valid input within the expected range. Provide clear error messages.'
              }
            ]
          },
          {
            id: 'arithmetic-operators',
            title: 'Arithmetic Operators',
            description: 'Mathematical operations in C# - addition, subtraction, multiplication, division, and modulus',
            keyPoints: [
              'Arithmetic operators perform mathematical calculations',
              'Basic operators: + (add), - (subtract), * (multiply), / (divide), % (modulus)',
              'Integer division truncates decimal parts',
              'Modulus (%) returns the remainder after division',
              'Order of operations follows PEMDAS (Parentheses, Exponents, Multiply/Divide, Add/Subtract)'
            ],
            codeExamples: [
              {
                title: 'Basic Arithmetic Operators',
                code: `// Addition
int sum = 10 + 5;
Console.WriteLine($"10 + 5 = {sum}");  // 15

// Subtraction
int difference = 10 - 5;
Console.WriteLine($"10 - 5 = {difference}");  // 5

// Multiplication
int product = 10 * 5;
Console.WriteLine($"10 * 5 = {product}");  // 50

// Division
int quotient = 10 / 5;
Console.WriteLine($"10 / 5 = {quotient}");  // 2

// Modulus (remainder)
int remainder = 10 % 3;
Console.WriteLine($"10 % 3 = {remainder}");  // 1

// Negative numbers
int negative = -10;
int result = negative + 5;
Console.WriteLine($"-10 + 5 = {result}");  // -5`,
                language: 'csharp',
                explanation: 'The five basic arithmetic operators work like a calculator. Addition (+), subtraction (-), multiplication (*), division (/), and modulus (%) for remainder.'
              },
              {
                title: 'Integer vs Decimal Division',
                code: `// Integer division - truncates decimal
int a = 10;
int b = 3;
int result1 = a / b;
Console.WriteLine($"10 / 3 = {result1}");  // 3 (not 3.333...)

// Decimal division - keeps decimal
double c = 10.0;
double d = 3.0;
double result2 = c / d;
Console.WriteLine($"10.0 / 3.0 = {result2}");  // 3.333...

// Mixed types - converts to decimal
double result3 = 10 / 3.0;
Console.WriteLine($"10 / 3.0 = {result3}");  // 3.333...

// Cast to get decimal result
int x = 10;
int y = 3;
double result4 = (double)x / y;
Console.WriteLine($"(double)10 / 3 = {result4}");  // 3.333...

// Common mistake
int wrong = 10 / 3;  // 3, not 3.333
double stillWrong = 10 / 3;  // 3.0, division happens first!
double correct = 10.0 / 3;  // 3.333...`,
                language: 'csharp',
                explanation: 'Integer division discards the decimal part. To get decimal results, at least one operand must be a decimal type (double, decimal, float) or cast to decimal.'
              },
              {
                title: 'Modulus Operator (%)',
                code: `// Modulus returns the remainder
Console.WriteLine($"10 % 3 = {10 % 3}");  // 1 (10 ÷ 3 = 3 remainder 1)
Console.WriteLine($"15 % 4 = {15 % 4}");  // 3 (15 ÷ 4 = 3 remainder 3)
Console.WriteLine($"20 % 5 = {20 % 5}");  // 0 (20 ÷ 5 = 4 remainder 0)

// Check if number is even or odd
int number = 7;
if (number % 2 == 0)
    Console.WriteLine($"{number} is even");
else
    Console.WriteLine($"{number} is odd");  // This executes

// Check if divisible by another number
int value = 15;
if (value % 5 == 0)
    Console.WriteLine($"{value} is divisible by 5");  // This executes

// Cycle through values (wrapping)
for (int i = 0; i < 10; i++)
{
    int cycled = i % 3;  // Cycles: 0, 1, 2, 0, 1, 2, 0, 1, 2, 0
    Console.WriteLine($"i={i}, i%3={cycled}");
}

// Get last digit of a number
int num = 12345;
int lastDigit = num % 10;
Console.WriteLine($"Last digit of {num} is {lastDigit}");  // 5`,
                language: 'csharp',
                explanation: 'Modulus (%) gives the remainder. Use it to check even/odd, test divisibility, cycle through values, or extract digits from numbers.'
              },
              {
                title: 'Order of Operations',
                code: `// PEMDAS: Parentheses, Exponents, Multiply/Divide, Add/Subtract
int result1 = 2 + 3 * 4;
Console.WriteLine(result1);  // 14 (not 20) - multiply first

int result2 = (2 + 3) * 4;
Console.WriteLine(result2);  // 20 - parentheses first

int result3 = 10 - 5 - 2;
Console.WriteLine(result3);  // 3 - left to right for same precedence

int result4 = 20 / 4 * 2;
Console.WriteLine(result4);  // 10 - left to right (not 2.5)

// Complex expression
int a = 5;
int b = 3;
int c = 2;
int result5 = a + b * c - (a - b) / c;
// Step by step:
// 1. Parentheses: (5 - 3) = 2
// 2. Multiply: 3 * 2 = 6
// 3. Divide: 2 / 2 = 1
// 4. Add/Subtract left to right: 5 + 6 - 1 = 10
Console.WriteLine(result5);  // 10

// Use parentheses for clarity
int clear = ((a + b) * c) - ((a - b) / c);
Console.WriteLine(clear);  // 15`,
                language: 'csharp',
                explanation: 'C# follows standard math order: Parentheses first, then Multiply/Divide (left to right), then Add/Subtract (left to right). Use parentheses to make your intent clear.'
              },
              {
                title: 'Practical Arithmetic Examples',
                code: `// Calculate average
int score1 = 85, score2 = 92, score3 = 78;
double average = (score1 + score2 + score3) / 3.0;
Console.WriteLine($"Average: {average:F2}");  // 85.00

// Calculate percentage
double earned = 45;
double total = 50;
double percentage = (earned / total) * 100;
Console.WriteLine($"Percentage: {percentage}%");  // 90%

// Convert temperature (Celsius to Fahrenheit)
double celsius = 25;
double fahrenheit = (celsius * 9 / 5) + 32;
Console.WriteLine($"{celsius}°C = {fahrenheit}°F");  // 77°F

// Calculate discount
double price = 100;
double discountPercent = 20;
double discountAmount = price * (discountPercent / 100);
double finalPrice = price - discountAmount;
Console.WriteLine($"Original: $ {price}");
Console.WriteLine($"Discount: $ {discountAmount}");
Console.WriteLine($"Final: $ {finalPrice}");  // $80

// Split bill
double billTotal = 125.50;
int people = 4;
double perPerson = billTotal / people;
Console.WriteLine($"Each person pays: $ {perPerson:F2}");  // $31.38`,
                language: 'csharp',
                explanation: 'Common real-world uses: calculating averages, percentages, temperature conversion, discounts, and splitting costs. Always use decimal types for money calculations.'
              }
            ],
            comparison: {
              title: 'Arithmetic Operator Reference',
              options: [
                {
                  name: 'Addition (+)',
                  description: 'Adds two numbers together',
                  whenToUse: 'Summing values, incrementing, concatenating strings',
                  example: 'int sum = 10 + 5; // 15'
                },
                {
                  name: 'Subtraction (-)',
                  description: 'Subtracts second number from first',
                  whenToUse: 'Finding difference, decrementing, calculating change',
                  example: 'int diff = 10 - 5; // 5'
                },
                {
                  name: 'Multiplication (*)',
                  description: 'Multiplies two numbers',
                  whenToUse: 'Scaling values, calculating totals, area/volume',
                  example: 'int product = 10 * 5; // 50'
                },
                {
                  name: 'Division (/)',
                  description: 'Divides first number by second',
                  whenToUse: 'Splitting values, averages, ratios',
                  example: 'double quotient = 10.0 / 3; // 3.333'
                },
                {
                  name: 'Modulus (%)',
                  description: 'Returns remainder after division',
                  whenToUse: 'Even/odd check, divisibility, cycling, extracting digits',
                  example: 'int remainder = 10 % 3; // 1'
                }
              ]
            }
          },
          {
            id: 'logical-operators',
            title: 'Logical Operators',
            description: 'Combining and inverting boolean conditions with AND, OR, and NOT',
            keyPoints: [
              'Logical operators work with boolean values (true/false)',
              'AND (&&) - both conditions must be true',
              'OR (||) - at least one condition must be true',
              'NOT (!) - inverts the boolean value',
              'Short-circuit evaluation: && stops if first is false, || stops if first is true',
              'Use parentheses to group complex conditions'
            ],
            codeExamples: [
              {
                title: 'AND Operator (&&)',
                code: `// Both conditions must be true
int age = 25;
bool hasLicense = true;

// Simple AND
if (age >= 18 && hasLicense)
{
    Console.WriteLine("You can drive");  // Executes
}

// Multiple AND conditions
int score = 85;
bool attendedClass = true;
bool submittedHomework = true;

if (score >= 60 && attendedClass && submittedHomework)
{
    Console.WriteLine("You passed the course");  // Executes
}

// AND with comparisons
int temperature = 72;
if (temperature >= 60 && temperature <= 80)
{
    Console.WriteLine("Perfect weather!");  // Executes
}

// Truth table for AND
Console.WriteLine($"true && true = {true && true}");      // true
Console.WriteLine($"true && false = {true && false}");    // false
Console.WriteLine($"false && true = {false && true}");    // false
Console.WriteLine($"false && false = {false && false}");  // false`,
                language: 'csharp',
                explanation: 'AND (&&) requires ALL conditions to be true. If any condition is false, the entire expression is false. Use for checking multiple requirements.'
              },
              {
                title: 'OR Operator (||)',
                code: `// At least one condition must be true
int age = 70;
bool isStudent = false;

// Simple OR
if (age < 18 || age > 65)
{
    Console.WriteLine("Discounted ticket");  // Executes (age > 65 is true)
}

// Multiple OR conditions
string day = "Saturday";
if (day == "Saturday" || day == "Sunday" || day == "Holiday")
{
    Console.WriteLine("It's a day off!");  // Executes
}

// OR with different conditions
int score = 95;
bool hasExtraCredit = false;
if (score >= 90 || hasExtraCredit)
{
    Console.WriteLine("Grade: A");  // Executes (score >= 90 is true)
}

// Truth table for OR
Console.WriteLine($"true || true = {true || true}");      // true
Console.WriteLine($"true || false = {true || false}");    // true
Console.WriteLine($"false || true = {false || true}");    // true
Console.WriteLine($"false || false = {false || false}");  // false`,
                language: 'csharp',
                explanation: 'OR (||) requires AT LEAST ONE condition to be true. If any condition is true, the entire expression is true. Use for checking alternatives.'
              },
              {
                title: 'NOT Operator (!)',
                code: `// NOT inverts the boolean value
bool isRaining = false;

// Simple NOT
if (!isRaining)
{
    Console.WriteLine("Go for a walk");  // Executes
}

// NOT with comparisons
int age = 15;
if (!(age >= 18))
{
    Console.WriteLine("You are a minor");  // Executes
}
// Same as: if (age < 18)

// Double NOT (back to original)
bool value = true;
Console.WriteLine($"!true = {!value}");    // false
Console.WriteLine($"!!true = {!!value}");  // true

// NOT with variables
bool isLoggedIn = false;
bool isGuest = !isLoggedIn;
Console.WriteLine($"Is guest: {isGuest}");  // true

// NOT in complex conditions
bool hasPermission = false;
bool isAdmin = true;
if (!hasPermission && !isAdmin)
{
    Console.WriteLine("Access denied");
}
else
{
    Console.WriteLine("Access granted");  // Executes
}`,
                language: 'csharp',
                explanation: 'NOT (!) flips the boolean value. true becomes false, false becomes true. Use to check for the opposite condition or to invert logic.'
              },
              {
                title: 'Combining Logical Operators',
                code: `// Complex conditions with AND, OR, NOT
int age = 25;
bool hasLicense = true;
bool hasInsurance = true;
bool hasCar = false;

// AND + OR
if ((age >= 18 && hasLicense) || hasInsurance)
{
    Console.WriteLine("Can potentially drive");  // Executes
}

// Multiple conditions
string username = "admin";
string password = "secret123";
bool isActive = true;

if (username == "admin" && password == "secret123" && isActive)
{
    Console.WriteLine("Login successful");  // Executes
}

// NOT with AND/OR
bool isWeekend = true;
bool isHoliday = false;
bool hasWork = false;

if ((isWeekend || isHoliday) && !hasWork)
{
    Console.WriteLine("Time to relax!");  // Executes
}

// Range checking with AND
int score = 85;
if (score >= 80 && score < 90)
{
    Console.WriteLine("Grade: B");  // Executes
}

// Multiple alternatives with OR
char grade = 'A';
if (grade == 'A' || grade == 'B' || grade == 'C')
{
    Console.WriteLine("Passing grade");  // Executes
}`,
                language: 'csharp',
                explanation: 'Combine &&, ||, and ! to create complex conditions. Use parentheses to group conditions and make your logic clear. AND has higher precedence than OR.'
              },
              {
                title: 'Short-Circuit Evaluation',
                code: `// AND (&&) short-circuits if first condition is false
int x = 5;
if (x > 10 && x < 20)  // x > 10 is false, so x < 20 never checked
{
    Console.WriteLine("Between 10 and 20");
}

// OR (||) short-circuits if first condition is true
int y = 15;
if (y > 10 || y < 5)  // y > 10 is true, so y < 5 never checked
{
    Console.WriteLine("Outside 5-10 range");  // Executes
}

// Practical use: Null checking
string name = null;
if (name != null && name.Length > 0)  // Safe! Length not checked if name is null
{
    Console.WriteLine($"Hello, {name}");
}

// Dangerous without short-circuit
// if (name.Length > 0 && name != null)  // CRASH! Checks Length on null

// Division by zero prevention
int a = 10;
int b = 0;
if (b != 0 && a / b > 5)  // Safe! Division not performed if b is 0
{
    Console.WriteLine("Result is greater than 5");
}

// Method call short-circuit
bool IsValid(int num)
{
    Console.WriteLine("IsValid called");
    return num > 0;
}

bool IsEven(int num)
{
    Console.WriteLine("IsEven called");
    return num % 2 == 0;
}

int value = -5;
if (IsValid(value) && IsEven(value))  // IsEven never called
{
    Console.WriteLine("Valid and even");
}`,
                language: 'csharp',
                explanation: 'Short-circuit evaluation stops checking conditions once the result is determined. && stops if first is false, || stops if first is true. Use this to prevent errors and improve performance.'
              },
              {
                title: 'Practical Logical Operator Examples',
                code: `// Login validation
string username = "alice";
string password = "pass123";
bool isActive = true;

if (username.Length > 0 && password.Length >= 6 && isActive)
{
    Console.WriteLine("Valid login attempt");
}

// Age category checker
int age = 25;
if (age >= 0 && age <= 12)
    Console.WriteLine("Child");
else if (age >= 13 && age <= 19)
    Console.WriteLine("Teenager");
else if (age >= 20 && age <= 64)
    Console.WriteLine("Adult");  // Executes
else if (age >= 65)
    Console.WriteLine("Senior");

// Weekend or holiday check
string day = "Saturday";
bool isHoliday = false;
if (day == "Saturday" || day == "Sunday" || isHoliday)
{
    Console.WriteLine("Store closed");  // Executes
}

// Access control
bool isAdmin = false;
bool isOwner = true;
bool hasPermission = true;

if (isAdmin || isOwner || hasPermission)
{
    Console.WriteLine("Access granted");  // Executes
}

// Form validation
string email = "user@example.com";
int phoneLength = 10;
bool agreedToTerms = true;

if (email.Contains("@") && phoneLength == 10 && agreedToTerms)
{
    Console.WriteLine("Form is valid");  // Executes
}

// Game logic
int health = 50;
int ammo = 0;
bool hasShield = true;

if ((health > 0 && ammo > 0) || hasShield)
{
    Console.WriteLine("Can continue fighting");  // Executes (hasShield is true)
}`,
                language: 'csharp',
                explanation: 'Logical operators are essential for validation, access control, categorization, and game logic. Combine them to create sophisticated decision-making in your programs.'
              }
            ],
            comparison: {
              title: 'Logical Operator Reference',
              options: [
                {
                  name: 'AND (&&)',
                  description: 'Both conditions must be true',
                  whenToUse: 'Multiple requirements, range checking, validation',
                  example: 'if (age >= 18 && hasLicense) { }'
                },
                {
                  name: 'OR (||)',
                  description: 'At least one condition must be true',
                  whenToUse: 'Alternative conditions, multiple valid options',
                  example: 'if (day == "Sat" || day == "Sun") { }'
                },
                {
                  name: 'NOT (!)',
                  description: 'Inverts the boolean value',
                  whenToUse: 'Checking opposite condition, negating results',
                  example: 'if (!isRaining) { }'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'Combine-week-3',
        weekNumber: 3,
        title: 'Arrays, Lists, Random & Errors',
        description: 'Working with collections, generating random numbers, and understanding different types of errors',
        concepts: [
          {
            id: 'arrays',
            title: 'Arrays',
            description: 'Fixed-size collections that store multiple values of the same type',
            keyPoints: [
              'Arrays have a fixed size that cannot change after creation',
              'All elements must be the same type',
              'Access elements by index (starting at 0)',
              'Use array.Length to get the number of elements',
              'Arrays are reference types'
            ],
            codeExamples: [
              {
                title: 'Creating and Initializing Arrays',
                code: `// Declare and initialize with values
int[] numbers = { 1, 2, 3, 4, 5 };
string[] names = { "Alice", "Bob", "Charlie" };

// Declare with size, then assign values
int[] scores = new int[5];
scores[0] = 85;
scores[1] = 92;
scores[2] = 78;

// Create with default values (0 for int, null for reference types)
double[] prices = new double[10];  // All elements are 0.0

// Multi-dimensional arrays
int[,] grid = new int[3, 3];  // 3x3 grid
int[,] matrix = { {1, 2}, {3, 4}, {5, 6} };`,
                language: 'csharp',
                explanation: 'Arrays can be initialized with values in curly braces, or created with a size using new. Multi-dimensional arrays use commas to specify dimensions.'
              },
              {
                title: 'Accessing and Modifying Arrays',
                code: `string[] fruits = { "Apple", "Banana", "Orange", "Grape" };

// Access by index (0-based)
string first = fruits[0];      // "Apple"
string last = fruits[3];       // "Grape"

// Modify elements
fruits[1] = "Blueberry";       // Change "Banana" to "Blueberry"

// Get array length
int count = fruits.Length;     // 4

// Access last element
string lastFruit = fruits[fruits.Length - 1];  // "Grape"

// Loop through array
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(\`\${i}: \${fruits[i]}\`);
}

// Out of bounds error
// string invalid = fruits[10];  // IndexOutOfRangeException`,
                language: 'csharp',
                explanation: 'Use square brackets with an index to access or modify elements. Indices start at 0. Accessing an index outside the array bounds throws an exception.'
              },
              {
                title: 'Common Array Operations',
                code: `int[] numbers = { 5, 2, 8, 1, 9, 3 };

// Sort array (modifies original)
Array.Sort(numbers);
// numbers is now { 1, 2, 3, 5, 8, 9 }

// Reverse array (modifies original)
Array.Reverse(numbers);
// numbers is now { 9, 8, 5, 3, 2, 1 }

// Find index of element
int index = Array.IndexOf(numbers, 5);  // Returns index or -1

// Check if element exists
bool hasEight = Array.Exists(numbers, n => n == 8);

// Copy array
int[] copy = new int[numbers.Length];
Array.Copy(numbers, copy, numbers.Length);

// Clear array (set to default values)
Array.Clear(numbers, 0, numbers.Length);`,
                language: 'csharp',
                explanation: 'Array class provides static methods for common operations. Sort and Reverse modify the original array. Use Array.Copy to create a copy.'
              }
            ]
          },
          {
            id: 'lists',
            title: 'Lists',
            description: 'Dynamic collections that can grow and shrink',
            keyPoints: [
              'Lists can change size - add or remove elements anytime',
              'Use List<T> where T is the type (List<int>, List<string>)',
              'Lists have many built-in methods for manipulation',
              'More flexible than arrays but slightly slower',
              'Access elements by index like arrays'
            ],
            codeExamples: [
              {
                title: 'Creating and Adding to Lists',
                code: `// Create empty list
List<string> names = new List<string>();

// Add elements
names.Add("Alice");
names.Add("Bob");
names.Add("Charlie");

// Create with initial values
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// Add multiple elements
numbers.AddRange(new int[] { 6, 7, 8 });

// Insert at specific position
names.Insert(1, "David");  // Insert at index 1

// Count property (not Length)
int count = names.Count;  // 4`,
                language: 'csharp',
                explanation: 'Lists are created with new List<T>(). Use Add() to append elements, Insert() to add at a specific position. Use Count property (not Length) to get the number of elements.'
              },
              {
                title: 'Removing from Lists',
                code: `List<string> fruits = new List<string> 
{ 
    "Apple", "Banana", "Orange", "Banana", "Grape" 
};

// Remove first occurrence
fruits.Remove("Banana");  // Removes first "Banana"
// List is now: Apple, Orange, Banana, Grape

// Remove at specific index
fruits.RemoveAt(0);  // Removes "Apple"

// Remove all that match condition
fruits.RemoveAll(f => f.StartsWith("B"));  // Removes "Banana"

// Clear entire list
fruits.Clear();  // List is now empty

// Check if empty
bool isEmpty = fruits.Count == 0;`,
                language: 'csharp',
                explanation: 'Remove() removes the first matching element. RemoveAt() removes by index. RemoveAll() removes all elements matching a condition. Clear() removes everything.'
              },
              {
                title: 'List Methods and Operations',
                code: `List<int> numbers = new List<int> { 5, 2, 8, 1, 9, 3 };

// Sort list
numbers.Sort();  // { 1, 2, 3, 5, 8, 9 }

// Reverse list
numbers.Reverse();  // { 9, 8, 5, 3, 2, 1 }

// Check if contains
bool hasEight = numbers.Contains(8);  // true

// Find index
int index = numbers.IndexOf(5);  // Returns index or -1

// Find element
int firstEven = numbers.Find(n => n % 2 == 0);  // First even number

// Find all matching
List<int> evens = numbers.FindAll(n => n % 2 == 0);

// Convert to array
int[] array = numbers.ToArray();

// Access like array
int first = numbers[0];
numbers[1] = 100;`,
                language: 'csharp',
                explanation: 'Lists have many useful methods. Sort(), Reverse(), Contains(), Find(), and FindAll() are commonly used. You can access elements by index just like arrays.'
              },
              {
                title: 'List vs Array Comparison',
                code: `// Array - fixed size
int[] arrayScores = new int[5];
arrayScores[0] = 85;
// Cannot add more than 5 elements

// List - dynamic size
List<int> listScores = new List<int>();
listScores.Add(85);
listScores.Add(92);
listScores.Add(78);
// Can keep adding elements

// When to use arrays
// - Size is known and fixed
// - Slightly better performance
// - Multi-dimensional data

// When to use lists
// - Size changes during program
// - Need to add/remove elements
// - More convenient methods`,
                language: 'csharp',
                explanation: 'Arrays are fixed size and slightly faster. Lists are dynamic and more flexible. Use arrays when size is fixed, lists when size changes.'
              }
            ],
            comparison: {
              title: 'Array vs List',
              options: [
                {
                  name: 'Array',
                  description: 'Fixed-size collection',
                  whenToUse: 'Size is known and will not change',
                  example: 'int[] daysInWeek = new int[7];'
                },
                {
                  name: 'List<T>',
                  description: 'Dynamic-size collection',
                  whenToUse: 'Size changes - adding/removing elements',
                  example: 'List<string> names = new List<string>();'
                }
              ]
            }
          },
          {
            id: 'random-class',
            title: 'Random Class',
            description: 'Generating random numbers for games, simulations, and variety',
            keyPoints: [
              'Create one Random object and reuse it',
              'Next() generates random integers',
              'Next(max) generates from 0 to max-1',
              'Next(min, max) generates from min to max-1',
              'NextDouble() generates decimal from 0.0 to 1.0'
            ],
            codeExamples: [
              {
                title: 'Basic Random Number Generation',
                code: `// Create Random object (do this once)
Random random = new Random();

// Random int from 0 to int.MaxValue
int anyNumber = random.Next();

// Random int from 0 to 9 (0-9)
int digit = random.Next(10);

// Random int from 1 to 6 (dice roll)
int diceRoll = random.Next(1, 7);

// Random int from 1 to 100
int percent = random.Next(1, 101);

// Random double from 0.0 to 1.0
double decimal = random.NextDouble();

// Random double from 0.0 to 100.0
double price = random.NextDouble() * 100;`,
                language: 'csharp',
                explanation: 'Create one Random object. Next() with no parameters gives any int. Next(max) gives 0 to max-1. Next(min, max) gives min to max-1. NextDouble() gives 0.0 to 1.0.'
              },
              {
                title: 'Random in Games and Simulations',
                code: `Random random = new Random();

// Coin flip
string coinFlip = random.Next(2) == 0 ? "Heads" : "Tails";

// Random choice from array
string[] colors = { "Red", "Blue", "Green", "Yellow" };
string randomColor = colors[random.Next(colors.Length)];

// Random choice from list
List<string> names = new List<string> { "Alice", "Bob", "Charlie" };
string randomName = names[random.Next(names.Count)];

// Random boolean (50/50 chance)
bool isTrue = random.Next(2) == 1;

// Random percentage chance
int chance = random.Next(100);  // 0-99
if (chance < 20)  // 20% chance
{
    Console.WriteLine("Rare event!");
}`,
                language: 'csharp',
                explanation: 'Use random.Next(2) for coin flips. Use random.Next(array.Length) to pick random elements. Use random.Next(100) for percentage-based chances.'
              },
              {
                title: 'Guessing Game Example',
                code: `Random random = new Random();
int secretNumber = random.Next(1, 101);  // 1-100
int attempts = 0;
int guess;

Console.WriteLine("Guess the number (1-100)!");

do
{
    Console.Write("Enter guess: ");
    while (!int.TryParse(Console.ReadLine(), out guess))
    {
        Console.Write("Invalid. Enter guess: ");
    }
    
    attempts++;
    
    if (guess < secretNumber)
        Console.WriteLine("Too low!");
    else if (guess > secretNumber)
        Console.WriteLine("Too high!");
    else
        Console.WriteLine(\`Correct! Attempts: \${attempts}\`);
        
} while (guess != secretNumber);`,
                language: 'csharp',
                explanation: 'Complete guessing game using Random to generate a secret number. Combines loops, conditionals, and TryParse for a full game experience.'
              }
            ]
          },
          {
            id: 'error-types',
            title: 'Understanding Errors',
            description: 'Different types of errors and how to identify and fix them',
            keyPoints: [
              'Syntax errors prevent code from compiling',
              'Logic errors cause incorrect results',
              'Runtime errors crash the program during execution',
              'Loop errors cause infinite loops or wrong iterations',
              'Read error messages carefully - they tell you what is wrong'
            ],
            codeExamples: [
              {
                title: 'Syntax Errors',
                code: `// Missing semicolon
int x = 5  // ERROR: ; expected

// Misspelled keyword
Int y = 10;  // ERROR: 'Int' not found (should be 'int')

// Mismatched braces
if (x > 0)
{
    Console.WriteLine("Positive");
// ERROR: } expected

// Wrong variable name
int age = 25;
Console.WriteLine(Age);  // ERROR: 'Age' not found (wrong case)

// Missing closing quote
string name = "Alice;  // ERROR: Newline in constant

// These errors prevent compilation
// Fix them before running the program`,
                language: 'csharp',
                explanation: 'Syntax errors are typos and grammar mistakes. The compiler catches these before running. Look at the error message and line number to find and fix them.'
              },
              {
                title: 'Logic Errors',
                code: `// Wrong operator (should be >=)
int age = 18;
if (age > 18)  // BUG: Excludes 18-year-olds
{
    Console.WriteLine("Can vote");
}

// Wrong calculation
int total = 100;
int discount = 20;
int finalPrice = total + discount;  // BUG: Should be -

// Off-by-one error
int[] numbers = { 1, 2, 3, 4, 5 };
for (int i = 0; i <= numbers.Length; i++)  // BUG: Should be <
{
    Console.WriteLine(numbers[i]);  // Crashes on last iteration
}

// Wrong variable
int score1 = 85;
int score2 = 92;
int average = (score1 + score1) / 2;  // BUG: Used score1 twice

// Logic errors compile and run
// But produce wrong results`,
                language: 'csharp',
                explanation: 'Logic errors are mistakes in your thinking. The code runs but gives wrong results. Use debugging, print statements, and careful testing to find these.'
              },
              {
                title: 'Runtime Errors',
                code: `// Division by zero
int x = 10;
int y = 0;
int result = x / y;  // CRASH: DivideByZeroException

// Index out of bounds
int[] numbers = { 1, 2, 3 };
int value = numbers[5];  // CRASH: IndexOutOfRangeException

// Null reference
string name = null;
int length = name.Length;  // CRASH: NullReferenceException

// Invalid parse
string input = "abc";
int number = int.Parse(input);  // CRASH: FormatException

// File not found
string text = File.ReadAllText("missing.txt");  // CRASH: FileNotFoundException

// Prevent with validation
if (y != 0)
    result = x / y;

if (index < numbers.Length)
    value = numbers[index];`,
                language: 'csharp',
                explanation: 'Runtime errors crash the program during execution. Prevent them with validation: check for zero before dividing, check array bounds, check for null, use TryParse.'
              },
              {
                title: 'Loop Errors',
                code: `// Infinite loop - condition never false
int count = 0;
while (count < 10)
{
    Console.WriteLine(count);
    // BUG: Forgot to increment count
}

// Wrong increment
for (int i = 0; i < 10; i--)  // BUG: Decrements instead of increments
{
    Console.WriteLine(i);  // Infinite loop
}

// Off-by-one error
for (int i = 1; i <= 10; i++)  // BUG: Should start at 0
{
    Console.WriteLine(numbers[i]);  // Skips first element
}

// Wrong condition
int[] scores = { 85, 92, 78 };
for (int i = 0; i <= scores.Length; i++)  // BUG: Should be <
{
    Console.WriteLine(scores[i]);  // Crashes on last iteration
}

// Fix: Always check loop logic
// - Does condition eventually become false?
// - Are you incrementing/decrementing correctly?
// - Are array indices within bounds?`,
                language: 'csharp',
                explanation: 'Loop errors cause infinite loops or wrong iterations. Always ensure: condition becomes false, increment/decrement is correct, array indices are valid.'
              },
              {
                title: 'Debugging Techniques',
                code: `// Use Console.WriteLine to check values
int x = 5;
int y = 10;
Console.WriteLine(\`x = \${x}, y = \${y}\`);  // Check values

// Check loop iterations
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(\`Iteration: \${i}\`);  // Track progress
}

// Validate assumptions
if (numbers.Length > 0)
{
    Console.WriteLine("Array has elements");
}
else
{
    Console.WriteLine("Array is empty!");
}

// Test edge cases
// - Empty arrays/lists
// - Zero values
// - Negative numbers
// - Maximum/minimum values

// Read error messages
// - Line number tells you where
// - Error type tells you what
// - Message tells you why`,
                language: 'csharp',
                explanation: 'Debug by printing values, tracking loop iterations, and validating assumptions. Test edge cases. Read error messages carefully - they provide valuable information.'
              }
            ],
            comparison: {
              title: 'Error Types',
              options: [
                {
                  name: 'Syntax Error',
                  description: 'Typos and grammar mistakes',
                  whenToUse: 'Caught by compiler before running',
                  example: 'Missing semicolon, misspelled keyword, wrong case'
                },
                {
                  name: 'Logic Error',
                  description: 'Wrong algorithm or calculation',
                  whenToUse: 'Code runs but gives wrong results',
                  example: 'Wrong operator, off-by-one, wrong variable'
                },
                {
                  name: 'Runtime Error',
                  description: 'Crashes during execution',
                  whenToUse: 'Invalid operation at runtime',
                  example: 'Divide by zero, index out of bounds, null reference'
                },
                {
                  name: 'Loop Error',
                  description: 'Infinite loops or wrong iterations',
                  whenToUse: 'Loop never ends or iterates incorrectly',
                  example: 'Forgot to increment, wrong condition, wrong bounds'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'Combine-week-4',
        weekNumber: 4,
        title: 'Classes & Methods',
        description: 'Object-oriented programming basics - creating classes, methods, and objects',
        concepts: [
          {
            id: 'classes-basics',
            title: 'Classes and Objects',
            description: 'Creating blueprints (classes) and instances (objects)',
            keyPoints: [
              'A class is a blueprint that defines properties and behaviors',
              'An object is an instance of a class',
              'Classes group related data and functionality together',
              'Use PascalCase for class names',
              'Classes promote code reusability and organization'
            ],
            codeExamples: [
              {
                title: 'Creating a Simple Class',
                code: `// Define a class
public class Person
{
    // Fields (data)
    public string Name;
    public int Age;
    public string City;
}

// Create objects (instances)
Person person1 = new Person();
person1.Name = "Alice";
person1.Age = 25;
person1.City = "Seattle";

Person person2 = new Person();
person2.Name = "Bob";
person2.Age = 30;
person2.City = "Portland";

// Access object data
Console.WriteLine(\`\${person1.Name} is \${person1.Age} years old\`);
Console.WriteLine(\`\${person2.Name} lives in \${person2.City}\`);`,
                language: 'csharp',
                explanation: 'A class defines the structure. Objects are created with new. Each object has its own copy of the fields. Use dot notation to access fields.'
              },
              {
                title: 'Class with Methods',
                code: `public class Calculator
{
    // Methods (behaviors)
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    public int Subtract(int a, int b)
    {
        return a - b;
    }
    
    public int Multiply(int a, int b)
    {
        return a * b;
    }
    
    public double Divide(int a, int b)
    {
        if (b == 0)
        {
            Console.WriteLine("Cannot divide by zero");
            return 0;
        }
        return (double)a / b;
    }
}

// Use the class
Calculator calc = new Calculator();
int sum = calc.Add(5, 3);        // 8
int diff = calc.Subtract(10, 4); // 6
int product = calc.Multiply(6, 7); // 42
double quotient = calc.Divide(10, 3); // 3.333...`,
                language: 'csharp',
                explanation: 'Methods define what objects can do. Call methods on objects using dot notation. Methods can take parameters and return values.'
              },
              {
                title: 'Real-World Example: BankAccount',
                code: `public class BankAccount
{
    // Fields
    public string AccountNumber;
    public string Owner;
    public double Balance;
    
    // Methods
    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            Balance += amount;
            Console.WriteLine(\`Deposited: \\$\${amount}\`);
        }
    }
    
    public void Withdraw(double amount)
    {
        if (amount > Balance)
        {
            Console.WriteLine("Insufficient funds");
        }
        else if (amount > 0)
        {
            Balance -= amount;
            Console.WriteLine(\`Withdrew: \\$\${amount}\`);
        }
    }
    
    public void DisplayBalance()
    {
        Console.WriteLine(\`Balance: \\$\${Balance}\`);
    }
}

// Create and use account
BankAccount account = new BankAccount();
account.AccountNumber = "12345";
account.Owner = "Alice";
account.Balance = 1000;

account.Deposit(500);     // Balance: 1500
account.Withdraw(200);    // Balance: 1300
account.DisplayBalance(); // Shows current balance`,
                language: 'csharp',
                explanation: 'Classes model real-world concepts. BankAccount groups related data (balance, owner) and behaviors (deposit, withdraw) together.'
              }
            ]
          },
          {
            id: 'constructors',
            title: 'Constructors',
            description: 'Special methods that initialize objects when created',
            keyPoints: [
              'Constructors have the same name as the class',
              'Constructors have no return type',
              'Called automatically when creating objects with new',
              'Can have parameters to initialize fields',
              'Can have multiple constructors (overloading)'
            ],
            codeExamples: [
              {
                title: 'Basic Constructor',
                code: `public class Person
{
    public string Name;
    public int Age;
    
    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

// Create objects using constructor
Person person1 = new Person("Alice", 25);
Person person2 = new Person("Bob", 30);

// No need to set fields manually
Console.WriteLine(\`\${person1.Name} is \${person1.Age}\`);`,
                language: 'csharp',
                explanation: 'Constructors initialize objects. They have the same name as the class and no return type. Parameters let you set initial values when creating objects.'
              },
              {
                title: 'Multiple Constructors',
                code: `public class Rectangle
{
    public double Width;
    public double Height;
    
    // Constructor with parameters
    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }
    
    // Constructor for squares (one parameter)
    public Rectangle(double size)
    {
        Width = size;
        Height = size;
    }
    
    // Default constructor (no parameters)
    public Rectangle()
    {
        Width = 1;
        Height = 1;
    }
    
    public double GetArea()
    {
        return Width * Height;
    }
}

// Use different constructors
Rectangle rect1 = new Rectangle(5, 3);  // 5x3 rectangle
Rectangle rect2 = new Rectangle(4);     // 4x4 square
Rectangle rect3 = new Rectangle();      // 1x1 default`,
                language: 'csharp',
                explanation: 'You can have multiple constructors with different parameters. This is called constructor overloading. Choose the constructor that fits your needs.'
              },
              {
                title: 'Constructor with Validation',
                code: `public class BankAccount
{
    public string AccountNumber;
    public string Owner;
    public double Balance;
    
    public BankAccount(string accountNumber, string owner, double initialBalance)
    {
        AccountNumber = accountNumber;
        Owner = owner;
        
        // Validate initial balance
        if (initialBalance < 0)
        {
            Console.WriteLine("Initial balance cannot be negative");
            Balance = 0;
        }
        else
        {
            Balance = initialBalance;
        }
        
        Console.WriteLine(\`Account created for \${Owner}\`);
    }
    
    public void DisplayInfo()
    {
        Console.WriteLine(\`Account: \${AccountNumber}\`);
        Console.WriteLine(\`Owner: \${Owner}\`);
        Console.WriteLine(\`Balance: \\$\${Balance}\`);
    }
}

// Create account with validation
BankAccount account = new BankAccount("12345", "Alice", 1000);
account.DisplayInfo();`,
                language: 'csharp',
                explanation: 'Constructors can validate data and ensure objects start in a valid state. This prevents creating objects with invalid data.'
              }
            ]
          },
          {
            id: 'properties',
            title: 'Properties',
            description: 'Controlled access to fields with get and set',
            keyPoints: [
              'Properties provide controlled access to private fields',
              'Use get to read the value',
              'Use set to write the value',
              'Can add validation in set',
              'Use PascalCase for property names'
            ],
            codeExamples: [
              {
                title: 'Basic Properties',
                code: `public class Person
{
    // Private fields (cannot access from outside)
    private string name;
    private int age;
    
    // Public properties (controlled access)
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    
    public int Age
    {
        get { return age; }
        set 
        { 
            if (value >= 0)
                age = value;
            else
                Console.WriteLine("Age cannot be negative");
        }
    }
}

// Use properties like fields
Person person = new Person();
person.Name = "Alice";  // Calls set
person.Age = 25;        // Calls set with validation
string name = person.Name;  // Calls get
int age = person.Age;       // Calls get`,
                language: 'csharp',
                explanation: 'Properties look like fields but have get and set methods. This allows validation and control. Private fields protect data from direct access.'
              },
              {
                title: 'Auto-Implemented Properties',
                code: `public class Product
{
    // Auto-implemented properties (shorthand)
    public string Name { get; set; }
    public double Price { get; set; }
    public int Stock { get; set; }
    
    // Read-only property (no set)
    public bool IsAvailable
    {
        get { return Stock > 0; }
    }
    
    // Property with validation
    private double discount;
    public double Discount
    {
        get { return discount; }
        set
        {
            if (value >= 0 && value <= 100)
                discount = value;
        }
    }
}

// Use auto-properties
Product product = new Product();
product.Name = "Laptop";
product.Price = 999.99;
product.Stock = 5;

bool available = product.IsAvailable;  // true (Stock > 0)`,
                language: 'csharp',
                explanation: 'Auto-implemented properties are shorthand when you do not need validation. Read-only properties have only get. Add validation in set when needed.'
              },
              {
                title: 'Complete Class Example',
                code: `public class Student
{
    // Auto-properties
    public string Name { get; set; }
    public int StudentId { get; set; }
    
    // Property with backing field and validation
    private double gpa;
    public double GPA
    {
        get { return gpa; }
        set
        {
            if (value >= 0.0 && value <= 4.0)
                gpa = value;
            else
                Console.WriteLine("GPA must be between 0.0 and 4.0");
        }
    }
    
    // Calculated property
    public string Status
    {
        get
        {
            if (GPA >= 3.5) return "Honors";
            else if (GPA >= 2.0) return "Good Standing";
            else return "Probation";
        }
    }
    
    // Constructor
    public Student(string name, int id)
    {
        Name = name;
        StudentId = id;
        GPA = 0.0;
    }
    
    // Method
    public void DisplayInfo()
    {
        Console.WriteLine(\`Student: \${Name}\`);
        Console.WriteLine(\`ID: \${StudentId}\`);
        Console.WriteLine(\`GPA: \${GPA}\`);
        Console.WriteLine(\`Status: \${Status}\`);
    }
}

// Create and use student
Student student = new Student("Alice", 12345);
student.GPA = 3.8;
student.DisplayInfo();`,
                language: 'csharp',
                explanation: 'Complete example combining constructor, properties with validation, calculated properties, and methods. This shows how all pieces work together.'
              }
            ]
          },
          {
            id: 'methods-deep-dive',
            title: 'Methods Deep Dive',
            description: 'Parameters, return values, and method organization',
            keyPoints: [
              'Methods perform actions or calculate values',
              'Parameters pass data into methods',
              'Return values send data back from methods',
              'void methods do not return a value',
              'Use descriptive method names (verbs)'
            ],
            codeExamples: [
              {
                title: 'Method Basics',
                code: `public class MathHelper
{
    // Method with parameters and return value
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    // Method with no parameters
    public int GetRandomNumber()
    {
        Random random = new Random();
        return random.Next(1, 101);
    }
    
    // void method (no return value)
    public void PrintMessage(string message)
    {
        Console.WriteLine(message);
    }
    
    // Method with multiple parameters
    public double CalculateAverage(int score1, int score2, int score3)
    {
        return (score1 + score2 + score3) / 3.0;
    }
}

// Call methods
MathHelper helper = new MathHelper();
int sum = helper.Add(5, 3);
int random = helper.GetRandomNumber();
helper.PrintMessage("Hello!");
double avg = helper.CalculateAverage(85, 92, 78);`,
                language: 'csharp',
                explanation: 'Methods can have parameters (inputs) and return values (outputs). void methods perform actions but do not return anything. Use return to send values back.'
              },
              {
                title: 'Method Overloading',
                code: `public class Printer
{
    // Same method name, different parameters
    public void Print(string message)
    {
        Console.WriteLine(message);
    }
    
    public void Print(int number)
    {
        Console.WriteLine(\`Number: \${number}\`);
    }
    
    public void Print(string message, int times)
    {
        for (int i = 0; i < times; i++)
        {
            Console.WriteLine(message);
        }
    }
    
    public void Print(double value, int decimals)
    {
        Console.WriteLine(Math.Round(value, decimals));
    }
}

// Call different versions
Printer printer = new Printer();
printer.Print("Hello");           // Calls string version
printer.Print(42);                // Calls int version
printer.Print("Hi", 3);           // Calls string, int version
printer.Print(3.14159, 2);        // Calls double, int version`,
                language: 'csharp',
                explanation: 'Method overloading means having multiple methods with the same name but different parameters. C# chooses the right one based on the arguments you pass.'
              },
              {
                title: 'Static vs Instance Methods',
                code: `public class Calculator
{
    // Instance field
    public double Memory;
    
    // Instance method (needs object)
    public void StoreInMemory(double value)
    {
        Memory = value;
    }
    
    // Static method (no object needed)
    public static int Add(int a, int b)
    {
        return a + b;
    }
    
    public static double GetPi()
    {
        return 3.14159;
    }
}

// Instance methods need an object
Calculator calc = new Calculator();
calc.StoreInMemory(42);

// Static methods called on the class
int sum = Calculator.Add(5, 3);
double pi = Calculator.GetPi();

// Examples of static methods you have used
int number = int.Parse("123");        // int.Parse is static
double sqrt = Math.Sqrt(16);          // Math.Sqrt is static
Console.WriteLine("Hello");           // WriteLine is static`,
                language: 'csharp',
                explanation: 'Instance methods work with object data and need an object. Static methods do not need an object and are called on the class name. Use static for utility methods.'
              }
            ],
            comparison: {
              title: 'Method Types',
              options: [
                {
                  name: 'Instance Method',
                  description: 'Works with object data, needs an object',
                  whenToUse: 'When method uses or modifies object fields',
                  example: 'account.Deposit(100); // Called on object'
                },
                {
                  name: 'Static Method',
                  description: 'No object needed, called on class',
                  whenToUse: 'Utility methods that do not need object data',
                  example: 'Math.Sqrt(16); // Called on class'
                },
                {
                  name: 'void Method',
                  description: 'Performs action, returns nothing',
                  whenToUse: 'When method does something but does not calculate a value',
                  example: 'public void PrintMessage(string msg)'
                },
                {
                  name: 'Return Method',
                  description: 'Calculates and returns a value',
                  whenToUse: 'When method computes something you need',
                  example: 'public int Add(int a, int b) { return a + b; }'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  levelOne,
  levelTwo,
  levelThree,
  levelFour
];
