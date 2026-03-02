import React from "react";
import { Link } from "react-router-dom";
import "../styles/Feature.css";

export default function Feature({ title, subtitle, info, image, button, link, reverse }) {
  return (
    <div className={`comparison-container ${reverse ? "reverse" : ""}`}>
      <div className="comparison-content">
        <h2>
          {title}
          {subtitle && (
            <>
              <br />
              <span>{subtitle}</span>
            </>
          )}
        </h2>
        <p>{info}</p>
        {button && link && (
          <Link to={link}>
            <button className="compare-button">{button}</button>
          </Link>
        )}
      </div>
      <div className="comparison-image">
        <img src={image} alt="Feature" />
      </div>
    </div>
  );
}
