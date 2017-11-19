require("./main.scss");

import React from "react";
import { render } from 'react-dom';
import Main from "./components/Main";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// let state = {};
// //In this scenario, we can initialize our state with defaults
// state = {
//     decreaseLabel: "👇",
//     increaseLabel: "👆",
//     increaseCounter: function() {
//         setState({count: state.count+1});
//     },
//     decreaseCounter: function() {
//         setState({count: state.count-1});
//     },
//     count: 0
// };
//
// function setState(changes) {
//     state = Object.assign({}, state, changes);
//
//     ReactDOM.render(React.createElement(Main, state), document.getElementById("react-app"));
// }
//
// setState({count: 0});

const store = configureStore({
    counter: {
        decreaseLabel: "👇",
        increaseLabel: "👆",
        count: 0
    }
});

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);