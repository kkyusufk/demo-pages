import React from "react";
import { motion } from "framer-motion";

const Title = ({ content, hover, heading }) => {
  if (heading === "h3") {
    return (
      <motion.h3 className="alternative" variants={hover}>
        {content}
      </motion.h3>
    );
  } else {
    return <motion.h2 variants={hover}>{content}</motion.h2>;
  }
};

export { Title };
