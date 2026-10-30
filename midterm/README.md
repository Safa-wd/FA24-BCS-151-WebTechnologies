##Name: Safa
##Roll No: FA24-BCS-151
N = 51
BP = 651px
H = 357 (accent colour hsl(357, 70%, 45%))
K = 3

##Files changed
- index.html
- product.html
- styles.css
- script.js (new file)
- README.md

##Task 1 - CSS-only category filter
I merged all product cards into one grid and gave each card a data-cat (jerseys, training, apparel). I added 4 radio buttons (All + 3 categories) above the grid. The filter uses :has() with :checked to hide non-matching cards with display:none, so the grid leaves no gaps. The selected filter uses the accent colour hsl(357, 70%, 45%).

##Task 2 - Product page grid and sticky box
I rebuilt the layout of product.html with CSS Grid and grid-template-areas. Below 651px it is one column (image, details, description). From 651px it is two columns with the description full width underneath. From 651px the details box uses position: sticky with top: 81px, because (51 mod 40) + 70 = 81. I made the description long enough to show the sticky effect.

T##ask 3 - JavaScript live search and price sort
script.js is linked to index.html. The search box filters the existing cards by name (not case-sensitive) and works together with the category filter. If no card matches, "No products found" is shown instead of the grid. The "Sort by price" button reads each price from the card and reorders the existing cards with appendChild, first low to high, then high to low. Products priced above 5100 (N x 100) get a "Premium" label added by the script on page load.

AI tools used
Claude
