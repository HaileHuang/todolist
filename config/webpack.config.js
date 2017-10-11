var webpack = require('webpack');
var path = require('path');


var config = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', path.join(__dirname, '../src/index.js')],
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
                        ],
                        plugins: [
                            "dva-hmr", 
                            [
                                "import", 
                                { "libraryName": "antd", "style": true }
                            ]
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
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }
        ]
    }
};

module.exports = config;