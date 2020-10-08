import React, { Fragment } from 'react';

import './careers.scss';
import { CAREERS, FOOTER } from '../../data';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { Heading } from '../../components/typography/heading/heading';
import { Carousel } from '../../components/carousel/carousel';
import { Grid1 } from '../../components/grid/grid1';
import { ALIGNMENT, PAGES } from '../../constants';
import { OpeningCards } from '../../components/openings/openings';
import { ContentAndImages } from '../../components/contentAndImages/contentAndImages';
import { FooterLinks } from '../../components/footer/footerLinks';

const Career = () => (
  <Fragment>
    <div className="careers-top-heading">
      <SemiBoldHeading innerHtml={CAREERS.headingOne} />
      <Heading innerHtml={CAREERS.headingTwo} width="970px" />
    </div>
    <Grid1><Carousel /></Grid1>
    <div style={{ marginTop: '50px' }}><Heading innerHtml={CAREERS.headingThree} align={ALIGNMENT.LEFT} /></div>
    <OpeningCards marginTop="-25px" />
    <ContentAndImages />
    <FooterLinks page={PAGES.CAREERS} to={PAGES.ABOUT} marginTop="100px" />
  </Fragment>
)

export default Career;