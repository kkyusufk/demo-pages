import React from "react";
import { motion } from "framer-motion";

const Title = ({ content, shouldHover }) => {
  return (
    <motion.span
      whileHover={shouldHover && {
        textDecoration: "underline",
        cursor: "pointer",
        textDecorationSkipInk: "none",
      }}
    >
      {content}
    </motion.span>
  );
};

export { Title };
