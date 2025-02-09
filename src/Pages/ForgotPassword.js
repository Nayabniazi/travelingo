
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from '../css/Auth.css';
import Button from '../Button'; 

const SignUp = () => {
  
  const [email, setEmail] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Email:", email);
    
  };

  return (
    <div className="auth-container">
      {/* Left Image Section */}
      

      {/* Right Form Section */}
      <div className="auth-form-container">
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back
        </button>

        <div className="logo"style={{marginLeft:'130px'}}>
          <img src='./imgs/loginlogo.png' alt="Logo" />
        </div>

        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>

          <Button type='submit'  className="btn" text="Sign up"/>
        </form>

        <div className="links">
          <Link to="/Login">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;