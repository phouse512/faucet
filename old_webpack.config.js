const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const paths = {
  DIST: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'client'),
};

module.exports = {
  entry: ['babel-polyfill', path.join(paths.SRC, 'index.jsx')],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
    publicpath: '/public/',
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                precss,
                autoprefixer,
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
