module.exports = {
  entry: {
    bee: './src/index.js'
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
      }
    ]
  }
};
