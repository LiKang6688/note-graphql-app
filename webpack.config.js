const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    mode: process.env.NODE_ENV || 'development',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ['file-loader'],
        },
      ],
    },
    // we can import anything from the src folder in relative paths rather than the absolute ones,
    // same goes for node_modules as well.
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.jsx', '.js'],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
