## Setup ITCSS structure

`cd` into your source directroy and paste the following into your terminal:

**Note:**
* Nebula CSS does not ship with a `components` layer so attempting to import it will result in an error.
* If you're using [node-sass](https://github.com/sass/node-sass) as your Sass compiler (recommended) you can use [IncludePaths](https://github.com/sass/node-sass#includepaths) to tidy up your nebula Sass imports.
An example Sass loader (Webpack) config could be

```javascript
{
  loader: 'sass-loader',
  options: {
    includePaths: [path.resolve(__dirname, 'node_modules/nebula-css')]
  }
}
```

An equivalent example with NPM scripts would be
```json
"sass": "node-sass --include-path ./node_modules/nebula-css/ -o dist src/scss/main.scss"
```

Then the above import would look like
```scss
/* _settings.scss */
@import 'nebula-css/settings';
```
