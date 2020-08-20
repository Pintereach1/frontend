import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';


//const store = createStore(reducer, applyMiddleware(thunk));

// come back and add Provide and store={store}
ReactDOM.render(<App />, document.getElementById('root'));


