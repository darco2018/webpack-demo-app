
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common.webpackData, {
  
  devtool: "cheap-module-eval-source-map", // devtool: "eval-source-map", is the highest quality option of the inline options. It's also the slowest one as it emits the most data:
  
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: common.PATHS.dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(".", "src", "index.html"),
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
