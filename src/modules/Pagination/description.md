* Passing a `to` prop will ensure the button renders as a `<a />`
* Compatible with React Router (v3/v4).

### React props

#### `<Button />`
* `size :oneOf['sm', 'md', 'lg'] [optional]`  
Adds padding to the button.
* `theme :oneOf['alpha', 'beta'] [optional]'`  
Adds a theme to the button (background and hover colors).
* `fullWidth :Bool [optional]`  
Makes the button occupy the fill width of it's container.
* `to :String [optional]`  
Makes the button a `<a />` populating the `href` attribute with the `to` prop.
* `type :oneOf['submit', 'reset', 'menu'] [optional]`  
Passed through to the button as a `type` attribute.
* `component :oneOfType[:Function, :node] [optional]`    
Allows the use of Routing libraries such as React Router. passing in a `<Link />` or `<NavLink />` component.
* `tag :String [optional]`  
Render a specified HTML tag.
