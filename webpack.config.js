const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index.js'
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
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
        ]
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
    }),
    new ExtractTextPlugin("stylesheets/[name].css")
  ]
}
