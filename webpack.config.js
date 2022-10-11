const path = require("path")
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports= {
    entry: './src/app.js',
    plugins:[
      new MomentLocalesPlugin({
        localesToKeep:['es-us']
      }),
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,"public")
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
            use: ['style-loader','css-loader','sass-loader']
          }               
        ]
      },
      devtool: 'eval-cheap-module-source-map',
      devServer: {
        static: "./public",
        compress: true,
        port: 8080,
        historyApiFallback: true
      }
    }