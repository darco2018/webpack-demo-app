/* eslint-disable import/no-extraneous-dependencies */
//------------------------------------------------

const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common.webpackData, {
  devtool: "cheap-module-eval-source-map", // devtool: "eval-source-map", is the highest quality option of the inline options. It's also the slowest one as it emits the most data:

  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: common.PATHS.dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(".", "src", "index.html")
    })
  ],
  // "webpack --mode production --module-bind js=babel-loader"
  // loader-runner allows you to run loaders in isolation without webpack.
  // inspect-loader allows you to inspect what's being passed between loaders.
  // careful with loader ordering! right to left
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Compiles Sass to CSS, using Node Sass by default
        ]
      },
      /* The "loadImages" configuration defaults to url-loader during development and uses both url-loader and file-loader
in production to maintain smaller bundle sizes.
  url-loader uses file-loader implicitly when limit is set,
  file-loader outputs image files and returns paths to them instead of inlining.
  Below the limit, it should inline the image while above it should emit a separate asset and a path to it.
  The CSS lookup works because of css-loader. You can also try importing the image from JavaScript code and see what happens.
  Be careful not to apply both loaders on images at the same time! */
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
    ]
  }
});
