const webpack = require('webpack');
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const extractTxtplugin=new ExtractTextPlugin({
//   filename: 'css/[hash:8].css',
// })
module.exports = {
  entry: {
    entry: __dirname + '/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[hash].js',
  },
  plugins: [
    new htmlWebpackPlugin({       //根目录的index.html生成dist下的html，可以多个生成
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',           //script标签的放置
      minify: {                    //html压缩
        removeComments: true,     //移除注释
        collapseWhitespace: true //移除空格
      },
    }),
    new UglifyJsPlugin(), //js压缩,
    new webpack.HotModuleReplacementPlugin()
    // extractTxtplugin,//css hash加密
  ],
  devServer: {
    //contentBase: DEV_PATH,
    historyApiFallback: true,
    hot: true,
    open: true,
    inline: true,
    port: 3333
  },
  module: {
    rules: [
      //处理js中的loader
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2'],
          // presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      //处理html模板中的loader
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      //处理图片中的loader( 通常url/file/image-webpack等loader配合 )
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'url-loader?limit=8192&name=./img/[hash].[ext]',
      }
    ]
  }
}