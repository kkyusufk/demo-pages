import React from 'react';

import { Layout } from '../../components/layoutC/layout';
import { CSSTransitionGroup } from 'react-transition-group'

import './about.css';
import { Heading } from '../../components/typography/heading/heading';
import { ABOUT, FOOTER } from '../../data';
import { SubHeading } from '../../components/typography/subHeading/subHeading';
import { Scrollable } from '../../components/scrollable/scrollable';
import { Carousel } from '../../components/carousel/carousel';
import { Team } from '../../components/team';
import { ALIGNMENT } from '../../constants';
import { Grid1 } from '../../components/grid/grid1';

const MainContent = () => (
  <>
    <div className="about-top-heading">
      <h5 className="about-opposite">About Opposite</h5>
      <Heading innerHtml={ABOUT.headingTwo} width="970px" align={ALIGNMENT.LEFT} />
      <SubHeading innerHtml={ABOUT.headingThree} width="970px"/>
    </div>
    <Scrollable />
    <Heading innerHtml={ABOUT.headingFour} width="970px"/>
    <Grid1><div className="content-with-carousel">
      <div className="about-content-left-of-carousel">
        <SubHeading innerHtml={ABOUT.headingFive} width="inherit" />
        <SubHeading innerHtml={ABOUT.headingSix} width="inherit" />
      </div>
      <div className="aboutCarousel">
        <Carousel compact={true} />
      </div>
    </div>
    </Grid1>
    <Heading innerHtml={ABOUT.headingSeven} align={ALIGNMENT.CENTER} />
    <Grid1> <div className="domain-content">

    </div></Grid1>
    <Heading innerHtml={ABOUT.headingNine} align={ALIGNMENT.CENTER} />
    <Team />
    <Heading innerHtml={FOOTER.about} align={ALIGNMENT.CENTER} />
  </>
)

const About = () => {
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <Layout MainContent={MainContent} />
    </CSSTransitionGroup> 
  )
}

export default About;