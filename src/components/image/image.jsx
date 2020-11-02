/** @jsx */
import React from "react";

import './image.scss';

const Image = ({ src, width, height, type }) => {
  return (
    <img
      className="image"
      src={src}
      width={width}
      height={height}
      style={type === 'full-width' ? { padding: 0 } : {}}
    />
  );
};

export { Image };
