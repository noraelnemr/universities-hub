import React, { useState } from "react";
import "../styles/MajorPage.css";

function StudyPlan({ qualification, durationn, modules = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="degree-header">
        <div className="degree-item">
          <p className="degree-title">Qualification</p>
          <p className="schooltype">{qualification}</p>
        </div>

        <div className="degree-item">
          <p className="degree-title">Duration</p>
          <p>{durationn}</p>
        </div>
      </div>

      <div className="study-plan">
        <h2 className="study-plan-title">WHAT WILL I STUDY?</h2>
        {modules.map((yearModule, index) => (
          <div key={index} className="study-plan-item">
            <div
              className="study-plan-header"
              onClick={() => toggleSection(index)}
            >
              {yearModule.title || `Year ${yearModule.year}`}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`study-plan-content ${
                activeIndex === index ? "show" : ""
              }`}
            >
              {activeIndex === index && (
                <table className="module-table">
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Credit Hours</th>
                      <th>Type</th>
                      <th>Semester</th>

                    </tr>
                  </thead>
                  <tbody>
                    {yearModule.courses.map((course, i) => (
                      <tr key={i}>
                        <td>{course.name}</td>
                        <td>{course.creditHours}</td>
                        <td>{course.type}</td>
                        <td>{course.semester}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyPlan;
