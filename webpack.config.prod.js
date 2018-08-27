const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: './index.html',
});

const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    WEBPACK: true,
  },
});

const uglifyJSPlugin = new UglifyJSPlugin();

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    main: ['babel-polyfill', path.resolve(__dirname, 'src/index')],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlPlugin, uglifyJSPlugin, definePlugin],
};
