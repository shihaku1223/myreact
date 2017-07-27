const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './app/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
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
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
      }
    ]
  },

  plugins: [
      new HtmlWebpackPlugin({
        title: 'MyReact App',
        filename: 'index.html',
        inject: 'body',
        template: path.resolve(__dirname, 'public/index.tmpl.html'),
    }),
    new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, 'public/kina.jpg'),
        prefix: 'assets/icons-[hash]',
        inject: true,
        background: '#ffffff',
        title: 'React Webpack App',
        icons: {
            android: true,
            favicons: true,
            firefox: true
        }
    })
  ]
}
