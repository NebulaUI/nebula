Next add the required loaders to your webpack config.  They will need to be installed via your dependency manager.

The example below should be adjusted to suit your project needs.

**Note** Nebula React ships with transpiled code so does not have a dependency on [Babel](https://babeljs.io/), however if you are using JSX in your
React components you will then require Babel with the appropriate presets.

```javascript
{ test: /\.jsx?$/, use: 'babel-loader' },
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

<h2>4. Import styles</h2>

```javascript
// src/index.js
import './scss/main.scss'
```