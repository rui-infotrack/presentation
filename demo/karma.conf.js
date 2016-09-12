var helpers = require('./config/helpers');
module.exports = function(config) {
  config.set({

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/client/index.js'
    ],

    frameworks: ['mocha'],

    preprocessors: {
      'test/client/index.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            include: [helpers.root('test', 'client')],
            loaders: [
              'babel-loader'
            ]
          }
        ]
      },
      resolve: {
        modulesDirectories: [
          '',
          'src',
          'node_modules'
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-phantomjs-launcher'),
    ],

    browsers: ['PhantomJS']
  });
};
