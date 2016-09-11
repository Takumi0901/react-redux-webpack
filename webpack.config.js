var DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: 'public'
  }
}