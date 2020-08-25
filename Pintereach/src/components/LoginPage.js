import React from "react";
import { connect } from "react-redux"

import { login } from "../actions/actions";
import { render } from "react-dom";

class SignIn extends React.Component {
  state= {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChanges = e => {
    this.setState({
      credentials:{
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state.credentials)
    this.props.history.push("./login")
  }




  render(){
    return(
      <>
        <div className="login-container">
          <h1 className="signInHeader">Login Form</h1> 
          <form onSubmit={this.handleSubmit}>
            <div className="form-username">
              <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={this.credentials}
                  onChange={this.handleChange}
                  />
              <label htmlFor="password">Password:</label>    
                <input
                  type="text"
                  name="password"
                  value={this.credentials}
                  onChange={this.handleChange}
                />  
            </div>
            <button className="login-button" type="submit">Submit</button>  
          </form> 
        </div>
      </>
    )
  }
};

export default connect(null, {login})(SignIn);

