* Strips list styling from HTML lists and renders them horizontally in a uniformed fashion.
* Can be given an optional breakpoint, below which the list will stack vertically.
* Anything can be nested inside of the list items, images, test, any other component.

### Note
It is not recommended that you augment the Uniformed list elements with additional styling, instead we encourage you to nest
other elements inside and style them.

### React Props
#### `<UniformedList.Wrapper />`
* **`breakpoint :oneOf['xs', 'sm', 'md', 'lg'] [optional]`**  
Sets the spacing, across all breakpoints or by specific breakpoint(s) (mobile first).
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<ul>`.

#### `<UniformedList.Item />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<li>`.
