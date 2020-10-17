import React, { useContext, useEffect, useState } from "react";

import "./div-spacing.scss";
import { SPACING } from "../../constants";
import { GlobalContext } from "../../context/navContext";

/**
 * @TODO rename this to Spacings.js
 */
const Div = ({ children, type }) => {
  const [elSpacing, setElSpacing] = useState(SPACING[type].Desktop);
  const { browserWidth } = useContext(GlobalContext);

  /**
   * @Chris the other way to handle this is css media queries
   */
  useEffect(() => {
    const spacing = SPACING[type];
    if (browserWidth >= 992) {
      setElSpacing(spacing.Desktop);
    } else if (browserWidth >= 768 && browserWidth <= 991) {
      setElSpacing(spacing.Tablet);
    } else if (browserWidth <= 767) {
      setElSpacing(spacing.Mobile);
    }
  }, [browserWidth]);

  return (
    <div className="div-spacing" style={{ marginTop: elSpacing }}>
      {children}
    </div>
  );
};

export { Div };
