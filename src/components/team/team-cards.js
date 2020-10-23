import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../../data";
import "./team.css";

function Card({ id, name, description }) {
  return (
    <li className={`team-card`}>
      <motion.div
        className="card-content-container"
        layoutId={`card-content-container-${id}`}
      >
        <motion.div
          className="team-card-content"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="name-container"
            layoutId={`name-container-${id}`}
          >
            <AnimatePresence exitBeforeEnter>
              <motion.span
                key={`name-${id}`}
                className="name"
                layoutId={`card-name-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
              >
                {name}
              </motion.span>
              <motion.span
                className="description"
                layoutId={`card-description-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                {description}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
      <Link to={`/about/${id}`} className={`card-open-link`} />
    </li>
  );
}

export function Cards({ selectedId }) {
  return (
    <ul className="card-list">
      {team.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
