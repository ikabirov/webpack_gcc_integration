var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'export-modules-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js/,
				loader: 'babel-loader',
			},
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]")
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
}
