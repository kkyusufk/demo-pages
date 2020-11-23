/** @jsx */
import React from "react";
import PropTypes from "prop-types";

import "./headingAndContent.scss";

const HeadingAndContent = ({ heading, content, color }) => {
  return (
    <div className="heading-and-content-container">
      <div className="heading-and-content-content">
        <h2 className="bold" style={{ color }}>
          {heading}
        </h2>
        <p style={{ color }}>{content}</p>
      </div>
    </div>
  );
};

HeadingAndContent.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
};

export { HeadingAndContent };
