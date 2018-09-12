const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const cssNano = require('cssnano');

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'disable',
  generateStatsFile: true,
  statsOptions: { source: false },
});

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

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name]-[contenthash].css',
});

const optimizeCssAssetsPlugin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: cssNano,
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true,
});

const compressionPlugin = new CompressionPlugin({
  test: /\.(js|css)$/,
  // deleteOriginalAssets: true,
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    htmlPlugin, uglifyJSPlugin, miniCssExtractPlugin,
    optimizeCssAssetsPlugin, definePlugin, bundleAnalyzerPlugin, compressionPlugin,
  ],
};
