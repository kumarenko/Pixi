
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/dist',
        chunkFilename: '[name].bundle.js',
        publicPath: "/dist"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 100 // ms, rebuild timeout, the default 300
    },
    devtool: 'source-map'
};
