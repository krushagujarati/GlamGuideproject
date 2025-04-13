// src/components/Footer.jsx
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mango Redesign. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
