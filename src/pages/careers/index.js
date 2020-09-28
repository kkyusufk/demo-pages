import React from 'react';

import './careers.css';
import { CSSTransitionGroup } from 'react-transition-group';
import { Layout } from '../../components/layoutC/layout';
import { CAREERS } from '../../data';
import { Heading } from '../../components/typography/heading/heading';
import { Carousel } from '../../components/carousel/carousel';
import { Grid1 } from '../../components/grid/grid1';
import { ALIGNMENT } from '../../constants';

const MainContent = () => (
  <>
    <div>
      <p>{CAREERS.headingOne}</p>
      <Heading innerHtml={CAREERS.headingTwo} width="970px" />
    </div>
    <Grid1><Carousel /></Grid1>
    <Heading innerHtml={CAREERS.headingThree} align={ALIGNMENT.CENTER} />
  </>
)

const Career = () => {
  return (
    <CSSTransitionGroup
    transitionName="careers"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={true}
    transitionLeaveTimeout={1000}
    transitionLeave={true}
    >
      <Layout MainContent={MainContent} />
    </CSSTransitionGroup>
  )
};

export default Career;