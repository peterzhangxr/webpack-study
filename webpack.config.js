const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackDashboardPlugin = require('webpack-dashboard/plugin')
const FileListPlugin = require('./FileListPlugin')
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	devServer: {
		static: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: '/\.pt$/',
			exclude: /node_modules/,
			loader: path.resolve(__dirname, 'pt-loader.js')
		}]
	},
	plugins: [
		new WebpackDashboardPlugin(),
		new FileListPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html')
		})
	]
}