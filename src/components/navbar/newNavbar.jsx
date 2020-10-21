/** @jsx */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "gatsby";

import { GlobalContext } from "../../context/navContext";
import { NAVITEMS } from "../../constants";
import "./navbar.css";
import { environmentUtil } from "../../utils/environmentUtil";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 100,
};

/**
 * Returns the nav items with the nav highlight.
 * @Component
 */
const NavItems = ({ nav, isSelected, onClick }) => {
  const currentPage =
    environmentUtil.isWindowDefined() &&
    document.querySelector("[aria-current]");
  const newNav = nav.split(" ").join("");
  return (
    <Link
      to={`/${newNav.toLowerCase()}/`}
      onClick={onClick}
      className="nav-items"
    >
      {nav}
      {isSelected && (
        <motion.div
          layoutId="tab"
          style={{
            backgroundColor: "black",
            height: "3px",
          }}
          initial={false}
          animate={{
            width: `${currentPage !== null && currentPage.clientWidth}`,
          }}
          transition={spring}
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

const NewNavbar = () => {
  const { currentPage, setCurrentPage, setShouldAnimate } = useContext(GlobalContext)
  const navItems = Object.values(NAVITEMS);
  return (
    <AnimateSharedLayout>
      <ul className="nav-header">
        {navItems.map((nav) => {
          return (
            <NavItems
              key={nav}
              isSelected={currentPage === nav}
              onClick={() => {
                setShouldAnimate(false) 
                setCurrentPage(nav)
              }}
              nav={nav}
            />
          );
        })}
      </ul>
    </AnimateSharedLayout>
  );
};

export { NewNavbar };
