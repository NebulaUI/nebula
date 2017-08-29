Next add the required loaders to your [webpack](https://webpack.github.io/) config.  They will need to be installed via your dependency manager.

The example below should be adjusted to suit your project needs.

```javascript
{
  test: /\.s?css$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer()]
    }
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname, 'node_modules/nebula-css')]
    }
  }]
}
```
You will also likely want to use Autoprefixer as demonstrated above to add in any necessary vendor prefixes.
We recommend that you configure Autoprefixer with [browserslist](https://www.npmjs.com/package/browserslist)

[complete webpack config example](https://github.com/rbrtsmith/nebula/blob/master/webpack.config.babel.js)

Finally import your styles at the root of your JavaScript application.

```javascript
// src/index.js
import './scss/main.scss'
```