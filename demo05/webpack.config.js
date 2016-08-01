module.exports = {
	entry: './main.js',
	output: {
		filename: './bundle.js',
	},
	module : {
		loaders : [
		// url-loader 它会将样式中引用到的图片转为模块来处理. 
		// ?limit=8192 表示将所有小于8kb的图片都转为 base64形式.
			{test: /\.(png|jpg)$/, loader : 'url-loader?limit=8192'}/// 此部分不明白是什么意思
		],
	}
};
