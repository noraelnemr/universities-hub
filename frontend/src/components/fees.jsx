import React from "react";
import "../styles/MajorPage.css";

function Fees(props)
{
return(
    <div>
    <div className="degree-header ex">
      <div className="degree-item">
        <p className="degree-title">Tuition fees:</p>
        <p className="schooltype">{props.fees}</p>
      </div>
    </div>
    </div>
);
}
export default Fees;

