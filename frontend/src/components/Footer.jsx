import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer({ scrollToUniversities }) {
  return (
    <footer className="footer">
     <div className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h2 className="footer-logo">Uni Vision</h2>
          <p className="footer-description">
            Your trusted platform for exploring and comparing top universities and majors in Egypt.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/quiz">Major Quiz</a></li>
            <li><a href="/comparison">Comparison Tool</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:support@univision.com">support@univision.com</a></p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:support@univision.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Uni Vision. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}
