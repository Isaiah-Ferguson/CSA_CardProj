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

export const levelThree: Level = {
  id: 'level-3',
  levelNumber: 3,
  title: 'Level Three',
  description: 'Advanced Javascript Frameworks - React, Next.js',
  weeks: [
    {
      id: 'level-3-week-1',
      weekNumber: 1,
      title: 'React Hooks & Next.js Routing',
      description: 'useState, useEffect, and Next.js routing fundamentals',
      concepts: [
        {
          id: 'usestate',
          title: 'useState Hook',
          description: 'Managing component state with the useState hook',
          keyPoints: [
            'useState creates state variables in functional components',
            'Returns array with [value, setter function]',
            'State updates trigger component re-renders',
            'Use separate useState calls for different state values',
            'State updates are asynchronous'
          ],
          codeExamples: [
            {
              title: 'Basic useState',
              code: `'use client';
import { useState } from 'react';

export default function Counter() {
  // Declare state variable with initial value
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// useState syntax:
// const [stateValue, setStateFunction] = useState(initialValue);
// - stateValue: current value
// - setStateFunction: function to update value
// - initialValue: starting value`,
              language: 'tsx',
              explanation: 'useState returns an array with current value and setter function. Call setter to update state. Component re-renders when state changes. Use descriptive names for state and setter.'
            },
            {
              title: 'Multiple State Variables',
              code: `'use client';
import { useState } from 'react';

export default function UserForm() {
  // Multiple separate state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    console.log({ name, email, age, isSubscribed });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'Use separate useState for each piece of state. Each has its own setter function. Access event values with e.target.value or e.target.checked. Convert to appropriate types (Number for numbers).'
            },
            {
              title: 'State with Objects',
              code: `'use client';
import { useState } from 'react';

export default function UserProfile() {
  // State as object
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  // Update single property - must spread existing state
  const updateName = (newName: string) => {
    setUser({
      ...user,           // Spread existing properties
      name: newName      // Override specific property
    });
  };

  const updateEmail = (newEmail: string) => {
    setUser({ ...user, email: newEmail });
  };

  const updateAge = (newAge: number) => {
    setUser({ ...user, age: newAge });
  };

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Name"
      />
      
      <input
        value={user.email}
        onChange={(e) => updateEmail(e.target.value)}
        placeholder="Email"
      />
      
      <input
        type="number"
        value={user.age}
        onChange={(e) => updateAge(Number(e.target.value))}
        placeholder="Age"
      />
      
      <p>User: {JSON.stringify(user)}</p>
    </div>
  );
}

// IMPORTANT: Always spread (...) existing state when updating objects
// This creates a new object, triggering re-render`,
              language: 'tsx',
              explanation: 'When state is an object, spread existing state (...user) before updating properties. This creates new object reference, triggering re-render. Never mutate state directly.'
            },
            {
              title: 'State with Arrays',
              code: `'use client';
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // Add item - create new array
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  // Remove item - filter creates new array
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Clear all
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear All</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Array operations:
// Add: [...array, newItem]
// Remove: array.filter((item, i) => i !== indexToRemove)
// Update: array.map((item, i) => i === index ? newItem : item)`,
              language: 'tsx',
              explanation: 'For arrays, create new array with spread [...todos, newItem] or filter/map. Never use push/pop/splice directly on state. Filter removes items, map updates items. Always return new array.'
            },
            {
              title: 'Functional State Updates',
              code: `'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // ❌ BAD: Using current state value directly
  const incrementBad = () => {
    setCount(count + 1);
    setCount(count + 1); // Won't work as expected!
    // Both use same 'count' value, only increments by 1
  };

  // ✅ GOOD: Using functional update
  const incrementGood = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1); // Works! Increments by 2
    // Each gets previous value
  };

  // Functional update with arrays
  const [items, setItems] = useState<number[]>([]);

  const addMultipleItems = () => {
    setItems(prev => [...prev, 1]);
    setItems(prev => [...prev, 2]);
    setItems(prev => [...prev, 3]);
    // All three items added correctly
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementBad}>Bad Increment</button>
      <button onClick={incrementGood}>Good Increment</button>
      
      <p>Items: {items.join(', ')}</p>
      <button onClick={addMultipleItems}>Add Items</button>
    </div>
  );
}

// Use functional updates when:
// 1. New state depends on previous state
// 2. Multiple updates in same function
// 3. Updates in async functions`,
              language: 'tsx',
              explanation: 'Use functional updates (prev => prev + 1) when new state depends on old state. Ensures you get latest value. Critical for multiple updates or async operations. Prevents stale state bugs.'
            }
          ],
          comparison: {
            title: 'State Management Options',
            options: [
              {
                name: 'useState',
                description: 'Local component state',
                whenToUse: 'Component-specific data, forms, toggles (most common)',
                example: 'const [count, setCount] = useState(0);'
              },
              {
                name: 'useReducer',
                description: 'Complex state logic',
                whenToUse: 'Multiple related state values, complex updates',
                example: 'const [state, dispatch] = useReducer(reducer, initial);'
              },
              {
                name: 'Context API',
                description: 'Global state across components',
                whenToUse: 'Shared data (theme, user, settings)',
                example: 'const value = useContext(MyContext);'
              }
            ]
          }
        },
        {
          id: 'useeffect',
          title: 'useEffect Hook',
          description: 'Handling side effects and lifecycle events in functional components',
          keyPoints: [
            'useEffect runs after component renders',
            'Used for side effects: API calls, subscriptions, timers',
            'Dependency array controls when effect runs',
            'Return cleanup function to prevent memory leaks',
            'Empty dependency array runs once on mount'
          ],
          codeExamples: [
            {
              title: 'Basic useEffect',
              code: `'use client';
import { useState, useEffect } from 'react';

export default function PageTitle() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  // Runs only when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]); // Dependency array

  // Runs once on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// useEffect syntax:
// useEffect(() => {
//   // Effect code
// }, [dependencies]);
//
// No array: runs every render
// []: runs once on mount
// [dep1, dep2]: runs when dependencies change`,
              language: 'tsx',
              explanation: 'useEffect runs after render. Dependency array controls when it runs. Empty array [] runs once. Array with values runs when those values change. No array runs every render.'
            },
            {
              title: 'Fetching Data with useEffect',
              code: `'use client';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data on component mount
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.json();
        setProducts(data);
        setError('');
      } catch (err) {
        setError('Error loading products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty array - fetch once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - \${product.price}
        </li>
      ))}
    </ul>
  );
}`,
              language: 'tsx',
              explanation: 'Use useEffect for API calls. Empty dependency array [] ensures fetch runs once on mount. Handle loading and error states. Use async function inside useEffect. Update state with fetched data.'
            },
            {
              title: 'Cleanup Functions',
              code: `'use client';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    // Set up interval
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function - runs when component unmounts
    // or before effect runs again
    return () => {
      clearInterval(interval);
      console.log('Cleanup: interval cleared');
    };
  }, [isRunning]); // Re-run when isRunning changes

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

// Cleanup function prevents:
// - Memory leaks
// - Multiple timers running
// - Subscriptions staying active
// 
// Always cleanup:
// - setInterval/setTimeout
// - Event listeners
// - Subscriptions
// - WebSocket connections`,
              language: 'tsx',
              explanation: 'Return cleanup function from useEffect to clear timers, remove listeners, cancel subscriptions. Runs before next effect and on unmount. Prevents memory leaks. Critical for intervals, timeouts, and subscriptions.'
            },
            {
              title: 'useEffect with Dependencies',
              code: `'use client';
import { useState, useEffect } from 'react';

export default function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Re-fetch when searchTerm or category changes
  useEffect(() => {
    // Don't fetch if search is empty
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          \`/api/products?search=\${searchTerm}&category=\${category}\`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce: wait 500ms after user stops typing
    const timer = setTimeout(() => {
      fetchResults();
    }, 500);

    // Cleanup: cancel previous timer
    return () => clearTimeout(timer);
  }, [searchTerm, category]); // Re-run when these change

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      {loading && <p>Searching...</p>}
      
      <ul>
        {results.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'List dependencies that trigger effect re-run. Effect runs when searchTerm or category changes. Debounce with setTimeout prevents excessive API calls. Cleanup cancels previous timer. Dependencies must include all values used in effect.'
            },
            {
              title: 'useEffect Best Practices',
              code: `'use client';
import { useState, useEffect } from 'react';

export default function BestPractices() {
  const [data, setData] = useState(null);

  // ✅ GOOD: Extract complex logic to separate function
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    };
    
    loadData();
  }, []);

  // ✅ GOOD: Include all dependencies
  const [userId, setUserId] = useState(1);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setData);
  }, [userId]); // userId is dependency

  // ❌ BAD: Missing dependencies
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`); // Uses userId
  }, []); // Missing userId in array - will use stale value!

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

// Best practices:
// 1. One effect per concern
// 2. Include all dependencies
// 3. Cleanup side effects
// 4. Extract complex logic
// 5. Handle loading/error states`,
              language: 'tsx',
              explanation: 'Separate different concerns into multiple effects. Include all dependencies used in effect. Always cleanup timers and subscriptions. Extract complex logic to functions. Handle loading and error states properly.'
            }
          ],
          comparison: {
            title: 'useEffect Dependency Patterns',
            options: [
              {
                name: 'No Array',
                description: 'Runs after every render',
                whenToUse: 'Rarely - usually indicates a problem',
                example: 'useEffect(() => { console.log("every render"); });'
              },
              {
                name: 'Empty Array []',
                description: 'Runs once on mount',
                whenToUse: 'Initial data fetch, setup subscriptions',
                example: 'useEffect(() => { fetchData(); }, []);'
              },
              {
                name: 'With Dependencies',
                description: 'Runs when dependencies change',
                whenToUse: 'React to prop/state changes (most common)',
                example: 'useEffect(() => { search(query); }, [query]);'
              }
            ]
          }
        },
        {
          id: 'nextjs-routing',
          title: 'Next.js Routing',
          description: 'File-based routing and navigation in Next.js App Router',
          keyPoints: [
            'File-based routing: folders and files define routes',
            'page.tsx creates a route',
            'Dynamic routes use [param] folder syntax',
            'Use Link component for client-side navigation',
            'useRouter hook for programmatic navigation'
          ],
          codeExamples: [
            {
              title: 'Basic Routing Structure',
              code: `// Next.js App Router file structure:
app/
├── page.tsx              // Route: /
├── about/
│   └── page.tsx          // Route: /about
├── products/
│   ├── page.tsx          // Route: /products
│   └── [id]/
│       └── page.tsx      // Route: /products/123
└── blog/
    ├── page.tsx          // Route: /blog
    └── [slug]/
        └── page.tsx      // Route: /blog/my-post

// app/page.tsx - Home page
export default function Home() {
  return <h1>Home Page</h1>;
}

// app/about/page.tsx - About page
export default function About() {
  return <h1>About Page</h1>;
}

// app/products/page.tsx - Products list
export default function Products() {
  return <h1>Products</h1>;
}

// Folder name = route path
// page.tsx = the page component
// [param] = dynamic route segment`,
              language: 'tsx',
              explanation: 'Folders define route paths. page.tsx creates the route. Nested folders create nested routes. [param] folders create dynamic routes. File structure directly maps to URL structure.'
            },
            {
              title: 'Link Component for Navigation',
              code: `'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      {/* Basic links */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      
      {/* Dynamic links */}
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      
      {/* Link with styling */}
      <Link 
        href="/contact" 
        className="text-blue-500 hover:underline"
      >
        Contact
      </Link>
      
      {/* Programmatic href */}
      {[1, 2, 3].map(id => (
        <Link key={id} href={\`/products/\${id}\`}>
          Product {id}
        </Link>
      ))}
    </nav>
  );
}

// Link vs <a> tag:
// ✅ Link: Client-side navigation (faster, no page reload)
// ❌ <a>: Full page reload (slower)
// 
// Always use Link for internal navigation
// Use <a> only for external links`,
              language: 'tsx',
              explanation: 'Use Link component for navigation. href prop sets destination. Client-side navigation (no page reload). Can use template literals for dynamic routes. Apply className for styling. Always use Link for internal routes.'
            },
            {
              title: 'Dynamic Routes',
              code: `// app/products/[id]/page.tsx
interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const { id } = params;

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Viewing product with ID: {id}</p>
    </div>
  );
}

// URL: /products/123
// params.id = "123"

// app/blog/[slug]/page.tsx
interface BlogProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogProps) {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}

// URL: /blog/my-first-post
// params.slug = "my-first-post"

// Multiple dynamic segments:
// app/shop/[category]/[productId]/page.tsx
interface ShopProps {
  params: {
    category: string;
    productId: string;
  };
}

export default function ShopProduct({ params }: ShopProps) {
  return (
    <div>
      <p>Category: {params.category}</p>
      <p>Product ID: {params.productId}</p>
    </div>
  );
}

// URL: /shop/electronics/laptop-123
// params.category = "electronics"
// params.productId = "laptop-123"`,
              language: 'tsx',
              explanation: 'Dynamic routes use [param] folder syntax. Access params through props. Params are always strings. Can have multiple dynamic segments. Type params interface for TypeScript safety.'
            },
            {
              title: 'useRouter Hook',
              code: `'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Programmatic navigation
  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(\`/search?q=\${searchTerm}\`);
    }
  };

  const goToProduct = (id: number) => {
    router.push(\`/products/\${id}\`);
  };

  const goBack = () => {
    router.back(); // Navigate to previous page
  };

  const goForward = () => {
    router.forward(); // Navigate forward
  };

  const refreshPage = () => {
    router.refresh(); // Refresh current route
  };

  return (
    <div>
      {/* Search form */}
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>

      {/* Navigation buttons */}
      <button onClick={() => goToProduct(1)}>Go to Product 1</button>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
}

// useRouter methods:
// router.push(href) - Navigate to route
// router.back() - Go back
// router.forward() - Go forward
// router.refresh() - Refresh current route
// router.replace(href) - Replace current route (no history entry)`,
              language: 'tsx',
              explanation: 'useRouter provides programmatic navigation. Use push() to navigate. back() and forward() for browser history. refresh() reloads current route. Must be in client component ("use client").'
            },
            {
              title: 'Query Parameters and Search Params',
              code: `// app/search/page.tsx
interface SearchProps {
  searchParams: {
    q?: string;
    category?: string;
    page?: string;
  };
}

export default function SearchPage({ searchParams }: SearchProps) {
  const query = searchParams.q || '';
  const category = searchParams.category || 'all';
  const page = Number(searchParams.page) || 1;

  return (
    <div>
      <h1>Search Results</h1>
      <p>Query: {query}</p>
      <p>Category: {category}</p>
      <p>Page: {page}</p>
    </div>
  );
}

// URL: /search?q=laptop&category=electronics&page=2
// searchParams.q = "laptop"
// searchParams.category = "electronics"
// searchParams.page = "2"

// Client component with useSearchParams
'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchClient() {
  const searchParams = useSearchParams();
  
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';

  return (
    <div>
      <p>Searching for: {query}</p>
      <p>In category: {category}</p>
    </div>
  );
}

// Creating links with query params
import Link from 'next/link';

export default function Filters() {
  return (
    <div>
      <Link href="/search?q=laptop">Search Laptop</Link>
      <Link href="/search?q=phone&category=electronics">
        Search Phone in Electronics
      </Link>
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'Server components receive searchParams as props. Client components use useSearchParams hook. Query params are always strings. Provide defaults with || operator. Include query params in href with ?key=value.'
            }
          ],
          comparison: {
            title: 'Navigation Methods',
            options: [
              {
                name: 'Link Component',
                description: 'Declarative navigation with JSX',
                whenToUse: 'Most navigation, links in UI (recommended)',
                example: '<Link href="/about">About</Link>'
              },
              {
                name: 'useRouter Hook',
                description: 'Programmatic navigation',
                whenToUse: 'After form submit, conditional navigation',
                example: 'router.push("/dashboard");'
              },
              {
                name: '<a> Tag',
                description: 'Full page reload',
                whenToUse: 'External links only',
                example: '<a href="https://google.com">Google</a>'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-3-week-2',
      weekNumber: 2,
      title: 'TypeScript & Array Methods',
      description: 'TypeScript basics and essential array methods for data manipulation',
      concepts: [
        {
          id: 'typescript-intro',
          title: 'TypeScript Basics',
          description: 'Introduction to TypeScript types and interfaces',
          keyPoints: [
            'TypeScript adds static typing to JavaScript',
            'Define types for variables, functions, and objects',
            'Interfaces describe object shapes',
            'Type safety catches errors at compile time',
            'Use type inference when possible'
          ],
          codeExamples: [
            {
              title: 'Basic Types',
              code: `// Primitive types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Type inference - TypeScript infers type
let city = "New York"; // Inferred as string
let count = 10;        // Inferred as number

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (string | number)[] = [1, "two", 3, "four"];

// Alternative array syntax
let scores: Array<number> = [90, 85, 95];

// Any type - avoid when possible
let anything: any = "hello";
anything = 42;        // OK
anything = true;      // OK

// Unknown type - safer than any
let userInput: unknown = "test";
// Must check type before using
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// Union types - multiple possible types
let id: string | number;
id = "abc123";  // OK
id = 123;       // OK

// Literal types
let direction: "up" | "down" | "left" | "right";
direction = "up";    // OK
// direction = "diagonal"; // Error!`,
              language: 'typescript',
              explanation: 'TypeScript provides primitive types (string, number, boolean). Arrays typed with type[]. Union types allow multiple types with |. Literal types restrict to specific values. Use type inference when obvious.'
            },
            {
              title: 'Interfaces and Objects',
              code: `// Interface defines object shape
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;        // Optional property
  isActive: boolean;
}

// Using interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true
  // age is optional, can be omitted
};

// Interface with methods
interface Product {
  id: number;
  name: string;
  price: number;
  getDiscountPrice: (discount: number) => number;
}

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  getDiscountPrice: function(discount: number) {
    return this.price * (1 - discount / 100);
  }
};

// Extending interfaces
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

// Type alias (alternative to interface)
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };`,
              language: 'typescript',
              explanation: 'Interfaces define object structure. Optional properties use ?. Methods include parameter and return types. Interfaces can extend others. Type aliases are alternative to interfaces for object types.'
            },
            {
              title: 'Function Types',
              code: `// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Function with no return value
function logMessage(message: string): void {
  console.log(message);
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

greet("John");              // "Hello, John!"
greet("John", "Hi");        // "Hi, John!"

// Default parameters
function createUser(name: string, role: string = "user"): void {
  console.log(\`\${name} - \${role}\`);
}

createUser("Alice");           // "Alice - user"
createUser("Bob", "admin");    // "Bob - admin"

// Arrow functions
const multiply = (a: number, b: number): number => {
  return a * b;
};

const divide = (a: number, b: number): number => a / b;

// Function type
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;

// Callback with types
function processArray(
  arr: number[], 
  callback: (item: number) => number
): number[] {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3], (n) => n * 2);
// [2, 4, 6]`,
              language: 'typescript',
              explanation: 'Type function parameters and return values. Use void for no return. Optional parameters with ?. Default parameters with =. Arrow functions support types. Define function types for callbacks.'
            },
            {
              title: 'TypeScript with React Components',
              code: `'use client';
import { useState } from 'react';

// Props interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

// Component with typed props
export function Button({ text, onClick, disabled, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {text}
    </button>
  );
}

// Component with state
interface User {
  id: number;
  name: string;
  email: string;
}

export function UserProfile() {
  // Type state with interface
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUser = async (id: number) => {
    setLoading(true);
    const response = await fetch(\`/api/users/\${id}\`);
    const data: User = await response.json();
    setUser(data);
    setLoading(false);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <Button text="Load User" onClick={() => loadUser(1)} />
    </div>
  );
}

// Props with children
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'Define Props interfaces for components. Type useState with <Type>. Use React.ReactNode for children. Optional props with ?. Literal types for variants. Type async functions and API responses.'
            },
            {
              title: 'TypeScript Best Practices',
              code: `// ✅ GOOD: Use interfaces for objects
interface Product {
  id: number;
  name: string;
  price: number;
}

// ✅ GOOD: Type inference
const count = 10; // Inferred as number
const name = "John"; // Inferred as string

// ❌ BAD: Unnecessary type annotation
const age: number = 25; // Type is obvious

// ✅ GOOD: Use union types
type Status = 'pending' | 'approved' | 'rejected';

// ❌ BAD: Using any
function process(data: any) { // Loses type safety
  return data.value;
}

// ✅ GOOD: Use specific types
function processData(data: { value: number }) {
  return data.value;
}

// ✅ GOOD: Optional chaining
interface User {
  name: string;
  address?: {
    city: string;
    zip: string;
  };
}

const user: User = { name: "John" };
const city = user.address?.city; // Safe access

// ✅ GOOD: Nullish coalescing
const displayName = user.name ?? "Anonymous";

// ✅ GOOD: Type guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows it's string
  }
}

// ✅ GOOD: Readonly for immutability
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

// config.apiUrl = "new url"; // Error: readonly property`,
              language: 'typescript',
              explanation: 'Use interfaces for object shapes. Rely on type inference when obvious. Avoid any type. Use union types for limited options. Optional chaining for safe property access. Type guards for runtime checks. Readonly for immutable data.'
            }
          ],
          comparison: {
            title: 'Type Definition Options',
            options: [
              {
                name: 'Interface',
                description: 'Define object shapes, can extend',
                whenToUse: 'Object types, React props (recommended)',
                example: 'interface User { name: string; age: number; }'
              },
              {
                name: 'Type Alias',
                description: 'Define any type, more flexible',
                whenToUse: 'Unions, primitives, complex types',
                example: 'type ID = string | number;'
              },
              {
                name: 'Inline Types',
                description: 'Type directly in code',
                whenToUse: 'Simple one-off types',
                example: 'const user: { name: string } = { name: "John" };'
              }
            ]
          }
        },
        {
          id: 'array-methods',
          title: 'Array Methods (map, filter, forEach, etc.)',
          description: 'Essential array methods for data manipulation',
          keyPoints: [
            'map() transforms each element, returns new array',
            'filter() selects elements matching condition',
            'forEach() executes function for each element',
            'find() returns first matching element',
            'Array methods are chainable and immutable'
          ],
          codeExamples: [
            {
              title: 'map() - Transform Arrays',
              code: `// map() creates new array by transforming each element

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Square each number
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// Transform objects
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 29 },
  { id: 3, name: "Keyboard", price: 79 }
];

// Extract just names
const names = products.map(p => p.name);
console.log(names); // ["Laptop", "Mouse", "Keyboard"]

// Add discount price
const withDiscount = products.map(p => ({
  ...p,
  discountPrice: p.price * 0.9
}));

// React: Render list
export function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - \${product.price}
        </li>
      ))}
    </ul>
  );
}

// map() returns new array, doesn't modify original
console.log(numbers); // [1, 2, 3, 4, 5] - unchanged`,
              language: 'tsx',
              explanation: 'map() transforms each element and returns new array. Original array unchanged. Use for converting data, extracting properties, rendering lists in React. Always provide key prop in React.'
            },
            {
              title: 'filter() - Select Elements',
              code: `// filter() creates new array with elements that pass test

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// Get numbers greater than 5
const greaterThan5 = numbers.filter(n => n > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// Filter objects
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Mouse", price: 29, category: "Electronics", inStock: true },
  { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
  { id: 4, name: "Chair", price: 199, category: "Furniture", inStock: true }
];

// Get electronics
const electronics = products.filter(p => p.category === "Electronics");

// Get in-stock items
const available = products.filter(p => p.inStock);

// Get expensive items (> $100)
const expensive = products.filter(p => p.price > 100);

// Multiple conditions
const affordableElectronics = products.filter(
  p => p.category === "Electronics" && p.price < 100
);

// React: Filter and render
export function ProductList({ searchTerm }: { searchTerm: string }) {
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filtered.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}`,
              language: 'tsx',
              explanation: 'filter() returns new array with elements passing test. Use for searching, filtering by criteria, removing items. Combine multiple conditions with && or ||. Original array unchanged.'
            },
            {
              title: 'forEach() - Iterate Elements',
              code: `// forEach() executes function for each element (no return value)

const numbers = [1, 2, 3, 4, 5];

// Log each number
numbers.forEach(n => {
  console.log(n);
});

// forEach with index
numbers.forEach((n, index) => {
  console.log(\`Index \${index}: \${n}\`);
});

// Modify external variable
let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum); // 15

// forEach with objects
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

users.forEach(user => {
  console.log(\`User: \${user.name}\`);
});

// ⚠️ forEach vs map:
// forEach: side effects, no return value
// map: transform data, returns new array

// ❌ BAD: Using forEach when you need new array
const doubled: number[] = [];
numbers.forEach(n => {
  doubled.push(n * 2);
});

// ✅ GOOD: Use map instead
const doubledBetter = numbers.map(n => n * 2);

// ✅ GOOD: forEach for side effects
numbers.forEach(n => {
  // Send to API
  fetch('/api/log', {
    method: 'POST',
    body: JSON.stringify({ value: n })
  });
});`,
              language: 'typescript',
              explanation: 'forEach() executes function for each element. No return value. Use for side effects (logging, API calls). For transforming data, use map() instead. forEach cannot be stopped early (use for...of for that).'
            },
            {
              title: 'find() and findIndex()',
              code: `// find() returns first element matching condition
// findIndex() returns index of first match

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find first even number
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2

// Find first number > 5
const firstGreater = numbers.find(n => n > 5);
console.log(firstGreater); // 6

// Returns undefined if not found
const notFound = numbers.find(n => n > 100);
console.log(notFound); // undefined

// findIndex() returns index
const index = numbers.findIndex(n => n > 5);
console.log(index); // 5 (index of 6)

// Returns -1 if not found
const notFoundIndex = numbers.findIndex(n => n > 100);
console.log(notFoundIndex); // -1

// Find object in array
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 29 },
  { id: 3, name: "Keyboard", price: 79 }
];

// Find product by ID
const product = products.find(p => p.id === 2);
console.log(product); // { id: 2, name: "Mouse", price: 29 }

// Find expensive product
const expensive = products.find(p => p.price > 500);
console.log(expensive); // { id: 1, name: "Laptop", price: 999 }

// React: Find and display
export function ProductDetail({ productId }: { productId: number }) {
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>\${product.price}</p>
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'find() returns first matching element or undefined. findIndex() returns index or -1. Use for finding specific items. Always check for undefined/null before using result. Stops searching after first match.'
            },
            {
              title: 'Chaining Array Methods',
              code: `// Chain multiple array methods for complex operations

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Mouse", price: 29, category: "Electronics", inStock: true },
  { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
  { id: 4, name: "Keyboard", price: 79, category: "Electronics", inStock: true },
  { id: 5, name: "Chair", price: 199, category: "Furniture", inStock: true }
];

// Get names of in-stock electronics under $100
const affordableElectronics = products
  .filter(p => p.category === "Electronics")  // Filter by category
  .filter(p => p.inStock)                     // Filter by stock
  .filter(p => p.price < 100)                 // Filter by price
  .map(p => p.name);                          // Extract names

console.log(affordableElectronics); // ["Mouse", "Keyboard"]

// Calculate total price of in-stock items
const total = products
  .filter(p => p.inStock)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);

console.log(total); // 1306

// Get top 3 most expensive in-stock items
const topExpensive = products
  .filter(p => p.inStock)
  .sort((a, b) => b.price - a.price)
  .slice(0, 3)
  .map(p => ({ name: p.name, price: p.price }));

// React: Complex filtering and rendering
export function ProductList({ 
  category, 
  maxPrice, 
  sortBy 
}: { 
  category: string; 
  maxPrice: number; 
  sortBy: 'name' | 'price' 
}) {
  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => p.price <= maxPrice)
    .filter(p => p.inStock)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    });

  return (
    <ul>
      {filtered.map(product => (
        <li key={product.id}>
          {product.name} - \${product.price}
        </li>
      ))}
    </ul>
  );
}

// Other useful methods:
// some() - check if any element matches
const hasExpensive = products.some(p => p.price > 500); // true

// every() - check if all elements match
const allInStock = products.every(p => p.inStock); // false

// reduce() - accumulate to single value
const totalValue = products.reduce((sum, p) => sum + p.price, 0);`,
              language: 'tsx',
              explanation: 'Chain methods for complex operations. Each method returns new array. Order matters: filter before map for efficiency. Common pattern: filter → sort → map. Use reduce() for calculations. some()/every() for boolean checks.'
            }
          ],
          comparison: {
            title: 'Array Method Use Cases',
            options: [
              {
                name: 'map()',
                description: 'Transform each element',
                whenToUse: 'Converting data, rendering lists, extracting properties',
                example: 'products.map(p => p.name)'
              },
              {
                name: 'filter()',
                description: 'Select elements by condition',
                whenToUse: 'Searching, removing items, conditional display',
                example: 'products.filter(p => p.inStock)'
              },
              {
                name: 'find()',
                description: 'Get first matching element',
                whenToUse: 'Finding by ID, getting single item',
                example: 'products.find(p => p.id === 1)'
              },
              {
                name: 'forEach()',
                description: 'Execute for each element',
                whenToUse: 'Side effects (logging, API calls)',
                example: 'products.forEach(p => console.log(p))'
              }
            ]
          }
        },
        {
          id: 'nextjs-build-deploy',
          title: 'Next.js Build & Deployment',
          description: 'Building and deploying Next.js applications',
          keyPoints: [
            'npm run build creates optimized production build',
            'Build process compiles TypeScript and optimizes code',
            'Static and dynamic pages are pre-rendered',
            'Deploy to Vercel, Netlify, or other hosting platforms',
            'Environment variables for different environments'
          ],
          codeExamples: [
            {
              title: 'Build Commands',
              code: `// package.json scripts
{
  "scripts": {
    "dev": "next dev",           // Development server
    "build": "next build",        // Production build
    "start": "next start",        // Production server
    "lint": "next lint"           // Run ESLint
  }
}

// Build your application
npm run build

// Output:
// - .next/ folder contains compiled application
// - Static pages are pre-rendered at build time
// - Server components are optimized
// - Client components are bundled and minified

// Start production server locally
npm run start

// Environment-specific builds
// .env.local (local development)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=postgresql://localhost:5432/dev

// .env.production (production)
NEXT_PUBLIC_API_URL=https://api.myapp.com
DATABASE_URL=postgresql://prod-server:5432/prod`,
              language: 'javascript',
              explanation: 'npm run build creates optimized production bundle. Build process includes TypeScript compilation, code minification, and static page generation. Use environment variables for configuration. Start production server with npm start.'
            },
            {
              title: 'Deploying to Vercel',
              code: `// Vercel is the easiest way to deploy Next.js apps

// Method 1: Deploy via Vercel CLI
// Install Vercel CLI
npm i -g vercel

// Deploy from project directory
vercel

// Deploy to production
vercel --prod

// Method 2: Deploy via Git Integration
// 1. Push code to GitHub/GitLab/Bitbucket
// 2. Import project in Vercel dashboard
// 3. Configure build settings (auto-detected for Next.js)
// 4. Deploy automatically on every push

// vercel.json configuration (optional)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "env": {
    "NEXT_PUBLIC_API_URL": "https://api.myapp.com"
  }
}

// Environment Variables in Vercel:
// 1. Go to Project Settings > Environment Variables
// 2. Add variables for Development, Preview, Production
// 3. Variables starting with NEXT_PUBLIC_ are exposed to browser
// 4. Other variables are server-side only`,
              language: 'javascript',
              explanation: 'Vercel provides seamless Next.js deployment. Use Vercel CLI or Git integration. Automatic builds on push. Configure environment variables in dashboard. NEXT_PUBLIC_ prefix exposes variables to client.'
            },
            {
              title: 'Deploying to Netlify',
              code: `// Deploy Next.js to Netlify

// netlify.toml configuration
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Redirects and rewrites
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

# Environment variables
# Set in Netlify dashboard: Site settings > Environment variables

// Deploy via Netlify CLI
npm install -g netlify-cli

// Login to Netlify
netlify login

// Initialize site
netlify init

// Deploy to production
netlify deploy --prod

// Or connect Git repository:
// 1. Push to GitHub
// 2. Import in Netlify dashboard
// 3. Configure build settings
// 4. Deploy automatically`,
              language: 'toml',
              explanation: 'Netlify supports Next.js with plugin. Create netlify.toml for configuration. Use Netlify CLI or Git integration. Set environment variables in dashboard. Automatic deployments on Git push.'
            },
            {
              title: 'Static Export',
              code: `// Export Next.js as static HTML (for static hosting)

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true  // Required for static export
  }
}

module.exports = nextConfig

// Build static site
npm run build

// Output folder: out/
// Contains static HTML, CSS, JS files
// Can be hosted on any static hosting service

// Deploy to GitHub Pages
// 1. Build static site
npm run build

// 2. Add .nojekyll file to out/ folder
touch out/.nojekyll

// 3. Push out/ folder to gh-pages branch
git subtree push --prefix out origin gh-pages

// Deploy to AWS S3
aws s3 sync out/ s3://my-bucket --delete

// Deploy to Azure Static Web Apps
az staticwebapp create \\
  --name my-app \\
  --resource-group my-rg \\
  --source out/

// Note: Static export limitations:
// - No API routes
// - No server-side rendering
// - No dynamic routes with getServerSideProps
// - Use getStaticProps and getStaticPaths instead`,
              language: 'javascript',
              explanation: 'Static export generates HTML files for static hosting. Configure output: "export" in next.config.js. Build creates out/ folder. Deploy to GitHub Pages, S3, Azure Static Web Apps. Limited to static features only.'
            }
          ],
          comparison: {
            title: 'Deployment Platforms',
            options: [
              {
                name: 'Vercel',
                description: 'Next.js creators, optimized for Next.js',
                whenToUse: 'Best Next.js experience, automatic optimization',
                example: 'Production apps, serverless functions'
              },
              {
                name: 'Netlify',
                description: 'Popular JAMstack platform',
                whenToUse: 'Multi-framework support, form handling',
                example: 'Static sites, edge functions'
              },
              {
                name: 'Static Export',
                description: 'Pure static HTML/CSS/JS',
                whenToUse: 'Simple hosting, no server needed',
                example: 'GitHub Pages, S3, CDN hosting'
              }
            ]
          }
        },
        {
          id: 'error-handling',
          title: 'Error Handling in Next.js',
          description: 'Handling errors gracefully in Next.js applications',
          keyPoints: [
            'Use try-catch blocks for async operations',
            'Error boundaries catch React component errors',
            'error.tsx creates error UI for route segments',
            'not-found.tsx handles 404 errors',
            'Global error handling with global-error.tsx'
          ],
          codeExamples: [
            {
              title: 'Try-Catch Error Handling',
              code: `'use client';
import { useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/users');
      
      // Check if response is OK
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      // Handle different error types
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {error && (
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={fetchData}>Retry</button>
        </div>
      )}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'Use try-catch for async operations. Check response.ok before parsing JSON. Handle different error types with instanceof. Provide user feedback with error state. Include retry functionality for failed requests.'
            },
            {
              title: 'Error Boundary Component',
              code: `'use client';
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so next render shows fallback UI
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can also log to external service
    // logErrorToService(error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <details>
            <summary>Error details</summary>
            <pre>{this.state.error?.message}</pre>
          </details>
          <button onClick={this.resetError}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
export default function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}`,
              language: 'tsx',
              explanation: 'Error boundaries catch errors in React component tree. Use getDerivedStateFromError to update state. componentDidCatch logs errors. Provide fallback UI and reset functionality. Wrap components that might throw errors.'
            },
            {
              title: 'Route Error Handling (error.tsx)',
              code: `// app/dashboard/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        
        <p className="text-gray-600 mb-4">
          We encountered an error while loading the dashboard.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <details className="mb-4 text-left">
            <summary className="cursor-pointer">Error details</summary>
            <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try again
          </button>
          
          <a
            href="/"
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'error.tsx creates error UI for route segment. Receives error object and reset function. Must be client component. Log errors in useEffect. Show error details in development only. Provide reset and navigation options.'
            },
            {
              title: 'Not Found Handling (not-found.tsx)',
              code: `// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

// Programmatically trigger 404
// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound(); // Triggers not-found.tsx
  }

  return <div>{post.title}</div>;
}

// Custom not-found for specific route
// app/blog/not-found.tsx
export default function BlogNotFound() {
  return (
    <div>
      <h2>Blog Post Not Found</h2>
      <p>This blog post doesn't exist or has been removed.</p>
      <Link href="/blog">View all posts</Link>
    </div>
  );
}`,
              language: 'tsx',
              explanation: 'not-found.tsx handles 404 errors for route segment. Create custom 404 pages per route. Use notFound() function to programmatically trigger 404. Provide helpful navigation back to valid pages.'
            },
            {
              title: 'API Route Error Handling',
              code: `// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Simulate database query
    const users = await fetchUsersFromDB();
    
    return NextResponse.json(users);
  } catch (error) {
    console.error('API Error:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        error: 'Failed to fetch users',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(body);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function with error handling
async function fetchUsersFromDB() {
  try {
    // Database query
    const users = []; // Simulated
    return users;
  } catch (error) {
    throw new Error('Database connection failed');
  }
}`,
              language: 'typescript',
              explanation: 'Wrap API logic in try-catch. Validate input and return 400 for bad requests. Return appropriate status codes (400, 404, 500). Handle JSON parsing errors. Log errors for debugging. Provide clear error messages.'
            },
            {
              title: 'Global Error Handler',
              code: `// app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Application Error</h1>
            <p className="mb-4">A critical error occurred in the application.</p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Reload Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

// Middleware for error logging
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    // Your middleware logic
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    
    return NextResponse.json(
      { error: 'Middleware error occurred' },
      { status: 500 }
    );
  }
}

// Custom error logging service
// lib/errorLogger.ts
export function logError(error: Error, context?: Record<string, any>) {
  const errorLog = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    context
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', errorLog);
  }

  // Send to error tracking service in production
  if (process.env.NODE_ENV === 'production') {
    // Send to Sentry, LogRocket, etc.
    // sendToErrorService(errorLog);
  }
}`,
              language: 'tsx',
              explanation: 'global-error.tsx catches errors in root layout. Must include html and body tags. Use for critical application errors. Implement error logging service for production. Log to external services like Sentry. Include context for debugging.'
            }
          ],
          comparison: {
            title: 'Error Handling Approaches',
            options: [
              {
                name: 'Try-Catch',
                description: 'Handle async operation errors',
                whenToUse: 'API calls, async functions, data fetching',
                example: 'fetch(), database queries, file operations'
              },
              {
                name: 'Error Boundaries',
                description: 'Catch React component errors',
                whenToUse: 'Component tree errors, render errors',
                example: 'Third-party components, complex UI'
              },
              {
                name: 'error.tsx',
                description: 'Route-level error UI',
                whenToUse: 'Page-specific errors, route segment errors',
                example: 'Dashboard errors, form submission errors'
              },
              {
                name: 'not-found.tsx',
                description: 'Handle 404 errors',
                whenToUse: 'Missing pages, invalid routes',
                example: 'Blog posts, user profiles, products'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-3-week-3',
      weekNumber: 3,
      title: 'C# .NET Web API & Azure Blob Storage',
      description: 'Building REST APIs with ASP.NET Core and file storage with Azure Blob Storage',
      concepts: [
        {
          id: 'dotnet-web-api',
          title: 'ASP.NET Core Web API',
          description: 'Creating RESTful APIs with C# and .NET',
          keyPoints: [
            'Controllers handle HTTP requests and return responses',
            'Use [HttpGet], [HttpPost], [HttpPut], [HttpDelete] attributes',
            'ActionResult<T> provides type-safe responses',
            'Dependency injection for services and repositories',
            'Model binding automatically maps request data to parameters'
          ],
          codeExamples: [
            {
              title: 'Basic API Controller',
              code: `using Microsoft.AspNetCore.Mvc;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        // GET: api/products
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            var products = new List<Product>
            {
                new Product { Id = 1, Name = "Laptop", Price = 999.99m },
                new Product { Id = 2, Name = "Mouse", Price = 29.99m },
                new Product { Id = 3, Name = "Keyboard", Price = 79.99m }
            };

            return Ok(products);
        }

        // GET: api/products/1
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = new Product { Id = id, Name = "Laptop", Price = 999.99m };
            
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // POST: api/products
        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            // Add product to database
            product.Id = 4; // Simulated ID from database
            
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // PUT: api/products/1
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            // Update product in database
            
            return NoContent();
        }

        // DELETE: api/products/1
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            // Delete product from database
            
            return NoContent();
        }
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}`,
              language: 'csharp',
              explanation: 'Controllers inherit from ControllerBase. Use [ApiController] for automatic model validation. [Route] defines base path. HTTP method attributes ([HttpGet], [HttpPost], etc.) map to endpoints. ActionResult<T> allows returning both data and status codes.'
            },
            {
              title: 'Dependency Injection with Services',
              code: `// IProductService.cs
public interface IProductService
{
    Task<IEnumerable<Product>> GetAllProductsAsync();
    Task<Product?> GetProductByIdAsync(int id);
    Task<Product> CreateProductAsync(Product product);
    Task UpdateProductAsync(Product product);
    Task DeleteProductAsync(int id);
}

// ProductService.cs
public class ProductService : IProductService
{
    private readonly List<Product> _products = new();

    public async Task<IEnumerable<Product>> GetAllProductsAsync()
    {
        return await Task.FromResult(_products);
    }

    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await Task.FromResult(_products.FirstOrDefault(p => p.Id == id));
    }

    public async Task<Product> CreateProductAsync(Product product)
    {
        product.Id = _products.Count + 1;
        _products.Add(product);
        return await Task.FromResult(product);
    }

    public async Task UpdateProductAsync(Product product)
    {
        var existing = _products.FirstOrDefault(p => p.Id == product.Id);
        if (existing != null)
        {
            existing.Name = product.Name;
            existing.Price = product.Price;
        }
        await Task.CompletedTask;
    }

    public async Task DeleteProductAsync(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product != null)
        {
            _products.Remove(product);
        }
        await Task.CompletedTask;
    }
}

// Program.cs - Register service
builder.Services.AddScoped<IProductService, ProductService>();

// ProductsController.cs - Inject service
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        var products = await _productService.GetAllProductsAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _productService.GetProductByIdAsync(id);
        
        if (product == null)
        {
            return NotFound();
        }

        return Ok(product);
    }

    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        var created = await _productService.CreateProductAsync(product);
        return CreatedAtAction(nameof(GetProduct), new { id = created.Id }, created);
    }
}`,
              language: 'csharp',
              explanation: 'Define interfaces for services. Implement business logic in service classes. Register services in Program.cs with AddScoped/AddSingleton/AddTransient. Inject services via constructor. Use async/await for asynchronous operations.'
            },
            {
              title: 'Model Validation and Error Handling',
              code: `using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

// Product model with validation attributes
public class Product
{
    public int Id { get; set; }
    
    [Required(ErrorMessage = "Name is required")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Name must be between 3 and 100 characters")]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10000")]
    public decimal Price { get; set; }
    
    [StringLength(500)]
    public string? Description { get; set; }
}

// Controller with validation
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        // [ApiController] automatically validates and returns 400 if invalid
        
        try
        {
            var created = await _productService.CreateProductAsync(product);
            return CreatedAtAction(nameof(GetProduct), new { id = created.Id }, created);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "An error occurred", message = ex.Message });
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        if (id <= 0)
        {
            return BadRequest(new { error = "Invalid product ID" });
        }

        var product = await _productService.GetProductByIdAsync(id);
        
        if (product == null)
        {
            return NotFound(new { error = $"Product with ID {id} not found" });
        }

        return Ok(product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
        {
            return BadRequest(new { error = "ID mismatch" });
        }

        var existing = await _productService.GetProductByIdAsync(id);
        if (existing == null)
        {
            return NotFound();
        }

        await _productService.UpdateProductAsync(product);
        return NoContent();
    }
}`,
              language: 'csharp',
              explanation: 'Use Data Annotations for model validation ([Required], [Range], [StringLength]). [ApiController] automatically validates models and returns 400 BadRequest. Return appropriate status codes: 200 (Ok), 201 (Created), 204 (NoContent), 400 (BadRequest), 404 (NotFound), 500 (InternalServerError).'
            },
            {
              title: 'Query Parameters and Filtering',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // GET: api/products?category=Electronics&minPrice=50&maxPrice=1000&sortBy=price
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts(
        [FromQuery] string? category,
        [FromQuery] decimal? minPrice,
        [FromQuery] decimal? maxPrice,
        [FromQuery] string? sortBy = "name")
    {
        var products = await _productService.GetAllProductsAsync();

        // Filter by category
        if (!string.IsNullOrEmpty(category))
        {
            products = products.Where(p => p.Category == category);
        }

        // Filter by price range
        if (minPrice.HasValue)
        {
            products = products.Where(p => p.Price >= minPrice.Value);
        }

        if (maxPrice.HasValue)
        {
            products = products.Where(p => p.Price <= maxPrice.Value);
        }

        // Sort
        products = sortBy?.ToLower() switch
        {
            "price" => products.OrderBy(p => p.Price),
            "name" => products.OrderBy(p => p.Name),
            _ => products.OrderBy(p => p.Name)
        };

        return Ok(new
        {
            count = products.Count(),
            filters = new { category, minPrice, maxPrice, sortBy },
            data = products
        });
    }

    // GET: api/products/search?term=laptop
    [HttpGet("search")]
    public async Task<ActionResult<IEnumerable<Product>>> SearchProducts(
        [FromQuery] string term)
    {
        if (string.IsNullOrWhiteSpace(term))
        {
            return BadRequest(new { error = "Search term is required" });
        }

        var products = await _productService.GetAllProductsAsync();
        var results = products.Where(p => 
            p.Name.Contains(term, StringComparison.OrdinalIgnoreCase) ||
            (p.Description != null && p.Description.Contains(term, StringComparison.OrdinalIgnoreCase))
        );

        return Ok(results);
    }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Category { get; set; } = string.Empty;
    public string? Description { get; set; }
}`,
              language: 'csharp',
              explanation: 'Use [FromQuery] to bind query parameters. Make parameters nullable (?) for optional filters. Use LINQ (Where, OrderBy) to filter and sort data. Return structured responses with metadata. Use StringComparison.OrdinalIgnoreCase for case-insensitive searches.'
            }
          ],
          comparison: {
            title: 'HTTP Status Codes',
            options: [
              {
                name: '200 OK',
                description: 'Request succeeded',
                whenToUse: 'GET requests returning data',
                example: 'return Ok(products);'
              },
              {
                name: '201 Created',
                description: 'Resource created successfully',
                whenToUse: 'POST requests creating new resources',
                example: 'return CreatedAtAction(...);'
              },
              {
                name: '204 No Content',
                description: 'Success with no response body',
                whenToUse: 'PUT/DELETE operations',
                example: 'return NoContent();'
              },
              {
                name: '400 Bad Request',
                description: 'Invalid request data',
                whenToUse: 'Validation failures, malformed requests',
                example: 'return BadRequest();'
              },
              {
                name: '404 Not Found',
                description: 'Resource does not exist',
                whenToUse: 'GET/PUT/DELETE when resource not found',
                example: 'return NotFound();'
              }
            ]
          }
        },
        {
          id: 'azure-blob-dotnet',
          title: 'Azure Blob Storage with C#',
          description: 'File upload and management using Azure Blob Storage in .NET',
          keyPoints: [
            'Use Azure.Storage.Blobs NuGet package',
            'BlobServiceClient connects to Azure Storage account',
            'BlobContainerClient manages containers (like folders)',
            'BlobClient handles individual blob operations',
            'Support for upload, download, list, and delete operations'
          ],
          codeExamples: [
            {
              title: 'Setup Azure Blob Storage Service',
              code: `using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

// IBlobStorageService.cs
public interface IBlobStorageService
{
    Task<string> UploadFileAsync(Stream fileStream, string fileName, string contentType);
    Task<Stream> DownloadFileAsync(string fileName);
    Task<List<BlobFileInfo>> ListFilesAsync();
    Task DeleteFileAsync(string fileName);
    Task<bool> FileExistsAsync(string fileName);
}

// BlobStorageService.cs
public class BlobStorageService : IBlobStorageService
{
    private readonly BlobServiceClient _blobServiceClient;
    private readonly string _containerName;

    public BlobStorageService(IConfiguration configuration)
    {
        var connectionString = configuration["AzureStorage:ConnectionString"];
        _containerName = configuration["AzureStorage:ContainerName"] ?? "uploads";
        
        _blobServiceClient = new BlobServiceClient(connectionString);
    }

    public async Task<string> UploadFileAsync(Stream fileStream, string fileName, string contentType)
    {
        // Get container client
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        
        // Create container if it doesn't exist
        await containerClient.CreateIfNotExistsAsync(PublicAccessType.Blob);
        
        // Generate unique filename
        var uniqueFileName = $"{Guid.NewGuid()}_{fileName}";
        
        // Get blob client
        var blobClient = containerClient.GetBlobClient(uniqueFileName);
        
        // Upload file
        await blobClient.UploadAsync(fileStream, new BlobHttpHeaders { ContentType = contentType });
        
        // Return URL
        return blobClient.Uri.ToString();
    }

    public async Task<Stream> DownloadFileAsync(string fileName)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = containerClient.GetBlobClient(fileName);
        
        var response = await blobClient.DownloadAsync();
        return response.Value.Content;
    }

    public async Task<List<BlobFileInfo>> ListFilesAsync()
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        var files = new List<BlobFileInfo>();
        
        await foreach (var blobItem in containerClient.GetBlobsAsync())
        {
            files.Add(new BlobFileInfo
            {
                Name = blobItem.Name,
                Size = blobItem.Properties.ContentLength ?? 0,
                ContentType = blobItem.Properties.ContentType,
                LastModified = blobItem.Properties.LastModified?.DateTime,
                Url = containerClient.GetBlobClient(blobItem.Name).Uri.ToString()
            });
        }
        
        return files;
    }

    public async Task DeleteFileAsync(string fileName)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = containerClient.GetBlobClient(fileName);
        
        await blobClient.DeleteIfExistsAsync();
    }

    public async Task<bool> FileExistsAsync(string fileName)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = containerClient.GetBlobClient(fileName);
        
        return await blobClient.ExistsAsync();
    }
}

public class BlobFileInfo
{
    public string Name { get; set; } = string.Empty;
    public long Size { get; set; }
    public string? ContentType { get; set; }
    public DateTime? LastModified { get; set; }
    public string Url { get; set; } = string.Empty;
}

// Program.cs - Register service
builder.Services.AddScoped<IBlobStorageService, BlobStorageService>();

// appsettings.json
{
  "AzureStorage": {
    "ConnectionString": "DefaultEndpointsProtocol=https;AccountName=...;AccountKey=...;EndpointSuffix=core.windows.net",
    "ContainerName": "uploads"
  }
}`,
              language: 'csharp',
              explanation: 'BlobServiceClient connects to Azure Storage. GetBlobContainerClient() accesses containers. CreateIfNotExistsAsync() ensures container exists. UploadAsync() uploads files with content type. Store connection string in appsettings.json, never in code.'
            },
            {
              title: 'File Upload API Controller',
              code: `using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class FilesController : ControllerBase
{
    private readonly IBlobStorageService _blobStorageService;
    private readonly ILogger<FilesController> _logger;

    public FilesController(IBlobStorageService blobStorageService, ILogger<FilesController> logger)
    {
        _blobStorageService = blobStorageService;
        _logger = logger;
    }

    // POST: api/files/upload
    [HttpPost("upload")]
    public async Task<ActionResult<FileUploadResponse>> UploadFile(IFormFile file)
    {
        try
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest(new { error = "No file provided" });
            }

            // Validate file size (e.g., max 10MB)
            const long maxFileSize = 10 * 1024 * 1024;
            if (file.Length > maxFileSize)
            {
                return BadRequest(new { error = "File size exceeds 10MB limit" });
            }

            // Validate file type
            var allowedTypes = new[] { "image/jpeg", "image/png", "image/gif", "application/pdf" };
            if (!allowedTypes.Contains(file.ContentType))
            {
                return BadRequest(new { error = "Invalid file type. Only JPEG, PNG, GIF, and PDF allowed" });
            }

            // Upload file
            using var stream = file.OpenReadStream();
            var url = await _blobStorageService.UploadFileAsync(stream, file.FileName, file.ContentType);

            return Ok(new FileUploadResponse
            {
                Message = "File uploaded successfully",
                FileName = file.FileName,
                Url = url,
                Size = file.Length,
                ContentType = file.ContentType
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error uploading file");
            return StatusCode(500, new { error = "Failed to upload file" });
        }
    }

    // GET: api/files
    [HttpGet]
    public async Task<ActionResult<FileListResponse>> GetFiles()
    {
        try
        {
            var files = await _blobStorageService.ListFilesAsync();
            
            return Ok(new FileListResponse
            {
                Files = files,
                Count = files.Count
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error listing files");
            return StatusCode(500, new { error = "Failed to list files" });
        }
    }

    // GET: api/files/{fileName}
    [HttpGet("{fileName}")]
    public async Task<IActionResult> DownloadFile(string fileName)
    {
        try
        {
            var exists = await _blobStorageService.FileExistsAsync(fileName);
            if (!exists)
            {
                return NotFound(new { error = "File not found" });
            }

            var stream = await _blobStorageService.DownloadFileAsync(fileName);
            
            return File(stream, "application/octet-stream", fileName);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error downloading file: {FileName}", fileName);
            return StatusCode(500, new { error = "Failed to download file" });
        }
    }

    // DELETE: api/files/{fileName}
    [HttpDelete("{fileName}")]
    public async Task<IActionResult> DeleteFile(string fileName)
    {
        try
        {
            var exists = await _blobStorageService.FileExistsAsync(fileName);
            if (!exists)
            {
                return NotFound(new { error = "File not found" });
            }

            await _blobStorageService.DeleteFileAsync(fileName);
            
            return Ok(new { message = "File deleted successfully", fileName });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting file: {FileName}", fileName);
            return StatusCode(500, new { error = "Failed to delete file" });
        }
    }
}

public class FileUploadResponse
{
    public string Message { get; set; } = string.Empty;
    public string FileName { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public long Size { get; set; }
    public string ContentType { get; set; } = string.Empty;
}

public class FileListResponse
{
    public List<BlobFileInfo> Files { get; set; } = new();
    public int Count { get; set; }
}`,
              language: 'csharp',
              explanation: 'Use IFormFile for file uploads. Validate file size and type before uploading. OpenReadStream() gets file stream. Return File() for downloads with content type. Use ILogger for error logging. Implement proper error handling with try-catch.'
            },
            {
              title: 'Multiple File Upload',
              code: `[ApiController]
[Route("api/[controller]")]
public class FilesController : ControllerBase
{
    private readonly IBlobStorageService _blobStorageService;

    public FilesController(IBlobStorageService blobStorageService)
    {
        _blobStorageService = blobStorageService;
    }

    // POST: api/files/upload-multiple
    [HttpPost("upload-multiple")]
    public async Task<ActionResult<MultipleFileUploadResponse>> UploadMultipleFiles(List<IFormFile> files)
    {
        if (files == null || files.Count == 0)
        {
            return BadRequest(new { error = "No files provided" });
        }

        const int maxFiles = 10;
        if (files.Count > maxFiles)
        {
            return BadRequest(new { error = $"Maximum {maxFiles} files allowed" });
        }

        var uploadedFiles = new List<FileUploadResult>();
        var errors = new List<string>();

        foreach (var file in files)
        {
            try
            {
                if (file.Length == 0)
                {
                    errors.Add($"{file.FileName}: File is empty");
                    continue;
                }

                const long maxFileSize = 10 * 1024 * 1024;
                if (file.Length > maxFileSize)
                {
                    errors.Add($"{file.FileName}: File size exceeds 10MB");
                    continue;
                }

                using var stream = file.OpenReadStream();
                var url = await _blobStorageService.UploadFileAsync(stream, file.FileName, file.ContentType);

                uploadedFiles.Add(new FileUploadResult
                {
                    FileName = file.FileName,
                    Url = url,
                    Size = file.Length,
                    Success = true
                });
            }
            catch (Exception ex)
            {
                errors.Add($"{file.FileName}: {ex.Message}");
            }
        }

        return Ok(new MultipleFileUploadResponse
        {
            UploadedFiles = uploadedFiles,
            SuccessCount = uploadedFiles.Count,
            FailureCount = errors.Count,
            Errors = errors
        });
    }
}

public class FileUploadResult
{
    public string FileName { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public long Size { get; set; }
    public bool Success { get; set; }
}

public class MultipleFileUploadResponse
{
    public List<FileUploadResult> UploadedFiles { get; set; } = new();
    public int SuccessCount { get; set; }
    public int FailureCount { get; set; }
    public List<string> Errors { get; set; } = new();
}`,
              language: 'csharp',
              explanation: 'Accept List<IFormFile> for multiple files. Validate each file individually. Track successes and failures separately. Continue processing even if some files fail. Return detailed response with success/failure counts and error messages.'
            },
            {
              title: 'File Upload with Metadata',
              code: `// DTO for file upload with metadata
public class FileUploadRequest
{
    public IFormFile File { get; set; } = null!;
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? Category { get; set; }
}

// Extended blob storage service
public interface IBlobStorageService
{
    Task<string> UploadFileWithMetadataAsync(
        Stream fileStream, 
        string fileName, 
        string contentType,
        Dictionary<string, string> metadata);
    Task<Dictionary<string, string>> GetFileMetadataAsync(string fileName);
}

public class BlobStorageService : IBlobStorageService
{
    private readonly BlobServiceClient _blobServiceClient;
    private readonly string _containerName;

    public BlobStorageService(IConfiguration configuration)
    {
        var connectionString = configuration["AzureStorage:ConnectionString"];
        _containerName = configuration["AzureStorage:ContainerName"] ?? "uploads";
        _blobServiceClient = new BlobServiceClient(connectionString);
    }

    public async Task<string> UploadFileWithMetadataAsync(
        Stream fileStream, 
        string fileName, 
        string contentType,
        Dictionary<string, string> metadata)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        await containerClient.CreateIfNotExistsAsync(PublicAccessType.Blob);
        
        var uniqueFileName = $"{Guid.NewGuid()}_{fileName}";
        var blobClient = containerClient.GetBlobClient(uniqueFileName);
        
        // Upload with metadata
        await blobClient.UploadAsync(fileStream, new BlobUploadOptions
        {
            HttpHeaders = new BlobHttpHeaders { ContentType = contentType },
            Metadata = metadata
        });
        
        return blobClient.Uri.ToString();
    }

    public async Task<Dictionary<string, string>> GetFileMetadataAsync(string fileName)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = containerClient.GetBlobClient(fileName);
        
        var properties = await blobClient.GetPropertiesAsync();
        return properties.Value.Metadata.ToDictionary(kvp => kvp.Key, kvp => kvp.Value);
    }
}

// Controller
[ApiController]
[Route("api/[controller]")]
public class FilesController : ControllerBase
{
    private readonly IBlobStorageService _blobStorageService;

    public FilesController(IBlobStorageService blobStorageService)
    {
        _blobStorageService = blobStorageService;
    }

    [HttpPost("upload-with-metadata")]
    public async Task<ActionResult> UploadFileWithMetadata([FromForm] FileUploadRequest request)
    {
        if (request.File == null || request.File.Length == 0)
        {
            return BadRequest(new { error = "No file provided" });
        }

        var metadata = new Dictionary<string, string>
        {
            { "title", request.Title ?? request.File.FileName },
            { "description", request.Description ?? "" },
            { "category", request.Category ?? "general" },
            { "uploadedBy", User.Identity?.Name ?? "anonymous" },
            { "uploadedAt", DateTime.UtcNow.ToString("o") }
        };

        using var stream = request.File.OpenReadStream();
        var url = await _blobStorageService.UploadFileWithMetadataAsync(
            stream, 
            request.File.FileName, 
            request.File.ContentType,
            metadata);

        return Ok(new
        {
            message = "File uploaded with metadata",
            url,
            metadata
        });
    }

    [HttpGet("{fileName}/metadata")]
    public async Task<ActionResult> GetFileMetadata(string fileName)
    {
        var metadata = await _blobStorageService.GetFileMetadataAsync(fileName);
        return Ok(metadata);
    }
}`,
              language: 'csharp',
              explanation: 'Store custom metadata with blobs using BlobUploadOptions. Metadata is key-value pairs (both strings). Use [FromForm] to bind complex objects with files. Access metadata with GetPropertiesAsync(). Useful for storing file descriptions, categories, upload info.'
            }
          ],
          comparison: {
            title: 'File Storage Patterns',
            options: [
              {
                name: 'Azure Blob Storage',
                description: 'Cloud object storage, scalable and durable',
                whenToUse: 'Production apps, large files, distributed systems',
                example: 'Images, videos, documents, backups'
              },
              {
                name: 'Database (BLOB column)',
                description: 'Store files directly in database',
                whenToUse: 'Small files, transactional integrity needed',
                example: 'Profile pictures, small attachments'
              },
              {
                name: 'Local File System',
                description: 'Save files to server disk',
                whenToUse: 'Development/testing only',
                example: 'Not recommended for production'
              }
            ]
          }
        }
      ]
    }
  ]
};
