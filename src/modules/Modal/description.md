* Fully Ariia accessible Modal Dialog
* Keyboard friendly
* Mobile friendly (Can scroll within modal for larger amounts of content).
* Controlled component whereby the state of it being open / closed is controlelled by the consumer.

### React Props

#### `<Modal.Wrapper />`
* `closeModal :Function [required]`  
Callback funcion that fires when the modal is attempting to close,
used as a hook by the consumer to update the open/close state
* `ariaLabel :String [required]`  
A string to ensure correct `aria-label` is applied
* `timeout :Number [optional]`  
length of time (ms) before the modal automatically closes
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Modal.Overlay />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<button>`.
* This is an optional component.