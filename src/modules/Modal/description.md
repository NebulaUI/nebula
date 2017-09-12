* Built with accessibility in mind using relevant aria attributes.
* Keyboard friendly, focus locked to modal while active, returns to opening element when closed.
* Mobile friendly (Can scroll within modal for larger amounts of content).
* Controlled component whereby the state of it being open / closed is controlled by the consumer.

### React Props

#### `<Modal.Wrapper />`
* `closeModal :Function [required]`  
Callback function that fires when the modal is attempting to close,
used as a hook by the consumer to update the open/close state.
* `ariaLabel :String [required]`  
A string to ensure correct `aria-label` is applied,
* `timeout :Number [optional]`  
length of time (ms) before the modal automatically closes.
* `alignTop :bool [optional]`  
Align the modal dialog to the top of the viewport.
* `width :Number [optional]`  
Configure the width of the modal (default 600px).
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Modal.Overlay />`
* `clickToClose :bool [optional]`  
clicking the overlay will cause the modal to close with this set.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<button>`.
* This is an optional component.

#### `<Modal.Body />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Modal.Content />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Modal.Close />`
* Just renders a single child that when clicked closes the modal.

#### `<Modal.Dismiss />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<button>`.

