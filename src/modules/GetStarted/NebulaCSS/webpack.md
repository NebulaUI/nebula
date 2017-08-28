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