import React from "react";

const style = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "180%",
  width: '770px'
};

const BlogParagraph = ({ text, marginTop, color }) => {
  return <p style={{ ...style, marginTop, color }}>{text}</p>;
};

export { BlogParagraph };
