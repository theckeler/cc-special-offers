import React from "react";

import Button from "../components/Button";
import Details from "../components/Details";
import Dates from "../components/Dates";
import Content from "../components/Content";
import Title from "../components/Title";
import Image from "../components/Image";

const Output = ({ offers }) => {
  return (
    <ul className="row list-unstyled output">
      {offers.map((offer, index) => {
        //console.log(offer);
        return (
          <li className={`col ${offer.pro ? "pro" : ""}`} key={index}>
            <a href={offer.url} className="d-flex h-100">
              <ul className="row flex-column list-unstyled">
                <li className="col image">
                  <Dates dates={offer.dates} />
                  <Image image={offer.image} />
                </li>
                <li className="col d-flex flex-column h-100 content">
                  <Title title={offer.title} />
                  <Content content={offer.content} />
                  <Details details={offer.details} />
                  <Button buttonText={offer.buttonText} />
                </li>
              </ul>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Output;
