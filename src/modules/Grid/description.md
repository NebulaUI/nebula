* Fractional based grid contains one-whole, halves, thirds, quarters, fifths, sixths, eighths, tenths, twelfths.
* The grid is composable by nature allowing you to nest anything within grid items, that includes but not limited
to grids, flags, cards - literally anything!  This composable nature allows an infinite number of layout combinations.
* It's fully responsive and highly customisable as the provided options here demonstrate.
* Unlike some other grids it does not break when it's items are of differing heights when they are intended to tile.

### Note
It is not recommended that you augment the grid elements with additional styling, instead we encourage you to nest
other elements inside and style them.  As you can see in this example we have nested the `<Card />` component within.

### React Props
#### `<Grid.Wrapper />`
* `gutter :oneOf | :arrayOf['range of :String values'] [optional]`  
Sets the gutter size, across all breakpoints or by specific breakpoint(s) (mobile first).
* `matrix :bool [optional]`  
Applies vertical guttering that matches horizonal gutters.
* `equalHeight :bool [optional]`  
Makes all the `<Grid.Item>`s on a given row equal in height.
* `reverse :bool [optional]`  
Reverses grid items horizontally.
* `align :oneOf['center', 'bottom'] [optional]`  
Vertical alignment of `<Grid.Item>`s.  Defaults to top.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Grid.Item />`
* `width :oneOf | :arrayOf['range of :String values'] [optional]`  
Set the width of the `<Grid.Item />` (%) across all breakpoints or by specific breakpoint(s) (mobile first).
* `push :oneOf | :arrayOf['range of :String values'] [optional]`  
Set the position of the `<Grid.Item />` (%) across all breakpoints or by specific breakpoint(s) (mobile first).
* `pull :oneOf | :arrayOf['range of :String values'] [optional]`  
Set the position of the `<Grid.Item />` (%) across all breakpoints or by specific breakpoint(s) (mobile first).
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.
