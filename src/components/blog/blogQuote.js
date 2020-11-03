import React from "react";

const style = {
  fontFamily: "Roobert-Regular",
  fontStyle: "normal",
  maxWidth: '100%',
  fontWeight: 500,
  fontSize: "64px",
  lineHeight: "115%",
  /* or 74px */
  textAlign: "center",
};

const BlogQuote = ({ QuotedText }) => {
  return <h1 style={{ textAlign: 'center' }}>{QuotedText}</h1>;
};

export { BlogQuote };
