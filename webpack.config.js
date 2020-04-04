const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        exclude: "/node_modules",
        loader: 'ts-loader',
      },
    ],
  },
  devServer: {
    contentBase: './',
    publicPath: '/build',
    port: 3000,
  },
};
