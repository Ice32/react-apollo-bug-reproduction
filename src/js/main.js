/**
 * Created by Keno on 8/21/2016.
 */
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {configureStore} from "./store/configureStore";
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";
window[gql] = gql;
import rootReducer from "./reducers/rootReducer";
const client = new ApolloClient();
import testReducer from "./reducers/testReducer";
const query = gql`{posts{title}}`;
/*client.query({query})
 .then(data => {
 console.log(data);
 });*/
// let store = createStore(rootReducer,applyMiddleware(client.middleware()));
let store = configureStore();
/*const store = createStore(
 combineReducers({
 testReducer,
 apollo: client.reducer(),
 }),
 applyMiddleware(client.middleware())
 );*/
console.log("store.getState in main is", store.getState());
render(
    <ApolloProvider store={store} client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root"));

