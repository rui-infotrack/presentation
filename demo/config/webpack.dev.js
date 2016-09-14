var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./helpers');

module.exports = webpackMerge.smart(commonConfig, {
  entry: {
    // app: helpers.root('client', 'WebpackDemo.js')
    app: helpers.root('client', 'ReactDemo.js')
  },

  output: {
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [
    new ExtractTextPlugin('app.css')
  ],

  devServer: {
    contentBase: helpers.root('client'),
    hot: true
  }
});
