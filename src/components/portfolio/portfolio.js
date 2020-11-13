import React, { useContext, useState } from "react";
import { Title } from "../typography/title/title";
import { Subtitile } from "../typography/subtitle/subtitle";
import { GlobalContext } from "../../context/navContext";
import { environmentUtil } from "../../utils/environmentUtil";

import "../fonts.css";
import "./portfolio.scss";
import { Spacing } from "../spacing/spacing";
import { SIZES } from "../../constants";

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
    <div className="portfolioContainer" style={{ maxWidth: width, maxHeight: height }}>
      <div className="portfolioContent">
        <div>
          <img src={src} className="portfolioImage" width={width} />
        </div>
        <Spacing marginTop={SIZES.S}>
          <div className="portfolioTitle">
            <Title content={title} heading={heading} />
          </div>
          <div className="portfolioSubtitle">
            <Subtitile content={subtitle} heading={heading} />
          </div>
        </Spacing>
      </div>
    </div>
  );
};

export { Portfolio };
