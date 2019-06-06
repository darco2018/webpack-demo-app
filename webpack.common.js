/* eslint-disable import/no-extraneous-dependencies */
//------------------------------------------------
const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const PATHS = {
  app: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
  assetsPublic: "public"
};

const webpackData = {
  entry: {
    main: "./src/app.js", // default:  "./src/index.js",
    vendor: "./src/public/javascripts/vendor/vendor.js"
  },
  plugins: [
    new StyleLintPlugin({
      files: "**/*.s?(a|c)ss", // default
      failOnError: true, // true = stylelint error will break webpack build
      emitErrors: false, // reports errors as warnings
      quiet: false // true = avoid error output to the console.
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        // pre - not modified by other loaders. Anyway, loaders work from bottom to top
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader"
        // as soon as config file .eslintrc appears VS starts finding JS errors & correcting them on save
        // they can be seen in PROBLEMS
      }
    ]
  }
};

module.exports = {
  PATHS,
  webpackData
};
