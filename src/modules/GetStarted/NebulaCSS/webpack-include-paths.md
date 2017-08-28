Next add the required loaders to your webpack config.  They will need to be installed via your dependency manager.

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
      includePaths: [
        path.resolve(__dirname, 'node_modules/nebula-css'),
        path.resolve(__dirname, 'node_modules/nebula-components')
      ]
    }
  }]
}
```

You will then want to import your styles at the root of your JavaScript application.

```javascript
// src/index.js
import './scss/main.scss'
```