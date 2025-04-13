// src/components/Header.jsx
import React from 'react';
 // optional: if you want to split your CSS, otherwise include in App.css

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mango</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
