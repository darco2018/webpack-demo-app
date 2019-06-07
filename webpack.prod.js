/* eslint-disable import/no-extraneous-dependencies */
//------------------------------------------------
const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PostcssPresetEnv = require("postcss-preset-env");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const common = require("./webpack.common");

module.exports = merge(common.webpackData, {
  devtool: "source-map", // useful for debugging as well as running benchmark tests. one with a fairly quick build speed
  mode: "production",
  output: {
    filename: path.join(
      common.PATHS.assetsPublic,
      "javascripts",
      "[name].[contentHash].bundle.js"
    ),
    path: common.PATHS.dist
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(".", "src", "index.html"),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: common.PATHS.app,
        from: "**/*",
        to: common.PATHS.dist,
        ignore: [
          "public/*",
          "**/*index.html",
          "private/*",
          "scripts/*",
          "notes.txt"
        ]
      }
    ]),
    new MiniCssExtractPlugin({
      filename: path.join(
        common.PATHS.assetsPublic,
        "stylesheets",
        "[name].[contentHash].css"
      )
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin() // vendor hash should stay consistent between builds
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          "css-loader", // 2. Turns css into commonjs. Can see them in bundle.js
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [new PostcssPresetEnv(/* pluginOptions */)]
            }
          },
          "sass-loader" // 1. Turns sass into css
        ]
      },
      {
        test: /\.(svg|png|jp?eg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 5000,
            name: "[name].[hash].[ext]",
            outputPath: path.join(common.PATHS.assetsPublic, "images")
          }
        }
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|someOtherDir)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"] // it can choose which features to compile and which polyfills to enable based on your browserlist
          }
        }
      }
    ]
  }
});
