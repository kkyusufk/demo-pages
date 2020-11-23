import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

import "./about.scss";
import { Heading } from "../../components/typography/heading/heading";
import { ABOUT } from "../../data";
import { SemiBoldHeading } from "../../components/typography/semiBoldHeading/semiBoldHeading";
import { SubHeading } from "../../components/typography/subHeading/subHeading";
import { Scrollable } from "../../components/scrollable/scrollable";
import { Carousel } from "../../components/carousel/framerCarousel/framerCarousel";
import { Team } from "../../components/team";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { Spacing } from "../../components/spacing/spacing";
import { Grid1 } from "../../components/grid/grid1";
import { FooterLinks } from "../../components/footer/footerLinks";
import { environmentUtil } from "../../utils/environmentUtil";

const About = () => (
  <>
    <Spacing marginTop={SIZES.L}>
      <div className="about-top-heading">
        <SemiBoldHeading innerHtml={"About Opposite"} />
        <Heading
          innerHtml={ABOUT.headingTwo}
          maxWidth="970px"
          align={ALIGNMENT.LEFT}
          Tag="h1"
        />
        <Spacing marginTop={SIZES.SXS}>
          <SubHeading innerHtml={ABOUT.headingThree} width="970px" />
        </Spacing>
      </div>
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <Grid1>
        <Scrollable />
      </Grid1>
    </Spacing>
    <Spacing marginTop={SIZES.XXL}>
      <Heading
        innerHtml={ABOUT.headingFour}
        maxWidth="970px"
        align={ALIGNMENT.LEFT}
        justify="center"
      />
    </Spacing>
    <Spacing marginTop={SIZES.L}>
      <div className="content-carousel-container">
        <div className="about-content-left-of-carousel" style={{ alignSelf: "flex-end" }}>
          <SubHeading innerHtml={ABOUT.headingFive} width="inherit" />
          <SubHeading innerHtml={ABOUT.headingSix} width="inherit" />
        </div>
        <div className="about-carousel">
          <Carousel compact={true} />
        </div>
      </div>
    </Spacing>
    <Spacing marginTop={SIZES.XXL}>
      <Heading
        innerHtml={ABOUT.headingSeven}
        align={ALIGNMENT.CENTER}
        justify="center"
      />
    </Spacing>
    <Spacing marginTop={SIZES.L}>
      <Grid1>
        <div className="domain-content">
          <SubHeading
            innerHtml={ABOUT.headingEight}
            width="640px"
            color="#333333"
          />
          {/* <img
            src="https://source.unsplash.com/random"
            style={{
              position: "absolute",
              top: "60.77%",
              width: 100,
              height: 100,
              right: 30,
            }}
          />
          <img
            src="https://source.unsplash.com/random"
            style={{
              position: "absolute",
              bottom: 0,
              width: 150,
              height: 270,
              left: "53%",
            }}
          /> */}
        </div>
      </Grid1>
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <Heading
        innerHtml={ABOUT.headingNine}
        align={ALIGNMENT.CENTER}
        justify="center"
      />
    </Spacing>
    <Spacing marginTop={SIZES.L}>
      <AnimateSharedLayout type="crossfade">
        {environmentUtil.isWindowDefined() && (
          <Router>
            <Route path={["/about/:id", "/"]} component={Team} />
          </Router>
        )}
      </AnimateSharedLayout>
    </Spacing>
    <Spacing marginTop={SIZES.XXL}>
      <FooterLinks page={PAGES.ABOUT} to={NAVITEMS.CAREERS} />
    </Spacing>
  </>
);

export default About;
