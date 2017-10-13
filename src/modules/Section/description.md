* Section adds padding top and bottom to the container to assist with spacing out sections on a page / application.
* Anything can be nested inside of Section, images, test, any other component.


### Note
It is not recommended that you augment the Section element with additional styling, instead we encourage you to nest
other elements inside and style them.

### React Props
#### `<Section />`
* **`size :oneOf | :arrayOf['range of :String values'] [optional]`**  
Sets the spacing, across all breakpoints or by specific breakpoint(s) (mobile first).
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<section>`.
