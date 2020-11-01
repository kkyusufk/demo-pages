import { motion } from "framer-motion";
import React from "react";

import "./heading.scss";

const Heading = ({ innerHtml, align, justify, maxWidth = "100%", hover }) => {
  const textArray = innerHtml.split("<br />");
  return (
    <div
      className="heading"
      style={{
        textAlign: align,
        justifyContent: justify,
        maxWidth,
        display: "flex",
      }}
    >
      <motion.h1
        className="heading-h1"
        style={{ textAlign: align }}
        whileHover={
          hover && {
            textDecoration: "underline",
            cursor: "pointer",
            textDecorationSkipInk: "none",
          }
        }
      >
        { textArray.map( text => <> {text} <br /> </> ) }
      </motion.h1>
    </div>
  );
};

export { Heading };
