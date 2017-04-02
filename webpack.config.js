const path = require('path');

module.exports = {
 context: __dirname,
 entry: {
	demo: './demo.js'
},
 output: {
	path: path.resolve('./dist'),
	filename: 'demo.js'
},
 module: {
	loaders:[
	{
	 test: /\.js?$/,
	 exclude: /node_modules/,
	loader: 'babel-loader',
	query: {
	 presets: ['react', 'es2015']
			}
		}
	]
}
}
