import { motion } from "framer-motion";
import React from "react";

import "./heading.css";

const Heading = ({ innerHtml, align, justify, width = "100%", hover }) => {
  const textArray = innerHtml.split("<br />");
  return (
    <div
      className="heading"
      style={{
        textAlign: align,
        justifyContent: justify,
        width,
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
        {textArray[0]} <br /> {textArray[1]}
      </motion.h1>
    </div>
  );
};

export { Heading };
