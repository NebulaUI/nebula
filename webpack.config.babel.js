import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const common = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/nebula',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
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
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, 'node_modules/nebula-css'),
              path.resolve(__dirname, 'node_modules/nebula-components')
            ]
          }
        }]
      },
      {
        test: /\.jpg|png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 40000
          }
        }]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          }, {
            loader: 'markdown-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'svg-sprite-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/404.html'
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx']
  }
}

const dev = {
  devServer: {
    historyApiFallback: {
      index: '/nebula/index.html'
    }
  },
  devtool: 'source-map'
}

const prod = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
}

const config = (env) => {
  switch (env) {
    case 'build':
      return merge(common, prod)
    case 'start':
      return merge(common, dev)
    default:
      return common
  }
}

export default config(process.env.npm_lifecycle_event)
