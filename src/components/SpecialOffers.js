import React from "react";

import "../stylesheets/main.min.css";
import specialOffersData from "../data/offers.js";
import OutputSingle from "../components/OutputSingle";
import Output from "../components/Output";

const SpecialOffers = () => {
  return (
    <>
      <section className="section-1">
        <div className="wrapper text-center">
          <h1 className="font-weight-normal">
            SPECIAL OFFERS ON RESIDENTIAL AND PROFESSIONAL PRODUCTS
          </h1>
          <p>
            Save any season with rebates and discounts on residential and
            professional outdoor power equipment from Cub Cadet. Plus, learn
            more about year round specials for first responders, military
            members, NHLA members and Equine Groups.
          </p>
        </div>
      </section>

      {specialOffersData.map((specialOffer, index) => {
        return (
          <section
            className={`section-${index + 2} cols-${Number(
              specialOffer.offers.length
            )} ${specialOffer.background ? specialOffer.background : ""}`}
            key={`section-${index}`}
          >
            <div className="wrapper">
              {specialOffer.offers.length === 1 ? (
                <OutputSingle offer={specialOffer.offers} />
              ) : (
                <Output offers={specialOffer.offers} />
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SpecialOffers;
