import React from "react";

const Details = ({ details }) => {
  return (
    <ul>
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  );
};

export default Details;
