import React, { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

import { Card } from "../card/card";
import { Grid } from "../grid/grid";
import { team } from "../../data";
import "./page3.css";
import { Link } from "gatsby";

const TeamCards = ({ selectedId }) => {
  return (
    <Grid>
    <ul className="card-list">
    {team.map((card, index) => (
      <Card 
        key={card.id}
        TopContent={() => <span className="name">{card.name}</span>}
        BottomContent={() => {
          return (
            <>
              <span
                className="description"
              >
                {card.description}
              </span>
              <span
                className="details"
              >
                See details &#x2192;
              </span>
            </>
          );
        }}
        isSelected={card.id === selectedId} />
    ))}
  </ul>
  </Grid>
  )
}

export function Modal({ id }) {
  const name = "Yusuf"
  const about = "khan"

  return (
      <>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
          >
          <Link to="/" />
          </motion.div>

          <div className="card-content-container open">
          <motion.div className="card-content" layoutId={`card-container-${id}`}>
              <motion.div
              className="name-container"
              layoutId={`name-container-${id}`}
              >
              <span className="about">{about}</span>
              <h2>{name}</h2>
              </motion.div>
              <motion.div className="content-container" animate>
                  <p>adajsidbasjbdasjdabsjidasbdjsibdjsaibdasjidbasjdibasjdibasjdiasbdjiasbdjasi</p>
              </motion.div>
          </motion.div>
          </div>
      </>
  );
}

const Team = ({ match }) => {
  let { id } = match.params;

  return (
    <>
      <TeamCards selectedId={id} />
      <AnimatePresence>
        {id && <Modal id={id} key="modal" />}
      </AnimatePresence>
    </>
  );
};

export { Team };
