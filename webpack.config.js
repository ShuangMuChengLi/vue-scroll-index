var path = require("path");
const MinifyPlugin = require('babel-minify-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool:'none',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "vue-scroll-index.js",
    library: "vue-removable",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new MinifyPlugin({
      removeConsole:true
    }),
  ]
};
