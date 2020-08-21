import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";



class LoginPage extends React.Component {
  state = {
      username: "",
      password: ""
  }

render() {
    return(
        <div className="login-container"> 
          <form classNAme="login-form">
            <h1>Log In</h1>
            <input name="username" placeholder="Username" />
            <input name="password" placeholder="password" />
          </form>   
        </div>
    );
}

};

export default LoginPage;