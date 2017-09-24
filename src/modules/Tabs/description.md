* Displays the corresponding panel to the active tab.  State of the the tabs is handled internally by Nebula React
* Any content can reside inside of the Tabs and Panels, icons, images other React components etc...
* Fully accessible with appropriate aria attributes, keyboard navigation via arrow keys.
* Only renders markup for the active tab panel rather than using CSS to show/hide.

### React Props
#### `<Tabs.Wrapper />`
* `defaultActiveId :String [optional]`  
The default active tab - It should match the `id` prop for the corresponding `<Tabs.Panel />` Setting this prop still alllows the tabs state to be controlled internally.
* `activeId :String [optional]`  
This makes the Tabs a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components) meaning that this props controls which tab is active.
rather than that state being heled internally allowing for integration with tools such as Redux.  
`defaultActiveId` prop has no effect when using `activeId`.
* `onChange :Function [optional]`  
A callback function that gets called whenever the active tab changes.  It gets called with a single argument `id` corresponding to the `id` of the tab being selected.
Can be used in conjunction with `activeId` to manage the state of the tabs externally, or to update a query string amongst other things.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Tabs.TabList />`
* `spreadItems :bool [optional]`  
Spreads out the tabs so they take up an even amount of space.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Tabs.Tab />`
* `target :String [required]`  
Should match the `id` prop of the corresponding `<Tabs.Panel />`.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Tabs.Panel />`
* `id :String [required]`
Should match the `id` prop of the corresponding `<Tabs.Tab />`
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.
