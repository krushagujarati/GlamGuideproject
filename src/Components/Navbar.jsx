import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="glam-header">
      <h2 className="brand-name">GlamGuide</h2>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/getstyled">Get Styled</Link>
        <Link to="/suggestions">Suggestions</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
