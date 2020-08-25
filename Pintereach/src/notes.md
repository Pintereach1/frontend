import React from 'react'

function LoginPage() {
  return (
    <div className="login-container"> 
          <form classNAme="login-form">
            <h1>Login For Pintereach</h1>
            <label htmlFor="username">Username:</label><input name="username" placeholder="Username" />
            <label htmlFor="password">Password:</label><input name="password" placeholder="password" />
          </form>
    </div>
  )
}

export default LoginPage




//axiosAuth
import axios from "axios";

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");
    
    
    return axios.create({
        baseURL: "https://pintereach1api.herokuapp.com",
        headers: {
            Authorization: token
        }
    })
}
