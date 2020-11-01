import React, { useContext, useEffect, useState, useRef } from "react";

import "./div-spacing.scss";
import { SPACING } from "../../constants";
import { GlobalContext } from "../../context/navContext";
import { environmentUtil } from "../../utils/environmentUtil";

/**
 * @TODO rename this to Spacings.js
 */
const Div = ({ children, type }) => {
  const spacingsDiv = useRef();
  const { browserWidth } = useContext(GlobalContext);

  useEffect(() => {
    const style = spacingsDiv.current.style;
    if (environmentUtil.isMobile(browserWidth)) {
      style.setProperty('--margin-top', `${SPACING[type].Mobile}`)
    }
    if (environmentUtil.isTablet(browserWidth)) {
      style.setProperty('--margin-top', `${SPACING[type].Tablet}`)
    }
    if (environmentUtil.isDesktop(browserWidth)) {
      style.setProperty('--margin-top', `${SPACING[type].Desktop}`)
    }
  }, [browserWidth]);

  return (
    <div className="div-spacing" ref={spacingsDiv}>
      {children}
    </div>
  );
};

export { Div };
