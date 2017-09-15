* Strips list styling from HTML lists and stacks the items horizontally.
* List items can optionally be spaced across all or specified breakpoints (mobile first).
* The Matrix list (Unlike Inline List) will add vertical spacing mirroring the horizontal spacing.
* Anything can be nested inside of the list items, images, test, any other component.

### Note
It is not recommended that you augment the Matrix list elements with additional styling, instead we encourage you to nest
other elements inside and style them.

### React Props
#### `<MatrixList.Wrapper />`
* `spacing :oneOf | :arrayOf['range of :String values'] [optional]`  
Sets the spacing, across all breakpoints or by specific breakpoint(s) (mobile first).
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<ul>`.

#### `<MatrixList.Item />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<li>`.
