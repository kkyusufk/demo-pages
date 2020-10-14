import React from "react";

import "./subHeading.css";

const SubHeading = ({ innerHtml, width, justify, color = 'rgba(51, 51, 51, 0.5)' }) => {
  const textArray = innerHtml.split("<br />");
  return (
    <h2 className="heading-h2" style={{ width, justifyContent: justify, color }}>
      {textArray[0]} <br /> {textArray[1]}
    </h2>
  );
};

export { SubHeading };
