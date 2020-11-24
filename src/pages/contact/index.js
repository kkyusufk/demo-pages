import React, { useContext } from "react";
import { motion } from "framer-motion";
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
import { environmentUtil } from "../../utils/environmentUtil";

const Contact = () => {
  const { setCurrentPage, setShouldAnimate, browserWidth } = useContext(
    GlobalContext
  );
  return (
    <>
      <Spacing marginTop={SIZES.L}>
        <div className="about-top-heading">
          <SemiBoldHeading innerHtml={CONTACT.headingOne} />
          <Heading
            innerHtml={
              !environmentUtil.isMobile(browserWidth)
                ? CONTACT.headingTwo
                : CONTACT.headingFour
            }
            align={ALIGNMENT.LEFT}
            Tag="h1"
          />
          <Spacing marginTop={SIZES.SXS}>
            {!environmentUtil.isMobile(browserWidth) && (
              <h2 className="grey">
                To start a project, write to us at{" "}
                <motion.u
                  className="opposite-email"
                  whileHover={{ color: "#333333" }}
                >
                  911@oppositehq.com
                </motion.u>
              </h2>
            )}
            <SubHeading innerHtml={CONTACT.headingThree} />
          </Spacing>
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <div className="portfolio-grid">
          {portfolioData.map((portfolio) => {
            return (
              <Portfolio
                key={portfolio.id}
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
