const path = require('path');

let plugins = []; // if using any plugins for both dev and production
let devPlugins = []; // if using any plugins for development

let prodPlugins = [];

plugins = plugins.concat(process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins);

// include plugins config
module.exports = {
	mode: 'development',
	context: __dirname,
	entry: './frontend/entry.jsx',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js',
	},
	plugins: plugins,
	module: {
		rules: [
			{
				test: [/\.jsx?$/, /\.js?$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react'],
				},
			},
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'react-svg-loader',
					},
				],
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.svg', '*'],
	},
};
