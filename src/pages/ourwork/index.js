import React from 'react';

import './ourwork.scss';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Heading } from '../../components/typography/heading/heading';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from '../../constants';
import { OURWORK, portfolioData } from '../../data';
import { Filter } from '../../components/filter/filter';
import { FooterLinks } from '../../components/footer/footerLinks';
import { Div } from '../../components/Div/Div';

const Ourwork = () => (
  <>
    <Div type={SIZES.L}>
      <div className="about-top-heading">
        <SemiBoldHeading innerHtml={OURWORK.headingOne}/>
        <Heading innerHtml={OURWORK.headingTwo} width="970px" align={ALIGNMENT.LEFT} />
        <div style={{ marginTop: '50px' }}><Filter /></div>
      </div>
    </Div>
    <Div type={SIZES.XL}>
      <div className="portfolio-grid">
      {portfolioData.map((portfolio) => {
          return (
            <Portfolio
              src={portfolio.src}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              height="320px"
              justify="space-between"
            />
          );
        })}
      </div>
    </Div>
    <Div type={SIZES.XXL}>
      <FooterLinks page={PAGES.OURWORK} to={NAVITEMS.CONTACT} />
    </Div>
  </>
)

export default Ourwork;