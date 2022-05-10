import React from "react";

import Output from "./Output";

const DefaultOutput = ({ specialOffersData, displayOutputs }) => {
  console.log("DefaultOutput", displayOutputs);
  return specialOffersData.map((specialOffer, index) => {
    return (
      <Output
        key={index}
        offers={specialOffer.offers}
        displayOutputs={displayOutputs}
      />
    );
  });
};

export default DefaultOutput;
