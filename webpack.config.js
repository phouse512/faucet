const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: 'babel-loader',
          options: { presets: ["es2015", "react", "stage-2"] },
        }
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
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /fonts\/.+\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    ]
  }
};
