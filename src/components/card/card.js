import React from "react";
import { Link } from "gatsby";

import "./card.css";
import "../layout.css";
import { motion } from "framer-motion";

const Card = ({ id, TopContent, BottomContent, HiddenContent }) => {
  return (
    <li>
    <motion.div className="cardContainer" layoutId={`card-container-${id}`} >
      <div className="card">
        <div className="card-content">
          <TopContent />
          <BottomContent />
        </div>
        {HiddenContent && <HiddenContent />}
      </div>
      <Link to={id} className={`card-open-link`} />
    </motion.div>
    </li>
  );
};

export { Card };
