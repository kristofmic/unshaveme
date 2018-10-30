const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackBase = require('./webpack.config.dev');

module.exports = merge(webpackBase, {
  mode: 'production',

  output: {
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].min.js',
    publicPath: '/public',
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
    ],
  },
});
