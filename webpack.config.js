var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
	entry: APP_DIR + '/index.js',
	output:{
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				test:/\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'	
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.(jpeg|png|gif|svg|jpg)$/i,
				use: ['file-loader']
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options:{
						attrs:[':data-src']
					}
				}
			},

			{
				test: /\.json$/
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin ({
			template:'index.html'
		})
	]
}

module.exports = config;
