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

			{
				test: /\.(jpe?g|png|gif)$/i,
				loaders: [
					'file-loader?name=[path][name].[ext]',
					{
						loader: 'image-webpack-loader',
						query: {
							mozjpeg: {
								progressive: true,
							},
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 4,
							},
							pngquant: {
								quality: '75-90',
								speed: 3,
							},
						},
					},
				],
				exclude: /node_modules/,
				include: __dirname,
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.svg', '*'],
	},
};
