const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: "home",
    libraryTarget: "umd",
  },
}