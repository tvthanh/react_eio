const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/client/index.html',
  filename: 'index.html'
});

module.exports = {
  entry: {
    'app': './app/client/App.jsx'
  },
  output: {
    path: path.resolve('dist'),
    publicPath: 'http://localhost:3333/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
