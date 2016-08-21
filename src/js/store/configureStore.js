/**
 * Created by Keno on 8/21/2016.
 */
import rootReducer from "../reducers/rootReducer";
import {createStore, applyMiddleware, compose} from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default (initialState = {}) => {
    let finalCreateStore;
    if (process.env.CLIENT) {
        finalCreateStore = compose(
            applyMiddleware(reduxImmutableStateInvariant()),window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);
    } else {
        finalCreateStore = applyMiddleware(thunk)(createStore);
    }

    return finalCreateStore(rootReducer, initialState);
}