
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

// Build the C-like library
module.exports = {
  entry: [ "./dist/index.js" ],
  output: {
    filename: "transformerBundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "assemblyscript",
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  devtool: "source-map",
  performance: {
    hints : false
  }
};