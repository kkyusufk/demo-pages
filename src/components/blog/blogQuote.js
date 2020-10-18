import React from "react";

const style = {
  fontFamily: "Roobert-Regular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "64px",
  lineHeight: "115%",
  /* or 74px */
  textAlign: "center",
};

const BlogQuote = ({ QuotedText }) => {
  return <p style={style}>{QuotedText}</p>;
};

export { BlogQuote };
