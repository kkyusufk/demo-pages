import React from 'react';

import { Layout } from '../../components/layoutC/layout';

import './about.css';
import { Heading } from '../../components/typography/heading/heading';
import { ABOUT, FOOTER } from '../../data';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { SubHeading } from '../../components/typography/subHeading/subHeading';
import { Scrollable } from '../../components/scrollable/scrollable';
import { Carousel } from '../../components/carousel/carousel';
import { Team } from '../../components/team';
import { ALIGNMENT } from '../../constants';
import { Grid1 } from '../../components/grid/grid1';
import { Grid2 } from '../../components/grid/grid2';

const MainContent = () => (
  <>
    <div className="about-top-heading">
      <SemiBoldHeading innerHtml={'About Opposite'} />
      <Heading innerHtml={ABOUT.headingTwo} width="970px" align={ALIGNMENT.LEFT} />
      <SubHeading innerHtml={ABOUT.headingThree} width="970px"/>
    </div>
    <Grid1><Scrollable /></Grid1>
    <Heading 
      innerHtml={ABOUT.headingFour} 
      width="970px"
      align={ALIGNMENT.LEFT}
      justify='center'
      />
    <Grid2 columnGap="130px">
      <div className="about-content-left-of-carousel">
        <SubHeading innerHtml={ABOUT.headingFive} width="inherit" />
        <SubHeading innerHtml={ABOUT.headingSix} width="inherit" />
      </div>
      <div className="about-carousel">
        <Carousel compact={true} />
      </div>
    </Grid2>
    <Heading 
      innerHtml={ABOUT.headingSeven}  
      align={ALIGNMENT.CENTER} 
      justify='center'
      />
    <Grid1>
      <div className="domain-content">
        <SubHeading innerHtml={ABOUT.headingEight} width="640px"/>
      </div>
    </Grid1>
    <Heading 
      innerHtml={ABOUT.headingNine} 
      align={ALIGNMENT.CENTER} 
      justify='center'
      />
    <Team />
    <Heading 
      innerHtml={FOOTER.about} 
      align={ALIGNMENT.CENTER} 
      justify='center'
      />
  </>
)

const About = () => {
  return <Layout MainContent={MainContent} backgroundColor="#F1F1F1" /> 
}

export default About;