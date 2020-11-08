import React, { useContext, useState } from "react";
import { Title } from "../typography/title/title";
import { Subtitile } from "../typography/subtitle/subtitle";
import { GlobalContext } from "../../context/navContext";
import { environmentUtil } from "../../utils/environmentUtil";

import "../fonts.css";
import "./portfolio.scss";

const titleHoverVariant = {
  hover: {
    textDecoration: "underline",
    cursor: "pointer",
    textDecorationSkipInk: "none",
  },
};

const Portfolio = ({
  src,
  title,
  subtitle,
  width,
  justify,
  height,
  heading,
}) => {
  const { browserWidth } = useContext(GlobalContext);
  if (environmentUtil.isMobile(browserWidth)) {
    justify = "space-between";
  }
  return (
    <div
      className="portfolioContainer"
      style={{ maxWidth: width, height }}
    >
      <div className="portfolioContent" style={{ justifyContent: justify }}>
        <div>
          <img src={src} className="portfolioImage" width={width} />
        </div>
        <div
          style={{ marginTop: !environmentUtil.isMobile(browserWidth) && 20 }}
        >
          <div className="portfolioTitle">
            <Title
              content={title}
              heading={heading}
            />
          </div>
          <div className="portfolioSubtitle">
            <Subtitile content={subtitle} heading={heading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Portfolio };
