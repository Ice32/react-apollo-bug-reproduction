/**
 * Created by Keno on 8/21/2016.
 */
/*
var db = {};

const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/blog-graphql';
MongoClient.connect(mongoUrl, function(err, dbConnection) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected correctly to database server");
        console.log(dbConnection);
    }
    db = dbConnection;
});
*/

module.exports.url = "mongodb://localhost:27017/blog-graphql";