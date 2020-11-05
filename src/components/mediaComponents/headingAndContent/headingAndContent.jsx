/** @jsx */
import React from 'react';
import PropTypes from 'prop-types';

import './HeadingAndContent.scss'

const HeadingAndContent = ({ heading, content, color }) => {
  return (
    <div className="heading-and-content-container">
      <div style={{ color }} className="heading-and-content-content">
        <h2 className="bold">{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
};

export { HeadingAndContent }