/**
 * Created by Keno on 3/26/2016.
 */
"use strict";
var webpack = require("webpack");
module.exports = {
    entry:"./src/js/main.js",
    output:{
        path:__dirname + "/dist/js",
        filename:"bundle.js"
    },
    watch:true,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    module:{
        loaders:[{
            test:/\.(js|jsx)$/,
            loaders:["babel"],
            exclude:[/node_modules/]
        }]
    }
};