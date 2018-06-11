var webpack = require("webpack");
var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// var config = 
// {
//     entry: SRC_DIR + "/src/index.js",
  

//     output: {
//         filename: '[name].[hash].js',
//         path:DIST_DIR +"/src",
//       },
module.exports = {
    entry: './src/entry.js',
    output: {
        path:path.resolve(__dirname,'dist'),
    },
    
    module: {
        loaders: [
          { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
          {test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            },

            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: '../'       // override the default path
                    }
                }]
            },
    
          {
              test:/\.(gif|png|jpe?g|svg)$/i,
              use:[
                  'file-loader?name=images/[name].[ext]'
            ]

          },
               {
            test: /\.(scss)$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // pllost css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
          },
        ]
      },
      
      devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
      }
     


}