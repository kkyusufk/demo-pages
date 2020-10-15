import React from "react";
import { PortfolioDetails } from "../../../templates/portfolioDetails";

const Expanded = ({ location }) => {
  console.log(location);
  const { data } = location.state;
  return <PortfolioDetails data={data} />;
};

export default Expanded;
