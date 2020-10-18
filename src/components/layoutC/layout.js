import React, { memo, useContext } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import "./layoutCss.css";
import { isPortfolioDetails } from "../../utils/pagesUtil";
import { NewNavbar } from "../navbar/newNavbar";
import { Logo } from "../logo/logo";
import { GlobalContext } from "../../context/navContext";

const containerVariants = {
  slideUp: {
    y: 1000,
  },
  stop: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: -1000,
    transition: {
      from: -1000,
      duration: 1,
    },
  },
};

const Container = memo(({ location, children }) => {
  const { scrollY } = useContext(GlobalContext)
  return (
    <motion.div
        layout
        custom={scrollY}
        variants={containerVariants}
        initial="slideUp"
        animate="stop"
        exit="exit"
        style={{
          position: 'absolute',
        }}
        >
          <motion.div style={{
            backgroundColor: '#F1F1F1'
          }}>
      <motion.div className="container">
        <motion.header className="header column">
          <motion.div className="header-wrapper">
            <motion.div className="opposite-svg-header">
              <Logo />
            </motion.div>
            <NewNavbar />
          </motion.div>
        </motion.header>
        <motion.main
          className="content column"
          style={{
            padding: `${isPortfolioDetails(location.pathname) && 0}`,
          }}
        >
          <motion.section className="main-content">{children}</motion.section>
        </motion.main>
        <motion.footer className="footer column">
          <motion.div className="opposite-svg-footer">
            <Logo />
          </motion.div>
        </motion.footer>
      </motion.div>
      </motion.div>
    </motion.div>
  )
})

const Layout = memo(({ location, children }) => {
  return (
    <AnimatePresence>
        <Container 
          key={location.key}
          location={location}
          children={children}
        />
      </AnimatePresence>
  );
});

export { Layout };
