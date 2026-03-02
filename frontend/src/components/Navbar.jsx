import React from "react";
import ReactDOM from "react-dom";

function Navbar() {
  return (
    <nav>
      <p>UniVision</p>
      <div class="nav-links">
        <a href="/">HOME</a>
        <a href="/about">ABOUT US</a>
        <a href="/FAQ">FAQ</a>
        <div className="dropdown">
          <a className="dropbtn">SERVICES ▾</a>
          <div className="dropdown-content">
            <a href="/comparison">Comparison Tool</a>
            <a href="/quiz">Recommendation Quiz</a>
          </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
