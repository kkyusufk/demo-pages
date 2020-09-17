import React from "react";
import { Title } from "../typography/title/title";
import { Subtitile } from "../typography/subtitle/subtitle";

import "../layout.css";
import "./portfolio.css";

const Portfolio = ({ src, title, subtitle }) => {
  return (
    <div className="portfolioContainer">
      <div className="portfolioContent">
        <div>
          <img src={src} className="portfolioImage" />
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
