import React from "react";
import "../styles/MajorPage.css";


const JobProfiles = (props) => {
  return (
    <div className="job-profiles-container">
      <h2 className="job-profiles-title">{props.major} Career</h2>
      <p> {props.job}</p>    
    </div>
  );
};

export default JobProfiles;
