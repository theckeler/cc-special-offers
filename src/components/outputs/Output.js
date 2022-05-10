import React from "react";

import Button from "./Button";
import Details from "./Details";
import Dates from "./Dates";
import Content from "./Content";
import Title from "./Title";
import Image from "./Image";
import Pro from "./Pro";

const Output = ({ offers, displayOutputs }) => {
  return (
    <>
      {offers.map((offer, index) => {
        return (
          <li
            className={`col offer ${offer.pro ? "pro" : ""} ${
              offer.rebate ? "rebate" : ""
            }`}
            key={index}
          >
            <a href={offer.url} target={offer.target} className="d-flex h-100">
              <ul className="row flex-column list-unstyled">
                <li className="col image">
                  <Dates dates={offer.dates} />
                  {offer.pro ? <Pro /> : ""}
                  <Image image={offer.image} />
                </li>
                <li className="col d-flex flex-column h-100">
                  <div className="content d-flex flex-column h-100">
                    <Title title={offer.title} />
                    <Content content={offer.content} />
                    <Details details={offer.details} />
                    <Button buttonText={offer.buttonText} />
                  </div>
                </li>
              </ul>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default Output;
