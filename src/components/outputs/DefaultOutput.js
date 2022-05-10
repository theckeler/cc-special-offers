import React from "react";

//import specialOffersData from "../data/offers.js";
import OutputSingle from "./OutputSingle";
import Output from "./Output";

const DefaultOutput = ({ specialOffer }) => {
  return (
    <div className="wrapper">
      {specialOffer.offers.length === 1 ? (
        <OutputSingle offer={specialOffer.offers} />
      ) : (
        <ul className="row list-unstyled output">
          <Output offers={specialOffer.offers} />
        </ul>
      )}
    </div>
  );
};

export default DefaultOutput;
