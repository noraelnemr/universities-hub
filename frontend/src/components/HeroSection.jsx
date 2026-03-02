import React, { useState } from "react";
import bg from "../assets/hero.jpg";
import Navbar from "./Navbar";
import '../App.css'

function HeroSection({ scrollToUniversities }) {

  
  return (
    <div className="hero">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
         <div style={{ position: 'relative', zIndex: 3 }}>
      <Navbar />
    </div>
        <h1>
          Unlock your future with the easiest
          <br /> way to explore universities.
          <br />
          <button className="hero-button"
          onClick={scrollToUniversities}
        >
          🎯 Explore Featured Universities
        </button>
        </h1>
      </div>
    </div>
  );
}
export default HeroSection;
