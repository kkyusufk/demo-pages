/** @jsx */
import React from "react";

const Image = ({ src, width, height }) => {
  return <img src={src} width={width} height={height} style={{ marginTop: "100px" }} />;
};

export { Image };
