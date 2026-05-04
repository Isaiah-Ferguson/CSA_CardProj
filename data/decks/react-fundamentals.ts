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
    }
  ]
};
