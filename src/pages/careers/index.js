import React from 'react';

import './careers.scss';
import { Layout } from '../../components/layoutC/layout';
import { CAREERS, FOOTER } from '../../data';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { Heading } from '../../components/typography/heading/heading';
import { Carousel } from '../../components/carousel/carousel';
import { Grid1 } from '../../components/grid/grid1';
import { ALIGNMENT } from '../../constants';
import { OpeningCards } from '../../components/openings/openings';
import { ContentAndImages } from '../../components/contentAndImages/contentAndImages';

const MainContent = () => (
  <>
    <div className="careers-top-heading">
      <SemiBoldHeading innerHtml={CAREERS.headingOne} />
      <Heading innerHtml={CAREERS.headingTwo} width="970px" />
    </div>
    <Grid1><Carousel /></Grid1>
    <Grid1><Heading innerHtml={CAREERS.headingThree} align={ALIGNMENT.LEFT} /></Grid1>
    <OpeningCards />
    <ContentAndImages />
    <Heading 
        align={ALIGNMENT.CENTER} 
        innerHtml={FOOTER.careers} 
        justify='center'
        />
  </>
)

const Career = () => {
  return <Layout MainContent={MainContent} backgroundColor="#F1F1F1" />
};

export default Career;