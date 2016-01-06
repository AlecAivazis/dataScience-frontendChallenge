// webpack imports
var path = require('path')

// relevant project paths
var projectPaths = {
    sourceDir: path.join(__dirname, 'src'),
    rootDir: __dirname,
}

// export webpack configuration object
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }, {
                test: /\.(png|jpg|ttf)$/,
                loader: 'url',
                query: {limit: 10000000},
            }
        ],
    },
    resolve: {
        extensions: ['', '.js'],
        root: [
            projectPaths.sourceDir,
            projectPaths.rootDir,
        ],
    },
}


// end of file
