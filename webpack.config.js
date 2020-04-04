const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
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
    contentBase: './dist',
    index: 'index.html',
    port: 3000,
  },  
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
    })
  ]
};
