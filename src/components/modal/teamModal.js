import React, { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Link as GatsbyLink } from "gatsby";
import classnames from "classnames";

import { Spacing } from '../spacing/spacing';
import { Carousel } from "../carousel/carousel";
import { environmentUtil } from "../../utils/environmentUtil";
import { GlobalContext } from "../../context/navContext";
import { SIZES } from "../../constants";

import "./team-modal.scss";
import "../team/team.scss"

const DesktopModalVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.15 } }
}

const MobileModalVariant = {
  initial: { opacity: 0, y: 1000 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { y: 1000, transition: { duration: 1 }, transitionEnd: { opacity: 0 } }
}

export default function Modal({ cardID, pathContext = {}, location }) {
  const cardContainer = useRef();
  const { browserWidth } = useContext(GlobalContext);
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
      </motion.div>
      <motion.div
        ref={cardContainer}
        className={classnames("card-content-container open", {
          "position-relative": typeof pathContext.name === "string",
        })}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {pathContext !== `undefined` && typeof pathContext.name === "string" ? (
          environmentUtil.isWindowDefined() && (
            <Router>
              <GatsbyLink to="/about" style={{ position: 'fixed', right: 0, width: '20vw', height: '10vh', zIndex: 3 }} />
            </Router>
          )
        ) : (
          <Link to="/about" style={{ position: 'fixed', right: 0, width: '20vw', height: '10vh', zIndex: 3 }}/>
        )}
        <motion.div
          className="modal-card-content"
          layoutId={`card-container-${cardID}`}
          variants={ environmentUtil.isMobile(browserWidth) ? MobileModalVariant : DesktopModalVariant }
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="name-container team-modal"
            layoutId={`name-container-modal-${cardID}`}
          >
            <motion.h1
              layoutId={ !environmentUtil.isMobile(browserWidth) ? `modal-name-${cardID}` : undefined}
              initial={false}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              Abhisek Sarda
            </motion.h1>
            <span className="description">Founder & Creative Director</span>
          </motion.div>
          <motion.div className="content-container" animate>
            <div className="content-paragraph-container">
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
              <Spacing marginTop={SIZES.M}>
                <div className="team-modal-social">
                  <h3>
                    <u>Facebook</u>
                  </h3>
                  <h3>
                    <u>Instagram</u>
                  </h3>
                  <h3>
                    <u>Linkedin</u>
                  </h3>
                </div>
              </Spacing>
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
