import React from 'react';

import { Layout } from '../../components/layoutC/layout';
import { CSSTransitionGroup } from 'react-transition-group'

import './about.css';

const About = () => {
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <Layout MainContent={() => <div>About</div>} />
    </CSSTransitionGroup> 
  )
}

export default About;