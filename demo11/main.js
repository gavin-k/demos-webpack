// require.ensure(['./a'], function(require) {
// 	var content = require('./a');
// 	document.open();
// 	document.write('<h1>' + content + '</h1>');
// 	document.close();
// });

var load = require('bundle-loader!./a.js');

load(function(file){
	document.open();
	document.write("<h1>" + file + "</h1>");
	document.close();
});
