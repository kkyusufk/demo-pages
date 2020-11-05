import React from "react";
import PropTypes from 'prop-types';

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

SideBySide.propTypes = {
  source1: PropTypes.string.isRequired(),
  source2: PropTypes.string,
  content: PropTypes.string
}

export { SideBySide };
