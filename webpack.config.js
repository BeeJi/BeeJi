var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
  new ExtractTextPlugin('/[name].css'),
  //new webpack.optimize.UglifyJsPlugin({minimize: false})
];

module.exports = {
  entry: {
    beeji: './src/index.js'
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: [ 'transform-runtime' ],
          presets: [ 'es2015', 'stage-0' ]
        }
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
    ]
  },
  postcss: function() {
    return [require('autoprefixer'), require('precss')];
  },

  plugins: plugins
};
