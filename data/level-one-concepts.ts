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

export const levelOne: Level = {
  id: 'level-1',
  levelNumber: 1,
  title: 'Level One',
  description: 'Foundation web development concepts - HTML, CSS, JavaScript',
  weeks: [
    {
      id: 'level-1-week-1',
      weekNumber: 1,
      title: 'HTML, CSS & Flexbox',
      description: 'Building web pages with HTML structure, CSS styling, and Flexbox layouts',
      concepts: [
        {
          id: 'html-basics',
          title: 'HTML Basics',
          description: 'Understanding HTML structure, elements, and semantic markup',
          keyPoints: [
            'HTML is the structure and content of web pages',
            'Elements are defined with tags: opening <tag> and closing </tag>',
            'Attributes provide additional information about elements',
            'Semantic HTML improves accessibility and SEO',
            'Proper nesting and indentation make code readable'
          ],
          codeExamples: [
            {
              title: 'Basic HTML Structure',
              code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>`,
              language: 'html',
              explanation: 'Every HTML document starts with <!DOCTYPE html> and contains <html>, <head>, and <body> sections. The head contains metadata, while the body contains visible content.'
            },
            {
              title: 'Common HTML Elements',
              code: `<!-- Headings (h1 is largest, h6 is smallest) -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>

<!-- Paragraphs and text formatting -->
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<!-- Links -->
<a href="https://example.com">Visit Example</a>
<a href="about.html">About Page</a>

<!-- Images -->
<img src="photo.jpg" alt="Description of photo">

<!-- Lists -->
<ul>
    <li>Unordered item 1</li>
    <li>Unordered item 2</li>
</ul>

<ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
</ol>

<!-- Line break and horizontal rule -->
<br>
<hr>`,
              language: 'html',
              explanation: 'HTML provides elements for headings, paragraphs, links, images, and lists. Use semantic tags that describe the content\'s purpose.'
            },
            {
              title: 'Semantic HTML Elements',
              code: `<!-- Semantic layout elements -->
<header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
    </article>
    
    <section>
        <h2>Section Title</h2>
        <p>Section content...</p>
    </section>
    
    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2024 My Website</p>
</footer>`,
              language: 'html',
              explanation: 'Semantic elements like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> describe the purpose of content, improving accessibility and SEO.'
            },
            {
              title: 'Forms and Input Elements',
              code: `<form action="/submit" method="POST">
    <!-- Text input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <!-- Email input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <!-- Checkbox -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>
    
    <!-- Radio buttons -->
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    
    <!-- Select dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
    </select>
    
    <!-- Submit button -->
    <button type="submit">Submit</button>
</form>`,
              language: 'html',
              explanation: 'Forms collect user input. Use appropriate input types (text, email, password, checkbox, radio) and always include labels for accessibility. The required attribute makes fields mandatory.'
            },
            {
              title: 'Div and Span Containers',
              code: `<!-- Div - block-level container -->
<div class="container">
    <div class="card">
        <h3>Card Title</h3>
        <p>Card content</p>
    </div>
</div>

<!-- Span - inline container -->
<p>
    This is a paragraph with <span class="highlight">highlighted text</span> 
    and <span class="bold">bold text</span>.
</p>

<!-- Div with ID and classes -->
<div id="main-content" class="container centered">
    <p>Content goes here</p>
</div>`,
              language: 'html',
              explanation: '<div> is a block-level container for grouping elements. <span> is an inline container for styling parts of text. Use classes for styling and IDs for unique identification.'
            }
          ],
          comparison: {
            title: 'Block vs Inline Elements',
            options: [
              {
                name: 'Block Elements',
                description: 'Take up full width, start on new line',
                whenToUse: 'Structural layout, containers, major sections',
                example: '<div>, <p>, <h1>, <section>, <article>'
              },
              {
                name: 'Inline Elements',
                description: 'Only take up necessary width, stay in line',
                whenToUse: 'Text formatting, small containers within text',
                example: '<span>, <a>, <strong>, <em>, <img>'
              }
            ]
          }
        },
        {
          id: 'css-basics',
          title: 'CSS Basics',
          description: 'Styling web pages with colors, fonts, spacing, and layouts',
          keyPoints: [
            'CSS controls the visual presentation of HTML',
            'Selectors target HTML elements to apply styles',
            'Properties define what to style (color, font, size, etc.)',
            'The box model: content, padding, border, margin',
            'CSS can be inline, internal, or external (external is best)'
          ],
          codeExamples: [
            {
              title: 'CSS Selectors',
              code: `/* Element selector - targets all <p> elements */
p {
    color: blue;
    font-size: 16px;
}

/* Class selector - targets elements with class="highlight" */
.highlight {
    background-color: yellow;
    padding: 5px;
}

/* ID selector - targets element with id="header" */
#header {
    background-color: navy;
    color: white;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}

/* Descendant selector - targets <p> inside <div> */
div p {
    margin: 10px;
}

/* Child selector - direct children only */
div > p {
    font-weight: bold;
}

/* Pseudo-class - hover state */
a:hover {
    color: red;
    text-decoration: underline;
}`,
              language: 'css',
              explanation: 'CSS selectors target elements by tag name, class (.classname), or ID (#idname). Use classes for reusable styles and IDs for unique elements.'
            },
            {
              title: 'Colors and Backgrounds',
              code: `/* Named colors */
.primary {
    color: blue;
    background-color: lightblue;
}

/* Hex colors */
.secondary {
    color: #FF5733;
    background-color: #F0F0F0;
}

/* RGB colors */
.tertiary {
    color: rgb(255, 87, 51);
    background-color: rgb(240, 240, 240);
}

/* RGBA with transparency */
.transparent {
    background-color: rgba(0, 0, 0, 0.5); /* 50% transparent black */
}

/* Background images */
.hero {
    background-image: url('hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Gradients */
.gradient {
    background: linear-gradient(to right, #FF5733, #FFC300);
}`,
              language: 'css',
              explanation: 'Colors can be named, hex (#RRGGBB), RGB, or RGBA (with alpha for transparency). Backgrounds can be solid colors, images, or gradients.'
            },
            {
              title: 'Text Styling',
              code: `/* Font properties */
.text {
    font-family: 'Arial', 'Helvetica', sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.6;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Text alignment */
.centered {
    text-align: center;
}

.justified {
    text-align: justify;
}

/* Text decoration */
.underlined {
    text-decoration: underline;
}

.no-decoration {
    text-decoration: none; /* Remove underline from links */
}

/* Text shadow */
.shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Web fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.custom-font {
    font-family: 'Roboto', sans-serif;
}`,
              language: 'css',
              explanation: 'Control font family, size, weight, style, and spacing. Use web fonts from Google Fonts or other sources for custom typography.'
            },
            {
              title: 'The Box Model',
              code: `/* Box model: content, padding, border, margin */
.box {
    /* Content size */
    width: 300px;
    height: 200px;
    
    /* Padding - space inside border */
    padding: 20px;
    /* Or individual sides */
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    /* Shorthand: top right bottom left */
    padding: 10px 15px 10px 15px;
    
    /* Border */
    border: 2px solid black;
    border-radius: 10px; /* Rounded corners */
    
    /* Margin - space outside border */
    margin: 20px;
    /* Center horizontally */
    margin: 0 auto;
}

/* Box-sizing */
.better-box {
    box-sizing: border-box; /* Include padding and border in width */
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    /* Total width is still 300px */
}`,
              language: 'css',
              explanation: 'The box model consists of content, padding (inside), border, and margin (outside). Use box-sizing: border-box to include padding and border in the element\'s width.'
            },
            {
              title: 'Display and Positioning',
              code: `/* Display property */
.block {
    display: block; /* Takes full width */
}

.inline {
    display: inline; /* Stays in line, no width/height */
}

.inline-block {
    display: inline-block; /* Inline but can have width/height */
    width: 100px;
    height: 50px;
}

.hidden {
    display: none; /* Completely hidden */
}

/* Position property */
.relative {
    position: relative;
    top: 10px;
    left: 20px;
}

.absolute {
    position: absolute;
    top: 0;
    right: 0;
}

.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.sticky {
    position: sticky;
    top: 0;
}`,
              language: 'css',
              explanation: 'Display controls how elements flow. Position controls placement: relative (offset from normal), absolute (relative to parent), fixed (relative to viewport), sticky (switches between relative and fixed).'
            }
          ],
          comparison: {
            title: 'CSS Units',
            options: [
              {
                name: 'Pixels (px)',
                description: 'Fixed size, doesn\'t scale',
                whenToUse: 'Precise control, borders, small elements',
                example: 'font-size: 16px; border: 1px solid;'
              },
              {
                name: 'Percentages (%)',
                description: 'Relative to parent element',
                whenToUse: 'Responsive widths, flexible layouts',
                example: 'width: 50%; padding: 10%;'
              },
              {
                name: 'Em/Rem',
                description: 'em: relative to parent font, rem: relative to root',
                whenToUse: 'Scalable typography, spacing',
                example: 'font-size: 1.5rem; margin: 2em;'
              },
              {
                name: 'Viewport (vw/vh)',
                description: 'Relative to viewport width/height',
                whenToUse: 'Full-screen sections, responsive typography',
                example: 'width: 100vw; height: 100vh;'
              }
            ]
          }
        },
        {
          id: 'flexbox',
          title: 'Flexbox',
          description: 'Creating flexible, responsive layouts with CSS Flexbox',
          keyPoints: [
            'Flexbox is a one-dimensional layout system (row or column)',
            'Container (display: flex) controls layout of child items',
            'Main axis (default horizontal) and cross axis (perpendicular)',
            'Flexbox handles alignment, spacing, and ordering automatically',
            'Perfect for navigation bars, card layouts, and centering'
          ],
          codeExamples: [
            {
              title: 'Flex Container Basics',
              code: `/* Make a container flexbox */
.container {
    display: flex;
    
    /* Direction of main axis */
    flex-direction: row; /* Default: left to right */
    /* flex-direction: column; */ /* Top to bottom */
    /* flex-direction: row-reverse; */ /* Right to left */
    /* flex-direction: column-reverse; */ /* Bottom to top */
    
    /* Wrap items to new line if needed */
    flex-wrap: nowrap; /* Default: single line */
    /* flex-wrap: wrap; */ /* Multi-line */
    
    /* Shorthand for direction and wrap */
    flex-flow: row wrap;
}

/* HTML example */
/*
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
*/`,
              language: 'css',
              explanation: 'Apply display: flex to a container to make its children flex items. flex-direction sets the main axis direction, and flex-wrap controls whether items wrap to new lines.'
            },
            {
              title: 'Justify Content (Main Axis)',
              code: `/* Align items along main axis (horizontal by default) */

.start {
    display: flex;
    justify-content: flex-start; /* Default: items at start */
}

.end {
    display: flex;
    justify-content: flex-end; /* Items at end */
}

.center {
    display: flex;
    justify-content: center; /* Items centered */
}

.space-between {
    display: flex;
    justify-content: space-between; /* Space between items */
}

.space-around {
    display: flex;
    justify-content: space-around; /* Space around items */
}

.space-evenly {
    display: flex;
    justify-content: space-evenly; /* Equal space between and around */
}`,
              language: 'css',
              explanation: 'justify-content aligns items along the main axis. Use center for centering, space-between for even distribution, or space-evenly for equal spacing.'
            },
            {
              title: 'Align Items (Cross Axis)',
              code: `/* Align items along cross axis (vertical by default) */

.stretch {
    display: flex;
    align-items: stretch; /* Default: stretch to fill container */
    height: 200px;
}

.start-align {
    display: flex;
    align-items: flex-start; /* Align to top */
    height: 200px;
}

.end-align {
    display: flex;
    align-items: flex-end; /* Align to bottom */
    height: 200px;
}

.center-align {
    display: flex;
    align-items: center; /* Vertically centered */
    height: 200px;
}

.baseline {
    display: flex;
    align-items: baseline; /* Align text baselines */
}

/* Perfect centering (both axes) */
.perfect-center {
    display: flex;
    justify-content: center; /* Horizontal */
    align-items: center; /* Vertical */
    height: 400px;
}`,
              language: 'css',
              explanation: 'align-items aligns items along the cross axis. Combine justify-content: center and align-items: center for perfect centering in both directions.'
            },
            {
              title: 'Flex Item Properties',
              code: `/* Properties for individual flex items */

.item {
    /* Grow to fill available space */
    flex-grow: 1; /* Default: 0 (don't grow) */
    
    /* Shrink if needed */
    flex-shrink: 1; /* Default: 1 (can shrink) */
    
    /* Base size before growing/shrinking */
    flex-basis: 200px; /* Or auto, %, etc. */
    
    /* Shorthand: grow shrink basis */
    flex: 1 1 200px;
    /* Common: flex: 1; (grow, shrink, auto basis) */
}

/* Example: Three column layout */
.sidebar {
    flex: 0 0 250px; /* Don't grow/shrink, fixed 250px */
}

.main {
    flex: 1; /* Grow to fill remaining space */
}

.aside {
    flex: 0 0 200px; /* Fixed 200px */
}

/* Order items */
.first {
    order: -1; /* Appears first */
}

.last {
    order: 1; /* Appears last */
}`,
              language: 'css',
              explanation: 'flex-grow controls how items grow, flex-shrink how they shrink, and flex-basis sets the initial size. Use flex shorthand for concise code. order changes visual order without changing HTML.'
            },
            {
              title: 'Practical Flexbox Layouts',
              code: `/* Navigation bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #333;
}

.nav-links {
    display: flex;
    gap: 2rem; /* Space between items */
    list-style: none;
}

/* Card grid */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px; /* Grow, shrink, min 300px */
    padding: 1rem;
    border: 1px solid #ddd;
}

/* Holy grail layout */
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header, .footer {
    flex: 0 0 auto;
}

.content {
    display: flex;
    flex: 1;
}

.sidebar {
    flex: 0 0 250px;
}

.main {
    flex: 1;
}

/* Centered card */
.modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal {
    background: white;
    padding: 2rem;
    border-radius: 8px;
}`,
              language: 'css',
              explanation: 'Common flexbox patterns: navigation bars with space-between, responsive card grids with flex-wrap, holy grail layouts with nested flex containers, and centered modals with perfect centering.'
            }
          ],
          comparison: {
            title: 'Flexbox Alignment',
            options: [
              {
                name: 'justify-content',
                description: 'Aligns items along main axis (horizontal by default)',
                whenToUse: 'Horizontal spacing, centering, distribution',
                example: 'justify-content: space-between;'
              },
              {
                name: 'align-items',
                description: 'Aligns items along cross axis (vertical by default)',
                whenToUse: 'Vertical alignment, centering',
                example: 'align-items: center;'
              },
              {
                name: 'align-self',
                description: 'Overrides align-items for individual item',
                whenToUse: 'Different alignment for specific items',
                example: 'align-self: flex-end;'
              },
              {
                name: 'gap',
                description: 'Space between flex items',
                whenToUse: 'Consistent spacing without margins',
                example: 'gap: 1rem;'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-1-week-2',
      weekNumber: 2,
      title: 'CSS Grid, Bootstrap & Responsive Design',
      description: 'Advanced layouts with CSS Grid, Bootstrap framework, and responsive media queries',
      concepts: [
        {
          id: 'css-grid',
          title: 'CSS Grid',
          description: 'Creating two-dimensional layouts with CSS Grid',
          keyPoints: [
            'Grid is a two-dimensional layout system (rows and columns)',
            'Container (display: grid) controls layout of child items',
            'Define rows and columns with grid-template-rows/columns',
            'Grid items can span multiple rows/columns',
            'Perfect for page layouts, image galleries, and complex UIs'
          ],
          codeExamples: [
            {
              title: 'Grid Container Basics',
              code: `/* Create a grid container */
.container {
    display: grid;
    
    /* Define columns */
    grid-template-columns: 200px 200px 200px; /* 3 fixed columns */
    /* grid-template-columns: 1fr 1fr 1fr; */ /* 3 equal columns */
    /* grid-template-columns: 1fr 2fr 1fr; */ /* Middle column 2x wider */
    /* grid-template-columns: repeat(3, 1fr); */ /* Shorthand for 3 equal */
    
    /* Define rows */
    grid-template-rows: 100px 200px; /* 2 rows with fixed heights */
    /* grid-template-rows: auto auto; */ /* Auto height based on content */
    
    /* Gap between items */
    gap: 20px; /* Both row and column gap */
    /* row-gap: 10px; */ /* Only row gap */
    /* column-gap: 20px; */ /* Only column gap */
}

/* HTML example */
/*
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
*/`,
              language: 'css',
              explanation: 'Apply display: grid to create a grid container. Use grid-template-columns and grid-template-rows to define the grid structure. The fr unit represents a fraction of available space.'
            },
            {
              title: 'Grid Item Placement',
              code: `/* Spanning multiple columns/rows */
.item-1 {
    grid-column: 1 / 3; /* Span from column 1 to 3 (2 columns) */
    /* grid-column: span 2; */ /* Alternative: span 2 columns */
}

.item-2 {
    grid-row: 1 / 3; /* Span from row 1 to 3 (2 rows) */
    /* grid-row: span 2; */ /* Alternative: span 2 rows */
}

.item-3 {
    /* Span both columns and rows */
    grid-column: 2 / 4;
    grid-row: 2 / 4;
}

/* Named grid areas */
.container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,
              language: 'css',
              explanation: 'Control where items are placed using grid-column and grid-row. Use grid-template-areas for semantic, named layouts that are easy to visualize and maintain.'
            },
            {
              title: 'Responsive Grid with Auto-Fit',
              code: `/* Auto-responsive grid */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* This creates a responsive grid that:
   - Fits as many columns as possible
   - Each column is at least 250px
   - Columns grow to fill available space
   - Automatically wraps to new rows
*/

/* Auto-fill vs Auto-fit */
.auto-fill {
    /* Creates empty columns if space available */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.auto-fit {
    /* Collapses empty columns, items stretch */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`,
              language: 'css',
              explanation: 'Use repeat() with auto-fit and minmax() to create responsive grids that automatically adjust columns based on available space. No media queries needed!'
            },
            {
              title: 'Grid Alignment',
              code: `/* Align all items in the grid */
.container {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    height: 400px;
    
    /* Align items horizontally (justify) */
    justify-items: start; /* start, end, center, stretch */
    
    /* Align items vertically (align) */
    align-items: center; /* start, end, center, stretch */
    
    /* Align the entire grid within container */
    justify-content: center; /* start, end, center, space-between, space-around */
    align-content: center;
}

/* Align individual items */
.item-special {
    justify-self: end; /* Override justify-items for this item */
    align-self: start; /* Override align-items for this item */
}`,
              language: 'css',
              explanation: 'Use justify-items/align-items to align all grid items. Use justify-content/align-content to align the entire grid. Use justify-self/align-self for individual items.'
            },
            {
              title: 'Practical Grid Layouts',
              code: `/* Holy grail layout */
.page {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
}

/* Card grid */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Dashboard layout */
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 1rem;
}

.widget-large {
    grid-column: span 2;
    grid-row: span 2;
}

.widget-wide {
    grid-column: span 2;
}

/* Image gallery with different sizes */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    gap: 10px;
}

.gallery-item:nth-child(3n) {
    grid-column: span 2;
    grid-row: span 2;
}`,
              language: 'css',
              explanation: 'Common grid patterns: holy grail layout with named areas, responsive card grids, dashboard with spanning widgets, and masonry-style image galleries.'
            }
          ],
          comparison: {
            title: 'Grid vs Flexbox',
            options: [
              {
                name: 'CSS Grid',
                description: 'Two-dimensional layout (rows AND columns)',
                whenToUse: 'Page layouts, complex UIs, when you need precise control over both dimensions',
                example: 'grid-template-columns: 1fr 2fr 1fr;'
              },
              {
                name: 'Flexbox',
                description: 'One-dimensional layout (row OR column)',
                whenToUse: 'Navigation bars, card layouts, centering, when items flow in one direction',
                example: 'display: flex; justify-content: space-between;'
              },
              {
                name: 'Grid + Flexbox',
                description: 'Use both together for best results',
                whenToUse: 'Grid for overall page layout, Flexbox for components within grid items',
                example: 'Grid for page structure, Flex for navbar items'
              }
            ]
          }
        },
        {
          id: 'bootstrap',
          title: 'Bootstrap',
          description: 'Using the Bootstrap CSS framework for rapid development',
          keyPoints: [
            'Bootstrap is a popular CSS framework with pre-built components',
            'Includes responsive grid system, components, and utilities',
            'Use CDN link or npm install to add to your project',
            'Mobile-first approach with breakpoints for different screen sizes',
            'Customize with Sass variables or override CSS classes'
          ],
          codeExamples: [
            {
              title: 'Adding Bootstrap to Your Project',
              code: `<!-- Add Bootstrap via CDN in your HTML <head> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Your content here -->
    
    <!-- Bootstrap JS (optional, for interactive components) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

<!-- Or install via npm -->
<!-- npm install bootstrap -->`,
              language: 'html',
              explanation: 'Add Bootstrap to your project using a CDN link in the HTML head, or install via npm for build tools. The viewport meta tag is essential for responsive design.'
            },
            {
              title: 'Bootstrap Grid System',
              code: `<!-- Bootstrap uses a 12-column grid system -->
<div class="container">
    <!-- Full width row -->
    <div class="row">
        <div class="col-12">Full width column</div>
    </div>
    
    <!-- Two equal columns -->
    <div class="row">
        <div class="col-6">Half width</div>
        <div class="col-6">Half width</div>
    </div>
    
    <!-- Three equal columns -->
    <div class="row">
        <div class="col-4">1/3 width</div>
        <div class="col-4">1/3 width</div>
        <div class="col-4">1/3 width</div>
    </div>
    
    <!-- Responsive columns -->
    <div class="row">
        <!-- Stack on mobile, 2 columns on tablet, 3 on desktop -->
        <div class="col-12 col-md-6 col-lg-4">Column 1</div>
        <div class="col-12 col-md-6 col-lg-4">Column 2</div>
        <div class="col-12 col-md-6 col-lg-4">Column 3</div>
    </div>
    
    <!-- Auto-width columns -->
    <div class="row">
        <div class="col">Auto width</div>
        <div class="col">Auto width</div>
        <div class="col">Auto width</div>
    </div>
</div>`,
              language: 'html',
              explanation: 'Bootstrap grid uses containers, rows, and columns. Columns add up to 12. Use responsive classes (col-sm, col-md, col-lg, col-xl) for different screen sizes.'
            },
            {
              title: 'Bootstrap Components',
              code: `<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">My Site</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- Card -->
<div class="card" style="width: 18rem;">
    <img src="image.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>

<!-- Alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    This is a warning alert!
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>`,
              language: 'html',
              explanation: 'Bootstrap provides pre-built components like navbars, cards, buttons, and alerts. Use utility classes for colors (primary, secondary, success, danger, etc.).'
            },
            {
              title: 'Bootstrap Utility Classes',
              code: `<!-- Spacing utilities (margin and padding) -->
<div class="m-3">Margin on all sides (1rem)</div>
<div class="mt-5">Margin top (3rem)</div>
<div class="p-4">Padding on all sides (1.5rem)</div>
<div class="px-3 py-2">Padding x-axis and y-axis</div>

<!-- Text utilities -->
<p class="text-center">Centered text</p>
<p class="text-end">Right-aligned text</p>
<p class="text-primary">Primary color text</p>
<p class="fw-bold">Bold text</p>
<p class="fst-italic">Italic text</p>
<p class="text-uppercase">Uppercase text</p>

<!-- Display utilities -->
<div class="d-none">Hidden on all screens</div>
<div class="d-md-block">Visible on medium screens and up</div>
<div class="d-flex justify-content-between">Flexbox container</div>
<div class="d-grid gap-3">Grid container</div>

<!-- Background and border -->
<div class="bg-primary text-white p-3">Primary background</div>
<div class="border border-primary rounded">Bordered and rounded</div>

<!-- Sizing -->
<div class="w-50">50% width</div>
<div class="h-100">100% height</div>`,
              language: 'html',
              explanation: 'Bootstrap utility classes provide quick styling without writing custom CSS. Use for spacing (m/p), text alignment, display properties, colors, and sizing.'
            },
            {
              title: 'Bootstrap Responsive Breakpoints',
              code: `<!-- Bootstrap breakpoints:
     xs: <576px (default, no prefix)
     sm: ≥576px
     md: ≥768px
     lg: ≥992px
     xl: ≥1200px
     xxl: ≥1400px
-->

<!-- Responsive visibility -->
<div class="d-none d-md-block">Hidden on mobile, visible on tablet+</div>
<div class="d-block d-lg-none">Visible on mobile/tablet, hidden on desktop</div>

<!-- Responsive columns -->
<div class="row">
    <!-- Mobile: full width, Tablet: half, Desktop: third -->
    <div class="col-12 col-md-6 col-lg-4">Content</div>
</div>

<!-- Responsive text alignment -->
<p class="text-start text-md-center text-lg-end">
    Left on mobile, center on tablet, right on desktop
</p>

<!-- Responsive spacing -->
<div class="mt-2 mt-md-4 mt-lg-5">
    Increasing top margin on larger screens
</div>

<!-- Responsive containers -->
<div class="container">Fixed width, responsive</div>
<div class="container-fluid">Full width always</div>
<div class="container-md">Fluid on mobile, fixed on tablet+</div>`,
              language: 'html',
              explanation: 'Use Bootstrap breakpoint prefixes (sm, md, lg, xl, xxl) to apply styles at different screen sizes. Mobile-first approach means unprefixed classes apply to all sizes.'
            }
          ],
          comparison: {
            title: 'Bootstrap vs Custom CSS',
            options: [
              {
                name: 'Bootstrap',
                description: 'Pre-built framework with components and utilities',
                whenToUse: 'Rapid prototyping, consistent design, when you need common components quickly',
                example: '<button class="btn btn-primary">Click</button>'
              },
              {
                name: 'Custom CSS',
                description: 'Write your own styles from scratch',
                whenToUse: 'Unique designs, full control, smaller file sizes, learning CSS fundamentals',
                example: 'button { background: blue; padding: 10px; }'
              },
              {
                name: 'Tailwind CSS',
                description: 'Utility-first CSS framework',
                whenToUse: 'Highly customizable, modern approach, when you want utilities without components',
                example: '<button class="bg-blue-500 px-4 py-2">Click</button>'
              }
            ]
          }
        },
        {
          id: 'media-queries',
          title: 'Media Queries',
          description: 'Creating responsive designs that adapt to different screen sizes',
          keyPoints: [
            'Media queries apply CSS based on device characteristics',
            'Most common use: adapting layouts for different screen widths',
            'Mobile-first approach: start with mobile styles, add larger screens',
            'Use breakpoints at common device sizes (768px, 1024px, etc.)',
            'Can target print styles, screen orientation, and more'
          ],
          codeExamples: [
            {
              title: 'Basic Media Query Syntax',
              code: `/* Default styles (mobile-first) */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet and up (≥768px) */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 20px;
    }
}

/* Desktop and up (≥1024px) */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
        padding: 30px;
    }
}

/* Large desktop (≥1200px) */
@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}

/* Max-width (desktop-first approach) */
@media (max-width: 767px) {
    /* Styles for mobile only */
    .sidebar {
        display: none;
    }
}`,
              language: 'css',
              explanation: 'Media queries use @media to apply styles conditionally. min-width targets screens at least that wide (mobile-first). max-width targets screens up to that wide (desktop-first).'
            },
            {
              title: 'Common Breakpoints',
              code: `/* Mobile-first breakpoints (recommended) */

/* Extra small devices (phones, <576px) */
/* Default styles go here, no media query needed */

/* Small devices (landscape phones, ≥576px) */
@media (min-width: 576px) {
    .container { max-width: 540px; }
}

/* Medium devices (tablets, ≥768px) */
@media (min-width: 768px) {
    .container { max-width: 720px; }
    .nav { display: flex; }
}

/* Large devices (desktops, ≥992px) */
@media (min-width: 992px) {
    .container { max-width: 960px; }
    .sidebar { display: block; }
}

/* Extra large devices (large desktops, ≥1200px) */
@media (min-width: 1200px) {
    .container { max-width: 1140px; }
}

/* Extra extra large devices (≥1400px) */
@media (min-width: 1400px) {
    .container { max-width: 1320px; }
}`,
              language: 'css',
              explanation: 'Standard breakpoints match common device sizes. Start with mobile styles, then use min-width media queries to enhance for larger screens (mobile-first approach).'
            },
            {
              title: 'Responsive Navigation',
              code: `/* Mobile: hamburger menu */
.nav {
    display: flex;
    flex-direction: column;
}

.nav-toggle {
    display: block;
    background: #333;
    color: white;
    padding: 10px;
}

.nav-menu {
    display: none; /* Hidden by default on mobile */
}

.nav-menu.active {
    display: flex;
    flex-direction: column;
}

/* Tablet and up: horizontal navigation */
@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .nav-toggle {
        display: none; /* Hide hamburger on larger screens */
    }
    
    .nav-menu {
        display: flex; /* Always visible */
        flex-direction: row;
        gap: 2rem;
    }
}`,
              language: 'css',
              explanation: 'Common pattern: vertical stacked menu on mobile with hamburger toggle, horizontal menu on larger screens. Use display and flex-direction to transform the layout.'
            },
            {
              title: 'Responsive Grid Layout',
              code: `/* Mobile: single column */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

/* Alternative: responsive without media queries */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}`,
              language: 'css',
              explanation: 'Adjust grid columns at different breakpoints: 1 column on mobile, 2 on tablet, 3+ on desktop. Or use auto-fit with minmax for automatic responsiveness.'
            },
            {
              title: 'Advanced Media Queries',
              code: `/* Orientation */
@media (orientation: landscape) {
    .hero {
        height: 50vh;
    }
}

@media (orientation: portrait) {
    .hero {
        height: 100vh;
    }
}

/* Print styles */
@media print {
    .no-print {
        display: none;
    }
    
    body {
        font-size: 12pt;
        color: black;
    }
}

/* High resolution displays (Retina) */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
    .logo {
        background-image: url('logo@2x.png');
    }
}

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #ffffff;
    }
}

/* Reduced motion preference (accessibility) */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

/* Combining conditions */
@media (min-width: 768px) and (max-width: 1023px) {
    /* Styles only for tablet range */
}

@media (min-width: 1024px) and (orientation: landscape) {
    /* Desktop in landscape only */
}`,
              language: 'css',
              explanation: 'Media queries can target orientation, print, high-DPI screens, user preferences (dark mode, reduced motion), and combine multiple conditions with "and".'
            }
          ],
          comparison: {
            title: 'Responsive Approaches',
            options: [
              {
                name: 'Mobile-First',
                description: 'Start with mobile styles, add complexity for larger screens',
                whenToUse: 'Modern best practice, most users on mobile, progressive enhancement',
                example: '@media (min-width: 768px) { /* tablet+ */ }'
              },
              {
                name: 'Desktop-First',
                description: 'Start with desktop styles, simplify for smaller screens',
                whenToUse: 'Legacy approach, desktop-focused applications',
                example: '@media (max-width: 767px) { /* mobile */ }'
              },
              {
                name: 'Container Queries',
                description: 'Style based on parent container size (new)',
                whenToUse: 'Component-based responsive design, reusable components',
                example: '@container (min-width: 400px) { /* styles */ }'
              },
              {
                name: 'Intrinsic Design',
                description: 'Use CSS features that adapt automatically (Grid auto-fit, clamp)',
                whenToUse: 'Reduce media queries, flexible layouts',
                example: 'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-1-week-3',
      weekNumber: 3,
      title: 'Introduction to JavaScript',
      description: 'JavaScript fundamentals, DOM manipulation, console debugging, and event handling',
      concepts: [
        {
          id: 'js-basics',
          title: 'JavaScript Basics',
          description: 'Core JavaScript syntax, variables, data types, and basic operations',
          keyPoints: [
            'JavaScript adds interactivity and dynamic behavior to web pages',
            'Variables store data using let, const, or var',
            'Data types: strings, numbers, booleans, arrays, objects',
            'Functions encapsulate reusable code blocks',
            'JavaScript runs in the browser and can manipulate HTML/CSS'
          ],
          codeExamples: [
            {
              title: 'Variables and Data Types',
              code: `// Variables - use let for values that change, const for constants
let userName = "Alice";
let age = 25;
let isStudent = true;

const PI = 3.14159;
const MAX_USERS = 100;

// Data types
let message = "Hello, World!";        // String
let count = 42;                       // Number
let price = 19.99;                    // Number (decimals)
let isActive = false;                 // Boolean
let nothing = null;                   // Null
let notDefined;                       // Undefined

// Arrays - ordered lists
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];

// Objects - key-value pairs
let person = {
    name: "Bob",
    age: 30,
    city: "New York",
    isEmployed: true
};

// Accessing values
console.log(colors[0]);        // "red"
console.log(person.name);      // "Bob"
console.log(person["age"]);    // 30`,
              language: 'javascript',
              explanation: 'Use let for variables that change, const for constants. JavaScript has primitive types (string, number, boolean, null, undefined) and reference types (arrays, objects).'
            },
            {
              title: 'Operators and Expressions',
              code: `// Arithmetic operators
let sum = 10 + 5;           // 15
let difference = 10 - 5;    // 5
let product = 10 * 5;       // 50
let quotient = 10 / 5;      // 2
let remainder = 10 % 3;     // 1
let power = 2 ** 3;         // 8

// Assignment operators
let x = 10;
x += 5;    // x = x + 5  (15)
x -= 3;    // x = x - 3  (12)
x *= 2;    // x = x * 2  (24)
x /= 4;    // x = x / 4  (6)

// Comparison operators
10 == "10"    // true (loose equality, converts types)
10 === "10"   // false (strict equality, checks type)
10 != "10"    // false
10 !== "10"   // true
10 > 5        // true
10 < 5        // false
10 >= 10      // true

// Logical operators
let a = true;
let b = false;
a && b        // false (AND - both must be true)
a || b        // true (OR - at least one must be true)
!a            // false (NOT - inverts boolean)

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

// Template literals (modern way)
let greeting = \`Hello, \${firstName}!\`;  // "Hello, John!"
let message = \`You are \${age} years old.\`;`,
              language: 'javascript',
              explanation: 'JavaScript supports arithmetic, comparison, and logical operators. Use === for strict equality (recommended). Template literals (\`\`) allow string interpolation with ${}.'
            },
            {
              title: 'Conditionals',
              code: `// If-else statements
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// If-else if-else
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary operator (shorthand)
let status = age >= 18 ? "adult" : "minor";
let message = score >= 60 ? "Pass" : "Fail";

// Switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}`,
              language: 'javascript',
              explanation: 'Use if-else for conditional logic. Ternary operator (? :) is shorthand for simple conditions. Switch statements handle multiple specific values.'
            },
            {
              title: 'Loops',
              code: `// For loop - when you know how many iterations
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// While loop - when condition-based
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Do-while loop - runs at least once
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// For...of loop - iterate over arrays
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in loop - iterate over object properties
let person = { name: "Alice", age: 25, city: "NYC" };
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Array methods (modern approach)
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Arrow function syntax
fruits.forEach(fruit => console.log(fruit));`,
              language: 'javascript',
              explanation: 'Use for loops for counting, while for conditions, for...of for arrays, and for...in for objects. Array methods like forEach are modern alternatives.'
            },
            {
              title: 'Functions',
              code: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("Alice");  // "Hello, Alice!"

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);  // 8

// Function with default parameters
function greetUser(name = "Guest") {
    return \`Welcome, \${name}!\`;
}

greetUser();          // "Welcome, Guest!"
greetUser("Bob");     // "Welcome, Bob!"

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow function (modern, concise)
const divide = (a, b) => a / b;

const square = x => x * x;  // Single parameter, no parentheses

const logMessage = () => console.log("Hello!");  // No parameters

// Arrow function with block body
const calculateArea = (width, height) => {
    let area = width * height;
    return area;
};

// Functions can return objects
const createPerson = (name, age) => ({
    name: name,
    age: age,
    greet: function() {
        return \`Hi, I'm \${this.name}\`;
    }
});

let person = createPerson("Charlie", 30);`,
              language: 'javascript',
              explanation: 'Functions are reusable code blocks. Use function declarations, expressions, or arrow functions (=>). Arrow functions are concise and commonly used in modern JavaScript.'
            }
          ],
          comparison: {
            title: 'Variable Declarations',
            options: [
              {
                name: 'let',
                description: 'Block-scoped, can be reassigned',
                whenToUse: 'For variables that will change value',
                example: 'let count = 0; count++;'
              },
              {
                name: 'const',
                description: 'Block-scoped, cannot be reassigned',
                whenToUse: 'For constants and values that should not change (recommended default)',
                example: 'const PI = 3.14; const user = { name: "Alice" };'
              },
              {
                name: 'var',
                description: 'Function-scoped, can be reassigned (legacy)',
                whenToUse: 'Avoid using var in modern JavaScript',
                example: 'var x = 10; (use let or const instead)'
              }
            ]
          }
        },
        {
          id: 'dom-selectors',
          title: 'DOM Selectors & Manipulation',
          description: 'Selecting and manipulating HTML elements with JavaScript',
          keyPoints: [
            'DOM (Document Object Model) represents HTML as a tree of objects',
            'Use getElementById, querySelector, querySelectorAll to select elements',
            'Manipulate elements by changing properties, attributes, and styles',
            'Create, add, and remove elements dynamically',
            'Modern approach: querySelector is more flexible than older methods'
          ],
          codeExamples: [
            {
              title: 'Selecting Elements',
              code: `// Select by ID (returns single element or null)
const header = document.getElementById('header');
const mainTitle = document.getElementById('main-title');

// Select by class (returns HTMLCollection)
const buttons = document.getElementsByClassName('btn');
const cards = document.getElementsByClassName('card');

// Select by tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');
const images = document.getElementsByTagName('img');

// querySelector - modern, flexible (returns first match)
const firstButton = document.querySelector('.btn');
const mainNav = document.querySelector('#main-nav');
const firstParagraph = document.querySelector('p');
const specificButton = document.querySelector('button.primary');

// querySelectorAll - returns NodeList of all matches
const allButtons = document.querySelectorAll('.btn');
const allLinks = document.querySelectorAll('a');
const navItems = document.querySelectorAll('.nav-item');

// Complex selectors
const activeLinks = document.querySelectorAll('a.active');
const childDivs = document.querySelectorAll('.container > div');
const evenItems = document.querySelectorAll('li:nth-child(even)');

// Convert NodeList to Array for array methods
const buttonsArray = Array.from(allButtons);
buttonsArray.forEach(btn => console.log(btn));`,
              language: 'javascript',
              explanation: 'getElementById selects by ID, querySelector uses CSS selectors (more flexible). querySelectorAll returns all matches. Modern practice favors querySelector/querySelectorAll.'
            },
            {
              title: 'Manipulating Text and HTML',
              code: `// Get element
const heading = document.getElementById('title');
const container = document.querySelector('.container');

// Change text content (recommended - safe from XSS)
heading.textContent = "New Title";
heading.textContent = "Hello, World!";

// Change inner HTML (can include HTML tags)
container.innerHTML = "<p>This is a paragraph</p>";
container.innerHTML = "<h2>Title</h2><p>Description</p>";

// Get text content
const currentText = heading.textContent;
console.log(currentText);

// Append text
heading.textContent += " - Updated";

// Example: Update multiple elements
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p, index) => {
    p.textContent = \`Paragraph \${index + 1}\`;
});

// Get/Set input values
const nameInput = document.getElementById('name');
nameInput.value = "John Doe";           // Set value
const currentValue = nameInput.value;   // Get value

// Example: Display user input
const displayName = document.getElementById('display');
displayName.textContent = nameInput.value;`,
              language: 'javascript',
              explanation: 'Use textContent to change text safely. innerHTML allows HTML tags but can be a security risk. Access input values with .value property.'
            },
            {
              title: 'Manipulating Attributes and Styles',
              code: `const image = document.getElementById('logo');
const link = document.querySelector('a');
const box = document.querySelector('.box');

// Get/Set attributes
image.src = "new-logo.png";
image.alt = "Company Logo";
link.href = "https://example.com";

// Get attribute value
const currentSrc = image.src;
const linkUrl = link.getAttribute('href');

// Set custom attributes
box.setAttribute('data-id', '123');
box.setAttribute('data-category', 'featured');

// Remove attributes
link.removeAttribute('target');

// Check if attribute exists
if (image.hasAttribute('alt')) {
    console.log('Image has alt text');
}

// Manipulate CSS styles directly
box.style.backgroundColor = 'blue';
box.style.color = 'white';
box.style.padding = '20px';
box.style.fontSize = '18px';
box.style.borderRadius = '10px';

// Multiple styles
box.style.cssText = 'background: blue; color: white; padding: 20px;';

// Get computed style
const computedStyle = window.getComputedStyle(box);
const bgColor = computedStyle.backgroundColor;`,
              language: 'javascript',
              explanation: 'Access attributes directly (img.src) or use getAttribute/setAttribute. Modify styles with element.style.property. Use camelCase for CSS properties (backgroundColor, not background-color).'
            },
            {
              title: 'Working with Classes',
              code: `const button = document.getElementById('myButton');
const card = document.querySelector('.card');

// Add a class
button.classList.add('active');
button.classList.add('btn-primary');

// Remove a class
button.classList.remove('inactive');

// Toggle a class (add if not present, remove if present)
button.classList.toggle('active');
card.classList.toggle('expanded');

// Check if class exists
if (button.classList.contains('active')) {
    console.log('Button is active');
}

// Replace a class
button.classList.replace('btn-primary', 'btn-secondary');

// Add multiple classes
button.classList.add('large', 'rounded', 'shadow');

// Example: Toggle dark mode
const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Example: Active navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active from all
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active to clicked
        link.classList.add('active');
    });
});`,
              language: 'javascript',
              explanation: 'classList provides methods to add, remove, toggle, and check classes. This is the modern, recommended way to manipulate classes (better than className).'
            },
            {
              title: 'Creating and Removing Elements',
              code: `// Create new elements
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
const newButton = document.createElement('button');

// Set content and attributes
newParagraph.textContent = "This is a new paragraph";
newButton.textContent = "Click Me";
newButton.classList.add('btn', 'btn-primary');
newDiv.id = 'new-container';

// Append to parent
const container = document.getElementById('main');
container.appendChild(newParagraph);
container.appendChild(newButton);

// Insert before another element
const firstChild = container.firstChild;
container.insertBefore(newDiv, firstChild);

// Modern methods
container.append(newParagraph);           // Append (can add multiple)
container.prepend(newDiv);                // Add to beginning
container.before(newButton);              // Insert before container
container.after(newButton);               // Insert after container

// Remove elements
const oldElement = document.getElementById('old');
oldElement.remove();                      // Modern way

// Or remove from parent
const parent = oldElement.parentElement;
parent.removeChild(oldElement);           // Old way

// Example: Create a card
const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = \`
    <h3>Card Title</h3>
    <p>Card description goes here</p>
    <button class="btn">Learn More</button>
\`;
document.body.appendChild(card);

// Example: Remove all children
const list = document.getElementById('myList');
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
// Or modern way
list.innerHTML = '';`,
              language: 'javascript',
              explanation: 'Use createElement to create elements, appendChild/append to add them, and remove() to delete them. Modern methods (append, prepend, before, after) are more flexible.'
            }
          ],
          comparison: {
            title: 'Selection Methods',
            options: [
              {
                name: 'getElementById',
                description: 'Selects single element by ID',
                whenToUse: 'When you have a unique ID',
                example: 'document.getElementById("header")'
              },
              {
                name: 'querySelector',
                description: 'Selects first match using CSS selector',
                whenToUse: 'Flexible selection, modern approach (recommended)',
                example: 'document.querySelector(".btn.active")'
              },
              {
                name: 'querySelectorAll',
                description: 'Selects all matches using CSS selector',
                whenToUse: 'When you need multiple elements',
                example: 'document.querySelectorAll(".card")'
              },
              {
                name: 'getElementsByClassName',
                description: 'Selects by class name (live HTMLCollection)',
                whenToUse: 'Legacy code, querySelector is preferred',
                example: 'document.getElementsByClassName("btn")'
              }
            ]
          }
        },
        {
          id: 'console-debugging',
          title: 'Console & Debugging',
          description: 'Using the browser console for debugging and testing JavaScript',
          keyPoints: [
            'Console is a built-in tool for debugging and logging',
            'console.log() displays messages and variable values',
            'Different console methods for different message types',
            'Use console to test code snippets and inspect objects',
            'Browser DevTools provide powerful debugging features'
          ],
          codeExamples: [
            {
              title: 'Basic Console Methods',
              code: `// Basic logging
console.log("Hello, World!");
console.log("User logged in");

// Log variables
let userName = "Alice";
let age = 25;
console.log(userName);
console.log(age);

// Log multiple values
console.log("Name:", userName, "Age:", age);

// Template literals for formatted output
console.log(\`User: \${userName}, Age: \${age}\`);

// Log objects and arrays
let person = { name: "Bob", age: 30, city: "NYC" };
let colors = ["red", "green", "blue"];
console.log(person);
console.log(colors);

// Different console methods
console.info("This is informational");      // Info message
console.warn("This is a warning");          // Warning (yellow)
console.error("This is an error");          // Error (red)

// Clear console
console.clear();`,
              language: 'javascript',
              explanation: 'console.log() is the most common method for debugging. Use console.warn() for warnings and console.error() for errors. The console displays in browser DevTools (F12).'
            },
            {
              title: 'Advanced Console Techniques',
              code: `// Console table for arrays of objects
let users = [
    { name: "Alice", age: 25, role: "Admin" },
    { name: "Bob", age: 30, role: "User" },
    { name: "Charlie", age: 28, role: "User" }
];
console.table(users);

// Group related logs
console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");
console.log("Role: Admin");
console.groupEnd();

// Collapsible group
console.groupCollapsed("Debug Info");
console.log("Detail 1");
console.log("Detail 2");
console.groupEnd();

// Timing code execution
console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd("Loop Time");

// Count occurrences
console.count("Button clicked");  // Button clicked: 1
console.count("Button clicked");  // Button clicked: 2
console.count("Button clicked");  // Button clicked: 3
console.countReset("Button clicked");

// Assert (log only if condition is false)
let age = 15;
console.assert(age >= 18, "User must be 18 or older");

// Styled console output
console.log("%cThis is styled!", "color: blue; font-size: 20px; font-weight: bold");`,
              language: 'javascript',
              explanation: 'console.table() displays arrays as tables. Use console.time/timeEnd for performance testing. console.group organizes related logs. console.assert logs only when condition fails.'
            },
            {
              title: 'Debugging Techniques',
              code: `// Inspect objects in detail
let user = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "NYC"
    },
    hobbies: ["reading", "coding"]
};

console.log(user);              // Expandable object view
console.dir(user);              // Directory-style view
console.log(JSON.stringify(user, null, 2));  // Formatted JSON

// Debug function calls
function calculateTotal(price, quantity) {
    console.log("calculateTotal called");
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    
    let total = price * quantity;
    console.log("Total:", total);
    
    return total;
}

calculateTotal(10, 5);

// Trace function call stack
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.trace("Call stack trace");
}

first();

// Conditional logging
const DEBUG = true;

if (DEBUG) {
    console.log("Debug mode is on");
}

// Debug helper function
function debug(message, data) {
    if (DEBUG) {
        console.log(\`[DEBUG] \${message}\`, data);
    }
}

debug("User data loaded", user);`,
              language: 'javascript',
              explanation: 'Use console.log to track variable values and function execution. console.trace shows the call stack. JSON.stringify formats objects for easy reading. Create debug flags for conditional logging.'
            },
            {
              title: 'Browser DevTools',
              code: `// Breakpoints - Add in DevTools Sources tab
// Code will pause at breakpoint for inspection

function processOrder(order) {
    // Set breakpoint here in DevTools
    let total = 0;
    
    for (let item of order.items) {
        total += item.price * item.quantity;
    }
    
    // Inspect 'total' value when paused
    return total;
}

// Debugger statement - programmatic breakpoint
function criticalFunction() {
    let data = fetchData();
    
    debugger;  // Execution pauses here if DevTools is open
    
    processData(data);
}

// Watch expressions in DevTools
// Add variables to watch panel to monitor changes

// Network tab - inspect HTTP requests
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Elements tab - inspect DOM
const element = document.querySelector('.card');
console.log(element);  // Click to view in Elements tab

// Performance profiling
console.profile("MyProfile");
// Code to profile
for (let i = 0; i < 100000; i++) {
    document.createElement('div');
}
console.profileEnd("MyProfile");`,
              language: 'javascript',
              explanation: 'Browser DevTools (F12) provide breakpoints, watch expressions, network monitoring, and performance profiling. Use debugger statement to pause execution programmatically.'
            },
            {
              title: 'Common Debugging Scenarios',
              code: `// Scenario 1: Variable is undefined
let user;
console.log(user);  // undefined
console.log(typeof user);  // "undefined"

// Fix: Initialize variable
user = { name: "Alice" };

// Scenario 2: Element not found
const button = document.getElementById('myButton');
console.log(button);  // null if not found

if (button) {
    button.addEventListener('click', handleClick);
} else {
    console.error("Button not found!");
}

// Scenario 3: Type mismatch
let num = "10";
let result = num + 5;
console.log(result);  // "105" (string concatenation)
console.log(typeof num);  // "string"

// Fix: Convert to number
result = Number(num) + 5;  // 15
// Or
result = parseInt(num) + 5;  // 15

// Scenario 4: Array/Object inspection
let items = [1, 2, 3, 4, 5];
console.log("Items:", items);
console.log("Length:", items.length);
console.log("First item:", items[0]);

// Scenario 5: Event not firing
const btn = document.querySelector('.btn');
console.log("Button found:", btn !== null);

btn.addEventListener('click', () => {
    console.log("Button clicked!");  // Verify event fires
});

// Scenario 6: Async debugging
async function fetchData() {
    console.log("Fetching data...");
    try {
        const response = await fetch('https://api.example.com/data');
        console.log("Response:", response);
        const data = await response.json();
        console.log("Data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}`,
              language: 'javascript',
              explanation: 'Common issues: undefined variables, null elements, type mismatches, events not firing. Use console.log to verify values, check types with typeof, and use try-catch for error handling.'
            }
          ],
          comparison: {
            title: 'Console Methods',
            options: [
              {
                name: 'console.log',
                description: 'General purpose logging',
                whenToUse: 'Default choice for debugging and displaying information',
                example: 'console.log("User:", user);'
              },
              {
                name: 'console.error',
                description: 'Error messages (red in console)',
                whenToUse: 'For errors and critical issues',
                example: 'console.error("Failed to load data");'
              },
              {
                name: 'console.warn',
                description: 'Warning messages (yellow in console)',
                whenToUse: 'For warnings and deprecation notices',
                example: 'console.warn("API deprecated");'
              },
              {
                name: 'console.table',
                description: 'Display arrays/objects as tables',
                whenToUse: 'For structured data visualization',
                example: 'console.table(users);'
              }
            ]
          }
        },
        {
          id: 'event-listeners',
          title: 'Event Listeners',
          description: 'Handling user interactions with event listeners',
          keyPoints: [
            'Events are actions that happen in the browser (clicks, typing, etc.)',
            'addEventListener attaches event handlers to elements',
            'Event object contains information about the event',
            'Remove event listeners with removeEventListener',
            'Event delegation handles events on multiple elements efficiently'
          ],
          codeExamples: [
            {
              title: 'Basic Event Listeners',
              code: `// Click event
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function syntax (modern)
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Named function (reusable)
function handleClick() {
    console.log('Button clicked!');
}
button.addEventListener('click', handleClick);

// Multiple events on same element
button.addEventListener('click', handleClick);
button.addEventListener('mouseenter', () => {
    console.log('Mouse entered button');
});
button.addEventListener('mouseleave', () => {
    console.log('Mouse left button');
});

// Common events
const input = document.getElementById('nameInput');
const form = document.getElementById('myForm');
const link = document.querySelector('a');

input.addEventListener('input', () => {
    console.log('Input changed:', input.value);
});

input.addEventListener('focus', () => {
    console.log('Input focused');
});

input.addEventListener('blur', () => {
    console.log('Input lost focus');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form submission
    console.log('Form submitted');
});

link.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent navigation
    console.log('Link clicked');
});`,
              language: 'javascript',
              explanation: 'addEventListener attaches event handlers. Use arrow functions or named functions. preventDefault() stops default browser behavior (form submit, link navigation).'
            },
            {
              title: 'Event Object',
              code: `const button = document.getElementById('myButton');
const input = document.getElementById('search');

// Event object contains information about the event
button.addEventListener('click', (event) => {
    console.log('Event type:', event.type);           // "click"
    console.log('Target element:', event.target);     // The button
    console.log('Mouse X:', event.clientX);           // Mouse X position
    console.log('Mouse Y:', event.clientY);           // Mouse Y position
    console.log('Timestamp:', event.timeStamp);       // When event occurred
});

// Keyboard events
input.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);               // The key name
    console.log('Key code:', e.code);                 // Physical key code
    console.log('Ctrl key:', e.ctrlKey);              // true if Ctrl pressed
    console.log('Shift key:', e.shiftKey);            // true if Shift pressed
    console.log('Alt key:', e.altKey);                // true if Alt pressed
});

// Specific key detection
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
    }
    
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
    }
    
    // Ctrl + S
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('Save shortcut pressed');
    }
});

// Mouse events
const box = document.querySelector('.box');

box.addEventListener('mouseenter', (e) => {
    console.log('Mouse entered');
});

box.addEventListener('mousemove', (e) => {
    console.log(\`Mouse position: \${e.clientX}, \${e.clientY}\`);
});

box.addEventListener('mousedown', (e) => {
    console.log('Mouse button pressed');
    console.log('Which button:', e.button);  // 0=left, 1=middle, 2=right
});`,
              language: 'javascript',
              explanation: 'Event object (e or event) contains details about the event: type, target, mouse position, keyboard keys. Access with parameter in event handler function.'
            },
            {
              title: 'Modifying Elements on Events',
              code: `// Change text on click
const heading = document.getElementById('title');
const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', () => {
    heading.textContent = 'Title Changed!';
});

// Toggle class on click
const box = document.querySelector('.box');
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {
    box.classList.toggle('blue');
});

// Update content from input
const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', () => {
    greeting.textContent = \`Hello, \${nameInput.value}!\`;
});

// Counter example
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});

// Show/hide element
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    // Or use classes
    modal.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.classList.remove('visible');
});`,
              language: 'javascript',
              explanation: 'Event listeners commonly modify elements: change text, toggle classes, update from inputs, show/hide elements. Update DOM based on user interactions.'
            },
            {
              title: 'Event Delegation',
              code: `// Problem: Adding listeners to many elements
// Inefficient approach
const buttons = document.querySelectorAll('.item-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked');
    });
});

// Solution: Event delegation (attach to parent)
const list = document.getElementById('itemList');

list.addEventListener('click', (e) => {
    // Check if clicked element is a button
    if (e.target.classList.contains('item-button')) {
        console.log('Button clicked:', e.target.textContent);
    }
});

// Works for dynamically added elements too!
const addItemBtn = document.getElementById('addItem');
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.innerHTML = '<button class="item-button">New Item</button>';
    list.appendChild(newItem);
    // Event delegation automatically handles new buttons!
});

// Example: Delete buttons
const container = document.getElementById('container');

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const item = e.target.closest('.item');
        item.remove();
    }
});

// Example: Navigation with delegation
const nav = document.querySelector('.nav');

nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        
        // Remove active from all
        nav.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active to clicked
        e.target.classList.add('active');
        
        console.log('Navigate to:', e.target.href);
    }
});`,
              language: 'javascript',
              explanation: 'Event delegation attaches one listener to a parent instead of many listeners to children. More efficient and works with dynamically added elements. Use e.target to identify clicked element.'
            },
            {
              title: 'Removing Event Listeners',
              code: `// Named function required for removal
function handleClick() {
    console.log('Button clicked');
}

const button = document.getElementById('myButton');

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);

// Won't work with anonymous functions
button.addEventListener('click', () => {
    console.log('Click');
});
// Can't remove because it's a different function reference

// Example: One-time event
function handleOneTimeClick() {
    console.log('This will only run once');
    button.removeEventListener('click', handleOneTimeClick);
}

button.addEventListener('click', handleOneTimeClick);

// Modern approach: once option
button.addEventListener('click', () => {
    console.log('This will only run once');
}, { once: true });

// Example: Temporary listener
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const box = document.querySelector('.box');

function handleMouseMove(e) {
    box.style.left = e.clientX + 'px';
    box.style.top = e.clientY + 'px';
}

startBtn.addEventListener('click', () => {
    document.addEventListener('mousemove', handleMouseMove);
});

stopBtn.addEventListener('click', () => {
    document.removeEventListener('mousemove', handleMouseMove);
});

// Event listener options
button.addEventListener('click', handleClick, {
    once: true,      // Remove after first trigger
    capture: false,  // Event phase
    passive: true    // Improve scroll performance
});`,
              language: 'javascript',
              explanation: 'removeEventListener requires the same function reference used in addEventListener. Use named functions for removable listeners. Modern option: { once: true } for one-time events.'
            }
          ],
          comparison: {
            title: 'Event Types',
            options: [
              {
                name: 'Mouse Events',
                description: 'click, dblclick, mouseenter, mouseleave, mousemove',
                whenToUse: 'User interactions with mouse/pointer',
                example: 'button.addEventListener("click", handler);'
              },
              {
                name: 'Keyboard Events',
                description: 'keydown, keyup, keypress',
                whenToUse: 'Keyboard input and shortcuts',
                example: 'input.addEventListener("keydown", handler);'
              },
              {
                name: 'Form Events',
                description: 'submit, input, change, focus, blur',
                whenToUse: 'Form interactions and validation',
                example: 'form.addEventListener("submit", handler);'
              },
              {
                name: 'Window Events',
                description: 'load, resize, scroll, DOMContentLoaded',
                whenToUse: 'Page lifecycle and window changes',
                example: 'window.addEventListener("resize", handler);'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-1-week-4',
      weekNumber: 4,
      title: 'Objects & Async Programming',
      description: 'JavaScript objects and asynchronous programming with async/await and fetch',
      concepts: [
        {
          id: 'js-objects',
          title: 'JavaScript Objects',
          description: 'Working with objects, properties, methods, and object-oriented patterns',
          keyPoints: [
            'Objects store collections of key-value pairs',
            'Access properties with dot notation or bracket notation',
            'Objects can contain methods (functions as properties)',
            'Use object destructuring for cleaner code',
            'Objects are reference types (passed by reference)'
          ],
          codeExamples: [
            {
              title: 'Creating and Using Objects',
              code: `// Object literal syntax
const person = {
    name: "Alice",
    age: 25,
    city: "Seattle",
    isStudent: true
};

// Access properties
console.log(person.name);        // "Alice"
console.log(person["age"]);      // 25

// Modify properties
person.age = 26;
person.city = "Portland";

// Add new properties
person.email = "alice@example.com";
person.phone = "555-1234";

// Delete properties
delete person.phone;

// Check if property exists
if ("email" in person) {
    console.log("Email exists");
}

// Get all keys
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city", "isStudent", "email"]

// Get all values
const values = Object.values(person);
console.log(values); // ["Alice", 26, "Portland", true, "alice@example.com"]`,
              language: 'javascript',
              explanation: 'Objects use curly braces {}. Access properties with dot notation (obj.prop) or bracket notation (obj["prop"]). Use Object.keys() and Object.values() to get arrays of keys/values.'
            },
            {
              title: 'Objects with Methods',
              code: `const calculator = {
    result: 0,
    
    add: function(num) {
        this.result += num;
        return this;
    },
    
    subtract: function(num) {
        this.result -= num;
        return this;
    },
    
    multiply: function(num) {
        this.result *= num;
        return this;
    },
    
    clear: function() {
        this.result = 0;
        return this;
    },
    
    getResult: function() {
        return this.result;
    }
};

// Method chaining
calculator.add(10).multiply(2).subtract(5);
console.log(calculator.getResult()); // 15

// Modern method syntax (shorthand)
const person = {
    name: "Bob",
    age: 30,
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    },
    
    haveBirthday() {
        this.age++;
        console.log(\`Happy birthday! Now \${this.age} years old\`);
    }
};

console.log(person.greet()); // "Hello, I'm Bob"
person.haveBirthday();       // "Happy birthday! Now 31 years old"`,
              language: 'javascript',
              explanation: 'Methods are functions stored as object properties. Use "this" to reference the object itself. Return "this" from methods to enable method chaining.'
            },
            {
              title: 'Object Destructuring',
              code: `const user = {
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
    city: "Boston"
};

// Destructuring assignment
const { name, age } = user;
console.log(name); // "Charlie"
console.log(age);  // 28

// Rename while destructuring
const { email: userEmail, city: userCity } = user;
console.log(userEmail); // "charlie@example.com"

// Default values
const { country = "USA" } = user;
console.log(country); // "USA" (default, not in object)

// Nested destructuring
const student = {
    name: "David",
    grades: {
        math: 95,
        science: 88
    }
};

const { name: studentName, grades: { math, science } } = student;
console.log(math);    // 95
console.log(science); // 88

// Function parameters
function displayUser({ name, age, city }) {
    console.log(\`\${name}, \${age}, from \${city}\`);
}

displayUser(user); // "Charlie, 28, from Boston"`,
              language: 'javascript',
              explanation: 'Destructuring extracts properties into variables. Use curly braces with property names. Provide default values with =. Works in function parameters for cleaner code.'
            },
            {
              title: 'Arrays of Objects',
              code: `const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "User" },
    { id: 4, name: "David", role: "Admin" }
];

// Find user by id
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob", role: "User" }

// Filter by role
const admins = users.filter(u => u.role === "Admin");
console.log(admins); // [{ id: 1, ... }, { id: 4, ... }]

// Map to array of names
const names = users.map(u => u.name);
console.log(names); // ["Alice", "Bob", "Charlie", "David"]

// Check if any user is admin
const hasAdmin = users.some(u => u.role === "Admin");
console.log(hasAdmin); // true

// Check if all users are admins
const allAdmins = users.every(u => u.role === "Admin");
console.log(allAdmins); // false

// Sort by name
const sorted = users.sort((a, b) => a.name.localeCompare(b.name));

// Add new user
users.push({ id: 5, name: "Eve", role: "User" });

// Update user
const userToUpdate = users.find(u => u.id === 2);
if (userToUpdate) {
    userToUpdate.role = "Admin";
}`,
              language: 'javascript',
              explanation: 'Arrays of objects are common in JavaScript. Use array methods (find, filter, map, some, every) to work with object collections. Combine with arrow functions for concise code.'
            },
            {
              title: 'Object Spread and Copying',
              code: `const original = {
    name: "Alice",
    age: 25,
    city: "Seattle"
};

// Shallow copy with spread operator
const copy = { ...original };
copy.age = 26;
console.log(original.age); // 25 (unchanged)
console.log(copy.age);     // 26

// Merge objects
const contact = {
    email: "alice@example.com",
    phone: "555-1234"
};

const fullProfile = { ...original, ...contact };
console.log(fullProfile);
// { name: "Alice", age: 25, city: "Seattle", email: "...", phone: "..." }

// Override properties
const updated = {
    ...original,
    age: 30,
    country: "USA"
};
console.log(updated);
// { name: "Alice", age: 30, city: "Seattle", country: "USA" }

// Object.assign (alternative)
const merged = Object.assign({}, original, contact);

// Deep copy (for nested objects)
const nested = {
    name: "Bob",
    address: {
        city: "Portland",
        state: "OR"
    }
};

// Shallow copy - shares nested object reference
const shallowCopy = { ...nested };
shallowCopy.address.city = "Eugene";
console.log(nested.address.city); // "Eugene" (also changed!)

// Deep copy - creates new nested objects
const deepCopy = JSON.parse(JSON.stringify(nested));
deepCopy.address.city = "Salem";
console.log(nested.address.city); // "Eugene" (unchanged)`,
              language: 'javascript',
              explanation: 'Spread operator (...) creates shallow copies. Merge objects by spreading multiple objects. For nested objects, use JSON.parse(JSON.stringify()) for deep copy (simple cases).'
            }
          ],
          comparison: {
            title: 'Object Access Methods',
            options: [
              {
                name: 'Dot Notation',
                description: 'Access properties with dot (obj.property)',
                whenToUse: 'When property name is known and valid identifier',
                example: 'user.name, person.age'
              },
              {
                name: 'Bracket Notation',
                description: 'Access properties with brackets (obj["property"])',
                whenToUse: 'Dynamic property names, special characters, variables',
                example: 'user["first-name"], obj[variableName]'
              },
              {
                name: 'Destructuring',
                description: 'Extract multiple properties at once',
                whenToUse: 'Need multiple properties, function parameters, cleaner code',
                example: 'const { name, age } = user;'
              }
            ]
          }
        },
        {
          id: 'async-fetch',
          title: 'Async/Await & Fetch API',
          description: 'Asynchronous JavaScript and fetching data from APIs',
          keyPoints: [
            'async/await makes asynchronous code look synchronous',
            'fetch() is the modern way to make HTTP requests',
            'await pauses execution until promise resolves',
            'Always use try-catch for error handling with async/await',
            'Async functions always return a Promise'
          ],
          codeExamples: [
            {
              title: 'Basic Async/Await',
              code: `// Async function
async function fetchData() {
    console.log("Fetching data...");
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Data fetched!");
    return { message: "Success" };
}

// Call async function
fetchData().then(data => console.log(data));

// Async function with return value
async function getMessage() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Hello from async function!";
}

// Using await (must be inside async function)
async function main() {
    const message = await getMessage();
    console.log(message); // "Hello from async function!"
}

main();

// Arrow function async
const fetchUser = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { id, name: "User " + id };
};`,
              language: 'javascript',
              explanation: 'Mark functions with async keyword. Use await to wait for promises. Async functions automatically return a Promise. await can only be used inside async functions.'
            },
            {
              title: 'Fetch API Basics',
              code: `// Simple GET request
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    return users;
}

getUsers();

// Fetch with error handling
async function fetchUserSafe(id) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

// Check response status
async function getData(url) {
    const response = await fetch(url);
    
    if (response.status === 200) {
        return await response.json();
    } else if (response.status === 404) {
        console.log("Not found");
        return null;
    } else {
        console.log("Error:", response.status);
        return null;
    }
}`,
              language: 'javascript',
              explanation: 'fetch() returns a Promise. First await gets the response, second await parses JSON. Check response.ok or response.status for errors. Use try-catch for error handling.'
            },
            {
              title: 'Displaying Fetched Data',
              code: `// Fetch and display users
async function displayUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear existing
        
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = \`\${user.name} - \${user.email}\`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Fetch and display single user
async function displayUser(userId) {
    const user = await fetchUserSafe(userId);
    
    if (user) {
        const userDiv = document.getElementById('user-info');
        userDiv.innerHTML = \`
            <h2>\${user.name}</h2>
            <p>Email: \${user.email}</p>
            <p>Phone: \${user.phone}</p>
            <p>Website: \${user.website}</p>
        \`;
    }
}

// Event listener example
document.getElementById('load-btn').addEventListener('click', async () => {
    const button = document.getElementById('load-btn');
    button.disabled = true;
    button.textContent = 'Loading...';
    
    await displayUsers();
    
    button.disabled = false;
    button.textContent = 'Load Users';
});`,
              language: 'javascript',
              explanation: 'Fetch data in async functions, then update DOM with results. Disable buttons during loading. Clear existing content before adding new. Handle errors gracefully.'
            },
            {
              title: 'Multiple Async Operations',
              code: `// Sequential (one after another)
async function sequentialFetch() {
    const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json());
    const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json());
    const user3 = await fetch('https://jsonplaceholder.typicode.com/users/3').then(r => r.json());
    
    return [user1, user2, user3];
    // Total time: time1 + time2 + time3
}

// Parallel (all at once)
async function parallelFetch() {
    const [user1, user2, user3] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/users/3').then(r => r.json())
    ]);
    
    return [user1, user2, user3];
    // Total time: max(time1, time2, time3) - much faster!
}

// Fetch multiple with error handling
async function fetchMultipleUsers(ids) {
    try {
        const promises = ids.map(id => 
            fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
                .then(r => r.json())
        );
        
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

// Usage
const users = await fetchMultipleUsers([1, 2, 3, 4, 5]);
console.log(users);`,
              language: 'javascript',
              explanation: 'Sequential: await each request one by one (slower). Parallel: use Promise.all() to run all requests simultaneously (faster). Use parallel for independent requests.'
            },
            {
              title: 'Practical Fetch Examples',
              code: `// Search functionality
async function searchUsers(query) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const filtered = users.filter(user => 
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        
        return filtered;
    } catch (error) {
        console.error("Search error:", error);
        return [];
    }
}

// Loading indicator
async function loadDataWithIndicator() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    loader.style.display = 'block';
    content.style.display = 'none';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Display posts
        content.innerHTML = posts.slice(0, 10).map(post => \`
            <div class="post">
                <h3>\${post.title}</h3>
                <p>\${post.body}</p>
            </div>
        \`).join('');
        
    } catch (error) {
        content.innerHTML = '<p>Error loading data</p>';
    } finally {
        loader.style.display = 'none';
        content.style.display = 'block';
    }
}

// Pagination
async function loadPage(page, limit = 10) {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${limit}\`);
    const posts = await response.json();
    return posts;
}

// Auto-refresh
async function autoRefresh(interval = 5000) {
    async function refresh() {
        await displayUsers();
        setTimeout(refresh, interval);
    }
    refresh();
}`,
              language: 'javascript',
              explanation: 'Common patterns: search/filter results, show loading indicators, implement pagination, auto-refresh data. Use try-catch-finally for cleanup. Combine fetch with DOM manipulation.'
            }
          ],
          comparison: {
            title: 'Async Patterns',
            options: [
              {
                name: 'Callbacks',
                description: 'Functions passed as arguments (old way)',
                whenToUse: 'Legacy code, simple event handlers',
                example: 'setTimeout(() => console.log("Done"), 1000);'
              },
              {
                name: 'Promises',
                description: 'Objects representing eventual completion',
                whenToUse: 'Chaining operations, when async/await not available',
                example: 'fetch(url).then(r => r.json()).then(data => ...);'
              },
              {
                name: 'Async/Await',
                description: 'Syntactic sugar over Promises (modern way)',
                whenToUse: 'Modern code, cleaner syntax, easier error handling (recommended)',
                example: 'const data = await fetch(url).then(r => r.json());'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-1-week-5',
      weekNumber: 5,
      title: 'Search & Local Storage',
      description: 'Implementing search functionality and persisting data with localStorage',
      concepts: [
        {
          id: 'search-functionality',
          title: 'Search Functionality',
          description: 'Building search features with filtering, sorting, and real-time updates',
          keyPoints: [
            'Use array methods (filter, includes) for searching',
            'Implement case-insensitive search with toLowerCase()',
            'Debounce search input to improve performance',
            'Highlight search results for better UX',
            'Combine multiple search criteria'
          ],
          codeExamples: [
            {
              title: 'Basic Search Implementation',
              code: `const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Mouse", category: "Electronics", price: 29 },
    { id: 3, name: "Desk", category: "Furniture", price: 299 },
    { id: 4, name: "Chair", category: "Furniture", price: 199 },
    { id: 5, name: "Keyboard", category: "Electronics", price: 79 }
];

// Simple search function
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    
    return products.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
}

// Usage
const results = searchProducts("elec");
console.log(results); // Returns all Electronics items

// Display results
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
        return;
    }
    
    resultsDiv.innerHTML = results.map(product => \`
        <div class="product">
            <h3>\${product.name}</h3>
            <p>Category: \${product.category}</p>
            <p>Price: $\${product.price}</p>
        </div>
    \`).join('');
}`,
              language: 'javascript',
              explanation: 'Use filter() to search arrays. Convert to lowercase for case-insensitive search. Use includes() to check if string contains query. Map results to HTML for display.'
            },
            {
              title: 'Real-Time Search with Event Listeners',
              code: `const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

// Real-time search
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    
    if (query.length === 0) {
        resultsContainer.innerHTML = '<p>Start typing to search...</p>';
        return;
    }
    
    if (query.length < 2) {
        resultsContainer.innerHTML = '<p>Type at least 2 characters</p>';
        return;
    }
    
    const results = searchProducts(query);
    displayResults(results);
});

// Clear search
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    resultsContainer.innerHTML = '<p>Start typing to search...</p>';
});

// Search on Enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        const results = searchProducts(query);
        displayResults(results);
    }
});`,
              language: 'javascript',
              explanation: 'Use input event for real-time search. Check query length before searching. Clear button resets search. Enter key triggers search. Provide user feedback for empty/short queries.'
            },
            {
              title: 'Advanced Search with Filters',
              code: `// Advanced search with multiple criteria
function advancedSearch(query, filters = {}) {
    let results = products;
    
    // Text search
    if (query && query.length > 0) {
        const lowerQuery = query.toLowerCase();
        results = results.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery)
        );
    }
    
    // Category filter
    if (filters.category) {
        results = results.filter(product => 
            product.category === filters.category
        );
    }
    
    // Price range filter
    if (filters.minPrice !== undefined) {
        results = results.filter(product => 
            product.price >= filters.minPrice
        );
    }
    
    if (filters.maxPrice !== undefined) {
        results = results.filter(product => 
            product.price <= filters.maxPrice
        );
    }
    
    // Sort results
    if (filters.sortBy) {
        if (filters.sortBy === 'price-asc') {
            results.sort((a, b) => a.price - b.price);
        } else if (filters.sortBy === 'price-desc') {
            results.sort((a, b) => b.price - a.price);
        } else if (filters.sortBy === 'name') {
            results.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
    
    return results;
}

// Usage
const filters = {
    category: 'Electronics',
    minPrice: 50,
    maxPrice: 500,
    sortBy: 'price-asc'
};

const results = advancedSearch('', filters);
console.log(results);`,
              language: 'javascript',
              explanation: 'Chain multiple filter conditions. Support category, price range, and sorting. Each filter is optional. Sort by different criteria (price, name). Build flexible search systems.'
            },
            {
              title: 'Search with Debouncing',
              code: `// Debounce function - delays execution
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Search function
function performSearch(query) {
    console.log('Searching for:', query);
    const results = searchProducts(query);
    displayResults(results);
}

// Debounced search (waits 300ms after user stops typing)
const debouncedSearch = debounce(performSearch, 300);

// Apply to input
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    debouncedSearch(query);
});

// Alternative: Simple debounce inline
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        const query = e.target.value;
        const results = searchProducts(query);
        displayResults(results);
    }, 300);
});`,
              language: 'javascript',
              explanation: 'Debouncing delays function execution until user stops typing. Prevents excessive searches on every keystroke. Use setTimeout and clearTimeout. 300ms is a good default delay. Improves performance.'
            },
            {
              title: 'Highlight Search Results',
              code: `// Highlight matching text
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(\`(\${query})\`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Display with highlights
function displayResultsWithHighlight(results, query) {
    const resultsDiv = document.getElementById('results');
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
        return;
    }
    
    resultsDiv.innerHTML = results.map(product => \`
        <div class="product">
            <h3>\${highlightText(product.name, query)}</h3>
            <p>Category: \${highlightText(product.category, query)}</p>
            <p>Price: $\${product.price}</p>
        </div>
    \`).join('');
}

// Search with count
function searchWithCount(query) {
    const results = searchProducts(query);
    const count = results.length;
    
    const countDiv = document.getElementById('result-count');
    countDiv.textContent = \`Found \${count} result\${count !== 1 ? 's' : ''}\`;
    
    displayResultsWithHighlight(results, query);
}

// CSS for highlighting
/*
mark {
    background-color: yellow;
    font-weight: bold;
    padding: 2px;
}
*/`,
              language: 'javascript',
              explanation: 'Use regex to find and replace matching text. Wrap matches in <mark> tags for highlighting. Display result count. Handle singular/plural text. Style highlights with CSS.'
            }
          ],
          comparison: {
            title: 'Search Performance',
            options: [
              {
                name: 'Real-Time (No Debounce)',
                description: 'Search on every keystroke',
                whenToUse: 'Small datasets, local data only',
                example: 'input event -> search immediately'
              },
              {
                name: 'Debounced Search',
                description: 'Wait for user to stop typing',
                whenToUse: 'Large datasets, API calls, better performance (recommended)',
                example: 'input event -> wait 300ms -> search'
              },
              {
                name: 'Search Button',
                description: 'User clicks button to search',
                whenToUse: 'Complex searches, explicit user action needed',
                example: 'button click -> search'
              }
            ]
          }
        },
        {
          id: 'local-storage',
          title: 'Local Storage',
          description: 'Persisting data in the browser with localStorage and sessionStorage',
          keyPoints: [
            'localStorage persists data even after browser closes',
            'sessionStorage clears when tab/window closes',
            'Store only strings (use JSON.stringify/parse for objects)',
            'Storage limit is typically 5-10MB per domain',
            'Always check if data exists before using'
          ],
          codeExamples: [
            {
              title: 'Basic localStorage Operations',
              code: `// Save data
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('fontSize', '16');

// Retrieve data
const username = localStorage.getItem('username');
console.log(username); // "Alice"

const theme = localStorage.getItem('theme');
console.log(theme); // "dark"

// Check if item exists
if (localStorage.getItem('username')) {
    console.log('Username is saved');
}

// Remove item
localStorage.removeItem('theme');

// Clear all localStorage
localStorage.clear();

// Get number of items
const itemCount = localStorage.length;
console.log('Items in storage:', itemCount);

// Get key by index
const firstKey = localStorage.key(0);
console.log('First key:', firstKey);

// Loop through all items
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(\`\${key}: \${value}\`);
}`,
              language: 'javascript',
              explanation: 'Use setItem() to save, getItem() to retrieve. removeItem() deletes one item, clear() deletes all. Check if item exists before using. Loop through items with length and key().'
            },
            {
              title: 'Storing Objects and Arrays',
              code: `// Store object
const user = {
    name: 'Bob',
    age: 30,
    email: 'bob@example.com',
    preferences: {
        theme: 'dark',
        notifications: true
    }
};

// Convert to JSON string before storing
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // "Bob"
console.log(savedUser.preferences.theme); // "dark"

// Store array
const favorites = ['item1', 'item2', 'item3'];
localStorage.setItem('favorites', JSON.stringify(favorites));

// Retrieve array
const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
console.log(savedFavorites); // ['item1', 'item2', 'item3']

// Add to array
savedFavorites.push('item4');
localStorage.setItem('favorites', JSON.stringify(savedFavorites));

// Helper functions
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Usage
saveToStorage('settings', { theme: 'light', lang: 'en' });
const settings = getFromStorage('settings');`,
              language: 'javascript',
              explanation: 'Use JSON.stringify() to convert objects/arrays to strings. Use JSON.parse() to convert back. Create helper functions for cleaner code. Always check if item exists before parsing.'
            },
            {
              title: 'Practical Example: Save Form Data',
              code: `// Save form data as user types
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Auto-save on input
nameInput.addEventListener('input', () => {
    localStorage.setItem('formName', nameInput.value);
});

emailInput.addEventListener('input', () => {
    localStorage.setItem('formEmail', emailInput.value);
});

// Load saved data on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('formName');
    const savedEmail = localStorage.getItem('formEmail');
    
    if (savedName) nameInput.value = savedName;
    if (savedEmail) emailInput.value = savedEmail;
});

// Clear saved data on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Process form...
    console.log('Form submitted');
    
    // Clear saved draft
    localStorage.removeItem('formName');
    localStorage.removeItem('formEmail');
});

// Save entire form
function saveFormData() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('formDraft', JSON.stringify(formData));
}

// Load entire form
function loadFormData() {
    const saved = localStorage.getItem('formDraft');
    
    if (saved) {
        const formData = JSON.parse(saved);
        nameInput.value = formData.name;
        emailInput.value = formData.email;
    }
}`,
              language: 'javascript',
              explanation: 'Auto-save form data as user types. Load saved data on page load. Clear data after successful submit. Save timestamp for tracking. Prevents data loss from accidental page close.'
            },
            {
              title: 'User Preferences and Settings',
              code: `// Theme switcher with localStorage
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// Load theme on page load
loadTheme();

// Theme toggle button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Font size preference
function setFontSize(size) {
    document.documentElement.style.fontSize = size + 'px';
    localStorage.setItem('fontSize', size);
}

function loadFontSize() {
    const savedSize = localStorage.getItem('fontSize') || '16';
    setFontSize(savedSize);
}

// Settings object
const defaultSettings = {
    theme: 'light',
    fontSize: 16,
    notifications: true,
    language: 'en'
};

function getSettings() {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : defaultSettings;
}

function updateSettings(newSettings) {
    const current = getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem('settings', JSON.stringify(updated));
    applySettings(updated);
}

function applySettings(settings) {
    setTheme(settings.theme);
    setFontSize(settings.fontSize);
    // Apply other settings...
}

// Load settings on page load
window.addEventListener('DOMContentLoaded', () => {
    const settings = getSettings();
    applySettings(settings);
});`,
              language: 'javascript',
              explanation: 'Store user preferences (theme, font size, etc.). Load preferences on page load. Provide default values. Use spread operator to merge settings. Apply settings to DOM.'
            },
            {
              title: 'Shopping Cart with localStorage',
              code: `// Shopping cart functions
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart(cart);
    updateCartDisplay();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartDisplay();
}

function updateQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
            updateCartDisplay();
        }
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartDisplay();
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartDisplay() {
    const cart = getCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = getCartTotal();
    
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = \`$\${total.toFixed(2)}\`;
}

// Load cart on page load
window.addEventListener('DOMContentLoaded', updateCartDisplay);`,
              language: 'javascript',
              explanation: 'Persist shopping cart across sessions. Add/remove items, update quantities. Calculate totals. Check for existing items before adding. Update display when cart changes.'
            }
          ],
          comparison: {
            title: 'Storage Options',
            options: [
              {
                name: 'localStorage',
                description: 'Persists forever until manually cleared',
                whenToUse: 'User preferences, cart, saved data (recommended for most cases)',
                example: 'localStorage.setItem("theme", "dark");'
              },
              {
                name: 'sessionStorage',
                description: 'Clears when tab/window closes',
                whenToUse: 'Temporary data, single-session data, sensitive info',
                example: 'sessionStorage.setItem("tempData", "value");'
              },
              {
                name: 'Cookies',
                description: 'Sent with every HTTP request, can expire',
                whenToUse: 'Server communication, authentication tokens',
                example: 'document.cookie = "user=Alice; max-age=3600";'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-1-week-6',
      weekNumber: 6,
      title: 'Geolocation API',
      description: 'Working with browser geolocation to get user location',
      concepts: [
        {
          id: 'geolocation',
          title: 'Geolocation API',
          description: 'Accessing user location with the browser Geolocation API',
          keyPoints: [
            'Requires user permission to access location',
            'Works on HTTPS or localhost only',
            'Returns latitude and longitude coordinates',
            'Can get one-time position or watch continuous updates',
            'Handle errors gracefully (permission denied, timeout, etc.)'
          ],
          codeExamples: [
            {
              title: 'Basic Geolocation',
              code: `// Check if geolocation is supported
if ('geolocation' in navigator) {
    console.log('Geolocation is available');
} else {
    console.log('Geolocation is not supported');
}

// Get current position (one-time)
navigator.geolocation.getCurrentPosition(
    // Success callback
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        console.log(\`Latitude: \${lat}\`);
        console.log(\`Longitude: \${lon}\`);
        console.log(\`Accuracy: \${accuracy} meters\`);
    },
    // Error callback
    (error) => {
        console.error('Error getting location:', error.message);
    }
);

// With options
const options = {
    enableHighAccuracy: true,  // Use GPS if available
    timeout: 5000,             // Wait max 5 seconds
    maximumAge: 0              // Don't use cached position
};

navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    options
);`,
              language: 'javascript',
              explanation: 'Check if geolocation is supported. Use getCurrentPosition() for one-time location. Provide success and error callbacks. Set options for accuracy, timeout, and caching.'
            },
            {
              title: 'Display Location on Page',
              code: `const locationBtn = document.getElementById('get-location-btn');
const locationDiv = document.getElementById('location-info');
const loadingDiv = document.getElementById('loading');

locationBtn.addEventListener('click', getLocation);

function getLocation() {
    if (!navigator.geolocation) {
        locationDiv.innerHTML = '<p>Geolocation is not supported</p>';
        return;
    }
    
    // Show loading
    loadingDiv.style.display = 'block';
    locationDiv.innerHTML = '';
    locationBtn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
        showPosition,
        showError,
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const timestamp = new Date(position.timestamp);
    
    locationDiv.innerHTML = \`
        <h3>Your Location</h3>
        <p><strong>Latitude:</strong> \${lat.toFixed(6)}</p>
        <p><strong>Longitude:</strong> \${lon.toFixed(6)}</p>
        <p><strong>Accuracy:</strong> \${accuracy.toFixed(0)} meters</p>
        <p><strong>Time:</strong> \${timestamp.toLocaleString()}</p>
    \`;
    
    loadingDiv.style.display = 'none';
    locationBtn.disabled = false;
}

function showError(error) {
    let message = '';
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = 'User denied location permission';
            break;
        case error.POSITION_UNAVAILABLE:
            message = 'Location information unavailable';
            break;
        case error.TIMEOUT:
            message = 'Location request timed out';
            break;
        default:
            message = 'Unknown error occurred';
    }
    
    locationDiv.innerHTML = \`<p class="error">\${message}</p>\`;
    loadingDiv.style.display = 'none';
    locationBtn.disabled = false;
}`,
              language: 'javascript',
              explanation: 'Display location data on page. Show loading indicator during request. Handle all error types. Format coordinates and timestamp. Enable/disable button during request.'
            },
            {
              title: 'Show Location on Map',
              code: `// Display location on Google Maps (simple version)
function showOnMap(lat, lon) {
    const mapDiv = document.getElementById('map');
    
    // Create Google Maps URL
    const mapUrl = \`https://www.google.com/maps?q=\${lat},\${lon}&z=15&output=embed\`;
    
    mapDiv.innerHTML = \`
        <iframe
            width="100%"
            height="400"
            frameborder="0"
            src="\${mapUrl}"
            allowfullscreen>
        </iframe>
    \`;
}

// Open in Google Maps app/website
function openInGoogleMaps(lat, lon) {
    const url = \`https://www.google.com/maps?q=\${lat},\${lon}\`;
    window.open(url, '_blank');
}

// Get location and show on map
function getLocationAndShowMap() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            showOnMap(lat, lon);
            
            // Also create a link
            const linkDiv = document.getElementById('map-link');
            linkDiv.innerHTML = \`
                <a href="https://www.google.com/maps?q=\${lat},\${lon}" target="_blank">
                    Open in Google Maps
                </a>
            \`;
        },
        (error) => {
            console.error('Error:', error.message);
        }
    );
}

// Leaflet.js example (open source alternative)
function showOnLeafletMap(lat, lon) {
    const map = L.map('map').setView([lat, lon], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker([lat, lon]).addTo(map)
        .bindPopup('You are here')
        .openPopup();
}`,
              language: 'javascript',
              explanation: 'Embed Google Maps with iframe. Create links to open in Maps app. Use Leaflet.js for open-source maps. Show marker at user location. Provide map interaction options.'
            },
            {
              title: 'Watch Position (Continuous Updates)',
              code: `let watchId = null;
const positionHistory = [];

// Start watching position
function startWatching() {
    if (watchId !== null) {
        console.log('Already watching');
        return;
    }
    
    watchId = navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const timestamp = position.timestamp;
            
            // Add to history
            positionHistory.push({ lat, lon, timestamp });
            
            // Update display
            updatePositionDisplay(position);
            
            console.log(\`Update \${positionHistory.length}: \${lat}, \${lon}\`);
        },
        (error) => {
            console.error('Watch error:', error.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
    
    console.log('Started watching position');
}

// Stop watching position
function stopWatching() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
        console.log('Stopped watching position');
    }
}

// Update display with current position
function updatePositionDisplay(position) {
    const display = document.getElementById('current-position');
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const speed = position.coords.speed; // meters/second (may be null)
    
    display.innerHTML = \`
        <p>Lat: \${lat.toFixed(6)}, Lon: \${lon.toFixed(6)}</p>
        <p>Updates: \${positionHistory.length}</p>
        \${speed ? \`<p>Speed: \${(speed * 3.6).toFixed(1)} km/h</p>\` : ''}
    \`;
}

// Calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
}`,
              language: 'javascript',
              explanation: 'Use watchPosition() for continuous updates. Store watchId to stop later. Track position history. Calculate speed and distance. Use clearWatch() to stop tracking.'
            },
            {
              title: 'Practical Applications',
              code: `// Find nearby places (using coordinates)
async function findNearbyPlaces(lat, lon, type = 'restaurant') {
    // Example using a hypothetical API
    const radius = 1000; // meters
    const apiUrl = \`https://api.example.com/places?lat=\${lat}&lon=\${lon}&radius=\${radius}&type=\${type}\`;
    
    try {
        const response = await fetch(apiUrl);
        const places = await response.json();
        return places;
    } catch (error) {
        console.error('Error finding places:', error);
        return [];
    }
}

// Get weather for current location
async function getLocalWeather() {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            // Example weather API call
            const apiKey = 'your-api-key';
            const url = \`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&appid=\${apiKey}\`;
            
            try {
                const response = await fetch(url);
                const weather = await response.json();
                displayWeather(weather);
            } catch (error) {
                console.error('Weather error:', error);
            }
        },
        (error) => {
            console.error('Location error:', error);
        }
    );
}

// Save location to localStorage
function saveLocation(position) {
    const locationData = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp,
        accuracy: position.coords.accuracy
    };
    
    localStorage.setItem('lastLocation', JSON.stringify(locationData));
}

// Load saved location
function loadSavedLocation() {
    const saved = localStorage.getItem('lastLocation');
    
    if (saved) {
        const location = JSON.parse(saved);
        const age = Date.now() - location.timestamp;
        const ageMinutes = age / (1000 * 60);
        
        console.log(\`Last location from \${ageMinutes.toFixed(0)} minutes ago\`);
        return location;
    }
    
    return null;
}

// Distance to a specific point
function distanceToPoint(targetLat, targetLon) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            
            const distance = calculateDistance(userLat, userLon, targetLat, targetLon);
            
            console.log(\`You are \${distance.toFixed(2)} km away\`);
        }
    );
}`,
              language: 'javascript',
              explanation: 'Use location for nearby search. Get local weather data. Save location to localStorage. Calculate distance to specific points. Combine with APIs for rich features.'
            }
          ],
          comparison: {
            title: 'Position Methods',
            options: [
              {
                name: 'getCurrentPosition()',
                description: 'Get location once',
                whenToUse: 'One-time location check, static location display',
                example: 'navigator.geolocation.getCurrentPosition(success, error);'
              },
              {
                name: 'watchPosition()',
                description: 'Continuous location updates',
                whenToUse: 'Tracking movement, navigation apps, real-time updates',
                example: 'const id = navigator.geolocation.watchPosition(success, error);'
              },
              {
                name: 'clearWatch()',
                description: 'Stop watching position',
                whenToUse: 'Stop continuous tracking to save battery',
                example: 'navigator.geolocation.clearWatch(watchId);'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-1-week-7',
      weekNumber: 7,
      title: 'JavaScript Modules',
      description: 'Organizing code with ES6 imports and exports',
      concepts: [
        {
          id: 'imports-exports',
          title: 'Imports and Exports',
          description: 'Modular JavaScript with import/export statements',
          keyPoints: [
            'Modules help organize code into separate files',
            'Use export to make functions/variables available',
            'Use import to bring in code from other files',
            'Default exports vs named exports',
            'Modules run in strict mode automatically'
          ],
          codeExamples: [
            {
              title: 'Named Exports and Imports',
              code: `// math.js - Export multiple items
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export const PI = 3.14159;
export const E = 2.71828;

// Alternative: Export at end
function divide(a, b) {
    return a / b;
}

function power(base, exp) {
    return Math.pow(base, exp);
}

export { divide, power };

// main.js - Import named exports
import { add, subtract, multiply } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 7));  // 21

// Import with alias
import { add as sum, subtract as diff } from './math.js';

console.log(sum(5, 3));  // 8
console.log(diff(10, 4)); // 6

// Import all as namespace
import * as math from './math.js';

console.log(math.add(5, 3));  // 8
console.log(math.PI);         // 3.14159`,
              language: 'javascript',
              explanation: 'Use export keyword before declarations. Import specific items with curly braces. Rename imports with "as". Import all with * as namespace. File extension required.'
            },
            {
              title: 'Default Exports and Imports',
              code: `// calculator.js - Default export (one per file)
export default class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
}

// user.js - Default export with function
export default function createUser(name, email) {
    return {
        name,
        email,
        createdAt: new Date()
    };
}

// config.js - Default export with object
export default {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
};

// main.js - Import default exports (no curly braces)
import Calculator from './calculator.js';
import createUser from './user.js';
import config from './config.js';

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8

const user = createUser('Alice', 'alice@example.com');
console.log(user);

console.log(config.apiUrl);

// Can name default import anything
import MyCalc from './calculator.js'; // Same as Calculator
import makeUser from './user.js';     // Same as createUser`,
              language: 'javascript',
              explanation: 'One default export per file. Import without curly braces. Can name default import anything. Use for main export of a module. Combine with named exports if needed.'
            },
            {
              title: 'Mixing Default and Named Exports',
              code: `// api.js - Mix default and named exports
const API_URL = 'https://api.example.com';

export function get(endpoint) {
    return fetch(\`\${API_URL}/\${endpoint}\`);
}

export function post(endpoint, data) {
    return fetch(\`\${API_URL}/\${endpoint}\`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export default class ApiClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    
    async request(endpoint) {
        const response = await get(endpoint);
        return response.json();
    }
}

// main.js - Import both
import ApiClient, { get, post } from './api.js';

// Use default export
const client = new ApiClient('my-api-key');
client.request('users');

// Use named exports
get('posts').then(r => r.json()).then(console.log);
post('users', { name: 'Bob' });

// Import only named
import { get as apiGet } from './api.js';

// Import only default
import ApiClient from './api.js';`,
              language: 'javascript',
              explanation: 'Combine default and named exports in one file. Import default first, then named in curly braces. Can import separately. Provides flexibility in module design.'
            },
            {
              title: 'Organizing Project with Modules',
              code: `// Project structure:
// /src
//   /utils
//     math.js
//     string.js
//     date.js
//   /components
//     Button.js
//     Card.js
//   /services
//     api.js
//     auth.js
//   main.js

// utils/math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// utils/string.js
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const truncate = (str, len) => str.length > len ? str.slice(0, len) + '...' : str;

// utils/index.js - Barrel export (re-export everything)
export * from './math.js';
export * from './string.js';
export * from './date.js';

// OR with specific exports
export { add, subtract } from './math.js';
export { capitalize, truncate } from './string.js';

// main.js - Import from barrel
import { add, capitalize } from './utils/index.js';
// OR just
import { add, capitalize } from './utils';

// components/Button.js
export default function Button({ text, onClick }) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

// components/index.js
export { default as Button } from './Button.js';
export { default as Card } from './Card.js';

// main.js
import { Button, Card } from './components';`,
              language: 'javascript',
              explanation: 'Organize code into folders by feature. Use index.js as barrel file to re-export. Simplifies imports from multiple files. Group related functionality together.'
            },
            {
              title: 'Dynamic Imports (Code Splitting)',
              code: `// Static import (loaded immediately)
import { add } from './math.js';

// Dynamic import (loaded when needed)
async function loadMath() {
    const math = await import('./math.js');
    console.log(math.add(5, 3)); // 8
}

// Load module on button click
document.getElementById('load-btn').addEventListener('click', async () => {
    const { default: Calculator } = await import('./calculator.js');
    const calc = new Calculator();
    console.log(calc.add(10, 5));
});

// Conditional loading
async function loadFeature(featureName) {
    if (featureName === 'charts') {
        const charts = await import('./charts.js');
        charts.renderChart();
    } else if (featureName === 'maps') {
        const maps = await import('./maps.js');
        maps.initMap();
    }
}

// Load with error handling
async function safeImport(modulePath) {
    try {
        const module = await import(modulePath);
        return module;
    } catch (error) {
        console.error('Failed to load module:', error);
        return null;
    }
}

// Usage
const module = await safeImport('./optional-feature.js');
if (module) {
    module.init();
}

// Lazy loading for performance
const lazyLoadComponent = async () => {
    const { default: HeavyComponent } = await import('./heavy-component.js');
    return new HeavyComponent();
};

// Load only when scrolled into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
            const component = await lazyLoadComponent();
            entry.target.appendChild(component.render());
        }
    });
});`,
              language: 'javascript',
              explanation: 'Dynamic imports return Promises. Load modules on demand for better performance. Use await or .then() to handle. Great for code splitting and lazy loading. Reduces initial bundle size.'
            }
          ],
          comparison: {
            title: 'Export Types',
            options: [
              {
                name: 'Named Export',
                description: 'Export multiple items by name',
                whenToUse: 'Multiple utilities, functions, constants from one file',
                example: 'export function add() {} // import { add } from "./math.js";'
              },
              {
                name: 'Default Export',
                description: 'One main export per file',
                whenToUse: 'Single class, component, or main function per file',
                example: 'export default class {} // import MyClass from "./class.js";'
              },
              {
                name: 'Re-export (Barrel)',
                description: 'Export items from other modules',
                whenToUse: 'Create index files, simplify imports, organize exports',
                example: 'export * from "./utils.js"; // import { add } from "./index.js";'
              }
            ]
          }
        }
      ]
    }
  ]
};
