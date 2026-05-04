import { Deck } from '@/types/flashcard';

export const cssHtmlFundamentals: Deck = {
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
    },
    {
      id: '4-51',
      question: 'What is the CSS transition property?',
      answer: 'transition animates CSS property changes over a duration when state changes (e.g., on hover).',
      code: `.button {
background: blue;
transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
background: darkblue;
transform: scale(1.05);
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['transition', 'animation', 'css']
    },
    {
      id: '4-52',
      question: 'What is the CSS animation property?',
      answer: 'animation applies a @keyframes animation to an element, controlling duration, timing, delay, and iteration.',
      code: `@keyframes spin {
from { transform: rotate(0deg); }
to   { transform: rotate(360deg); }
}

.loader {
animation: spin 1s linear infinite;
}

/* Shorthand: name duration timing delay iteration direction */
.pulse {
animation: pulse 2s ease-in-out 0s infinite alternate;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['animation', 'keyframes', 'css']
    },
    {
      id: '4-53',
      question: 'What is the CSS transform property?',
      answer: 'transform applies 2D/3D transformations: translate, rotate, scale, skew, and matrix.',
      code: `.card {
transform: translateX(50px) rotate(10deg) scale(1.2);
}

/* Individual transforms (modern CSS) */
.icon {
translate: 0 -10px;
rotate: 45deg;
scale: 1.5;
}

/* 3D transform */
.flip {
transform: rotateY(180deg);
transform-style: preserve-3d;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['transform', 'translate', 'rotate']
    },
    {
      id: '4-54',
      question: 'What is the CSS overflow property?',
      answer: 'overflow controls content that exceeds element dimensions. Values: visible, hidden, scroll, auto.',
      code: `.box {
width: 200px;
height: 100px;
overflow: auto;     /* scrollbar only when needed */
}

.truncate {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis; /* adds "..." */
width: 150px;
}

/* Axis-specific */
.scroll-x { overflow-x: scroll; overflow-y: hidden; }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['overflow', 'scroll', 'layout']
    },
    {
      id: '4-55',
      question: 'What are CSS custom properties (variables)?',
      answer: 'CSS variables are declared with --name and used with var(). They cascade and can be changed at runtime.',
      code: `:root {
--color-primary: #3b82f6;
--spacing-md: 1rem;
--font-size-lg: 1.25rem;
}

.button {
background: var(--color-primary);
padding: var(--spacing-md);
font-size: var(--font-size-lg);
}

/* Override in component scope */
.dark-mode {
--color-primary: #60a5fa;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['css-variables', 'custom-properties', 'cascade']
    },
    {
      id: '4-56',
      question: 'What is the CSS calc() function?',
      answer: 'calc() performs math calculations mixing units at runtime. Supports +, -, *, /.',
      code: `.sidebar { width: 250px; }
.content  { width: calc(100% - 250px); }

.full-minus-header {
height: calc(100vh - 60px);
}

/* Mix units */
.padded {
padding: calc(1rem + 5px);
font-size: calc(1rem * 1.5);
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['calc', 'functions', 'units']
    },
    {
      id: '4-57',
      question: 'What is the CSS :nth-child() selector?',
      answer: ':nth-child(n) selects elements based on position. Supports keywords (odd, even) and formulas (An+B).',
      code: `/* Every other row */
tr:nth-child(even) { background: #f9f9f9; }

/* Every 3rd item starting from 1 */
li:nth-child(3n+1) { color: red; }

/* First 3 items */
li:nth-child(-n+3) { font-weight: bold; }

/* Last child */
li:last-child { border-bottom: none; }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['nth-child', 'selectors', 'pseudo-class']
    },
    {
      id: '4-58',
      question: 'What is the HTML data-* attribute?',
      answer: 'data-* attributes store custom data on HTML elements accessible via JavaScript with dataset.',
      code: `<!-- HTML -->
<article data-id="42" data-category="tech" data-published="true">
Tech Article
</article>

<!-- JavaScript access -->
const el = document.querySelector("article");
el.dataset.id;        // "42"
el.dataset.category;  // "tech"

// CSS attribute selector
[data-category="tech"] { border-left: 4px solid blue; }`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['data-attributes', 'html', 'javascript']
    },
    {
      id: '4-59',
      question: 'What is the CSS flex-wrap property?',
      answer: 'flex-wrap controls whether flex items wrap to new lines when they exceed the container width.',
      code: `.container {
display: flex;
flex-wrap: wrap;       /* items wrap to new row */
/* flex-wrap: nowrap; */ /* all on one row (default) */
/* flex-wrap: wrap-reverse; */ /* wrap in reverse */
gap: 1rem;
}

.item {
flex: 1 1 200px; /* grow, shrink, basis */
/* min 200px, stretches to fill, wraps when needed */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['flex-wrap', 'flexbox', 'layout']
    },
    {
      id: '4-60',
      question: 'What are CSS combinators?',
      answer: 'Combinators define relationships between selectors: descendant (space), child (>), adjacent sibling (+), general sibling (~).',
      code: `/* Descendant - any level deep */
nav a { color: blue; }

/* Direct child only */
ul > li { list-style: disc; }

/* Adjacent sibling - immediately after */
h2 + p { font-size: 1.1em; }

/* General sibling - any after */
h2 ~ p { color: gray; }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['combinators', 'selectors', 'css']
    },
    {
      id: '4-61',
      question: 'What are the CSS min(), max(), and clamp() functions?',
      answer: 'min() picks the smallest value, max() picks the largest. clamp(min, preferred, max) constrains a value between bounds.',
      code: `.responsive {
/* Never wider than 800px, but fluid otherwise */
width: min(100%, 800px);

/* At least 200px wide */
width: max(200px, 50%);

/* fluid font: min 1rem, preferred 4vw, max 2rem */
font-size: clamp(1rem, 4vw, 2rem);

/* Fluid padding */
padding: clamp(1rem, 5%, 3rem);
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['min', 'max', 'clamp']
    },
    {
      id: '4-62',
      question: 'What is the HTML picture element?',
      answer: '<picture> provides multiple image sources for different screen sizes or formats. The browser picks the best match.',
      code: `<picture>
<!-- Modern format for capable browsers -->
<source srcset="image.avif" type="image/avif">
<source srcset="image.webp" type="image/webp">

<!-- Responsive sizes -->
<source
  media="(min-width: 800px)"
  srcset="large.jpg">
<source
  media="(min-width: 400px)"
  srcset="medium.jpg">

<!-- Fallback -->
<img src="small.jpg" alt="Descriptive text">
</picture>`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['picture', 'responsive-images', 'html']
    },
    {
      id: '4-63',
      question: 'What is the HTML form and its key attributes?',
      answer: '<form> collects user input. Key attributes: action (URL), method (GET/POST), enctype (for file uploads), novalidate.',
      code: `<form
action="/submit"
method="POST"
enctype="multipart/form-data"
novalidate
>
<input type="text"     name="username" required minlength="3">
<input type="email"    name="email"    required>
<input type="password" name="password" required>
<input type="file"     name="avatar"   accept="image/*">
<select name="role">
  <option value="admin">Admin</option>
  <option value="user" selected>User</option>
</select>
<button type="submit">Submit</button>
</form>`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['form', 'html', 'inputs']
    },
    {
      id: '4-64',
      question: 'What is the difference between align-items and align-self?',
      answer: 'align-items sets the default alignment for ALL flex/grid children on the cross axis. align-self overrides it for a single child.',
      code: `.container {
display: flex;
align-items: center; /* all items vertically centered */
}

.special {
align-self: flex-end; /* this one overrides to bottom */
}

/* justify-items / justify-self work the same way */
/* but on the main axis (inline direction in grid) */`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['align-items', 'align-self', 'flexbox']
    },
    {
      id: '4-65',
      question: 'What is the CSS content property?',
      answer: 'content inserts generated content in ::before and ::after pseudo-elements.',
      code: `/* Add icon before links that open in new tab */
a[target="_blank"]::after {
content: " ↗";
font-size: 0.75em;
}

/* Decorative quote marks */
blockquote::before { content: open-quote; }
blockquote::after  { content: close-quote; }

/* Counter */
ol { counter-reset: step; }
ol li::before {
counter-increment: step;
content: "Step " counter(step) ": ";
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['content', 'pseudo-elements', 'generated-content']
    },
    {
      id: '4-66',
      question: 'What is the CSS white-space property?',
      answer: 'white-space controls how whitespace and line breaks are handled inside an element.',
      code: `.pre-like    { white-space: pre; }      /* preserve spaces & newlines */
.no-wrap     { white-space: nowrap; }    /* no line wrapping */
.pre-wrap    { white-space: pre-wrap; }  /* preserve + wrap */
.pre-line    { white-space: pre-line; }  /* preserve newlines, collapse spaces */

/* Common use: single-line truncation */
.truncate {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['white-space', 'text', 'css']
    },
    {
      id: '4-67',
      question: 'What is CSS Grid auto-placement?',
      answer: 'CSS Grid places items automatically into the next available cell. auto-fill and auto-fit create responsive columns without media queries.',
      code: `.gallery {
display: grid;
/* auto-fill: as many columns as fit */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 1rem;
}

/* auto-fit: same but collapses empty tracks */
.cards {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['grid', 'auto-fill', 'auto-fit']
    },
    {
      id: '4-68',
      question: 'What is the CSS object-position property?',
      answer: 'object-position works with object-fit to specify where the content is anchored within its container.',
      code: `img {
width: 300px;
height: 200px;
object-fit: cover;
object-position: top center; /* focus top of image */
/* object-position: 25% 75%; */
}

/* Useful for keeping faces visible in cropped portraits */
.avatar {
object-fit: cover;
object-position: center top;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['object-position', 'images', 'css']
    },
    {
      id: '4-69',
      question: 'What are ARIA attributes in HTML?',
      answer: 'ARIA (Accessible Rich Internet Applications) attributes communicate semantic meaning to assistive technologies like screen readers.',
      code: `<!-- Role -->
<div role="dialog" aria-modal="true" aria-labelledby="title">
<h2 id="title">Confirm Delete</h2>
</div>

<!-- State -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<nav id="menu" aria-hidden="true">...</nav>

<!-- Labels -->
<input type="search" aria-label="Search products">

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true">
Status updated
</div>`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['aria', 'accessibility', 'html']
    },
    {
      id: '4-70',
      question: 'What is the srcset attribute for responsive images?',
      answer: 'srcset provides multiple image sources at different resolutions. The browser picks the best fit based on device pixel ratio and viewport.',
      code: `<!-- Resolution switching -->
<img
src="small.jpg"
srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
sizes="(max-width: 600px) 480px,
       (max-width: 900px) 800px,
       1200px"
alt="Responsive image"
>

<!-- HiDPI / Retina -->
<img
src="logo.png"
srcset="logo.png 1x, logo@2x.png 2x, logo@3x.png 3x"
alt="Logo"
>`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['srcset', 'responsive-images', 'performance']
    },
    {
      id: '4-71',
      question: 'What is the CSS pointer-events property?',
      answer: 'pointer-events controls whether an element responds to mouse/touch events. none disables all interaction.',
      code: `/* Disable click on an element */
.overlay { pointer-events: none; }

/* Re-enable on children */
.overlay .clickable { pointer-events: auto; }

/* Use case: disable button during loading */
button[disabled] {
pointer-events: none;
opacity: 0.5;
cursor: not-allowed;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['pointer-events', 'interaction', 'css']
    },
    {
      id: '4-72',
      question: 'What is the CSS opacity property vs rgba()?',
      answer: 'opacity affects the entire element including children. rgba() sets transparency only on the color, children are unaffected.',
      code: `/* opacity: affects element AND all children */
.modal-backdrop {
opacity: 0.5;
background: black;
/* children will also be 50% transparent */
}

/* rgba: only the background is transparent */
.card {
background: rgba(0, 0, 0, 0.5); /* semi-transparent bg */
/* children remain fully opaque */
color: white; /* this stays at 100% opacity */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['opacity', 'rgba', 'transparency']
    },
    {
      id: '4-73',
      question: 'What is the CSS cursor property?',
      answer: 'cursor sets the mouse cursor appearance when hovering over an element.',
      code: `.link     { cursor: pointer; }    /* hand */
.loading  { cursor: wait; }       /* spinner */
.resize   { cursor: nwse-resize; }
.text     { cursor: text; }
.move     { cursor: move; }
.disabled { cursor: not-allowed; }
.zoom     { cursor: zoom-in; }

/* Custom cursor */
.custom {
cursor: url("cursor.png") 16 16, auto;
/* hotspot x y, fallback */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['cursor', 'ux', 'css']
    },
    {
      id: '4-74',
      question: 'What is the HTML meta viewport tag?',
      answer: 'The viewport meta tag controls how a page scales on mobile devices. Essential for responsive design.',
      code: `<head>
<!-- Standard responsive viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Other meta tags -->
<meta charset="UTF-8">
<meta name="description" content="Page description for SEO">
<meta name="theme-color" content="#3b82f6">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Page Title">
<meta property="og:image" content="https://example.com/og.png">
</head>`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['viewport', 'meta', 'responsive']
    },
    {
      id: '4-75',
      question: 'What is the CSS justify-content property in Flexbox?',
      answer: 'justify-content aligns flex items along the main axis (horizontal by default).',
      code: `.flex {
display: flex;
justify-content: flex-start;    /* default, left */
/* justify-content: flex-end;  *//* right */
/* justify-content: center;    *//* center */
/* justify-content: space-between; *//* equal space between */
/* justify-content: space-around;  *//* equal space around */
/* justify-content: space-evenly;  *//* equal space including edges */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'medium',
      tags: ['justify-content', 'flexbox', 'alignment']
    },
    {
      id: '4-76',
      question: 'What is CSS grid-template-areas?',
      answer: 'grid-template-areas names grid regions with ASCII art syntax, allowing semantic layout placement.',
      code: `.layout {
display: grid;
grid-template-columns: 200px 1fr;
grid-template-rows: auto 1fr auto;
grid-template-areas:
  "header  header"
  "sidebar main  "
  "footer  footer";
min-height: 100vh;
}

header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['grid-template-areas', 'grid', 'layout']
    },
    {
      id: '4-77',
      question: 'What is the CSS :is() selector?',
      answer: ':is() matches any element from a selector list, reducing repetition. The specificity equals the most specific argument.',
      code: `/* Without :is() - repetitive */
h1 a, h2 a, h3 a, h4 a { color: blue; }
.card h2, .card h3, .card h4 { margin-top: 0; }

/* With :is() */
:is(h1, h2, h3, h4) a { color: blue; }
.card :is(h2, h3, h4) { margin-top: 0; }

/* Nested */
:is(section, article) :is(h2, h3) {
font-size: 1.5rem;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: [':is', 'selectors', 'css4']
    },
    {
      id: '4-78',
      question: 'What is the CSS :where() selector?',
      answer: ':where() works like :is() but always has zero specificity, making it easy to override.',
      code: `/* :is() - specificity of most specific arg */
:is(#header, .nav) a { color: blue; } /* specificity: 1,0,0 (ID) */

/* :where() - always 0 specificity */
:where(#header, .nav) a { color: blue; } /* specificity: 0,0,1 */

/* Great for resets/base styles that are easy to override */
:where(ul, ol) { margin: 0; padding: 0; }

/* User override always wins */
.my-list { padding-left: 2rem; } /* easily overrides :where() */`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: [':where', 'specificity', 'css4']
    },
    {
      id: '4-79',
      question: 'What is the CSS :has() selector?',
      answer: ':has() selects a parent based on its children — the "parent selector" CSS never had until CSS4.',
      code: `/* Card with an image gets different padding */
.card:has(img) { padding: 0; }

/* Form field that has an invalid input */
.field:has(input:invalid) label {
color: red;
}

/* Navigation item that is active */
li:has(> a.active) { background: #eef; }

/* Figure with a caption */
figure:has(figcaption) { border: 1px solid #ccc; }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: [':has', 'parent-selector', 'css4']
    },
    {
      id: '4-80',
      question: 'What are container queries in CSS?',
      answer: '@container queries style elements based on their parent container size rather than the viewport size.',
      code: `/* Define a containment context */
.card-wrapper {
container-type: inline-size;
container-name: card;
}

/* Style based on container width */
@container card (min-width: 400px) {
.card { flex-direction: row; }
.card img { width: 40%; }
}

@container (max-width: 300px) {
.card-title { font-size: 0.9rem; }
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['container-queries', 'responsive', 'css']
    },
    {
      id: '4-81',
      question: 'What is CSS subgrid?',
      answer: 'subgrid allows a grid item to inherit and align to the parent grid tracks for its own children.',
      code: `.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
}

/* Card participates in parent grid */
.card {
grid-column: span 2;
display: grid;
grid-template-columns: subgrid; /* inherit parent's 2 columns */
grid-template-rows: subgrid;
}

.card header { grid-column: 1 / -1; } /* span all inherited columns */`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['subgrid', 'grid', 'alignment']
    },
    {
      id: '4-82',
      question: 'What are CSS logical properties?',
      answer: 'Logical properties (margin-inline, padding-block, etc.) adapt to writing direction (LTR/RTL) instead of physical directions.',
      code: `/* Physical (direction-dependent) */
.box { margin-left: 1rem; padding-top: 2rem; }

/* Logical (direction-agnostic) */
.box {
margin-inline-start: 1rem; /* left in LTR, right in RTL */
padding-block-start: 2rem; /* top in horizontal mode */
}

/* Shorthands */
.card {
margin-inline: 1rem;    /* left + right */
padding-block: 2rem;    /* top + bottom */
border-inline-end: 2px solid; /* right border in LTR */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['logical-properties', 'rtl', 'internationalization']
    },
    {
      id: '4-83',
      question: 'What is CSS scroll-snap?',
      answer: 'scroll-snap creates controlled scrolling that snaps to defined points, useful for carousels and full-page scrolling.',
      code: `/* Container */
.slider {
display: flex;
overflow-x: scroll;
scroll-snap-type: x mandatory; /* or proximity */
scroll-behavior: smooth;
}

/* Snap targets */
.slide {
min-width: 100%;
scroll-snap-align: start; /* or center, end */
scroll-snap-stop: always; /* prevent multi-slide skipping */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['scroll-snap', 'carousel', 'ux']
    },
    {
      id: '4-84',
      question: 'What is the CSS backdrop-filter property?',
      answer: 'backdrop-filter applies filter effects (blur, brightness, etc.) to the area behind an element (frosted glass effect).',
      code: `.glass-card {
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(12px) saturate(180%);
-webkit-backdrop-filter: blur(12px) saturate(180%); /* Safari */
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 12px;
}

/* Navigation with frosted glass */
nav {
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.7);
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['backdrop-filter', 'blur', 'glass-morphism']
    },
    {
      id: '4-85',
      question: 'What is CSS mix-blend-mode?',
      answer: 'mix-blend-mode defines how an element blends with the content behind it, similar to Photoshop blend modes.',
      code: `.overlay {
mix-blend-mode: multiply;  /* darkens */
/* overlay, screen, difference, color-dodge... */
}

/* Classic text-over-image trick */
.hero-text {
color: white;
mix-blend-mode: difference; /* inverts colors behind text */
}

/* Colorize a grayscale image */
.color-overlay {
background: #3b82f6;
mix-blend-mode: color;
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['mix-blend-mode', 'effects', 'css']
    },
    {
      id: '4-86',
      question: 'What is the CSS stacking context?',
      answer: 'A stacking context is an isolated z-index scope. Created by position + z-index, opacity < 1, transform, filter, and others.',
      code: `/* Creates a stacking context */
.context {
position: relative;
z-index: 1;      /* + any z-index value */
/* OR */
opacity: 0.99;   /* opacity < 1 */
/* OR */
transform: translateZ(0);
/* OR */
isolation: isolate; /* explicit stacking context */
}

/* Child z-index only competes within parent context */
.context .child-a { z-index: 999; } /* only above siblings */
.context .child-b { z-index: 1; }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['stacking-context', 'z-index', 'css']
    },
    {
      id: '4-87',
      question: 'What is the BEM CSS methodology?',
      answer: 'BEM (Block-Element-Modifier) is a naming convention: Block__Element--Modifier to create modular, reusable CSS.',
      code: `/* Block - standalone component */
.card { }

/* Element - part of the block */
.card__title { }
.card__image { }
.card__footer { }

/* Modifier - variation or state */
.card--featured { }
.card--dark { }
.card__button--large { }

<!-- HTML usage -->
<div class="card card--featured">
<img class="card__image" src="...">
<h2 class="card__title">Title</h2>
<button class="card__button card__button--large">CTA</button>
</div>`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['bem', 'methodology', 'naming-convention']
    },
    {
      id: '4-88',
      question: 'What are CSS cascade layers (@layer)?',
      answer: '@layer defines explicit specificity layers. Later-declared layers win regardless of specificity. Helps manage large codebases.',
      code: `/* Declare layer order (lower = lower priority) */
@layer base, components, utilities;

@layer base {
h1 { font-size: 2rem; color: black; }
}

@layer components {
/* This wins over base even with lower specificity */
h1 { color: blue; }
}

@layer utilities {
/* Highest priority layer */
.text-red { color: red !important; }
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['cascade-layers', 'layer', 'specificity']
    },
    {
      id: '4-89',
      question: 'What is the CSS clamp() function for fluid typography?',
      answer: 'clamp(min, preferred, max) creates fluid scaling between two bounds. Combined with vw, it eliminates most font-size media queries.',
      code: `/* Fluid type scale */
:root {
--step-0: clamp(1rem,    0.9rem + 0.5vw,  1.2rem);
--step-1: clamp(1.2rem,  1rem   + 1vw,    1.5rem);
--step-2: clamp(1.5rem,  1.2rem + 1.5vw,  2rem);
--step-3: clamp(2rem,    1.5rem + 2.5vw,  3rem);
}

body     { font-size: var(--step-0); }
h3       { font-size: var(--step-1); }
h2       { font-size: var(--step-2); }
h1       { font-size: var(--step-3); }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['clamp', 'fluid-typography', 'responsive']
    },
    {
      id: '4-90',
      question: 'What is native CSS nesting?',
      answer: 'CSS nesting (now supported natively) lets you write nested rules like Sass, reducing repetition.',
      code: `.card {
padding: 1rem;
background: white;

/* Nested element */
& .card__title {
  font-size: 1.5rem;
}

/* Nested pseudo-class */
&:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Nested media query */
@media (min-width: 768px) {
  padding: 2rem;
}
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['nesting', 'css', 'modern-css']
    },
    {
      id: '4-91',
      question: 'What is the HTML template element?',
      answer: '<template> holds inert HTML that is not rendered. Used with JavaScript to clone and insert content dynamically.',
      code: `<template id="card-tmpl">
<article class="card">
  <img class="card__image">
  <h2 class="card__title"></h2>
  <p class="card__body"></p>
</article>
</template>

<script>
const tmpl = document.getElementById("card-tmpl");
const clone = tmpl.content.cloneNode(true);

clone.querySelector(".card__title").textContent = "Hello";
document.body.appendChild(clone);
</script>`,
      language: 'html',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['template', 'html', 'web-components']
    },
    {
      id: '4-92',
      question: 'What is intrinsic sizing in CSS Grid (min-content, max-content, fit-content)?',
      answer: 'Intrinsic sizing keywords size tracks based on content: min-content (smallest without overflow), max-content (ideal, no wrapping), fit-content(X) (capped at X).',
      code: `.grid {
display: grid;
grid-template-columns:
  min-content      /* shrinks to smallest word */
  max-content      /* expands to longest content */
  fit-content(200px) /* max-content but capped at 200px */
  1fr;             /* remaining space */
}

/* Auto sizing */
.auto-grid {
grid-template-columns: repeat(3, minmax(min-content, 1fr));
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['min-content', 'max-content', 'grid-sizing']
    },
    {
      id: '4-93',
      question: 'What is the CSS :focus-visible pseudo-class?',
      answer: ':focus-visible shows focus styles only when navigating via keyboard, not on mouse click. Better than removing :focus entirely.',
      code: `/* Remove default focus ring (with caution) */
:focus { outline: none; }

/* Show focus ring only for keyboard navigation */
:focus-visible {
outline: 3px solid #3b82f6;
outline-offset: 2px;
border-radius: 4px;
}

/* Button example */
.button:focus-visible {
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['focus-visible', 'accessibility', 'keyboard-navigation']
    },
    {
      id: '4-94',
      question: 'What is the CSS writing-mode property?',
      answer: 'writing-mode sets the text flow direction: horizontal-tb (default), vertical-rl, or vertical-lr.',
      code: `/* Vertical text */
.vertical-label {
writing-mode: vertical-rl;
text-orientation: mixed; /* or upright */
transform: rotate(180deg); /* flip direction */
}

/* Sidebar tab */
.tab {
writing-mode: vertical-lr;
transform: rotate(180deg);
letter-spacing: 2px;
}

/* Affects flex/grid axis too */
.vertical-flex {
writing-mode: vertical-rl;
display: flex; /* now stacks horizontally! */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['writing-mode', 'text-direction', 'css']
    },
    {
      id: '4-95',
      question: 'What is the CSS counter() function?',
      answer: 'CSS counters auto-increment values for numbering. Use counter-reset, counter-increment, and content: counter().',
      code: `/* Numbered sections without <ol> */
body { counter-reset: section; }

h2::before {
counter-increment: section;
content: counter(section) ". ";
}

/* Nested counters */
ol {
counter-reset: item;
list-style: none;
}
ol li::before {
counter-increment: item;
content: counters(item, ".") " ";
}
/* Outputs: 1, 1.1, 1.2, 2, 2.1... */`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['counter', 'generated-content', 'css']
    },
    {
      id: '4-96',
      question: 'What is the CSS isolation property?',
      answer: 'isolation: isolate creates a new stacking context without needing z-index, preventing blend-mode and z-index bleed from children.',
      code: `.component {
isolation: isolate; /* creates stacking context */
/* children's z-index and mix-blend-mode
   only apply within this element */
}

/* Use case: prevent blend mode from affecting page */
.card {
isolation: isolate;
}
.card .color-overlay {
mix-blend-mode: multiply;
/* only blends within .card, not with page bg */
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['isolation', 'stacking-context', 'blend-mode']
    },
    {
      id: '4-97',
      question: 'What is the prefers-color-scheme media query?',
      answer: 'prefers-color-scheme detects if the user prefers a light or dark color scheme, enabling system-aware dark mode.',
      code: `/* Light mode defaults */
:root {
--bg: #ffffff;
--text: #111111;
--border: #e5e7eb;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
:root {
  --bg: #0f172a;
  --text: #f1f5f9;
  --border: #334155;
}
}

/* Use variables throughout */
body { background: var(--bg); color: var(--text); }`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['dark-mode', 'media-query', 'prefers-color-scheme']
    },
    {
      id: '4-98',
      question: 'What is the CSS will-change property?',
      answer: 'will-change hints to the browser which properties will animate, allowing it to create compositor layers ahead of time for smoother performance.',
      code: `/* Tell browser which properties will change */
.animated {
will-change: transform, opacity;
}

/* Apply just before animation starts */
.card:hover {
will-change: transform;
}

/* IMPORTANT: Remove after animation to free memory */
.card.animation-done {
will-change: auto;
}

/* Use sparingly - creating layers has memory cost */
/* Good: scroll-position, transform, opacity
 Avoid: will-change: all */`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['will-change', 'performance', 'animation']
    },
    {
      id: '4-99',
      question: 'What is the CSS @scope rule?',
      answer: '@scope limits where CSS rules apply, providing scoped styles without heavy selectors or Shadow DOM.',
      code: `/* Scope styles to .card and its descendants */
@scope (.card) {
h2 { font-size: 1.25rem; }
p  { color: gray; }
a  { color: blue; }
}

/* Scope with lower boundary - exclude .card inside .card */
@scope (.card) to (.card .card) {
img { border-radius: 8px; }
}

/* Component-level scoping */
@scope (.sidebar) {
ul { list-style: none; padding: 0; }
a  { display: block; padding: 0.5rem 1rem; }
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['scope', 'css', 'modern-css']
    },
    {
      id: '4-100',
      question: 'What is the prefers-reduced-motion media query?',
      answer: 'prefers-reduced-motion detects if the user prefers less animation, important for accessibility (vestibular disorders).',
      code: `/* Default: full animations */
.button {
transition: transform 0.3s ease;
}
.button:hover {
transform: scale(1.1) translateY(-4px);
}

/* Reduce for users who prefer it */
@media (prefers-reduced-motion: reduce) {
*,
*::before,
*::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
}`,
      language: 'css',
      category: 'CSS/HTML',
      difficulty: 'hard',
      tags: ['prefers-reduced-motion', 'accessibility', 'animation']
    }
  ]
};
