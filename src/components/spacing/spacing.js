import React, { useContext, useEffect, useState, useRef } from "react";

import "./div-spacing.scss";
import { SPACING } from "../../constants";
import { GlobalContext } from "../../context/navContext";
import { environmentUtil } from "../../utils/environmentUtil";

/**
 * @returns {React.FC}
 */
const Spacing = ({ children, marginTop, padding }) => {
  const spacingsDiv = useRef();
  const { browserWidth } = useContext(GlobalContext);

  useEffect(() => {
    const style = spacingsDiv.current.style;
    if (environmentUtil.isMobile(browserWidth)) {
      style.setProperty("--margin-top", `${SPACING[marginTop].Mobile}`);
    }
    if (environmentUtil.isTablet(browserWidth)) {
      style.setProperty("--margin-top", `${SPACING[marginTop].Tablet}`);
    }
    if (environmentUtil.isDesktop(browserWidth)) {
      style.setProperty("--margin-top", `${SPACING[marginTop].Desktop}`);
    }
  }, [browserWidth]);

  return (
    <div
      className="div-spacing"
      ref={spacingsDiv}
      style={{ padding: `0px ${padding}` }}
    >
      {children}
    </div>
  );
};

export { Spacing };
