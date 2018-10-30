const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'development',

  target: 'web',

  entry: {
    main: path.resolve(root, 'client/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(root, 'public'),
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|expUiComponents)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          priority: -10,
        },
      },
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ManifestPlugin(),
    new CaseSensitivePathsPlugin(),
  ],
};
