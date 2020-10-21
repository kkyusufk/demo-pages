import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../../data";
import './team.css'

function Card({ id, name, description }) {
  return (
    <li className={`team-card`}>
      <motion.div className="card-content-container" layoutId={`card-content-container-${id}`}>
        <motion.div className="team-card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="name-container"
            layoutId={`name-container-${id}`}
          >
            <motion.span
                className='name'
                layoutId={`h2-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >{name}</motion.span>
            <motion.span className="description" layoutId={`about-${id}`}>{description}</motion.span>
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
          {team.map(card => (
            <Card key={card.id} {...card} isSelected={card.id === selectedId} />
          ))}
        </ul>
    );
}