import React from "react";
import PropTypes from "prop-types";
import { PortfolioTemplate } from "../../../templates/portfolioTemplate";

const PortfolioDetails = ({ location }) => {
  const { state = {} } = location;
  const { data = [] } = state;
  return <PortfolioTemplate data={data} />;
};

PortfolioDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.array.isRequired
    })
  })
}

export default PortfolioDetails;
