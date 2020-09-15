import React from "react";

import "./highlight.css";

const Highlight = ({ src, heading, subHeading, width }) => {
  return (
    <div className="highlightContainer" style={{ width: `${width}` }}>
      <img
        src={src || "https://source.unsplash.com/random"}
        style={{ width: `${width}` }}
      />
      <div className="highlightDescription">
        <div className="heading">{heading}</div>
        <div className="subHeading">{subHeading}</div>
      </div>
    </div>
  );
};

export { Highlight };
