const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: './index.html',
});
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({ generateStatsFile: true });

const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
    WEBPACK: true,
  },
});

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    main: [path.resolve(__dirname, 'src/index')],
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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlPlugin, bundleAnalyzerPlugin, definePlugin],
};
