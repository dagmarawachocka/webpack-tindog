const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname, "src", "index.js"),
        tindog_form: path.resolve(__dirname, "src", "tindog-form.js"),
    },
    output: {
        filename: '[name][contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            ".js": ".ts"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/tindog-form.html',
            filename: 'tindog-form.html',
            chunks: ['tindog_form'],
        }),
    ],
    module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.([cm]?ts|tsx)$/i,
                    loader: "ts-loader"
                },
                {
                    test: /\.(ico|png|svg|jpe?g|gif)$/i,
                    type: `asset/resource`,
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: './src/assets/'
                    }
                }
            ],
        },
    devServer: {
        static: {
            directory: path.join(__dirname, `src`, 'pages'),
        },
        port: 8080,
        open: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
                { from: /^\/tindog-form/, to: '/tindog-form.html' } // na localhost:8080 ładuje się również podstrona
            ]
        }
    },
};