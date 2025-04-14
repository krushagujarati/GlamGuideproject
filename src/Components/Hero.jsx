import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          FIND YOUR EXPRESSIVE<br />
          <span className="italic">TIMELESS</span> LOOK
        </h1>
        <div className="hero-buttons">
          <Link to="/get-styled" className="btn">Get Styled</Link>
          <Link to="/suggestions" className="btn btn-outline">Explore Suggestions</Link>
        </div>
      </div>
      {/* Remove the multiple images and add a single background image */}
      <div className="hero-background"></div>
    </div>
  );
}

export default Hero;
