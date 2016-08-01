var webpack = require('webpack');

module.exports = {
	entry: {
		app: './main.js',
		vendor: ['jquery'],
	},
	output: {
		filename: 'bundle.js'
	},
	plugins: [
	// 提取第三方包到一个文件中
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	]
};