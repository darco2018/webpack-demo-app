const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
}


const webpackData = {
  
  entry: {
    main: "./src/app.js", // default:  "./src/index.js",
    vendor: "./src/public/javascripts/vendor/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
    ]
  }
};

module.exports = {
  PATHS,
  webpackData
}
