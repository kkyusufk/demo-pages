import React, { useContext } from "react";
import { Link } from "gatsby";

import { GlobalContext } from "../../context/navContext";
import { Carousel } from "../../components/carousel/carousel";
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
import { Div } from "../../components/Div/Div";

const IndexPage = () => {
  const { setContextStates } = useContext(GlobalContext);
  const setContextState = (to) =>
    setContextStates({
      currentPage: to,
      scrollY: window.scrollY,
    });
  return (
    <>
      <Div type={SIZES.L}>
        <Heading
          align={ALIGNMENT.LEFT}
          innerHtml={HOME.headingOne}
          width="970px"
          justify="center"
        />
      </Div>
      <Div type={SIZES.XL}>
        <Grid1>
          <Carousel />
        </Grid1>
      </Div>
      <Div type={SIZES["X-L"]}>
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
      </Div>
      <Div type={SIZES["X-L"]}>
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
      </Div>
      <Div type={SIZES["X-L"]}>
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
      </Div>
      <Div type={SIZES.L}>
        <a
          href="#"
          onClick={() => setContextState(NAVITEMS.OURWORK)}
          className="nav-items"
        >
          <u>
            <Heading
              align={ALIGNMENT.CENTER}
              innerHtml={HOME.headingTwo}
              justify="center"
            />
          </u>
        </a>
      </Div>
      <Div type={SIZES.XL}>
        <Grid1>
          <img src={HomePageImage} />
        </Grid1>
      </Div>
      <Div type={SIZES.ML}>
        <Heading
          align={ALIGNMENT.CENTER}
          innerHtml={HOME.headingThree}
          justify="center"
        />
        <Link
          to="/about/"
          onClick={() => setContextState(NAVITEMS.ABOUT)}
          className="nav-items"
        >
          <u>
            <Heading
              align={ALIGNMENT.CENTER}
              innerHtml={HOME.headingFour}
              justify="center"
            />
          </u>
        </Link>
      </Div>
      <Div type={SIZES.XXL}>
        <Footer />
      </Div>
      <Div type={SIZES.XXL}>
        <FooterLinks page={PAGES.HOME} to={NAVITEMS.CONTACT} />
      </Div>
    </>
  );
};

export default IndexPage;
