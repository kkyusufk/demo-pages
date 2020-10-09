import React, { Fragment } from 'react';

import './careers.scss';
import { CAREERS, FOOTER } from '../../data';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { Heading } from '../../components/typography/heading/heading';
import { Carousel } from '../../components/carousel/carousel';
import { Grid1 } from '../../components/grid/grid1';
import { ALIGNMENT, PAGES, SIZES } from '../../constants';
import { OpeningCards } from '../../components/openings/openings';
import { ContentAndImages } from '../../components/contentAndImages/contentAndImages';
import { FooterLinks } from '../../components/footer/footerLinks';
import { Div } from '../../components/Div/Div';

const Career = () => (
  <Fragment>
    <Div type={SIZES.L}>
      <div className="careers-top-heading">
        <SemiBoldHeading innerHtml={CAREERS.headingOne} />
        <Heading innerHtml={CAREERS.headingTwo} width="970px" />
      </div>
    </Div>
    <Div type={SIZES.XL}>
      <Grid1><Carousel /></Grid1>
    </Div>
    <Div type={SIZES.XL}><Heading innerHtml={CAREERS.headingThree} align={ALIGNMENT.LEFT} /></Div>
    <Div type={SIZES.ML}><OpeningCards /></Div>
    <Div type={SIZES.XL}><ContentAndImages /></Div>
    <Div type={SIZES.XXL}><FooterLinks page={PAGES.CAREERS} to={PAGES.ABOUT} /></Div>
  </Fragment>
)

export default Career;