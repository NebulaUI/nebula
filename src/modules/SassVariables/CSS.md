All of the Sass variables in Nebula are prepended with the namespace `nb-` to reduce the probability of naming collisions.

* **`$nb-namespace`**  
A namespace to prepend all Nebula class names.
* **`$nb-site-wrap-width`**  
Maximum width of the site wrap object that typically wraps content on a page.
* **`$nb-spacing-unit`**  
Global spacing unit used throughout Nebula, on the grid, spaced lists, utilities, components etc.
* **`$nb-spacing-unit-double`**  
Double the spacing unit.
* **`$nb-spacing-unit-half`**  
Half the spacing unit.
* **`$nb-breakpoints`**  
A Sass map containg all of the media query breakpoints specified by Nebula. Many components / objects such as the grid, flag will iterate over this map during the Sass compilation, using the keys to form the generated class names.
* **`$nb-root-sizing`**  
A Sass map that maps to the breakpoints setting font-size percentages on the root element.  This enables any spacing using relative units to scale according to the viewport size.
* **`$nb-list-spacing`**  
A Sass map containing sizes for all the lists found in Nebula.
* **`$nb-section-spacing`**  
A Sass map containing sizes for the section object.
* **`$nb-flag-gutter-sizes`**  
A Sass map containing gutter sizes for the flag object.
* **`$nb-grid-gutter-sizes`**  
A Sass map containing the varying gutter sizes to be compiled for the grid.  The keys in the map directly correlate to the classname used. Fore example to target the zero gutter width `<div class="o-grid ln-grid--gutter-zero />` the `zero` portion maps to the key in `$nb-grid-gutter-sizes`.
* **`$nb-use-width-offsets`** 
A boolean to use the Grid and utility widths classes.  Setting to `false` will reduce compiled output bundle size.
* **`$nb-use-push-offsets`** 
A boolean to use the Grid and utility push offset classes.  Setting to `false` will reduce compiled output bundle size.
* **`$nb-use-pull-offsets`** 
A boolean to use the Grid and utility pull offset classes.  Setting to `false` will reduce compiled output bundle size.
* **`$nb-offset-fractions`** 
A Sass map containing all of the width/push/pull fractions used in Nebula's grid and corresponding utilities.
* **`$nb-push-sizes`** 
A Sass map containing sizes for the push utility.
* **`$nb-soft-sizes`** 
A Sass map containing sizes for the soft utility.
