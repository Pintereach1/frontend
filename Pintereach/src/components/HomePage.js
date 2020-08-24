import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <div className="home-container">
          <div className="navbar">
            <div className="logo">
              <h3>Pintereach</h3>
                <div className="home-links"> 
                  <p>Already have an account?</p>
                      <Link to="./login" className="home-login">Log In</Link>
                    <p>Not a member of Pintereach yet?</p>
                      <Link to="./register" className="home-register">Register</Link> 
                  </div>
                </div>
              </div>   
            </div>
            
            <div className="header-content">
                <h1 className="header-title">Welcome to Pintereach!</h1>
                <p className="description">Pintereach is a place to create organized spaces for researchers to keep track of their research and readings more efficiently.</p>
            </div>
            </>
    )
}

export default HomePage
