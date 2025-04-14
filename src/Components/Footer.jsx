import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>GlamGuide</h3>
        <p>Your personalized fashion companion to help you style confidently and effortlessly.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/get-styled">Get Styled</a></li>
          <li><a href="/suggestions">Suggestions</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: glamguide@style.com</p>
        <p>Instagram: @glamguide</p>
        <p>Phone: +91-12345 67890</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 GlamGuide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
