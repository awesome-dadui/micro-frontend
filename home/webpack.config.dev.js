const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: "home",
    libraryTarget: "umd",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    }),
  ],
  devServer: {
    static: "./",
    compress: true,
    port: 9000,
    hot: true
  },
}