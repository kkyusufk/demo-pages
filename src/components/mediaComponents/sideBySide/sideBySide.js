import React from "react";
import PropTypes from "prop-types";

import "./sideBySide.scss";

const SideBySide = ({ source1, source2, content }) => {
  return (
    <div className="side-by-side-container">
      <div className="side-by-side">
        <img src={source1} />
        {source2 ? <img src={source2} /> : <h2>{content}</h2>}
      </div>
    </div>
  );
};

export { SideBySide };
