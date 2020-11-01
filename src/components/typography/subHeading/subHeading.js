import React from "react";

import "./subHeading.css";

const SubHeading = ({
  innerHtml,
  width,
  justify,
  color = "rgba(51, 51, 51, 0.5)",
}) => {
  const textArray = innerHtml.split("<br />");
  return (
    <div className="sub-heading-container">
      <h2
        style={{ maxWidth: width, justifyContent: justify, color }}
      >
        {textArray[0]} <br /> {textArray[1]}
      </h2>
    </div>
  );
};

export { SubHeading };
