// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroBg from './Assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroBg})` }}
      id="home"
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Discover the New Look</h1>
        <p className="hero-subtitle">
          Explore our reimagined collection and find your style.
        </p>
        <button className="hero-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
