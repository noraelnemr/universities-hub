import React from "react";
import "../styles/Uni.css";

function ApplyNowSection(props) {
  return (
    <div className="apply-now-section">
      <a href={`https://${props.link}`} 
       target="_blank"
      rel="noopener noreferrer"
      className="apply-button">
        View universitys' Website
      </a>
    </div>
  );
}

export default ApplyNowSection;
