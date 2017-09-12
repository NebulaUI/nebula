* Comes with three sizes (sm, md, lg)
* Comes with two themes (alpha, beta)

### React props

#### `<ButtonDropdown.Wrapper>`
* `togglePosition :oneOf['left', 'right'] [required]`  
The location of the toggle relative to the button.
* `defaultOpen :oneOf['open', 'closed'] [optional]`  
Determine if the button is open on initial mount.
* `isOpen :oneOf['open', 'closed'] [optional]`  
Makes this a controlled component whereby the consumer controls the open/close state rather than it being internally controlled.
* `onButtonDropdownChange [optional]`  
Callback functions that fires when the dropdown opens / closes.  Can be used to control the `isOpen` prop.
* `clickOutsideToClose [optional]`  
Closes the dropdown when a click event occurs outside of the component.
* `fullWidth :String [optional]`  
Set the button to full width of the containing element.
* `disabled [optional]`  
Disables the dropdown and the button.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.
#### `<Button /> [Required Component]`
* `size :oneOf['sm', 'md', 'lg'] [optional]`
* `theme :oneOf['alpha', 'beta'] [optional]'`
* `fullWidth :Bool [optional]`
* `to :String [optional]`
* `type :oneOf['submit', 'reset', 'menu', 'link'] [optional]`
* `component :oneOfType[:Function, :node] [optional]`
* `node :String [optional]`
