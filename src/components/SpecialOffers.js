import React, { useState, useEffect } from "react";

import "../stylesheets/main.min.css";
import specialOffersData from "../data/offers.js";
import DefaultOutput from "./outputs/DefaultOutput";
import FilteredOutput from "./outputs/FilteredOutput";

const SpecialOffers = () => {
  const [displayOutputs, setDisplayOutputs] = useState("all");
  // useEffect(() => {
  //   setDisplayOutputs("all");
  // }, []);

  return (
    <>
      <section className="section-1">
        <div className="wrapper text-center">
          <h1>SPECIAL OFFERS ON RESIDENTIAL AND PROFESSIONAL PRODUCTS</h1>
          <p>
            Save any season with rebates and discounts on residential and
            professional outdoor power equipment from Cub Cadet. Plus, learn
            more about year round specials for first responders, military
            members, NHLA members and Equine Groups.
          </p>
          <nav>
            <ul className="row list-unstyled output buttons">
              <li>Filter:</li>
              <li className="col">
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplayOutputs("all");
                  }}
                >
                  All Offers
                </button>
              </li>
              <li className="col">
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplayOutputs("pro");
                  }}
                >
                  Professional
                </button>
              </li>
              <li className="col">
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplayOutputs("rebate");
                  }}
                >
                  Rebates
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {displayOutputs !== "all" ? (
        <section className="filtered">
          <div className="wrapper">
            <h2 className="filtered-title">Filtering by {displayOutputs}</h2>
            <ul className={`row list-unstyled output filter-${displayOutputs}`}>
              <FilteredOutput
                specialOffersData={specialOffersData}
                displayOutputs={displayOutputs}
              />
            </ul>
          </div>
        </section>
      ) : (
        specialOffersData.map((specialOffer, index) => {
          return (
            <section
              className={`section-${index + 2} cols-${Number(
                specialOffer.offers.length
              )} ${specialOffer.background ? specialOffer.background : ""}`}
              key={index}
            >
              <DefaultOutput specialOffer={specialOffer} />
            </section>
          );
        })
      )}
    </>
  );
};

export default SpecialOffers;
