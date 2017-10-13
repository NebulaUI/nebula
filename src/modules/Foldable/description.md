* Allows for foldable content at set breakpoints or across all viewports.
* Any content can reside inside of the Foldable head and body, icons, images other React components etc...
* Fully accessible, allows for toggling of foldable content via spacebar and return keys
* Only renders markup for the content when expanded

### React Props
#### `<Foldable.Wrapper />`
* **`defaultOpen :oneOf['open', 'closed'] [optional]`**  
Determines the initial expanded/collapsed state.
* **`open :oneOf['open', 'open'] [optional]`**  
Makes foldable a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components)
meaning the value of this prop rather than the component's internal state control it's open/closed state.
* **`onChange :Function [optional]`**  
A callback function that gets called when the foldable component is about to expand / collapse. it's current state is passed.
* **`breakpoint :oneOf['max-lg', 'max-md', 'max-sm', 'max-xs'] [optional]`**  
Determines what CSS breakpoint it turns from static content to foldable.
* **`bordered :bool [optional]`**  
Adds border styling.
* **`id :String [optional]`**  
used to handle `aria-controls` and `id` properties for the content.  If not defined a random id is generated.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Foldable.Header />`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Foldable.Body />`
* **`transition :bool [optional]`**  
Transition the height when opening and closing (default duration 300ms).
* **`transitionDuration :number [optional]`**  
When used in conjunction with `transition` can be used to override the default duration time.
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.
