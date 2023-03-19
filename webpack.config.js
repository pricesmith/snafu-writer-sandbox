const path = require("path");

module.exports = {

    entry: path.resolve(__dirname, "./src/index.ts"),

    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          loader: "raw-loader",
        },
      ],
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    output: {
      filename: "script.js",
      path: path.resolve(__dirname, "public", "static", "bundle"),
    }

};