* Site Wrap is a content container that typically wraps the main content of an app or website.
* Anything can be nested inside of Site Wrap, images, test, any other component.

### Note
Due to the content of this application already being nested inside of a SiteWrap the padding on the demonstration here
is more than would be if used in isolation.  You would not normally nest Site Wrap objects inside of one another.
It is not recommended that you augment the Site Wrap element with additional styling, instead we encourage you to nest
other elements inside and style them.

### React Props
#### `<SiteWrap />`
* `padding :bool [optional]`  
Adds padding to the left and right.
* `tag :String [optional]`  
Allows the rendered HTML tag to be overridden from the default `<div>`.
