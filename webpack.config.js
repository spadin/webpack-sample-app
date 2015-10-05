module.exports = {
  context: __dirname + '/src',
  entry: {
    application: ['./application']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        optional: ['runtime'],
        stage: 0
      }
    }]
  }
};

