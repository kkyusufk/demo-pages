import React, { useContext } from "react";
import { Title } from "../typography/title/title";
import { Subtitile } from "../typography/subtitle/subtitle";
import { GlobalContext } from "../../context/navContext";

import "../fonts.css";
import "./portfolio.css";
import { BREAKPOINTS } from "../../constants";

const Portfolio = ({ src, title, subtitle, width, justify, height }) => {
  const { browserWidth } = useContext(GlobalContext);
  console.log(browserWidth)
  if (browserWidth <= BREAKPOINTS.MOBILE) {
    console.log(browserWidth)
   height="290px"
  }
  return (
    <div className="portfolioContainer" style={{ width, height }}>
      <div className="portfolioContent" style={{ justifyContent: justify }}>
        <div>
          <img src={src} className="portfolioImage" width={width} />
        </div>
        <div>
          <div className="portfolioTitle">
            <Title content={title} />
          </div>
          <div className="portfolioSubtitle">
            <Subtitile content={subtitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Portfolio };
