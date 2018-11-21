const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // hot: true,
    // inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV_VARIABLE': JSON.stringify('test'),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.template.html',
    }),
  ],
});
