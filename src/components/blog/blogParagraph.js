import React from "react";

const style = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "180%",
  paddingRight: "100px",
  paddingLeft: "100px",
};

const BlogParagraph = ({ text }) => {
  return <p style={style}>{text}</p>;
};

export { BlogParagraph };
