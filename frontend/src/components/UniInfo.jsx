import React from "react";
import ReactDOM from "react-dom";

function UniInfo(props) {
  return (
    <div>
      <div className="university-info">
        <div>
          <p>
            Address :<span>{props.address}</span>
          </p>
          <p>
            Explore Campus 360° from{" "}
            <a
              href={props.campusTourLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>
          </p>
        </div>
        <p>
          Official website :
          <a
            href={`https://${props.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.website}
          </a>
        </p>
      </div>
      <div className="rankings">
        <h2>RANKINGS & AWARDS</h2>
        <div className="rankings-box">
          <div className="ranking-item">
            <span className="rank-number">#{props.world} </span>
            <span className="rank-total">of {props.totalWorld}</span>
            <p>In the World</p>
          </div>
          <div className="ranking-item">
            <span className="rank-number">#{props.africa} </span>
            <span className="rank-total">of {props.totalAfrica}</span>
            <p>In Africa</p>
          </div>
          <div className="ranking-item">
            <span className="rank-number">#{props.egypt} </span>
            <span className="rank-total">of Top {props.totalEgypt}</span>
            <p> In Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniInfo;
