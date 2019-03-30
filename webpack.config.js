const path = require('path');

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, 'output'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, "output"),
		port: 8000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
	mode: 'development',
}