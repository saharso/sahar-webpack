const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  // for development env:
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
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
    historyApiFallback: true,
    contentBase: './',
    hot: true,
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