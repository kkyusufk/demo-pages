import React from "react";
import PropTypes from "prop-types";
import { PortfolioTemplate } from "../../../templates/portfolioTemplate";
import { Div } from "../../../components/Div/Div";
import { Heading } from "../../../components/typography/heading/heading";
import { SIZES } from "../../../constants";
import { portfolioData } from "../../../data";
import { Portfolio } from "../../../components/portfolio/portfolio";

const PortfolioDetails = ({ location }) => {
  const { state = {} } = location;
  const { data = [] } = state;
  return (
    <>
      <PortfolioTemplate data={data} />
      <Div type={SIZES.XL}>
        <Heading innerHtml="More projects like this" align="center" justify="center"/>
      </Div>
      <Div type={SIZES.L}>
        <div className="portfolio-grid" style={{ height: '500px' }}>
          {portfolioData.filter(portfolio => portfolio.type === 'Branding').map((portfolio) => {
            return (
              <Portfolio
                src={portfolio.src}
                title={portfolio.title}
                subtitle={portfolio.subtitle}
                height="320px"
                justify="space-between"
                titleClass="portfolio-ourwork-title"
                subtitleClass="portfolio-ourwork-subtitle"
              />
            );
          })}
        </div>
      </Div>
    </>
  ) 
};

PortfolioDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.array.isRequired,
    }),
  }),
};

export default PortfolioDetails;
