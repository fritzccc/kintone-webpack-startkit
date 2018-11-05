const path = require('path')

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: ['babel-polyfill', './main.js']
  },
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
