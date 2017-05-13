// config/webpack.js

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

// compile js assets into a single bundle file
module.exports.webpack = {
  options: {
    context: path.join(__dirname, '..'),

    devtool: 'eval',

    // entry: [
    //   './assets/js/*js',
    //   // 'webpack-hot-middleware/client'
    // ],
    entry: {
        app: [ path.resolve(__dirname, '../assets/js', 'systemjs.config') ]
        // vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },

    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      publicPath: "/",
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      /* Copy sails.io.js unmolested: */
      new CopyWebpackPlugin([
        {
          from: 'assets/js/dependencies',
          to: 'dependencies',
          force: true
        }
      ]),
    ],

    resolve: {
      extensions: [
        '',
        '.js',
        // '.jsx',
        '.ts',
        '.html'
      ]
    },

    module: {
      loaders: [
        // {
        //   test: /\.jsx?$/,
        //   exclude: /(bower_components|node_modules)/,
        //   loader: 'babel',
        // },
        { loader: 'raw', test: /\.(css|html)$/ },
       {  loader: 'ts', test: /\.ts$/ },
        { test: /\.css$/, loader: 'style!css' },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          loader: "file" 
        },
        
      ],

      preLoaders: [
            { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ }
        ]
    }
  },

  // docs: https://webpack.github.io/docs/node.js-api.html#compiler
  watchOptions: {
    aggregateTimeout: 300
  }
};
