module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      // 多个 loader 之间用 "!" 连接起来
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
    ]
  }
};
