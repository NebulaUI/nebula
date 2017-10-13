Small enclosed visual indicator to give prominence to important segments of content.
### React Props

#### `<Pill>`
* **`status :oneOf['success', 'info', 'warning', 'error'] [required]`**  
Sets the status of the card causing it to render with a corresponding border-color.
* **`to :String [optional]`**  
Makes the pill a `<a />` populating the `href` attribute with the `to` prop.
* **`component :oneOfType[:Function, :node] [optional]`**  
Allows the use of Routing libraries such as React Router. passing in a `<Link />` or `<NavLink />` component.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.
