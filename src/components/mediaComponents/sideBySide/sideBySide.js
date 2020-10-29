import React from "react";
import "./sideBySide.scss";

const SideBySide = ({ source1, source2 }) => {
  return (
    <div className="side-by-side-container">
      <div className="side-by-side">
        <img src={source1} />
        <img src={source2} />
      </div>
    </div>
  );
};

export { SideBySide };
