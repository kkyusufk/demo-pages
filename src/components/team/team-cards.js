import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../../data";
import "./team.scss";

const cardVariant = {
  hover: { y: -40, transition: { duration: 0.1 } },
  initial: { y: 0 },
};

const detailsVariant = {
  hover: { y: -50, opacity: 1, transition: { duration: 0.1 } },
  initial: { y: 0, opacity: 0 },
};

function Card({ id, name, description }) {
  const cardRef = useRef();
  return (
    <li className={`team-card`}>
      <motion.div
        initial="initial"
        whileHover="hover"
        key={`card-content-conatainer-key-${id}`}
        className="card-content-container"
        layoutId={`card-content-container-${id}`}
        ref={cardRef}
      >
        <motion.div
          className="team-card-content"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="name-container team-card"
            layoutId={`name-container-card-${id}`}
          >
            <motion.h1 key={`name-${id}`} layoutId={`card-name-${id}`}>
              {name}
            </motion.h1>
            <motion.h2
              className="grey"
              key={`card-description-${id}`}
              variants={cardVariant}
              layoutId={`card-description-${id}`}
            >
              {description}
            </motion.h2>
            <motion.span
              className="details"
              key={`card-details-${id}`}
              variants={detailsVariant}
            >
              <Link
                to={`/about/${id}`}
                className="card-open-link"
                state={{ target: cardRef.current }}
              />
              See details &#x2192;
            </motion.span>
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
