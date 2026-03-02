import React from "react";
import "../App.css";
import "../styles/Uni.css";
import Navbar from "../components/Navbar";

function UniBanner(props) {
  return (
    <div className="hero">
      <div
        className="bg-image bg-image2"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
        }}
      >
         <div style={{ position: 'relative', zIndex: 3 }}>
      <Navbar />
    </div>
        <h2 className="hero-heading-wrapper">
          {props.name} 
        </h2>
      </div>
    </div>
  );
}

export default UniBanner;
