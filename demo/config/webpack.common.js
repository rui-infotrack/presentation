var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [helpers.root('client')],
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]!stylus'
        )
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        include: [helpers.root('client')],
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    alias: {
    },
  }
};
