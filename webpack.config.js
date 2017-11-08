var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry:'./src/main.ts',
    output:{
        // 指定打包后的输出文件名，这个文件需要被引入到index.html中
        filename:'./bundle.js'
    },
    resolve:{
        root:[path.join(__dirname,'src')],
        extensions:['','.ts','.js']
    },
    module:{
        loaders:[
            {test:/\.ts$/,loader:'ts-loader'}
        ]
    }
};