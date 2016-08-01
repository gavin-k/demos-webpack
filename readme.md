webpack 的项目学习. 演示

demo1: 简单的一个 入门 demo

demo2: 利用 output 中的webpack 变量

demo3: 加载 jsx 文件. 利用 loaders 这个参数

demo4: 加载 css 文件. 利用 loaders .

demo5: 加载 png|jpg 文件. 利用 loaders.

demo6: js[x]|css 文件 混合加载.利用 loaders.

demo7: 压缩 js 文件. 添加 插件 .利用 plugins 参数.

demo8: 生成 index.html 并将 output 的js 加载进去.

demo9: 利用 全局变量  environment flags. 运行需要的函数
	# linux & Mac
	env DEBUG=true webpack-dev-server
	# Windows
	set DEBUG=true
	webpack-dev-server

demo10: 代码的分裂式

demo11: 采用 bundle loader 使用的分裂式

demo12: 当许多的脚本有公共的块时, 你能压缩 公共的部分到隔离的文件 采用 CommonsChunkPlugin 插件.

demo13: Vendor 块. 使用 CommonsChunkPlugin 从脚本中提取第三方包到一个 文件中

demo14: 暴露全局变量. 利用 webpack.config.js 中的 externals 属性

demo15: 热加载替换. 
	两种方法: 
		1. 使用 webpack-dev-sever --hot --inline
		     --hot 添加 HotModuleReplacementPlugin. 并将服务器切换到热加载模块.
		     --inline 将 bundle 嵌入到 webpack-dev-server 中.

		2. 修改 webpack.config.js 如 demo 所示. 
			添加 `new webpack.HotModuleReplacementPlugin()` 到 `plugins` 字段.
			添加 `webpack/hot/dev-server` 和 `webpack-dev-server/client?http://localhost:8080` 到 `entry` 字段中
			并运行 webpack-dev-server 即可.

demo16: 综合练习 --> React 路由.


主要的常用选项: 
 --config 指定一份配置文件.
 --watch 监听变动并自动打包
 -p  //压缩混淆脚本.
 -d  //生成map映射文件, 告知哪些模块 被最终打包到哪里去.

 


```
以上例子基于 [阮一峰老师的demo](https://github.com/ruanyf/webpack-demos)
```