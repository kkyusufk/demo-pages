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

const PortfolioDetails = ({ location }) => {
  const { state = {} } = location;
  const { data = [] } = state;
  return (
    <>
      <PortfolioTemplate data={data} />
      <Spacing marginTop={SIZES.XL}>
        <Heading
          innerHtml="More projects like this"
          align="center"
          justify="center"
        />
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <div
          className="portfolio-grid"
          style={{ height: "500px", padding: "0% 9.33%" }}
        >
          {portfolioData
            .filter((portfolio) => portfolio.type === "Branding")
            .map((portfolio) => {
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
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <SubHeading innerHtml="See More" justify="center" color="black" />
      </Spacing>
      <Spacing type={SIZES.XL}>
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
