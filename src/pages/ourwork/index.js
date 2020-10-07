import React from 'react';

import './ourwork.scss';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Heading } from '../../components/typography/heading/heading';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { ALIGNMENT, PAGES } from '../../constants';
import { OURWORK, portfolioData } from '../../data';
import { Filter } from '../../components/filter/filter';
import { FooterLinks } from '../../components/footer/footerLinks';

const Ourwork = () => (
  <>
    <div className="about-top-heading">
      <SemiBoldHeading innerHtml={OURWORK.headingOne}/>
      <Heading innerHtml={OURWORK.headingTwo} width="970px" align={ALIGNMENT.LEFT} />
      <div style={{ marginTop: '50px' }}><Filter /></div>
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
    <div>
      <FooterLinks page={PAGES.OURWORK} to={PAGES.CONTACT} />
    </div>
  </>
)

export default Ourwork;