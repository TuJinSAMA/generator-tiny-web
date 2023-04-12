const path = require('path');
<% if (libType === 'vue') { -%>
const { VueLoaderPlugin } = require('vue-loader');
<% } -%>


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    <% if (libType === 'react') { -%>
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
    <% } else { -%>
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    <% } -%>
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  resolve: {
  <% if (libType === 'react') { -%>
    extensions: ['.js', '.jsx'],
  <% } else { -%>
    extensions: ['.js', '.vue'],
  <% } -%>
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
<% if (libType === 'vue') { -%>
  plugins: [new VueLoaderPlugin()]
<% } -%>
  
}