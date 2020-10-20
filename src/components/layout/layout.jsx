/** @jsx */
import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types'

import "./layoutCss.css";
import { isPortfolioDetails } from "../../utils/pagesUtil";
import { NewNavbar } from "../navbar/newNavbar";
import { Logo } from "../logo/logo";

const ContainerVariant = {
  initial: { y: 1000, transition: { duration: .5 } },
  animate: { y: 0, transition: { duration: .5 } },
  exit: { y: -3000, transition: { duration: .5 } }
}

const Layout = ({ location, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
        key={location.key}
        className="container"
        variants={ContainerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
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
            padding: `${
              isPortfolioDetails(location.pathname) ? 0 : " 0% 9.3% 0% 9.3%"
            }`,
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
  )
};

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.element
}


export { Layout };
