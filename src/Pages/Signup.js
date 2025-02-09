import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '../Button'; 

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Last Name:", lastName);
    console.log("Phone Number:", phoneNumber);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="auth-container">
      {/* Left Image Section */}
      

      {/* Right Form Section */}
      <div className="auth-form-container">
        <button className="back-btn" onClick={() => window.history.back()} style={{marginTop:'50px'}}>
          ← Back
        </button>

        <div className="logo">
          <img src='./imgs/loginlogo.png' alt="Logo"style={{marginLeft:'130px',height:'80px',marginTop:'35px'}} />
        </div>

        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
