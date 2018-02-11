const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    "bundle": "./browser.js",
    "bundle.min": "./browser.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};