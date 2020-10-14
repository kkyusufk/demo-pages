import React from "react";

import "./heading.css";

const Heading = ({ innerHtml, align, justify, width = "100%", underline }) => {
  const textArray = innerHtml.split("<br />");
  return (
    <div
      className="heading"
      style={{ textAlign: align, justifyContent: justify, width }}
    >
      <h1 className="heading-h1" style={{ textAlign: align }}>
        {textArray[0]} <br /> {textArray[1]}
      </h1>
    </div>
  );
};

export { Heading };
