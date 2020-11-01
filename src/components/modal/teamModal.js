import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Link as GatsbyLink } from "gatsby";
import classnames from "classnames";
import { team } from "../../data";
import { Carousel } from "../carousel/carousel";
import "./team-modal.scss";
import { environmentUtil } from "../../utils/environmentUtil";

export default function Modal({ cardID, pathContext = {} }) {
  const cardContainer = useRef();
  useEffect(() => {
    cardContainer.current.scrollIntoView();
  });
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
        {pathContext !== `undefined` && typeof pathContext.name === "string" ? (
          environmentUtil.isWindowDefined() && (
            <Router>
              <GatsbyLink to="/about" />
            </Router>
          )
        ) : (
          <Link to="/about" />
        )}
      </motion.div>

      <motion.div
        ref={cardContainer}
        className={classnames("card-content-container open", {
          "position-relative": typeof pathContext.name === "string",
        })}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="modal-card-content"
          layoutId={`card-container-${cardID}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          <motion.div
            className="name-container"
            layoutId={`name-container-${cardID}`}
          >
            <motion.h1
              layoutId={`modal-name-${cardID}`}
              initial={false}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              Abhisek Sarda
            </motion.h1>
            <span
              className="description"
              // layoutId={`modal-description-${cardID}`}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, transition: { duration: 1 } }}
              // exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              Founder & Creative Director
            </span>
          </motion.div>
          <motion.div className="content-container" animate>
            <div>
              <p className="content-para">
                Abhisek brings 12+ years of experience in design and managing
                entrepreneurial ventures. Over this period, he has led branding
                and web design projects, launched and grown a niche brand of
                handmade soaps, designed low-cost furniture, shot portraits for
                a football team, advised founders and CEOs and built a
                presentation design studio that counts Facebook, Coca-Cola,
                Pepsi, Unilever, L'oreal and Cisco as clients.
              </p>
              <p className="content-para">
                He spends 80% of his time answering emails (if you don't hear
                back from us, you know who to blame!). In the other 20% he looks
                after Villa P (our studio), directs branding and web projects
                and meddles in everyone's work. He compulsively draws out ideas
                to make a point, not sparing any scrap of paper lying around,
                even cheque books!
              </p>
              <div className="team-modal-social">
                <span>
                  <u>Facebook</u>
                </span>
                <span>
                  <u>Instagram</u>
                </span>
                <span>
                  <u>Linkedin</u>
                </span>
              </div>
            </div>
            <div className="content-carousel">
              <div>
                <Carousel compact={true} />
              </div>
            </div>
            <button className="close-button">X</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
