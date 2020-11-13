/** @jsx */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "gatsby";

import { GlobalContext } from "../../context/navContext";
import { NAVITEMS } from "../../constants";
import "./navbar.css";
import { environmentUtil } from "../../utils/environmentUtil";
import { Button } from "../button/Button/Button";
import hamburger from "../../Assets/icons/hamburger.svg";

/**
 * Returns the nav items with the nav highlight.
 * @returns {React.FC}
 */
const NavItems = ({ nav, isSelected, onClick }) => {
  const { browserWidth } = useContext(GlobalContext);
  let currentPage;
  const allNavElements =
    environmentUtil.isWindowDefined() &&
    document.querySelectorAll(".nav-items");
  Array.from(allNavElements).forEach((page) => {
    if (page.text === nav) currentPage = page;
  });
  const newNav = nav.split(" ").join("");
  return (
    <Link
      to={newNav === "Home" ? "/" : `/${newNav.toLowerCase()}/`}
      onClick={onClick}
      className="nav-items"
    >
      <h2 className="nav-h2">{nav}</h2>
      {isSelected && (
        <motion.div
          layoutId="tab"
          style={{
            backgroundColor: "black",
            height: "3px",
          }}
          initial={false}
          animate={
            !environmentUtil.isMobile(browserWidth) && {
              width: `${currentPage !== undefined && currentPage.clientWidth}`,
              transition: { duration: 0.1 },
            }
          }
        />
      )}
    </Link>
  );
};

NavItems.propTypes = {
  /**
   * The nav text to be displayed.
   */
  nav: PropTypes.string.isRequired,
  /**
   * If true, the current nav is the active nav.
   */
  isSelected: PropTypes.bool.isRequired,
  /**
   * The function to be called when the nav item is clicked.
   */
  onClick: PropTypes.func.isRequired,
};

const sidebar = {
  open: {
    clipPath: "circle(1200px at 100% 100%)",
    display: "flex",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at 89% 3%)",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

/** @returns {React.FC} */
const NewNavbar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const {
    currentPage,
    setCurrentPage,
    setShouldAnimate,
    browserWidth,
  } = useContext(GlobalContext);
  const navItems = Object.values(NAVITEMS);

  const noScroll = () => window.scrollTo(0, 0);

  useEffect(() => {
    if (isOpen && environmentUtil.isMobile(browserWidth)) {
      window.addEventListener("scroll", noScroll);
      return () => window.removeEventListener("scroll", noScroll);
    }
  }, [isOpen]);

  return (
    <AnimateSharedLayout>
      <motion.ul
        className="nav-header"
        variants={sidebar}
        animate={
          isOpen && environmentUtil.isMobile(browserWidth) ? "open" : "closed"
        }
      >
        {navItems.map((nav) => {
          return (
            <NavItems
              key={nav}
              isSelected={currentPage === nav}
              onClick={() => {
                toggleOpen(false);
                setShouldAnimate(false);
                setCurrentPage(nav);
              }}
              nav={nav}
            />
          );
        })}
      </motion.ul>
      <Button
        className="hamburger"
        src={hamburger}
        onClick={() => toggleOpen((state) => !state)}
      />
    </AnimateSharedLayout>
  );
};

export { NewNavbar };
