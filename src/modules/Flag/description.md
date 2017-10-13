* Throws fluid and fixed width content side by side vertically aligning the two items. The dimensions of flag component
are dictated by the space occupied by its descendants.
The flag body will take up all the remaining space within the flags parent container.
* Because you can combine fluid and fixed width components together the flag provides a very powerful layout tool, it
can be composed with the grid in many interesting and useful ways.  It is also very useful for vertically aligning content.
* Anything can be nested inside of the Flag Body or Flag Component including other Flags, Grids, Images, text, Components.

### Note

It is not recommended that you augment the Flag elements with additional styling, instead we encourage you to nest other
elements inside and style them. As you can see in this example we have nested the content within.

### React Props

#### `<Flag.Wrapper />`
* **`reverse :bool [optional]`**  
Reverses the gutter on the Flag.  The source order of `<Flag.Body />` and `<Flag.Component />` should also be reversed.
* **`breakpoint :oneOf['xs', 'sm', 'md', 'lg'] [optional]`**  
Viewports smaller than the defined breakpoints will cause the flag to stack vertically.
* **`align :oneOf['top', 'bottom'] [optional]`**  
Vertical alignment  of `<Flag.Body />` and `<Flag.Component />`.  By default it is aligned to the center.
* **`gutter :oneOf['md'] [optional]`**  
The gutter between `<Flag.Body />` and `<Flag.Component />`.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Flag.Body />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Flag.Component />`
* **`nowrap :bool [optional]`**  
Prevents text wrapping. Due to the nature of the flag, words will wrap unless this prop is set.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.

