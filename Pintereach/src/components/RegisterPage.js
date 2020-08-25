import React from "react";
import { connect } from "react-redux";
import { register } from "../actions/actions";




class RegisterPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      name: "",
      email: "",
      role: ""
    }  
  }

  handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
}

    handleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
        this.props.history.push("/login")
    }

render() {
    return(
        <div className="register-container"> 
          <form className="register-form" onSubmit={this.handleSubmit}>
            <h1>Register for Pintereach</h1>
            <label htmlFor="username">Username:</label>
            <input 
            name="username"
            type="text"
            value={this.credentials}
            onChange={this.handleChanges} 
            />
            <label htmlFor="password">Password:</label>
            <input 
            name="password" 
            type="text"
            value={this.credentials}
            onChange={this.handleChanges} 
            />
            <label htmlFor="name">Name:</label>
            <input 
            name="name"
            type="text"
            value={this.credentials}
            onChange={this.handleChanges}  
            />
            <label htmlFor="email">Email:</label>
            <input 
            name="email"
            type="text"
            value={this.credentials}
            onChange={this.handleChanges}  
            />
            <select>
              <option defaultValue>Select Role</option>  
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <button className="register-button" type="submit">Submit</button>
          </form>   
        </div>
    );
}

};

export default connect(null, {register})(RegisterPage);