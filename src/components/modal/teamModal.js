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
            transition={{ duration: 2, delay: 0.15 }}
            style={{ pointerEvents: "auto" }}
            className="overlay"
            >
            <Link to="/about" />
            </motion.div>

            <motion.div 
              className="card-content-container open"
              transition={{ duration: 2 }}
              >
            <motion.div 
              className="modal-card-content" 
              layoutId={`card-container-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                <motion.div
                className="name-container"
                layoutId={`name-container-${id}`}
                >
                <motion.span 
                  className="name"
                  layoutId={`modal-name-${id}`}
                  initial={false}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                >Abhisek Sarda</motion.span>
                <motion.span 
                  className="description"
                  layoutId={`modal-description-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  >Founder & Creative Director</motion.span>
                </motion.div>
                <motion.div className="content-container" animate>
                  <div>
                  <p className="content-para">
                  Abhisek brings 12+ years of experience in design and managing entrepreneurial ventures. Over this period, he has led branding and web design projects, launched and grown a niche brand of handmade soaps, designed low-cost furniture, shot portraits for a football team, advised founders and CEOs and built a presentation design studio that counts Facebook, Coca-Cola, Pepsi, Unilever, L'oreal and Cisco as clients.
                  </p>
                  <p className="content-para">
                  He spends 80% of his time answering emails (if you don't hear back from us, you know who to blame!). In the other 20% he looks after Villa P (our studio), directs branding and web projects and meddles in everyone's work. He compulsively draws out ideas to make a point, not sparing any scrap of paper lying around, even cheque books!
                  </p>
                  <div className="team-modal-social">
          <spans>
            <u>Facebook</u>
          </spans>
          <spans>
            <u>Instagram</u>
          </spans>
          <spans>
            <u>Linkedin</u>
          </spans>
        </div>
                  </div>
                  <div className="content-carousel">
                    <div>
                      <Carousel compact={true} />
                    </div>
                  </div>
                  <button className="close-button">
                    X
                  </button>
                </motion.div>
            </motion.div>
            </motion.div>
        </>
    );
  };