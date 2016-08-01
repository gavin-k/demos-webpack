var webpack = require("webpack");

var devFilePlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
	},
	plugins: [devFilePlugin]
};
