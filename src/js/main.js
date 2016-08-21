/**
 * Created by Keno on 8/21/2016.
 */
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
console.log("webpack radi");

let store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));

