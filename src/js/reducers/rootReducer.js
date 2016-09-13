/**
 * Created by Keno on 8/21/2016.
 */
import {combineReducers} from "redux";
import ApolloClient from 'apollo-client';
import test from "./testReducer";

const client = new ApolloClient();
export default combineReducers({
    test,
    apollo:client.reducer()
});