const path = require("path")
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
                      sourceMap: true
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