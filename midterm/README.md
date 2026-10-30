# Web Technologies - Lab Mid Term (CSC336)

**Name:** Safa
**Roll No:** FA24-BCS-151

## My Personal Numbers

| Value | Formula | Result |
|---|---|---|
| N | last two digits of roll number | 51 |
| BP | 600 + N | 651px |
| H | (N x 7) mod 360 | 357 (accent colour `hsl(357, 70%, 45%)`) |
| K | (N mod 3) + 3 | 3 |

Other values used: sticky offset = (N mod 40) + 70 = 81px, and Premium limit = N x 100 = 5100.

## Files Changed

- `index.html`
- `product.html`
- `styles.css`
- `script.js` (new file)
- `README.md`

## Task 1 - CSS-only Category Filter

**What I changed:**
- Merged all product cards into one grid and gave every card a `data-cat` (jerseys, training or apparel).
- Added 4 radio buttons above the grid: All, Jerseys, Training and Apparel. "All" is selected when the page loads.
- The filter uses `:has()` with `:checked` to hide non-matching cards.

**Why:**
- Hidden cards use `display: none`, so the grid leaves no empty gaps.
- The selected filter uses the accent colour `hsl(357, 70%, 45%)`.
- No JavaScript is used in this task.

## Task 2 - Product Page Layout with Sticky Details Box

**What I changed:**
- Rebuilt the layout of `product.html` with CSS Grid and `grid-template-areas`.
- Below 651px it is one column: image, details, then description.
- From 651px it is two columns: image and details side by side, with the description full width underneath.
- From 651px the details box uses `position: sticky` with `top: 81px`.

**Why:**
- The description is long enough to show the sticky effect while scrolling.
- The details form sits inside a column that is as tall as the image, so it stays sticky only inside its own row.
- No JavaScript is used in this task.

## Task 3 - JavaScript Live Search and Price Sort

**What I changed:**
- Added `script.js` (plain JavaScript) and linked it to `index.html`.
- Added a search box that filters the existing cards by name (not case-sensitive) and works together with the category filter.
- Shows "No products found" instead of the grid when no card matches.
- Added a "Sort by price" button: the first click sorts low to high, the next click high to low, and so on.
- Products priced above 5100 (N x 100) get a "Premium" label added by the script on page load.

**Why:**
- The script reads each name and price from the existing cards and does not rebuild them.
- Cards are reordered with `appendChild`, not `innerHTML`.

## AI Tools Used

Claude
