## Setup ITCSS structure

`cd` into your source directroy and paste the following into your terminal:
```bash
mkdir scss &&
cd scss &&
{
  echo "@import 'settings';"
  echo "@import 'tools';"
  echo "@import 'resets';"
  echo "@import 'base';"
  echo "@import 'objects';"
  echo "@import 'components';"
  echo "@import 'utilities';"
  echo ""
} > main.scss &&
{
  echo "@import '/node_modules/nebula-css/nebula-css/settings';"
} > _settings.scss &&
{
  echo "@import '/node_modules/nebula-css/nebula-css/tools';"
} > _tools.scss &&
{
  echo "@import '/node_modules/nebula-css/nebula-css/resets';"
} > _resets.scss &&
{
  echo "@import '/node_modules/nebula-css/nebula-css/base';"
} > _base.scss &&
{
  echo "@import '/node_modules/nebula-css/nebula-css/objects';"
} > _objects.scss &&
{
  echo "@import '/node_modules/nebula-css/nebula-css/utilities';"
} > _utilities.scss &&
touch _components.scss
cd ..
```

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
