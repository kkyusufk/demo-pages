import React from "react";

const style = {
  fontFamily: "Roobert-Regular",
  fontStyle: "normal",
  maxWidth: "100%",
  fontWeight: 500,
  fontSize: "64px",
  lineHeight: "115%",
  /* or 74px */
  textAlign: "center",
};

const BlogQuote = ({ QuotedText }) => {
  return (
    <div className="heading-h1" style={{ textAlign: "center" }}>
      {QuotedText}
    </div>
  );
};

export { BlogQuote };
