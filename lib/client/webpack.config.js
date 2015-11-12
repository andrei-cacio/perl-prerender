module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: '../server/public/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    }
};