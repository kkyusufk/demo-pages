import React, { useContext, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import "./ourwork.scss";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { SemiBoldHeading } from "../../components/typography/semiBoldHeading/semiBoldHeading";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { OURWORK, portfolioData } from "../../data";
import { Filter } from "../../components/filter/filter";
import { FooterLinks } from "../../components/footer/footerLinks";
import { Spacing } from "../../components/spacing/spacing";
import { Link } from "gatsby";
import { GlobalContext } from "../../context/navContext";

// assuming data structure will be coming in this format
let PortfolioDetails = [
  { id: "Hero-unit" },
  {
    id: "Width-defined-image",
    width: "1170px",
    height: "500px",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Portfolio-content-paragraphs",
    content: [
      "Capitalmind is an Investment Research and Wealth Management startup that combines a deep understanding of money with innovative technology.",
      "It operates two models. A DIY model (Capitalmind Premium) where it provides original research, opinions and strategies for investors to trade themselves. And a hands-off model (Capitalmind Wealth), for High Networth Individuals, with tailor-made investment plans based on the user’s preferences and goals.",
      "We worked with the founding team at Capitalmind, led by Deepak Shenoy, Vashistha Iyer and Shray Chandra, to revamp the visual identity.",
      "The business had two facets – a content platform (Capitalmind Premium) and a service (Capitalmind Wealth). The visual language we created for the brand deftly handles the needs for both. The content business needed a visual system that would allow the brand to remain fresh and interesting everyday. While the wealth management business needed a brand that rose above the fray and evoked a sense of sophistication.",
    ],
  },
  {
    id: "Width-defined-image",
    width: "1320px",
    height: "700px",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Portfolio-small-heading-and-content",
    heading: "Dynamic visual language for the web",
    content:
      "Value Research is one of the leading investment research companies in India. We provide advice, analysis and information through our website, magazines and books. Our coverage includes nearly the entire gamut of investment avenues available in India.",
  },
  {
    id: "Full-width-image",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    width: "100%",
    height: "700px",
  },
  {
    id: "Width-defined-image",
    width: "1320px",
    height: "700px",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Side-by-Side",
    src1: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    content: "This is just random content big enough to test that it will fit correctly to the right of the image."
  },
  {
    id: "Width-defined-image",
    width: "1320px",
    height: "700px",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  { id: "Portfolio-small-heading-and-content" },
  {
    id: "Side-by-Side",
    src1: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    src2: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Side-by-Side",
    src1: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    src2: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Width-defined-image",
    width: "1320px",
    height: "700px",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Side-by-Side",
    src1: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    src2: "https://source.unsplash.com/WLUHO9A_xik/585x700",
  },
  {
    id: "Full-width-image",
    source: "https://source.unsplash.com/WLUHO9A_xik/585x700",
    width: "100%",
    height: "700px",
  },
  {
    id: "credits",
    credits: [
      { title: "Creative Direction", name: "Abhisek Sarda" },
      { title: "Design", name: ["Vidit Agarwal", "Sanjana Hegde"] },
      { title: "Illustration", name: "Sanjana Hegde" },
      { title: "Project Management", name: "Indranil Udupi" },
      { title: "Copy ", name: "Mukul Soni" },
      {
        title: "Brand Positioning",
        name: ["Abhisek Sarda", "Mukul Soni", "Indranil Udupi"],
      },
    ],
  },
];
const Ourwork = () => {
  let data = portfolioData;
  const [active, setActive] = useState([]);
  const { shouldAnimate, setCurrentPage } = useContext(GlobalContext);

  const toggleActive = (filter) => {
    setActive((prevState) => {
      let nextState = [...prevState];
      if (!prevState.includes(filter)) {
        nextState.push(filter);
      } else {
        nextState = nextState.filter((state) => state !== filter);
      }
      return nextState;
    });
  };

  if (active.length !== 0) {
    data = portfolioData.filter((portfolio) => active.includes(portfolio.type));
  }

  return (
    <>
      <Spacing marginTop={SIZES.L}>
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
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <AnimateSharedLayout>
          <motion.div className="portfolio-grid">
            <AnimatePresence>
              {data.map((portfolio, index) => {
                return (
                  <motion.div
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
                      onClick={() => setCurrentPage("Our Work")}
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <FooterLinks page={PAGES.OURWORK} to={NAVITEMS.CONTACT} />
      </Spacing>
    </>
  );
};

export default Ourwork;
