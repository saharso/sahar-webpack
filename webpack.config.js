const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');
// const app = express();
const BUILD_FOLDER = 'dist';

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.tsx',
  },
  // for development env:
  // devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, BUILD_FOLDER),
    // publicPath: "/",
    clean: true,
  },
  plugins: [
    // this generates our root index.html file
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  // this opens a server environment for our app.
  devServer: {
    contentBase: path.join(__dirname, BUILD_FOLDER),
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    // before: function (app, server, compiler) {
    //   // support for react router's history api
    //   app.use(express.static(path.join(__dirname, BUILD_FOLDER)));
    //   app.get('/*', function (req, res) {
    //      res.sendFile(path.join(__dirname, BUILD_FOLDER, 'index.html'));
    //   });      
    // },
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: (mod) => {
            // Remove from the vendor bundle some node_module third party libraries
            // so they can be loaded only on demand.

            // Only node_modules are needed
            if (!mod.context.includes('node_modules')) {
              return false;
            }
            // But not node modules that contain these key words in the path
            if (['lodash',].some(str => mod.context.includes(str))) {
              return false;
            }
            return true;
          },
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },  
  // asset management
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },      
      // js and jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      // sass
      {
        test: /\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },      
      // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },  
};