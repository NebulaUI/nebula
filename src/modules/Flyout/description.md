* Flyout content that can be opened and closed
* Fully accessible and keyboard friendly.
* Only renders the markup for the content when open.

### React props

#### `<Flyout.Wrapper>`
* `direction :oneOf['nw', 'ne', 'sw', 'se'] [required]`  
Sets the direction of `<Flyout.Content />` relative to
`<Flyout.Wrapper>`.
* `defaultOpen :oneOf['open', 'closed'] [optional]`  
Determines the initial open / closed state.
* `isOpen :oneOf['open', 'closed'] [optional]`  
Makes Flyout a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components)
meaning the value of this prop rather than the component's
internal state control whether or not it's open.
* `onFlyoutChange :Function [optional]`  
A callback function that gets called when the Flyout component is about to open / closed. it's current state is passed.
* `clickOutsideToClose :bool [optional]`
Setting this prop will ensure that the flyout closes when
a click event outside occurs.
* `node :String [optional]`  
Allows the rendered HTML node to be overridden from the default `<div>`.

#### `<Flyout.Toggle>`
* Doesn't expect any props as it just decorates it's direct child with the ability to close the flyout.
It only expects a single child element not an array and ideally that should be a button to ensure it is accessible.

#### `<Flyout.Content />`
* `node :String [optional]`  
Allows the rendered HTML node to be overridden from the default `<div>`.