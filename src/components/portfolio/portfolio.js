import React from "react";
import { Title } from "../typography/title/title";
import { Subtitile } from "../typography/subtitle/subtitle";

import "../fonts.css";
import "./portfolio.css";

const Portfolio = ({ src, title, subtitle, width }) => {
  return (
    <div className="portfolioContainer" style={{ width }}>
      <div className="portfolioContent">
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
