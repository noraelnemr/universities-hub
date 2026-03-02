import React, { useState } from "react";
import "../styles/MajorPage.css";

function Accordion({ requirements = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2 className="study-plan-title">Requirements and Credentials</h2>
      {requirements.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "show" : ""
            }`}
          >
          {activeIndex === index && (
            <div>
            {item.notes.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
