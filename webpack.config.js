var webpack = require("webpack");
var ET = require('extract-text-webpack-plugin');


module.exports = {
	entry: __dirname+'/src/app.js',
	output:{
		path:__dirname+'/prd/', //输出路径
//		filename:'[name]-[hash].js'//这句话是生成版本号码的，但是开发过程中不这样子干，因为一遍一遍太麻烦了！
		filename:"bundle.js"
	},
	devtool:'source-map',
	
	module:{
		loaders:[
		{
			test:/\.css$/,
			loader:'style!css'
		},
		{
			test:/\.html$/,
			loader:'string'
			
		},
		
		{
			test:/\.js$/,
		  	loader: 'babel-loader?presets[]=es2015'
			
		},
		{
			
			test:/\.scss$/,
			//loader:'style!css!sass'
			loader:ET.extract('style','css!sass')//抽离成单独CSS文件(第一步)
		}
		]
	},
	
	//更改端口的属性
	devServer:{
		contentBase:__dirname+'/prd',
		port:8080,
		host:'localhost',
		proxy:{
			'/api':{
				target:'http://localhost:9000',
				pathRewrite:{
					'^/api':''	
				}	
			}
		}
	},
	//
	plugins:[
//		new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')//抽离成单独CSS文件(第二步)
	
	]
	
}

//!!注意这是配置文件的名字，必须是webpack.config.js