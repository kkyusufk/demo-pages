import React, { useContext } from "react";
import { Link } from "gatsby";

import "./contact.scss";
import { Heading } from "../../components/typography/heading/heading";
import { SubHeading } from "../../components/typography/subHeading/subHeading";
import { SemiBoldHeading } from "../../components/typography/semiBoldHeading/semiBoldHeading";
import { Spacing } from "../../components/spacing/spacing";
import { CONTACT, HOME, portfolioData } from "../../data";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Footer } from "../../components/footer/footerCards";
import { FooterLinks } from "../../components/footer/footerLinks";
import { GlobalContext } from "../../context/navContext";

const Contact = () => {
  const { setCurrentPage, setShouldAnimate } = useContext(GlobalContext);
  return (
    <>
      <Spacing marginTop={SIZES.L}>
        <div className="about-top-heading">
          <SemiBoldHeading innerHtml={CONTACT.headingOne} />
          <Heading innerHtml={CONTACT.headingTwo} align={ALIGNMENT.LEFT} />
          <h2 className="heading-h2">
            To start a project, write to us at{" "}
            <u className="opposite-email">911@oppositehq.com</u>
          </h2>
          <SubHeading innerHtml={CONTACT.headingThree} />
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <div className="portfolio-grid">
          {portfolioData.map((portfolio) => {
            return (
              <Portfolio
                src={portfolio.src}
                title={portfolio.title}
                subtitle={portfolio.subtitle}
                height="320px"
                width="320px"
                justify="space-between"
                heading="h3"
              />
            );
          })}
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <Link
          to="/ourwork/"
          className="nav-items"
          onClick={() => {
            setShouldAnimate(true);
            setCurrentPage(NAVITEMS.OURWORK);
          }}
        >
          <Heading
            align={ALIGNMENT.CENTER}
            innerHtml={HOME.headingTwo}
            justify="center"
            hover={true}
          />
        </Link>
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <Footer />
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <FooterLinks page={PAGES.CONTACT} to={NAVITEMS.ABOUT} />
      </Spacing>
    </>
  );
};

export default Contact;
