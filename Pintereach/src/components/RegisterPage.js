import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";



class RegisterPage extends React.Component {
  state = {
      username: "",
      password: "",
      name: "",
      email: "",
      role: ""
  }

render() {
    return(
        <div className="register-container"> 
          <form classNAme="register-form">
            <h1>Register For Pintereach</h1>
            <label htmlFor="username">Username:</label><input name="username" placeholder="Username" />
            <label htmlFor="password">Password:</label><input name="password" placeholder="password" />
            <label htmlFor="name">Name:</label><input name="name" placeholder="name" />
            <label htmlFor="email">Email:</label><input name="email" placeholder="email" />
            <label htmlFor="role">Role:</label>
            <select>
              <option defaultValue>Select Role</option>  
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </form>   
        </div>
    );
}

};

export default RegisterPage;