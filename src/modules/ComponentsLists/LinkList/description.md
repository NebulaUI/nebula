* Strips list styling from HTML lists and stacks vertically.
* Links are highlighted when hovered or active.


### React Props
#### `<LinkList.Wrapper />`
* `spacing :oneOf['sm', 'md'] [optional]` 
Spacing between list items.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<ul>`.

#### `<LinkList.Item />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<li>`.

#### `<LinkList.Group />`
* `divider :bool [optional]`  
Adds padding and a border at the bottom of the group.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<ul>`.

#### `<LinkList.Content />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<LinkList.Link />`
* `to :string [optional]`  
Populates the `href` attribute on the descendant `<a />`.
* `component :oneOfType[:Function, :node] [optional]`    
Allows the use of Routing libraries such as React Router. passing in a `<Link />` or `<NavLink />` component.
* `activeClassName :String [optional]`  
Used by React Router, the default is `is-active`. This can be overriden via this prop.
* `onClick :function [optional]`  
Pass in a click handler.
