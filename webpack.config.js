const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { title } = require('process')

module.exports = {
  mode: 'development',
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
  },

  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // Using the CopyPlugin to CopyStatic files like the manifest file
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/manifest.json'),
          to: path.resolve('dist'),
        },
      ],
    }),
    // Using the HTML Plugin to copy over HTML to dist
    new HtmlPlugin({
      title: 'React Extension',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
}
