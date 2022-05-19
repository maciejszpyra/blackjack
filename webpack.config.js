const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'API_TOKEN': JSON.stringify(process.env.API_TOKEN),
    }),
  ]
};