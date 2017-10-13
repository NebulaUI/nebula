* Renders an SVG with some optional text to the left/right

### React Props

#### `<Icon />`
* **`icon :oneOf[svgImport, React Component] [required]`**  
Like in the code exmaple you can import an SVG icon and pass it to the component using an appropriate webpack loader.
Nebula supports [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) for this component.
Otherwise you can create a React Component that staticaly renders an SVG and pass that into the `icon` prop.
* **`iconPosition :oneOf['left', 'right'] [optional]`**  
Position the icon relative to children.
* **`verticalAlign :String [optional]`**  
Vertical alignment of the icon and it's children relative to adjacent elements.
* **`width :String [optional]`**  
* **`height :String [optional]`**   
* **`fill :String [optional]`**  
* **`stroke :String [optional]`**  
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.
