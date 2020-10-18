import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "gatsby";
import { NAVITEMS } from "../../constants";
import "./navbar.css";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

/**
 * Returns the nav items with the nav highlight.
 * @returns {JSX}
 * @Component
 */
const NavItems = ({ nav, isSelected, onClick }) => {
  const currentPage = document.querySelector("[aria-current]");
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
  const [selected, setSelected] = useState("Home");
  const navItems = Object.values(NAVITEMS);
  return (
    <AnimateSharedLayout>
      <ul className="nav-header">
        {navItems.map((nav) => {
          return (
            <NavItems
              key={nav}
              isSelected={selected === nav}
              onClick={() => setSelected(nav)}
              nav={nav}
            />
          );
        })}
      </ul>
    </AnimateSharedLayout>
  );
};

export { NewNavbar };
