import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root')
    );