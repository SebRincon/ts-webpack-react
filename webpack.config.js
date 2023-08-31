const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  // Setup Chunks
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    // Chuncks for the content & background scripts
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.ts'),
  },

  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        // Using the style loader and css loader to load css files
        use: ['style-loader', 'css-loader'],
        test: /\.css$/i,
      }
      ,{
        //asset/resource allows us to load images and fonts
        type: 'asset/resource',
        test: /\.(jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
      }
    ],
  },
  plugins: [
    // Using the CopyPlugin to CopyStatic files like the manifest file
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        },
      ],
    }),
    // Using the HTML Plugin to copy over HTML to dist
    ...getHtmlPlugins(['popup', 'options']),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // Output will use chunk name
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  // Splitting chunks, allowing chunks to share modules -> Helps save space
  optimization: { splitChunks: {chunks: 'all'} },
}



// Using this function to generate HTML plugins for each chunk
function getHtmlPlugins(chunks) { 
  return chunks.map(chunk => new HtmlPlugin({
    title: 'React Extension',
    filename: `${chunk}.html`,
    chunks: [chunk],
  }))
}