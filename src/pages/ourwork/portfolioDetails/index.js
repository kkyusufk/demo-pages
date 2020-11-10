import React from "react";
import PropTypes from "prop-types";
import { PortfolioTemplate } from "../../../templates/portfolioTemplate";
import { Spacing } from "../../../components/spacing/spacing";
import { Heading } from "../../../components/typography/heading/heading";
import { NAVITEMS, PAGES, SIZES } from "../../../constants";
import { portfolioData } from "../../../data";
import { Portfolio } from "../../../components/portfolio/portfolio";
import { FooterLinks } from "../../../components/footer/footerLinks";
import { SubHeading } from "../../../components/typography/subHeading/subHeading";

import "../ourwork.scss";
import { Link } from "gatsby";

const PortfolioDetails = ({ location }) => {
  const { state = {} } = location;
  const { data = [] } = state;
  return (
    <>
      <PortfolioTemplate data={data} key={`test`} />
      <Spacing marginTop={SIZES.XL}>
        <Heading
          innerHtml="More projects like this"
          align="center"
          justify="center"
        />
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <div style={{ maxWidth: "1170px", margin: "0 auto" }}>
          <div className="portfolio-grid">
            {portfolioData.map((portfolio, index) => {
              return (
                <div
                  layout
                  style={{ justifySelf: "center" }}
                  key={portfolio.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <Link
                    to="/ourwork/portfolioDetails/"
                    state={{ data: PortfolioDetails }}
                    style={{
                      color: "#333333",
                      textDecoration: "none",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    <Portfolio
                      src={portfolio.src}
                      title={portfolio.title}
                      subtitle={portfolio.subtitle}
                      height="320px"
                      width="320px"
                      justify="space-between"
                      heading="h3"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <SubHeading innerHtml="See More" justify="center" color="black" />
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <FooterLinks page={PAGES.HOME} to={NAVITEMS.CONTACT} />
      </Spacing>
    </>
  );
};

PortfolioDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.array.isRequired,
    }),
  }),
};

export default PortfolioDetails;
