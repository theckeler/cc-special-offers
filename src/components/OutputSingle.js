import React from "react";

import Button from "../components/Button";
import Details from "../components/Details";
import Dates from "../components/Dates";
import Content from "../components/Content";
import Title from "../components/Title";
import Image from "../components/Image";

const OutputSingle = ({ offer }) => {
  return (
    <a href={offer[0].url} className="">
      <ul className="row list-unstyled output single">
        <li className="col">
          <Image image={offer[0].image} />
        </li>
        <li className="col">
          <Title title={offer[0].title} />
          <Dates dates={offer[0].dates} />
          <Content content={offer[0].content} />
          <Details details={offer[0].details} />
          <Button buttonText={offer[0].buttonText} />
        </li>
      </ul>
    </a>
  );
};

export default OutputSingle;
