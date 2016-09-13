/**
 * Created by Keno on 8/21/2016.
 */
/*
import rootReducer from "../reducers/rootReducer";
import {createStore, applyMiddleware, compose} from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import ApolloClient from 'apollo-client';

const client = new ApolloClient();

export default (initialState = {}) => {
    let finalCreateStore;
    if (process.env.CLIENT) {
        finalCreateStore = compose(
            applyMiddleware(client.middleware()),window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);
    } else {
        finalCreateStore = applyMiddleware(client.middleware())(createStore);
    }

    return finalCreateStore(rootReducer, initialState);
}
*/


/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ApolloClient from 'apollo-client';

const client = new ApolloClient();


export function configureStore(initialState) {
    
    // Middleware and store enhancers
    const enhancers = compose( applyMiddleware(client.middleware()), window.devToolsExtension ? window.devToolsExtension() : f => f);

   /* if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
        // Enable DevTools only when rendering on client and during development.
        enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
    }
*/
    return createStore(rootReducer,initialState, enhancers);
}
