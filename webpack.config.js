const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: ['babel-polyfill', './main.js']
  },
  output: {
    path: `${__dirname}/dist`,
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
      sourceMap: true,
      parallel: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [
              'env',
              {
                targets: { browsers: ['last 2 versions'] },
                modules: false,
              },
            ],
          ],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: path.join(__dirname, 'node_modules/kintone-utility/docs/kintoneUtility'),
        loader: 'exports-loader?kintoneUtility',
      },
    ],
  },
  resolve: {
    alias: {
      // vue$: 'vue/dist/vue.esm.js',
    },
  },
}
