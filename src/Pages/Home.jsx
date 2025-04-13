import React from "react";
import HeroSection from "../Components/Hero";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <HeroSection />
      <div className="intro-text">
        <p>Welcome to GlamGuide — your personalized fashion destination. Discover styles that flatter you best!</p>
      </div>
    </div>
  );
}

export default Home;
