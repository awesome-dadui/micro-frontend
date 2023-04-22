console.log('vue.config.js')

module.exports = {
  publicPath: "./",
  configureWebpack: {
    output: {
      filename: "news.js",
      library: "news",
      libraryTarget: "umd",
    }
  }
}