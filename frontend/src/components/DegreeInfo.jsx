import React, { useState } from "react";
import "../styles/MajorPage.css";

function DegreeInfo(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="degree-info">
  <div className="title-line"></div>
      <div className="degree-content">
        <img
          src={props.imageSrc}
          alt={props.degreeName}
          className="degree-image"
        />
        <div className="degree-text">
          <h2>{props.degreeName}</h2>
          <div className="degree-subtitle">
            <p>About the Degree</p>
          </div>
          <p className="about">{props.degreeInfo}</p>
        </div>
      </div>
      <div className="title-line"></div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>How to Apply</h2>
            <p>Click the link below to start your application process.</p>
            <a
              href={props.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="apply-link"
            >
              Apply Now
            </a>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DegreeInfo;
