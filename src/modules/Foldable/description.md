* Allows for foldable content at set breakpoints or across all viewports.
* Any content can reside inside of the Foldable head and body, icons, images other React components etc...
* Fully accessible, allows for toggling of foldable content via spacebar and return keys
* Only renders markup for the content when expanded

### React Props
#### `<Foldable.Wrapper />`
* `defaultExpanded :String [optional]` values: `oneOf(['expanded', 'collapsed'])`
  Determines the initial expanded/collapsed state.
* `expanded :String [optional]` values: `oneOf(['expanded', 'collapsed'])`
This makes foldable a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components)
meaning the value of this prop rather than the component's internal state control it's expanded/collapsed state.
* `onFoldableChange :Function [optional]`
A callback function that gets called whenever the foldable component changes.  It gets called with a single argument `['expanded' | 'collapsed']`.
It's paired with `expanded` to allow external control.
* `breakpoint :String [optional]`
values: `oneOf(['max-lg', 'max-md', 'max-sm', 'max-xs'])`
