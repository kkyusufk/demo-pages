import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import "./ourwork.scss";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { SemiBoldHeading } from "../../components/typography/semiBoldHeading/semiBoldHeading";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { OURWORK, portfolioData } from "../../data";
import { Filter } from "../../components/filter/filter";
import { FooterLinks } from "../../components/footer/footerLinks";
import { Div } from "../../components/Div/Div";
import { Link } from "gatsby";

// assuming data structure will be coming in this format
let PortfolioDetails = [
  { id: "Side-Scrolling-Image" },
  {
    id: "Side-by-Side",
    src1: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    src2: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  { id: "Image+Content" },
];
const Ourwork = () => {
  let data = portfolioData;
  const [active, setActive] = useState([]);

  const toggleActive = (filter) => {
    setActive((prevState) => {
      let nextState = [...prevState];
      if (!prevState.includes(filter)) { 
        nextState.push(filter);
      } else {
        nextState = nextState.filter( state => state !== filter)
      }
      return nextState;
    });
  };

  if (active.length !== 0) {
    data = portfolioData.filter((portfolio) => active.includes(portfolio.type));
  }

  return (
    <>
      <Div type={SIZES.L}>
        <div className="about-top-heading">
          <SemiBoldHeading innerHtml={OURWORK.headingOne} />
          <Heading
            innerHtml={OURWORK.headingTwo}
            width="970px"
            align={ALIGNMENT.LEFT}
          />
          <div style={{ marginTop: "50px" }}>
            <Filter active={active} toggleActive={toggleActive} />
          </div>
        </div>
      </Div>
      <Div type={SIZES.XL}>
        <AnimateSharedLayout>
          <motion.div className="portfolio-grid" animate>
            <AnimatePresence>
              {data.map((portfolio, index) => {
                return (
                  <Link
                    to="/ourwork/portfolioDetails/"
                    state={{ data: PortfolioDetails }}
                    key={index}
                    className="nav-items"
                  >
                    <Portfolio
                      id={index}
                      key={index}
                      src={portfolio.src}
                      title={portfolio.title}
                      subtitle={portfolio.subtitle}
                      height="320px"
                      justify="space-between"
                      titleClass="portfolio-ourwork-title"
                      subtitleClass="portfolio-ourwork-subtitle"
                    />
                  </Link>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </Div>
      <Div type={SIZES.XXL}>
        <FooterLinks page={PAGES.OURWORK} to={NAVITEMS.CONTACT} />
      </Div>
    </>
  );
};

export default Ourwork;
