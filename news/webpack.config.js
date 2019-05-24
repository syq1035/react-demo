var webpack  = require('webpack');
var path = require('path');

module.exports = {
    mode: 'none',
    context: __dirname + '/src',
    entry: "./js/index.js",
    module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
            }
          },
          {
            test:/\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
    },
    
    output:{
        path: __dirname + "/src/",
        filename: "bundle.js"
    }
}