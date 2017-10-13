A responsive navbar that can include dropdowns, secondary content that can be positioned.
Breakpoint defined in Sass variables.

### React Props
Takes the same props as native text inputs in React.

#### `<Navbar.Wrapper />`
* **`sticky :bool [optional]`**  
Make the navbar stick to the top of the viewport.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<header>`.

#### `<Navbar.Overlay />`
* **`onClick :function [optional]`**  
Override the default click handler.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<button>`.

#### `<Navbar.Inner />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<nav>`.

#### `<Navbar.Toggle.Wrapper />`
* **`onClick :function [optional]`**  
Override the default click handler.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<button>`.

#### `<Navbar.Toggle.Bars />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<span>`.

#### `<Navbar.Logo />`
* **`onClick :function [optional]`**  
Pass in a click handler.
* **`to :string [optional]`**  
Populates the `href` attribute on the descendant `<a />`.
* **`width: string [optional]`**  
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<button>`.

#### `<Navbar.Content.Wrapper />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<nav>`.

#### `<Navbar.Content />`
* **`keepAtTop :bool [optional]`**  
Keeps the content at the top of the navbar when it's collapsed (small screens) allowing it to be accessed without opening the navbar.
* **`right :bool [optional]`**  
Align to the right.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<ul>`.

#### `<Navbar.Item />`
* **`resetLineHeight :bool [optional]`**  
The Navbar aligns it's content with a fixed line-height.  To enable certain types of content to be vertically aligned such as buttons the line height for them needs resetting.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<li>`.

#### `<Navbar.Link />`
* **`to :string [optional]`**  
Populates the `href` attribute on the descendant `<a />`.
* **`component :oneOfType[:Function, :node] [optional]`  **  
Allows the use of Routing libraries such as React Router. passing in a `<Link />` or `<NavLink />` component.
* **`activeClassName :String [optional]`**  
Used by React Router, the default is `is-active`. This can be overriden via this prop.
* **`onClick :function [optional]`**  
Pass in a click handler.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<a>`.

#### `<Navbar.Dropdown.Wrapper />`
* **`clickOutsideToClose :bool [optional]`**  
Enables clicking outside to close the dropdown.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<li>`.

#### `<Navbar.Dropdown.Toggle />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<button>`.

#### `<Navbar.Dropdown.Content />`
* **`southWest :bool [optional]`**  
Override the default dropdown position `southEast`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<button>`.
