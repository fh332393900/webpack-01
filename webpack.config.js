const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry:'./src/js/main.js',//入口文件
    output:{
        path: path.resolve(__dirname, './dist/js'), // 指定出口文件的路径目录
        filename: 'bulid.js' // 制定出口文件的名称
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port:8080,
        hot:true,
        host:'localhost',
        inline:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"首页",
            filename:"index.html",
            template:"index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换插件
        new webpack.LoaderOptionsPlugin({
            options:{
                resolve:{
                    extensions:['','ts','tsx']
                }
            }
        })
    ]
}