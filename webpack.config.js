module.exports = {
  entry: ['./public/src/index.js'],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
};