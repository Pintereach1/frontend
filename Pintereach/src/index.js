import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";
import './index.css';
import App from './App';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


