import React from "react";
import "./Card.css";

const Card = ({ Images }) => {
  return (
    <div className="data-box">
      {Images.map((Items) => {
        return (
          <div className="card">
            <img src={Items.urls.small} alt="" />

            <p>{Items.alt_description}</p>
            <button>Read More</button>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
