import React from "react";
import { Portfolio } from "../../components/portfolio/portfolio";
import { portfolioData } from "../../data";

import "./portfolioLayout.css";

const PortfolioPage = () => {
  return (
    <div className="portfolioLayout">
      {portfolioData.map((portfolio) => {
        return (
          <Portfolio
            src={portfolio.src}
            title={portfolio.title}
            subtitle={portfolio.subtitle}
          />
        );
      })}
    </div>
  );
};

export default PortfolioPage;
