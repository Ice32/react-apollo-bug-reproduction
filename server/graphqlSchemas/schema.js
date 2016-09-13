/**
 * Created by Keno on 8/21/2016.
 */
"use strict";
const graphql = require("graphql");
const GraphQLList = graphql.GraphQLList;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;
const GraphQLFloat = graphql.GraphQLFloat;
const GraphQLEnumType = graphql.GraphQLEnumType;
const GraphQLNonNull = graphql.GraphQLNonNull;
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = require("../mongoConnection").url;
const pmongo = require("promised-mongo");
const db = pmongo(mongoUrl);

const Post = new GraphQLObjectType({
    name:"Post",
    description:"A blog post",
    fields:() => ({
        title:{
            type:new GraphQLNonNull(GraphQLString)
        },
        content:{
            type:new GraphQLNonNull(GraphQLString)
        },
        author:{type:GraphQLString},
        _id:{type:GraphQLString}
    })
});

const Query = new GraphQLObjectType({
    name:"RootQuery",
    fields:() => ({
        posts:{
            type:new GraphQLList(Post),
            resolve:(rootValue, args) => {
                return db.collection("posts")
                    .find({})
                    .toArray((err, docs) => {
                        console.log(err);
                        console.log(docs);
                        return docs;
                    });
            }
        }
    })
});

const Mutation = new GraphQLObjectType({
    name:"rootMutation",
    fields:() => ({
        insertPost:{
            type:Post,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
                author: {type: GraphQLString}
            },
            resolve:((root, args) => {
                let newPost = Object.assign({}, args);
                if(!newPost.author){
                    newPost.author = "anonymous author";
                }
                return db.collection("posts")
                    .insert(newPost, (err, result) => {
                        setTimeout(() => {
                            if(err){
                                console.log(err);
                            }
                            console.log("inserted", newPost);
                            return newPost;
                        }, 5000);
                    })
            })
        }
    })
});

const Schema = new GraphQLSchema({
    query:Query,
    mutation:Mutation
});

module.exports = Schema;