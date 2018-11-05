const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const os = require('os');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
  output: {
    path: path.join(os.homedir(), 'Dropbox/kintone'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
    }),
  ],
});
