import React from "react";

const Details = ({ details }) => {
  return (
    <>
      <h3>Offer Details:</h3>
      <ul className="details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </>
  );
};

export default Details;
