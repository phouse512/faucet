const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: './',
    hot: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV_VARIABLE': JSON.stringify('test'),
    }),
    new HtmlWebpackPlugin(),
  ],
});
