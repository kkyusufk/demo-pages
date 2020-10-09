import React, { useContext } from 'react';
import { Link } from 'gatsby';

import './contact.scss';
import { Heading } from '../../components/typography/heading/heading';
import { SubHeading } from '../../components/typography/subHeading/subHeading';
import { SemiBoldHeading } from '../../components/typography/semiBoldHeading/semiBoldHeading';
import { Div } from '../../components/Div/Div';
import { CONTACT, HOME, portfolioData } from '../../data';
import { ALIGNMENT, NAVITEMS, PAGES, SIZES } from '../../constants';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Footer } from '../../components/footer/footerCards';
import { FooterLinks } from '../../components/footer/footerLinks';
import { GlobalContext } from '../../context/navContext';

const Contact = () => {
  const { setCurrentPage } = useContext(GlobalContext);
  return (
    <>
    <Div type={SIZES.L}>
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
    <Div type={SIZES.L}>
      <Link 
        to='/ourwork/'
        className="nav-items"
        onClick={() => setCurrentPage(NAVITEMS.OURWORK)}
      >
        <u><Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingTwo} justify="center" /></u>
      </Link>
    </Div>
      <Div type={SIZES.XXL}><Footer /></Div>
      <Div type={SIZES.XXL}><FooterLinks page={PAGES.CONTACT} to={PAGES.ABOUT} /></Div>
    </>
  );
}

export default Contact;