const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),        
        new webpack.ProvidePlugin({ "React": "react", }),
        new CopyPlugin({
          patterns: [
            { from: "public", to: "" },
          ],
        }),
        new Dotenv({
            path: path.resolve(__dirname, "./.env.development"),
        })
      ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: "3000",
        hot: true,
        publicPath: "http://localhost:3000",
        historyApiFallback:true
    }
};
