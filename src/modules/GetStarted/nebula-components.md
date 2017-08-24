`yarn add nebula-components`

## Setup ITCSS structure

Paste the following into your terminal:
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
touch _settings.scss _tools.scss _resets.scss _base.scss _objects.scss _components.scss _utilities.scss
cd ..
```

And populate `main.scss` with the following imports:
```scss
/* main.scss */
@import 'settings';
@import 'tools';
@import 'resets';
@import 'base';
@import 'objects';
@import 'components';
@import 'utilities';
```

The blank files imported above should be populated in order to imports its specific ITCSS layer from Luna:
```scss
/* _settings.scss */
@import '/node_modules/nebula-components/nebula-components/settings';
```

Complete for all remaining files within the `scss/` directory.

**Note:**
* If you're using [node-sass](https://github.com/sass/node-sass) as your Sass compiler (recommended) you can use [IncludePaths](https://github.com/sass/node-sass#includepaths) to tidy up your nebula Sass imports.
An example Sass loader (Webpack) config could be

```javascript
{
  loader: 'sass-loader',
  options: {
    includePaths: [
      path.resolve(__dirname, 'node_modules/nebula-css'),
      path.resolve(__dirname, 'node_modules/nebula-components')
    ]
  }
}
```

An equivalent example with NPM scripts would be
```json
"sass": "node-sass --include-path ./node_modules/nebula-css/ --include-path ./node_modules/nebula-components/ -o dist src/scss/main.scss"
```

Then the above import would look like
```scss
/* _settings.scss */
@import 'nebula-components/settings';
```
