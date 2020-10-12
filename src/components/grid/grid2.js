import React from "react";
import "./grid2.css";

const Grid2 = ({ children, columnGap = "30px" }) => {
  return (
    <div className="wrapper-grid2" style={{ columnGap }}>
      {children}
    </div>
  );
};

export { Grid2 };
