const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '/src'),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },

  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          __dirname + '/src'
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
      {
        test: /\.svg$/,
        loader: 'babel!svg-react'
      }
    ]
  }
}
