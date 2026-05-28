import { Deck } from '@/types/flashcard';

export const reactFundamentals: Deck = {
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
    },
    {
      id: '2-51',
      question: 'What is Next.js?',
      answer: 'Next.js is framework built on top of the React library that adds file-based routing, server-side rendering, static generation, and API routes on top of React.',
      code: `// Next.js app/page.tsx
export default function Page() {
  return <h1>Hello from Next.js</h1>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['nextjs', 'framework', 'basics']
    },
    {
      id: '2-52',
      question: 'What is the App Router in Next.js?',
      answer: 'The App Router (app/ directory) is the modern Next.js routing system. It supports React Server Components, layouts, streaming, and nested routes.',
      code: `app/
  layout.tsx     // root layout
  page.tsx       // home route (/)
  about/
    page.tsx     // /about route`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['nextjs', 'app-router', 'routing']
    },
    {
      id: '2-53',
      question: 'What is a React Server Component?',
      answer: 'Server Components render on the server and send HTML to the client. They have no JavaScript bundle cost, can access databases directly, and cannot use browser APIs or hooks.',
      code: `// app/page.tsx — Server Component by default
async function Page() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  return <div>{json.title}</div>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['server-components', 'nextjs', 'rendering']
    },
    {
      id: '2-54',
      question: 'What is a Client Component in Next.js?',
      answer: 'Client Components render on the client (browser). Add "use client" at the top of the file to opt in. Required for hooks, event handlers, and browser APIs.',
      code: `'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['client-components', 'nextjs', 'use-client']
    },
    {
      id: '2-55',
      question: 'When do you add "use client" in Next.js?',
      answer: 'Add "use client" when your component needs useState, useEffect, event handlers (onClick etc.), browser APIs (window, localStorage), or third-party client-only libraries.',
      code: `'use client'; // needed for any of these:

import { useState, useEffect } from 'react';

// - onClick, onChange handlers
// - useState, useEffect, useRef
// - window, localStorage, document`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['use-client', 'nextjs', 'server-components']
    },
    {
      id: '2-56',
      question: 'How does file-based routing work in Next.js App Router?',
      answer: 'Each folder in app/ represents a URL segment. A page.tsx file inside a folder makes that route publicly accessible.',
      code: `app/
  page.tsx          // /
  blog/
    page.tsx        // /blog
    [slug]/
      page.tsx      // /blog/:slug`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['routing', 'nextjs', 'file-based']
    },
    {
      id: '2-57',
      question: 'What is the page.tsx file in Next.js?',
      answer: 'page.tsx is the UI for a route. It must export a default React component. Only page.tsx files are publicly accessible — other files in the same folder are not.',
      code: `// app/about/page.tsx → accessible at /about
export default function AboutPage() {
  return <h1>About Us</h1>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['page', 'nextjs', 'routing']
    },
    {
      id: '2-58',
      question: 'What is the layout.tsx file in Next.js?',
      answer: 'layout.tsx wraps all pages in a route segment. It persists across navigations and is not re-rendered. Use it for nav bars, sidebars, and shared UI.',
      code: `// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>Navigation</nav>
        {children}
      </body>
    </html>
  );
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['layout', 'nextjs', 'routing']
    },
    {
      id: '2-59',
      question: 'What is next/link?',
      answer: 'next/link provides client-side navigation between routes. It prefetches linked pages in the background for faster transitions.',
      code: `import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['next-link', 'navigation', 'nextjs']
    },
    {
      id: '2-60',
      question: 'What is next/image?',
      answer: 'next/image is an optimized Image component that auto-resizes images, converts to modern formats (WebP/AVIF), lazy loads, and prevents layout shift via required width/height.',
      code: `import Image from 'next/image';

<Image
  src="/hero.png"
  alt="Hero image"
  width={800}
  height={400}
  priority
/>`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['next-image', 'performance', 'nextjs']
    },
    {
      id: '2-61',
      question: 'What are dynamic routes in Next.js?',
      answer: 'Dynamic routes use square bracket folders like [id] to match variable URL segments. The matched value is available in the params prop.',
      code: `// app/products/[id]/page.tsx
export default function ProductPage({ params }: { params: { id: string } }) {
  return <h1>Product {params.id}</h1>;
}
// Matches: /products/1, /products/abc`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['dynamic-routes', 'nextjs', 'routing']
    },
    {
      id: '2-62',
      question: 'What is loading.tsx in Next.js?',
      answer: 'loading.tsx automatically wraps a page in a Suspense boundary. It displays while the page or data is loading, enabling instant loading states.',
      code: `// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Loading dashboard...</div>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['loading', 'suspense', 'nextjs']
    },
    {
      id: '2-63',
      question: 'What is error.tsx in Next.js?',
      answer: 'error.tsx is an error boundary for a route segment. It must be a Client Component and receives the error and a reset function to retry.',
      code: `'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['error-handling', 'nextjs', 'error-boundary']
    },
    {
      id: '2-64',
      question: 'What is not-found.tsx in Next.js?',
      answer: 'not-found.tsx renders when notFound() is called or a route doesn\'t exist. It replaces the default Next.js 404 page for that route segment.',
      code: `// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <a href="/">Return Home</a>
    </div>
  );
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['not-found', '404', 'nextjs']
    },
    {
      id: '2-65',
      question: 'What are Server Actions in Next.js?',
      answer: 'Server Actions are async functions that run on the server. Mark them with "use server" to call them directly from Client Components for form submissions and data mutations.',
      code: `'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.post.create({ data: { title } });
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['server-actions', 'nextjs', 'forms']
    },
    {
      id: '2-66',
      question: 'What is useRouter from next/navigation?',
      answer: 'useRouter from next/navigation provides programmatic navigation in Client Components. Use push(), replace(), back(), and refresh().',
      code: `'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/dashboard')}>
      Go to Dashboard
    </button>
  );
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['useRouter', 'navigation', 'nextjs']
    },
    {
      id: '2-67',
      question: 'What is usePathname in Next.js?',
      answer: 'usePathname returns the current URL pathname as a string. Useful for highlighting active nav links.',
      code: `'use client';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <a className={pathname === '/' ? 'active' : ''} href="/">Home</a>
    </nav>
  );
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['usePathname', 'navigation', 'nextjs']
    },
    {
      id: '2-68',
      question: 'What is useSearchParams in Next.js?',
      answer: 'useSearchParams reads the URL query string. It returns a URLSearchParams-like object. Must be used in a Client Component.',
      code: `'use client';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q'); // ?q=hello
  return <p>Search: {query}</p>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['useSearchParams', 'query-params', 'nextjs']
    },
    {
      id: '2-69',
      question: 'What is the difference between static and dynamic rendering in Next.js?',
      answer: 'Static rendering generates HTML at build time (fast, cacheable). Dynamic rendering generates HTML per request (needed for personalized or frequently updated data).',
      code: `// Static (default) — rendered at build time
async function Page() {
  const data = await fetch('https://api.example.com/static');
  return <div>{data}</div>;
}

// Dynamic — opt in with no-store or dynamic APIs
async function Page() {
  const data = await fetch('https://api.example.com/live', { cache: 'no-store' });
  return <div>{data}</div>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['rendering', 'static', 'dynamic', 'nextjs']
    },
    {
      id: '2-70',
      question: 'What is next/font?',
      answer: 'next/font automatically optimizes fonts, downloads them at build time, and eliminates external network requests. It uses CSS variables to apply fonts.',
      code: `import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export default function Layout({ children }) {
  return <html className={geist.variable}>{children}</html>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['next-font', 'performance', 'nextjs']
    },
    {
      id: '2-71',
      question: 'What is the public/ directory in Next.js?',
      answer: 'The public/ folder serves static files (images, icons, robots.txt) at the root URL. Files are accessible at /filename without any import.',
      code: `// File: public/logo.png
// Accessible at: https://yoursite.com/logo.png

<img src="/logo.png" alt="Logo" />`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['public', 'static-files', 'nextjs']
    },
    {
      id: '2-72',
      question: 'What are route groups in Next.js?',
      answer: 'Route groups use (folderName) syntax to organize routes without affecting the URL path. Useful for sharing a layout between specific routes.',
      code: `app/
  (marketing)/
    layout.tsx    // shared layout for marketing pages
    page.tsx      // /
    about/
      page.tsx    // /about
  (auth)/
    login/
      page.tsx    // /login`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['route-groups', 'nextjs', 'routing']
    },
    {
      id: '2-73',
      question: 'What is the Metadata API in Next.js?',
      answer: 'Export a metadata object or generateMetadata function from a page or layout to set HTML head tags like title and description.',
      code: `// Static metadata
export const metadata = {
  title: 'My App',
  description: 'Welcome to my app',
};

// Dynamic metadata
export async function generateMetadata({ params }) {
  return { title: \`Post: \${params.id}\` };
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['metadata', 'seo', 'nextjs']
    },
    {
      id: '2-74',
      question: 'What is next.config.js?',
      answer: 'next.config.js is the Next.js configuration file. Use it to set environment variables, configure image domains, redirects, rewrites, and other build options.',
      code: `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'example.com' }],
  },
  redirects: async () => [
    { source: '/old', destination: '/new', permanent: true },
  ],
};

module.exports = nextConfig;`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['config', 'nextjs', 'setup']
    },
    {
      id: '2-75',
      question: 'What is the params prop in Next.js dynamic pages?',
      answer: 'The params prop in a dynamic page provides the matched URL segments as an object. In Next.js 15+, params is a Promise and must be awaited.',
      code: `// app/blog/[slug]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>Post: {slug}</h1>;
}`,
      language: 'typescript',
      category: 'Next.js',
      difficulty: 'easy',
      tags: ['params', 'dynamic-routes', 'nextjs']
    },
    {
      id: '2-76',
      question: 'What is automatic batching in React 18?',
      answer: 'React 18 batches all state updates into a single re-render, even in async functions, timeouts, and event handlers — not just React event handlers as in React 17.',
      code: `// React 18: both updates batched into ONE render
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Only one re-render, not two
}, 1000);`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['batching', 'react-18', 'performance']
    },
    {
      id: '2-77',
      question: 'How do you prevent stale closures in useEffect?',
      answer: 'Include all values from the component scope that the effect uses in the dependency array. Alternatively, use the functional update form of setState.',
      code: `// Stale closure — count never changes inside effect
useEffect(() => {
  const id = setInterval(() => console.log(count), 1000);
  return () => clearInterval(id);
}, []); // missing count

// Fix: add count to deps
useEffect(() => { ... }, [count]);

// Or use functional update
setCount(prev => prev + 1);`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['stale-closure', 'useEffect', 'bugs']
    },
    {
      id: '2-78',
      question: 'Why do objects and arrays in props cause unnecessary re-renders?',
      answer: 'Objects and arrays are compared by reference. A new object literal on every render is always a new reference, causing memoized children to re-render even if the data is the same.',
      code: `// New object every render — breaks React.memo
<Child style={{ color: 'red' }} />

// Fix: define outside or memoize
const style = useMemo(() => ({ color: 'red' }), []);
<Child style={style} />`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['reference-equality', 'performance', 'memo']
    },
    {
      id: '2-79',
      question: 'What is the Context API performance pitfall?',
      answer: 'Every component consuming a context re-renders when any part of the context value changes. Split contexts by update frequency to avoid unnecessary re-renders.',
      code: `// Bad: one context, everything re-renders on any change
const AppContext = createContext({ user, theme, cart });

// Better: separate contexts
const UserContext = createContext(user);
const ThemeContext = createContext(theme);`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['context', 'performance', 're-renders']
    },
    {
      id: '2-80',
      question: 'What is the compound component pattern?',
      answer: 'The compound component pattern splits a complex component into smaller sub-components that share implicit state via context. The parent coordinates them.',
      code: `function Tabs({ children }) {
  const [active, setActive] = useState(0);
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

Tabs.Tab = function Tab({ index, children }) {
  const { active, setActive } = useContext(TabsContext);
  return <button onClick={() => setActive(index)}>{children}</button>;
};

// Usage: <Tabs><Tabs.Tab index={0}>Home</Tabs.Tab></Tabs>`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['compound-components', 'patterns', 'context']
    },
    {
      id: '2-81',
      question: 'What is an optimistic UI update?',
      answer: 'An optimistic update immediately shows the expected result in the UI before the server confirms, then corrects if the server returns an error. Makes apps feel faster.',
      code: `function likePost(id) {
  // Immediately update UI
  setLikes(prev => prev + 1);

  // Send to server
  api.like(id).catch(() => {
    // Revert on error
    setLikes(prev => prev - 1);
  });
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['optimistic-ui', 'ux', 'patterns']
    },
    {
      id: '2-82',
      question: 'What is the useOptimistic hook in React?',
      answer: 'useOptimistic displays an optimistic value during an async action. It temporarily shows the optimistic state and reverts to the real state when the action completes.',
      code: `const [optimisticLikes, addOptimisticLike] = useOptimistic(
  likes,
  (state, newLike) => state + newLike
);

async function handleLike() {
  addOptimisticLike(1);       // show +1 immediately
  await saveLikeToServer();   // real update
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['useOptimistic', 'react-19', 'forms']
    },
    {
      id: '2-83',
      question: 'What is useFormStatus in React?',
      answer: 'useFormStatus provides the pending state of a parent form submission. Must be used inside a component rendered within a <form>.',
      code: `import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['useFormStatus', 'forms', 'react-19']
    },
    {
      id: '2-84',
      question: 'What is useActionState in React?',
      answer: 'useActionState manages state returned from a form action (Server Action or client function). It returns [state, dispatch, isPending].',
      code: `import { useActionState } from 'react';

const [state, formAction, isPending] = useActionState(
  async (prevState, formData) => {
    return await submitForm(formData);
  },
  null
);

return <form action={formAction}>...</form>;`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['useActionState', 'forms', 'react-19']
    },
    {
      id: '2-85',
      question: 'What is the React use hook?',
      answer: 'use reads resources like Promises or Context inside render. Unlike other hooks, use can be called conditionally. Promises suspend the component until resolved.',
      code: `import { use } from 'react';

function Profile({ userPromise }) {
  const user = use(userPromise); // suspends until resolved
  return <h1>{user.name}</h1>;
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['use', 'react-19', 'suspense']
    },
    {
      id: '2-86',
      question: 'What is hydration in React?',
      answer: 'Hydration attaches React event listeners to server-rendered HTML. React re-uses the existing DOM instead of re-creating it, making the page interactive.',
      code: `// Server sends HTML string
// <div id="root"><h1>Hello</h1></div>

// Client hydrates (attaches events, no re-render)
hydrateRoot(document.getElementById('root'), <App />);`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['hydration', 'ssr', 'nextjs']
    },
    {
      id: '2-87',
      question: 'What is createRoot in React 18?',
      answer: 'createRoot is the React 18 API for mounting apps. It enables concurrent features. Replaces the legacy ReactDOM.render().',
      code: `import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Legacy (React 17):
// ReactDOM.render(<App />, document.getElementById('root'));`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['createRoot', 'react-18', 'concurrent']
    },
    {
      id: '2-88',
      question: 'What is flushSync in React?',
      answer: 'flushSync forces React to synchronously flush all pending state updates inside the callback. Use sparingly — it opts out of batching.',
      code: `import { flushSync } from 'react-dom';

flushSync(() => {
  setCount(1); // flushed immediately
});
// DOM is updated here before continuing`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['flushSync', 'batching', 'advanced']
    },
    {
      id: '2-89',
      question: 'What is React.Children?',
      answer: 'React.Children provides utilities for working with the children prop. Useful for counting, mapping, or iterating children safely regardless of how many are passed.',
      code: `import { Children } from 'react';

function List({ children }) {
  const count = Children.count(children);
  return (
    <>
      <p>{count} items</p>
      {Children.map(children, (child, i) => (
        <div key={i}>{child}</div>
      ))}
    </>
  );
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['React.Children', 'composition', 'utilities']
    },
    {
      id: '2-90',
      question: 'What is cloneElement in React?',
      answer: 'React.cloneElement clones a React element and merges new props into it. Used in patterns where a parent injects props into its children.',
      code: `const enhanced = React.cloneElement(child, {
  className: 'highlighted',
  onClick: handleClick,
});`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['cloneElement', 'composition', 'patterns']
    },
    {
      id: '2-91',
      question: 'What makes a React component "pure"?',
      answer: 'A pure component always returns the same output for the same props and state, and has no side effects during render. React can safely skip re-rendering a pure component if inputs haven\'t changed.',
      code: `// Pure: same inputs → same output, no side effects
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Impure: depends on external mutable value
function Time() {
  return <p>{new Date().toISOString()}</p>; // different every render
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['pure-component', 'rendering', 'fundamentals']
    },
    {
      id: '2-92',
      question: 'How do you debounce a value in React?',
      answer: 'Use useEffect with a timeout to debounce: clear and reset the timer on each change. Only run the effect when the timer expires.',
      code: `function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['debounce', 'custom-hooks', 'performance']
    },
    {
      id: '2-93',
      question: 'What is the difference between lazy state initialization and direct initialization in useState?',
      answer: 'Passing a function to useState only runs it on the first render. Passing a value directly runs the computation on every render, even though only the initial value is used.',
      code: `// Runs every render (expensive if computation is costly)
const [state, setState] = useState(expensiveCalc());

// Lazy init — runs ONCE on mount
const [state, setState] = useState(() => expensiveCalc());`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['useState', 'lazy-init', 'performance']
    },
    {
      id: '2-94',
      question: 'What are the risks of prop spreading in React?',
      answer: 'Spreading props (…props) passes all props including unknown ones to DOM elements, causing HTML warnings and security issues. Destructure and whitelist only what you need.',
      code: `// Risky: unknown props leak to DOM
function Button({ ...props }) {
  return <button {...props} />;
}

// Better: whitelist known props
function Button({ onClick, children, disabled, ...rest }) {
  return <button onClick={onClick} disabled={disabled}>{children}</button>;
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['prop-spreading', 'patterns', 'best-practices']
    },
    {
      id: '2-95',
      question: 'How do you share stateful logic between components?',
      answer: 'Extract stateful logic into a custom hook. Custom hooks let multiple components share the same logic without sharing state — each component gets its own state instance.',
      code: `function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const handler = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['custom-hooks', 'composition', 'reusability']
    },
    {
      id: '2-96',
      question: 'When does memoization actually help in React?',
      answer: 'Memoization helps when: a child component is expensive to render, you\'re passing callbacks to memoized children, or computing a value is expensive. It adds overhead — don\'t use it everywhere.',
      code: `// Helps: expensive child + stable callback
const handleClick = useCallback(() => doWork(id), [id]);
const result = useMemo(() => heavyComputation(data), [data]);

// Overkill: simple component, cheap compute
const double = useMemo(() => count * 2, [count]); // just write count * 2`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['memoization', 'performance', 'useMemo', 'useCallback']
    },
    {
      id: '2-97',
      question: 'What does React.StrictMode double-invoke mean?',
      answer: 'In development, StrictMode intentionally calls render functions and effect setup/cleanup twice to help detect side effects. This does not happen in production.',
      code: `// In dev + StrictMode, this runs twice:
useEffect(() => {
  console.log('mount'); // logs twice in dev
  return () => console.log('cleanup'); // logs twice in dev
}, []);

// Production: runs once as expected`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['strictmode', 'development', 'side-effects']
    },
    {
      id: '2-98',
      question: 'What is the difference between the render phase and commit phase in React?',
      answer: 'The render phase (pure, may be paused) computes what the UI should look like. The commit phase (synchronous, has side effects) applies changes to the real DOM. useEffect runs after commit.',
      code: `// Render phase: React calls your component function
// → determines new virtual DOM (pure, no side effects)

// Commit phase: React updates the real DOM
// → then runs useLayoutEffect
// → then runs useEffect`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['render-phase', 'commit-phase', 'internals']
    },
    {
      id: '2-99',
      question: 'What is the difference between useEffect cleanup and component unmount?',
      answer: 'Cleanup runs before every re-run of the effect (not just unmount). React first cleans up the previous effect, then runs the new one. This prevents stale subscriptions.',
      code: `useEffect(() => {
  const sub = subscribe(userId); // runs on mount + userId change

  return () => {
    sub.unsubscribe(); // runs BEFORE next effect AND on unmount
  };
}, [userId]);`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['useEffect', 'cleanup', 'lifecycle']
    },
    {
      id: '2-100',
      question: 'What is concurrent rendering in React?',
      answer: 'Concurrent rendering allows React to pause, interrupt, and resume rendering work. It keeps the UI responsive by prioritizing urgent updates (typing) over non-urgent ones (data display).',
      code: `import { startTransition } from 'react';

// Mark search results update as non-urgent
startTransition(() => {
  setSearchResults(filter(query));
});

// Typing input stays responsive — React can interrupt
// the search results render to handle keystrokes first`,
      language: 'javascript',
      category: 'React',
      difficulty: 'medium',
      tags: ['concurrent', 'react-18', 'performance']
    }
  ]
};
