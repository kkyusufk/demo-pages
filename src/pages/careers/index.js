import React, { Fragment } from "react";

import "./careers.scss";
import { CAREERS, FOOTER } from "../../data";
import { SemiBoldHeading } from "../../components/typography/semiBoldHeading/semiBoldHeading";
import { Heading } from "../../components/typography/heading/heading";
import { Carousel } from "../../components/carousel/framerCarousel/framerCarousel";
import { Grid1 } from "../../components/grid/grid1";
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from "../../constants";
import { OpeningCards } from "../../components/openings/openings";
import { ContentAndImages } from "../../components/contentAndImages/contentAndImages";
import { FooterLinks } from "../../components/footer/footerLinks";
import { Div } from "../../components/Div/Div";
import { AnimateSharedLayout } from "framer-motion";

const Career = () => (
  <Fragment>
    <Div type={SIZES.L}>
      <div className="careers-top-heading">
        <SemiBoldHeading innerHtml={CAREERS.headingOne} />
        <Heading innerHtml={CAREERS.headingTwo} maxWidth="970px" />
      </div>
    </Div>
    <Div type={SIZES.XL}>
      <Grid1>
        <Carousel />
      </Grid1>
    </Div>
    <Div type={SIZES.XL}>
      <Grid1>
        <Heading innerHtml={CAREERS.headingThree} align={ALIGNMENT.LEFT} />
      </Grid1>
    </Div>
    <Div type={SIZES.ML}>
      <AnimateSharedLayout>
        <OpeningCards />
      </AnimateSharedLayout>
    </Div>
    <Div type={SIZES.XL}>
      <ContentAndImages />
    </Div>
    <Div type={SIZES.XXL}>
      <FooterLinks page={PAGES.CAREERS} to={NAVITEMS.ABOUT} />
    </Div>
  </Fragment>
);

export default Career;
