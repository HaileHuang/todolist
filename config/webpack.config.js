var webpack = require('webpack');
var path = require('path');


var config = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path:  path.join(__dirname, '../public'),
    filename: 'bundle.js'
  },
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "stage-1", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};

module.exports = config;