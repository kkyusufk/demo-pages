import React from 'react';

import './contact.scss';
import { Layout } from '../../components/layoutC/layout';
import { Heading } from '../../components/typography/heading/heading';
import { CONTACT } from '../../data';
import { ALIGNMENT } from '../../constants';
import { SubHeading } from '../../components/typography/subHeading/subHeading';

const MainContent = () => (
  <>
   <div className="about-top-heading">
      <h5 className="about-opposite">{CONTACT.headingOne}</h5>
      <Heading 
        innerHtml={CONTACT.headingTwo} 
        width="970px" 
        align={ALIGNMENT.LEFT} />
      <SubHeading 
        innerHtml={CONTACT.headingThree} 
        width="970px"
        />
    </div>
  </>
)

const Contact = () => {
  return <Layout MainContent={MainContent} backgroundColor="#F1F1F1" />
}

export default Contact;