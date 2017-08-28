Next add the required loaders to your webpack config.  They will need to be installed via your dependency manager.

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
      plugins: () => [
        autoprefixer()
      ]
    }
  }, {
    loader: 'sass-loader'
  }]
}
```
You will also likely want to use Autoprefixer as demonstrated above to add in any necessary vendor prefixes.
We recommend that you configure Autoprefixer with [browserslist](https://www.npmjs.com/package/browserslist)

Finally import your styles at the root of your JavaScript application.

```javascript
// src/index.js
import './scss/main.scss'
```