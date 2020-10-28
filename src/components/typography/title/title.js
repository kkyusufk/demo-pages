import React from "react";
import { motion } from "framer-motion";

const Title = ({ content, hover }) => {
  return <motion.span variants={hover}>{content}</motion.span>;
};

export { Title };
