const HtmlWebpackPlugin = require("html-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");
const  MiniCssExtractPlugin= require("mini-css-extract-plugin"); 

module.exports = {
    entry: {
        vanillajs: "./src/index.js",
        reactjs:"./src/index_react.js",
        typescript: "./src/index_ts.js",
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                use:[
                    {
                        loader: "html-loader",
                        options:{
                            minimize: true,
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                /*use: [MiniCssExtractPlugin.loader, 'css-loader'],*/
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: ['file-loader?name=assets/[name].[ext]', 'image-webpack-loader'],
            },
            {
                test: /\.(woff)$/i,
                use: [
                  {
                    loader: 'file-loader?name=assets/[name].[woff]',
                  },
                ],
            },
        ],
    },
    plugins:[
        /* new HtmlWebpackPlugin({
             template:"./src/index.html",
             filename:"./index.html",
         }),*/
         new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
            chunks: ["vanillajs"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Archivo base
            filename:"./react.html", //Archivo final en la carpeta dist
            chunks: ["reactjs"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./ts.html",
            chunks: ["typescript"],
            hash: true,
        }),
        new MiniCssExtractPlugin(),
    ],
};