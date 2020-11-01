import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../../data";
import "./team.css";

function Card({ id, name, description }) {
  return (
    <li className={`team-card`}>
      <motion.div
        key={`card-content-conatainer-key-${id}`}
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
              <motion.h1
                key={`name-${id}`}
                layoutId={`card-name-${id}`}
              >
                {name}
              </motion.h1>
              <motion.h2
                className="grey"
                layoutId={`card-description-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                {description}
              </motion.h2>
              <span
                className="details"
              >
                <Link to={`/about/${id}`} className='card-open-link'/>
                See details &#x2192;
              </span>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
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
