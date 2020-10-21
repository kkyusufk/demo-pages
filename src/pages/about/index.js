import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from 'framer-motion';

import "./about.scss";
import { Heading } from "../../components/typography/heading/heading";
import { ABOUT } from "../../data";
import { SemiBoldHeading } from "../../components/typography/semiBoldHeading/semiBoldHeading";
import { SubHeading } from "../../components/typography/subHeading/subHeading";
import { Scrollable } from "../../components/scrollable/scrollable";
import { Carousel } from "../../components/carousel/framerCarousel/framerCarousel";
import { Team } from "../../components/team";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { Div } from "../../components/Div/Div";
import { Grid1 } from "../../components/grid/grid1";
import { Grid2 } from "../../components/grid/grid2";
import { FooterLinks } from "../../components/footer/footerLinks";

const About = () => (
  <>
    <Div type={SIZES.L}>
      <div className="about-top-heading">
        <SemiBoldHeading innerHtml={"About Opposite"} />
        <Heading
          innerHtml={ABOUT.headingTwo}
          width="970px"
          align={ALIGNMENT.LEFT}
        />
        <SubHeading innerHtml={ABOUT.headingThree} width="970px" />
      </div>
    </Div>
    <Div type={SIZES.XL}>
      <Grid1>
        <Scrollable />
      </Grid1>
    </Div>
    <Div type={SIZES.XXL}>
      <Heading
        innerHtml={ABOUT.headingFour}
        width="970px"
        align={ALIGNMENT.LEFT}
        justify="center"
      />
    </Div>
    <Div type={SIZES.L}>
      <Grid2 columnGap="130px">
        <div className="about-content-left-of-carousel">
          <SubHeading innerHtml={ABOUT.headingFive} width="inherit" />
          <SubHeading innerHtml={ABOUT.headingSix} width="inherit" />
        </div>
        <div className="about-carousel">
          <Carousel />
        </div>
      </Grid2>
    </Div>
    <Div type={SIZES.XXL}>
      <Heading
        innerHtml={ABOUT.headingSeven}
        align={ALIGNMENT.CENTER}
        justify="center"
      />
    </Div>
    <Div type={SIZES.L}>
      <Grid1>
        <div className="domain-content">
          <SubHeading
            innerHtml={ABOUT.headingEight}
            width="640px"
            color="#333333"
          />
        </div>
      </Grid1>
    </Div>
    <Div type={SIZES.XL}>
      <Heading
        innerHtml={ABOUT.headingNine}
        align={ALIGNMENT.CENTER}
        justify="center"
      />
    </Div>
    <Div type={SIZES.L}>
    <AnimateSharedLayout type="crossfade">
      <Router>
        <Route path={["/:id", "/"]} component={Team} />
      </Router>
    </AnimateSharedLayout>
    </Div>
    <Div type={SIZES.XXL}>
      <FooterLinks page={PAGES.ABOUT} to={NAVITEMS.CAREERS} />
    </Div>
  </>
);

export default About;
