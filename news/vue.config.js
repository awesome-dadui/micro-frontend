module.exports = {
  publicPath: "./",
  devServer: {
    port: 9006,
  },
  configureWebpack: {
    output: {
      filename: "news.js",
      library: "news",
      libraryTarget: "umd",
    },
  }
}
