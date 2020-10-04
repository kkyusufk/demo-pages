import React from 'react';

import './ourwork.scss';
import { Layout } from '../../components/layoutC/layout';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Heading } from '../../components/typography/heading/heading';
import { ALIGNMENT } from '../../constants';
import { FOOTER, OURWORK, portfolioData } from '../../data';

const MainContent = () => (
  <>
    <div className="about-top-heading">
      <h5 className="about-opposite">{OURWORK.headingOne}</h5>
      <Heading innerHtml={OURWORK.headingTwo} width="970px" align={ALIGNMENT.LEFT} />
    </div>
    <div className="portfolio-grid">
    {portfolioData.map((portfolio) => {
        return (
          <Portfolio
            src={portfolio.src}
            title={portfolio.title}
            subtitle={portfolio.subtitle}
          />
        );
      })}
    </div>
    <Heading 
      innerHtml={FOOTER.ourwork} 
      align={ALIGNMENT.CENTER} 
      justify='center'
      />
  </>
)

const Ourwork = () => {
  return (
    <Layout MainContent={MainContent} backgroundColor="#FFFFFF" />
  )
};

export default Ourwork;