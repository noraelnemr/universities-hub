// components/ProgramCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProgramCard.css";

function ProgramCard({ title, duration, image, learnMoreLink, applyNowLink }) {
  return (
    <div className="school-card">
      <img src={image} alt={title} className="school-image" />
      <div className="school-content">
        <h2 className="card-title" >{title}</h2>
        <p className="duration">
          Duration:{duration}
        </p>
        <div className="buttons-pc">
          <Link to={learnMoreLink} className="btn learn-more">
            Learn more
          </Link>
          <div></div>
          <a href={applyNowLink} className="btn apply-now"   target="_blank"
              rel="noopener noreferrer">
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
