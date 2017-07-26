let webpack = require('webpack')

module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",

  output: {
    filename: "index.js",
    path: __dirname + "dist"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          __dirname + "/src"
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
    ]
  }
}
