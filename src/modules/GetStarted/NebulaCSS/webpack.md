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
        autoprefixer({ browsers: ['last 2 versions', 'ie 9-11'] })
      ]
    }
  }, {
    loader: 'sass-loader'
  }]
}
```