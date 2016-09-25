var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};