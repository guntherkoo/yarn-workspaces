// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config
const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const COMMON_STYLES_PATH = path.resolve(ROOT_PATH, '../styles');
const COMPONENTS_PATH = path.resolve(ROOT_PATH, '../components');


module.exports = async ({ config, mode }) => {

    config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: ['babel-loader', 'eslint-loader'],
        include: [COMPONENTS_PATH],
    });

    config.module.rules.push({
        test: /\.scss$/,
        loaders: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
            'postcss-loader',
            'sass-loader',
        ],
        include: [COMMON_STYLES_PATH, COMPONENTS_PATH],
    });

    return config;
};
