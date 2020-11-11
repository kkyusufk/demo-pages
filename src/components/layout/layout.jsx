/** @jsx */
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

import "./layoutCss.css";
import { isPortfolioDetails } from "../../utils/pagesUtil";
import { NewNavbar } from "../navbar/newNavbar";
import { Logo } from "../logo/logo";
import { GlobalContext } from "../../context/navContext";
import { environmentUtil } from "../../utils/environmentUtil";

const ContainerVariant = {
  initial: { y: 1000, position: "absolute", transition: { duration: 1 } },
  animate: { y: 0, position: "absolute", transition: { duration: 1 } },
  exit: (i) => ({
    y: "-100%",
    transition: {
      duration: 1,
      from: -i,
    },
  }),
};

const testVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, position: "absolute" },
  exit: { opacity: 0 },
};

const Layout = ({ location, children }) => {
  return (
    <GlobalContext.Consumer>
      {(value) => (
        <AnimatePresence
          exitBeforeEnter={!value.shouldAnimate}
          custom={environmentUtil.isWindowDefined() && window.scrollY}
        >
          <motion.div
            custom={environmentUtil.isWindowDefined() && window.scrollY}
            key={location.key}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
            }}
            className="container"
            variants={value.shouldAnimate && ContainerVariant}
            initial="initial"
            animate="animate"
            exit={value.shouldAnimate && "exit"}
          >
            <header className="header column">
              <div className="header-wrapper">
                <div className="opposite-svg-header">
                  <Logo />
                </div>
                <NewNavbar />
              </div>
            </header>
            <main
              className="content column"
              style={{
                padding: `${isPortfolioDetails(location.pathname) && 0}`,
              }}
            >
              <section className="main-content">{children}</section>
            </main>
            <footer className="footer column">
              <div className="opposite-svg-footer">
                <Logo />
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      )}
    </GlobalContext.Consumer>
  );
};

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.element,
};

export { Layout };
