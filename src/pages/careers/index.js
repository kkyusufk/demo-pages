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
import { Spacing } from "../../components/spacing/spacing";
import { AnimateSharedLayout } from "framer-motion";

const Career = () => (
  <Fragment>
    <Spacing marginTop={SIZES.L}>
      <div className="careers-top-heading">
        <SemiBoldHeading innerHtml={CAREERS.headingOne} />
        <Heading innerHtml={CAREERS.headingTwo} maxWidth="970px" Tag="h1" />
      </div>
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <Grid1>
        <Carousel />
      </Grid1>
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <Grid1>
        <Heading innerHtml={CAREERS.headingThree} align={ALIGNMENT.LEFT} />
      </Grid1>
    </Spacing>
    <Spacing marginTop={SIZES.ML}>
      <AnimateSharedLayout>
        <OpeningCards />
      </AnimateSharedLayout>
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <ContentAndImages
        content={CAREERS.headingFour}
        src="https://source.unsplash.com/random"
      />
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <ContentAndImages
        content={CAREERS.headingFive}
        src="https://source.unsplash.com/random"
        direction="reverse"
      />
    </Spacing>
    <Spacing marginTop={SIZES.XL}>
      <ContentAndImages
        content={CAREERS.headingSix}
        src="https://source.unsplash.com/random"
      />
    </Spacing>
    <Spacing marginTop={SIZES.XXL}>
      <FooterLinks page={PAGES.CAREERS} to={NAVITEMS.ABOUT} />
    </Spacing>
  </Fragment>
);

export default Career;
