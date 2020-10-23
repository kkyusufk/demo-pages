import { motion } from "framer-motion";
import React from "react";

const Title = ({ content }) => {
  return <motion.span
    whileHover={{ 
      textDecoration: 'underline', 
      cursor: 'pointer', 
      textDecorationSkipInk: 'none' 
    }}
  >{content}</motion.span>;
};

export { Title };
