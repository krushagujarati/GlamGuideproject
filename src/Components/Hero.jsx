import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src="/images/hero.jpg" alt="Hero Models" className="hero-img" />
      <div className="hero-text">
        <h1>It’s Dress Season</h1>
        <Link to="/get-styled" className="hero-btn">Get Styled</Link>
      </div>
    </div>
  );
}

export default Hero;
