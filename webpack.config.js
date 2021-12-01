const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackDashboardPlugin = require('webpack-dashboard/plugin')
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
	plugins: [
		new WebpackDashboardPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html')
		})
	]
}