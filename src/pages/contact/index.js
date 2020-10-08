import React, { useContext } from 'react';

import './contact.scss';
import { Heading } from '../../components/typography/heading/heading';
import { SubHeading } from '../../components/typography/subHeading/subHeading';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { CONTACT, HOME, portfolioData } from '../../data';
import { ALIGNMENT, NAVITEMS, PAGES } from '../../constants';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Footer } from '../../components/footer/footerCards';
import { FooterLinks } from '../../components/footer/footerLinks';
import { Link } from 'gatsby';
import { GlobalContext } from '../../context/navContext';

const Contact = () => {
  const { setCurrentPage } = useContext(GlobalContext);
  return (
    <>
    <div className="about-top-heading">
        <SemiBoldHeading innerHtml={CONTACT.headingOne}/>
        <Heading 
          innerHtml={CONTACT.headingTwo} 
          width="970px" 
          align={ALIGNMENT.LEFT} />
        <h2 className="heading-h2">
          To start a project, write to us at <u className="opposite-email">911@oppositehq.com</u>
          </h2>
        <SubHeading 
          innerHtml={CONTACT.headingThree} 
          width="970px"
          />
      </div>
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
      <Link 
        to='/ourwork/'
        className="nav-items"
        onClick={() => setCurrentPage(NAVITEMS.OURWORK)}
      >
        <u><Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingTwo} justify="center" /></u>
      </Link>
      <div style={{ marginTop: '100px' }}><Footer /></div>
      <FooterLinks page={PAGES.CONTACT} to={PAGES.ABOUT} marginTop="100px" />
    </>
  );
}

export default Contact;