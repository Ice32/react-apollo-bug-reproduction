/**
 * Created by Keno on 8/21/2016.
 */
const express = require("express");
const apolloExpress = require("apollo-server").apolloExpress;
const graphiqlExpress = require("apollo-server").graphiqlExpress;
const app = express();
const port = process.env.PORT || 3000;
const Schema = require("./graphqlSchemas/schema");
const bodyParser = require("body-parser");

app.use('/graphql', bodyParser.json(), apolloExpress({ schema: Schema }));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));
app.use(express.static(__dirname + "/../dist"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});