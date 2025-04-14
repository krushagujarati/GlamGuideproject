import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="glam-header">
      <h2 className="brand-name">GlamGuide</h2>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/get-styled">Get Styled</Link>
        <Link to="/Suggestions">Suggestions</Link>
        <Link to="/Login" className="login-btn">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
