import React from "react";
import { PortfolioDetails } from "../../../templates/portfolioDetails";

const Expanded = ({ location }) => {
  const { state = {} } = location
  const { data = {} } = state;
  return <PortfolioDetails data={data} />;
};

export default Expanded;
