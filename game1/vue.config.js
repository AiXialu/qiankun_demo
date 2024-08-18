module.exports = {
  configureWebpack: {
    output: {
      library: `game1`,
      libraryTarget: "umd",
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 8080,
  },
};
