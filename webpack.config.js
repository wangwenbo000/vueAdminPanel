var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ReplacePlugin = require('replace-webpack-plugin');

module.exports = {
  entry:'./components/admin.js',
  output:{
    path:__dirname+'/build/',
    filename:'./build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url',
        query:{
          limit:1,
          name:'/fonts/'+'[name].[ext]'
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url',
        query:{
          limit:10000,
          name:'/img/'+'[name].[ext]'
        }
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue:{
    loaders:{
      css: ExtractTextPlugin.extract("css"),
      sass: ExtractTextPlugin.extract("css!sass")
    }
  },
  plugins: [
    new ExtractTextPlugin('./build/style.css'),
    //进入生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    new ReplacePlugin({
      skip: process.env.NODE_ENV === 'development',
      entry: './components/admin.html',
      hash: '[hash]',
      output: '/build/admin.html',
      data: {
        css: '<link type="text/css" rel="stylesheet" href="build/style.css?hash=[hash]">',
        js: '<script src="build/bundle.js?hash=[hash]"></script>'
      }
    })
  ]
};