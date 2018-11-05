const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  devtool: false,
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
    }),
  ],
});