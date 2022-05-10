import React from "react";

import Button from "./Button";
import Details from "./Details";
import Dates from "./Dates";
import Content from "./Content";
import Title from "./Title";
import Image from "./Image";
import Pro from "./Pro";

const OutputSingle = ({ offer }) => {
  return (
    <a href={offer[0].url} target={offer[0].target} className="">
      <ul className="row no-gutters list-unstyled output single">
        <li className="col">
          <Image image={offer[0].image} />
        </li>
        <li className="col">
          <div className="content">
            <Title title={offer[0].title} />
            <div className="row no-gutters list-unstyled offers">
              {offer[0].pro ? <Pro /> : ""}
              <Dates dates={offer[0].dates} />
            </div>
            <Content content={offer[0].content} />
            <Details details={offer[0].details} />
            <Button buttonText={offer[0].buttonText} />
          </div>
        </li>
      </ul>
    </a>
  );
};

export default OutputSingle;
