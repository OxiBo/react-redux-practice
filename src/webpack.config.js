
const ExtractTextPlugin = require('extract-text-webpack-plugin');


let config = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }


        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ]

}

module.exports = (env, options) => {
    const production = options.mode === 'production';
    config.devtool = production ? false : 'eval-source-map';

    return config;
}
