const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry:"./src/web/index.tsx",
    output:{
        path: path.join(__dirname,'./dist'),
        publicPath: '/', //  跟node结合需要声明一个publicPath 这个地方有待研究 具体什么意思
        filename: 'scripts/[name].bundle.js'
    },
    mode:"development",
    // devtool:'source-map',
    resolve:{
        extensions:['.ts','.tsx','.js'],
        alias: {
            '@components': path.resolve(__dirname,'src/web/components'), // 最后这里加不加/都是可以的
            '@pages':  path.resolve(__dirname,'src/web/pages/')
        }
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:[
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader', // 这个loader是可以的
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //       presets: ['@babel/preset-env']
                //     }
                // },
                exclude: /node_modules/
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/web/index-dev.html'
        }),
        new BundleAnalyzerPlugin({
            analyzerPort:8999
        })
    ],
    externals: {
        "react": 'React', // '包名':'全局变量' 
        "react-dom": 'ReactDOM',
        'react-router-dom':'ReactRouterDOM'
    },
     // 配置开发服务器, 并配置自动刷新
    devServer: {
        // 根目录下src为基本目录
        contentBase: path.join(__dirname, "./dist"),
        // 自动压缩代码
        compress: true,
        // 服务端口为1208
        port: 8081,
        // 自动打开浏览器
        // open: true,
        historyApiFallback: true, // 应对前端假路由
        hot: true
    },
};
