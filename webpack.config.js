const path = require('path'); //内置模块
const webpack = require('webpack'); //第三方模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    // 设置开发环境
    mode: "development",
    // 入口  你需要拿来做处理的文件
    // 读取src文件夹的index.js文件，把它交给webpack处理
    // 相当于gulp.src("xxxx")
    entry: './src/index.js',
    // 出口
    // 把上面入口文件经过处理后，把它导出到dist文件夹的bundle.js里面
    // 相当于gulp.dest("xxxx")
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js'
    },
    // webpack只能理解js，如果你要处理其他文件，那就要使用loader，loader的本质其实就是插件
    module: {
        // 插件规则
        rules: [{
            // 如果匹配到图片格式使用url-loader处理
            // npm install --save-dev url-loader
            test: /\.(jpg|jpeg|png|gif)$/,
            use: 'url-loader'
        }, {
            // 如果匹配到样式
            // npm install --save-dev style-loader和css-loader
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            // 如果匹配到样式
            // npm install --save-dev style-loader和css-loader
            test: /\.html$/,
            use: ['html-loader']
        }, {
            // 如果匹配到样式
            // npm install --save-dev vue-loader
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            // 除了node_modules|bower_components文件外都使用babel-loader处理
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env']
                // }
            }
        }]

    },
    plugins: [
        // 它作为打包之后生成的index.html模板
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        // 压缩文件
        new UglifyJsPlugin(),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 把所有的vue的依赖的路径改为'vue/dist/vue.js'
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        // 服务器的文
        contentBase: path.join(__dirname, "dist"),
        // 一切服务都启用gzip 压缩
        compress: true,
        // 启用 webpack 的模块热替换特性
        // hot: true,
        // 端口号  1024~65535
        // 12345 6666 8888 9999 
        port: 9000
    }
};