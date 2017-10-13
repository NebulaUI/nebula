* Compatible with React Router (v3/v4).

### React props

#### `<Pagination.Wrapper />`
* **`tag :String [optional]`**  
Render a specified HTML tag rather than the default `<nav />`.

#### `<Pagination.Item />`
* **`tag :String [optional]`**  
Render a specified HTML tag rather than the default `<li />`.

#### `<Pagination.Link />`
* **`component :oneOfType[:Function, :node] [optional]`**  
Allows the use of Routing libraries such as React Router. passing in a `<Link />` or `<NavLink />` component.
* **`isActive :bool [optional]`**  
Not required if using React Router `<Link />` or `<NavLink />`.
* **`activeClassName :string [optional]`**  
Override the default `is-active`.
* **`to :string [optional]`**  
Passed as the `to` prop to React Router `<Link />` / `<NavLink />` if `component` prop is populated OR as the `href` attribute to the rendered `<a />`
* **`onClick :func [optional]`**  
Callback to handle click events.
* **`disabled :bool [optional]`**  
* **`previous :bool [optional]`**  
Renders with left facing chevrons & optional text if passed as children.
* **`next :bool [optional]`**  
Renders with right facing chevrons & optional text if passed as children.
* **`tag :String [optional]`**  
Render a specified HTML tag rather than the default `<a />`.
