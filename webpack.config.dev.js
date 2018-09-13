const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: './index.html',
});

const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
    WEBPACK: true,
  },
});

const cssLoader = {
  loader: 'css-loader',
  options: { sourceMap: true },
};
const dotEnv = new Dotenv({
  path: './src/config/development.env',
});

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    main: ['@babel/polyfill', path.resolve(__dirname, 'src/index')],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true,
    },
  },
  devtool: 'source-map',
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
        test: /\.scss$/,
        use: ['style-loader', cssLoader, 'postcss-loader', 'sass-loader'],

      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlPlugin, definePlugin, dotEnv],
};
