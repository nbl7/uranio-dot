const path = require('path');

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						onlyCompileBundledFiles: true
					}
				}
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	context: path.resolve(__dirname, './src/'),
	entry: {
		index: './html.ts',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: '../../dist/client/',
		hot: true
	},
	output: {
		filename: 'html.js',
		path: path.resolve(__dirname, '../../dist/client/src'),
	},
};

