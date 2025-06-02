# CSS Grid Layout: The Very Basics

## What is a Grid?

Imagine a net or a _checkerboard_. That's kind of like a CSS Grid! It's a system for laying out web page elements in **rows and columns**.

Think of it as drawing lines across and down your page. These lines create a pattern of cells, and you can place your content (like text, images, or boxes) precisely within these cells.

**Key Idea:** CSS Grid is **two-dimensional**. This means it handles both width (columns) and height (rows) at the same time. This is different from older methods or even Flexbox, which is mostly one-dimensional (either a row or a column).

| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Data 1   |
| Row 2    | Data 2   |

### Why Use a Grid?

- **Complex Layouts Made Easier:** Grids are fantastic for arranging the main parts of your webpage (like headers, sidebars, main content, and footers) or even smaller components.
- **Control Over Placement:** You get a lot of power to decide exactly where things go and how much space they take up.

### The Building Blocks

When you create a grid, you're essentially defining:

1.  **The Grid Container:** This is the main box (an HTML element like a `<div>`) that you tell to become a grid. You do this with `display: grid;` in CSS.
2.  **Grid Items:** These are the direct children (elements immediately inside) of the grid container. They are the things that get placed onto your grid.

Once you have a grid container, you can define:

- **Grid Lines:** The horizontal and vertical lines that form the structure.
- **Grid Tracks:** The space _between_ two grid lines. A column is a track, and a row is a track.
- **Grid Cells:** The smallest unit, like a single square on a checkerboard, formed where a row track and a column track meet.

```javascript
function hello() {
  console.log('Hello from JS!')
}
```

```css
.my-class {
  color: hotpink;
}
```

```html
<div>
  <span>Hello HTML</span>
</div>
```

**Example:**

If you have a `div` with the class `grid-container`:

```html
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

And you apply this CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  grid-template-rows: 100px 100px; /* Two rows, each 100px tall */
  gap: 10px; /* Space between items */
}

.grid-container > div {
  /* Styling for the items */
  border: 1px solid blue;
  padding: 10px;
}
```

This creates a 2x2 grid. "Item 1" would go in the top-left cell, "Item 2" in the top-right, and so on.

CSS Grid gives you a robust way to design layouts that adapt well to different screen sizes.
