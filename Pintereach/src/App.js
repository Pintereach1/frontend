import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./components/Home";

import './App.css';

function App() {
  return (
   <Router>
     <div className="App">
       <Route exact path="/" component={HomePage} />
       {/*<Route exact path="/login" component={LoginPage} />
       <Route path="/register" component={RegisterPage} />*/}
     </div>
   </Router>
  );
}

export default App;
