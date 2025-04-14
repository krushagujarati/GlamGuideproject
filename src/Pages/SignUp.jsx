// src/pages/SignUp.jsx
import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Join GlamGuide Today</h2>
        <p className="signup-subtitle">Create your account to get styled like never before</p>
        <form className="signup-form">
          <label>Name</label>
          <input type="text" placeholder="Your full name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
