import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../../data";
import { Carousel } from "../carousel/carousel";
import './team-modal.scss'

export function Modal({ id }) {
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
            <Link to="/about" />
            </motion.div>

            <div className="card-content-container open">
            <motion.div className="team-card-content" layoutId={`card-container-${id}`}>
                <motion.div
                className="name-container"
                layoutId={`name-container-${id}`}
                >
                <motion.span layoutId={`h2-${id}`} className="name">Abhisek Sarda</motion.span>
                <motion.span className="about" layoutId={`about-${id}`} className="description">Founder & Creative Director</motion.span>
                </motion.div>
                <motion.div className="content-container" animate>
                <motion.div className="team-modal-wrapper">
                  Content
                </motion.div>
                </motion.div>
            </motion.div>
            </div>
        </>
    );
  };