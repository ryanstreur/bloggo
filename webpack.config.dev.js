const path = require("path");
const webpackUtils = require("./webpack.utils");

module.exports = {
  entry: {
    orbits: "./src/orbit.js",
    test: "./src/test.js"
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./static/dist"),
    filename: "[name].bundle.js"
  },
  module: webpackUtils.webpackModule,
  mode: "development"
};
