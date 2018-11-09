const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let plugins = []; // if using any plugins for both dev and production
let devPlugins = []; // if using any plugins for development

let prodPlugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production'),
		},
	}),
	// new webpack.optimize.UglifyJsPlugin({
	// 	compress: {
	// 		warnings: true,
	// 	},
	// }),

	new UglifyJsPlugin(), // Replaced the reference to webpack.optimize.UglifyJsPlugin

	// new CompressionPlugin({
	// 	asset: '[path].gz[query]',
	// 	algorithm: 'gzip',
	// 	test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/,
	// }),
];

plugins = plugins.concat(process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins);

// include plugins config
module.exports = {
	context: __dirname,
	entry: './frontend/entry.jsx',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js',
	},
	plugins: plugins,
	module: {
		loaders: [
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
	// optimization: {
	// 	minimizer: [new UglifyJsPlugin()],
	// },
};
