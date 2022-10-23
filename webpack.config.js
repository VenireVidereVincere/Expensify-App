const path = require("path")
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack")
require("dotenv").config({path: ".env.development"})

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  return {
    entry: './src/app.js',
    plugins:[
      new MomentLocalesPlugin({
        localesToKeep:['es-us']
      }),
      new MiniCssExtractPlugin({ 
        filename: 'styles.css'
    }),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
        'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
      })
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,"public","dist"),
        publicPath: '/dist'
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          }, {
            test: /\.s?css$/,
            use: [ MiniCssExtractPlugin.loader, 
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true,
                      url: false
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true
                  }
              }
          ]
        }               
        ]
      },
      devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
      devServer: {
        static: "./public",
        compress: true,
        port: 8080,
        historyApiFallback: true
      }
    }
}