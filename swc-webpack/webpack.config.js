const path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        library: 'reactive',
        libraryTarget: 'umd',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?(js|ts)$/,
                exclude: /(node_modules)/,
                use: { loader: "swc-loader" }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".wasm"]
    },
    optimization: {
        minimize: false,
    },
}
