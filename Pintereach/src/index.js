import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger"
import './index.css';
import App from './App';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


