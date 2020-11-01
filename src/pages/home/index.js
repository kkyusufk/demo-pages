import React, { useContext } from "react";
import { Link } from "gatsby";

import { GlobalContext } from "../../context/navContext";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { HOME } from "../../data";
import { Footer } from "../../components/footer/footerCards";
import { Grid2 } from "../../components/grid/grid2";

// image imports
import BloomHotels from "../../Assets/Highlight Images/BloomHotels.png";
import Kapiva from "../../Assets/Highlight Images/Kapiva.png";
import TheKen from "../../Assets/Highlight Images/TheKen.png";
import AntidoteCoffee from "../../Assets/Highlight Images/AntidoteCoffee.png";
import SugarSheetMask from "../../Assets/Highlight Images/SugarSheetMask.png";
import HomePageImage from "../../Assets/Highlight Images/home-page-image.png";

import "./style.scss";
import "../../components/fonts.css";
import { Grid1 } from "../../components/grid/grid1";
import { FooterLinks } from "../../components/footer/footerLinks";
import { Spacing } from "../../components/spacing/spacing";
import { Carousel } from "../../components/carousel/framerCarousel/framerCarousel";
import { environmentUtil } from "../../utils/environmentUtil";

const IndexPage = () => {
  const { setCurrentPage, setScrollY, setShouldAnimate } = useContext(
    GlobalContext
  );
  if (environmentUtil.isWindowDefined()) {
    if (window.location.pathname === "/") {
      window.location.pathname = "/home";
    }
  }
  return (
    <>
      <Spacing marginTop={SIZES.L}>
        <Heading innerHtml={HOME.headingOne} maxWidth="970px" />
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <Grid1>
          <Carousel />
        </Grid1>
      </Spacing>
      <Spacing marginTop={SIZES["X-L"]}>
        <Grid2>
          <Portfolio
            width="540px"
            src={BloomHotels}
            title="Bloom Hotels"
            subtitle="UX/UI Design for Hospitality"
            titleClass="portfolio-home-title"
            subtitleClass="portfolio-home-subtitle"
          />
          <Portfolio
            width="540px"
            src={Kapiva}
            title="Kapiva"
            subtitle="Brand Creation & Packaging Design"
            titleClass="portfolio-home-title"
            subtitleClass="portfolio-home-subtitle"
          />
        </Grid2>
      </Spacing>
      <Spacing marginTop={SIZES["X-L"]}>
        <Grid1>
          <Portfolio
            width="1170px"
            src={TheKen}
            title="The Ken"
            subtitle="Brand creation & Packaging Design"
            titleClass="portfolio-home-title"
            subtitleClass="portfolio-home-subtitle"
          />
        </Grid1>
      </Spacing>
      <Spacing marginTop={SIZES["X-L"]}>
        <Grid2>
          <Portfolio
            width="540px"
            src={AntidoteCoffee}
            title="Antidote Coffee"
            subtitle="Brand and Packaging"
            titleClass="portfolio-home-title"
            subtitleClass="portfolio-home-subtitle"
          />
          <Portfolio
            width="540px"
            src={SugarSheetMask}
            title="Sugar Sheet Mask"
            subtitle="Packaging"
            titleClass="portfolio-home-title"
            subtitleClass="portfolio-home-subtitle"
          />
        </Grid2>
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <Link
          to="/ourwork/"
          onClick={() => {
            setShouldAnimate(true);
            setScrollY(window.scrollY);
            setCurrentPage(NAVITEMS.OURWORK);
          }}
          className="nav-items"
        >
          <Heading
            align={ALIGNMENT.CENTER}
            innerHtml={HOME.headingTwo}
            justify="center"
            hover={true}
          />
        </Link>
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <Grid1>
          <img src={HomePageImage} />
        </Grid1>
      </Spacing>
      <Spacing marginTop={SIZES.ML}>
        <Heading
          align={ALIGNMENT.CENTER}
          innerHtml={HOME.headingThree}
          justify="center"
        />
        <Link
          to="/about/"
          onClick={() => {
            setShouldAnimate(true);
            setScrollY(window.scrollY);
            setCurrentPage(NAVITEMS.ABOUT);
          }}
          className="nav-items"
        >
          <Heading
            align={ALIGNMENT.CENTER}
            innerHtml={HOME.headingFour}
            justify="center"
            hover={true}
          />
        </Link>
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <Footer />
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <FooterLinks page={PAGES.HOME} to={NAVITEMS.CONTACT} />
      </Spacing>
    </>
  );
};

export default IndexPage;
