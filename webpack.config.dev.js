const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackVisualizerPlugin = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackHotMiddleware = 'webpack-hot-middleware/client?path=__webpack_hmr';

module.exports = {
  //context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      webpackHotMiddleware,
      './src/index.js',
    ],
    vendors: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-observable',
      'rxjs',
      //'typeface-roboto',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash:8].js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
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
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'url-loader?limit=8192&name=imgs/[name].[hash].[ext]'
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
    new ExtractTextPlugin("styles/[name].css",{
        allChunks: true
    }),

    // for dev
    new webpack.NamedModulesPlugin(),

    /*
    new webpack.optimize.CommonsChunkPlugin({
        deepChildren: true,
        async: 'async-vendor',
        minChunks: function (module) {
            return module.resource && /node_modules/.test(module.resource)
        }
    }),
    */

    new webpack.optimize.CommonsChunkPlugin({
        name: 'material',
        minChunks: function(module, count) {
            return module.resource && /material-ui/.test(module.resource)
        }
    }),

    /*
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: function(module, count) {
            //return module.resource && /rxjs|material-ui/.test(module.resource) && count >= 3
            //return module.resource && /\.js$/.test(module.resource) && count >= 2
            //return module.resource && /\.js$/.test(module.resource) && count >= 2
            return module.resource && /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, './node_modules')
                ) === 0
        }
    }),
    */
    /*
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        minChunks: module => {
            return module.resource && /node_modules/.test(module.resource)
        }
    }),
    */

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
       // minChunks: Infinity,
        chunks: ['vendors', 'app']
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    /*
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: {'screw_ie8': true, 'keep_fnames': true},
        compress: {
            // warnings: false,
            'screw_ie8': true,
            'keep_fnames': true
        },
        output: {comments: false}
    }),
    */
    // merge chunks
    //new webpack.optimize.AggressiveMergingPlugin(),

    new WebpackVisualizerPlugin(),
    //new BundleAnalyzerPlugin()
  ]
}
