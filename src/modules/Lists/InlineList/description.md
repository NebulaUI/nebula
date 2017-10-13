* Strips list styling from HTML lists and stacks the items horizontally.
* List items can optionally be spaced across all or specified breakpoints (mobile first).
* Anything can be nested inside of the list items, images, test, any other component.

### Note
It is not recommended that you augment the Inline list elements with additional styling, instead we encourage you to nest
other elements inside and style them.

### React Props
#### `<InlineList.Wrapper />`
* **`spacing :oneOf | :arrayOf['range of :String values'] [optional]`**  
Sets the spacing, across all breakpoints or by specific breakpoint(s) (mobile first).
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<ul>`.

#### `<InlineList.Item />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<li>`.
