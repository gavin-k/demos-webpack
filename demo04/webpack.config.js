module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader' // 这个地方不太明白是什么意思.
			},

		],
	}
};
