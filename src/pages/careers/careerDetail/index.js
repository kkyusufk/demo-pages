import React from 'react';

import './careerDetails.scss';
import { Layout } from '../../../components/layoutC/layout';
import { SemiBoldHeading } from '../../../components/typography/semiBoldHeading/semiBoldHeading';
import { Heading } from '../../../components/typography/heading/heading';
import { SubHeading } from '../../../components/typography/subHeading/subHeading';
import { ALIGNMENT } from '../../../constants';
import { ContentAndImages } from '../../../components/contentAndImages/contentAndImages';

const MainContent = ({ name, description, details }) => (
  <>
  <div className="career-details-heading-container">
    <div className="career-details-heading-card">
      <div className="career-details-heading">
        <Heading innerHtml={name} />
        <SubHeading innerHtml={description} />
      </div>
      <div className="career-details-downarrow">&#x2193;</div>
    </div>
  </div>
  <div className="about-top-heading">
    <SemiBoldHeading innerHtml={details.headingOne} justify='center' />
    <div style={{ width:'1170px', display: 'flex', justifyContent: 'center' }}>
      <h1 className="career-details-criteria-heading">{details.headingTwo}</h1>
    </div> 
  </div>
  <div className="careers-criteria-container">
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaOne}</p>
    </div>
    <hr />
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaTwo}</p>
    </div>
    <hr />
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaThree}</p>
    </div>
    <hr />
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaFour}</p>
    </div>
  </div> 
  <img src="https://source.unsplash.com/random" style={{
    paddingLeft: '15px',
    paddingRight: '15px'
  }}/>
  <div className="about-top-heading">
  <SemiBoldHeading innerHtml={details.headingThree} justify='center' />
  <div style={{ width:'1170px', display: 'flex', justifyContent: 'center' }}>
      <h1 className="career-details-criteria-heading">{details.headingFour}</h1>
    </div>
  </div>
  <div className="careers-criteria-container">
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaOne}</p>
    </div>
    <hr />
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaTwo}</p>
    </div>
    <hr />
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaThree}</p>
    </div>
    <hr />
    <div className="careers-criteria-detail">
      <div className="criteria-icon"></div>
      <p className="crteria-heading">{details.criteriaFour}</p>
    </div>
  </div>
  <ContentAndImages />
  <div className="footer-details">
    <div className="contact-us-card">
      <h3 className="contact-us-heading">Send your application to <br/> careers@oppositehq.com</h3>
      <p className="contact-us-sub-heading">Don’t forget to send your Resume/CV, our portfolio and tell us why you want to work with us. Shortlisted profiles hear from us within one week.</p>
    </div>
  </div> 
  </>
)

// FIXME
const CareerDetail = ({ location }) => {
  if(location.state) {
    const { name, description, details } = location.state;
    return <Layout 
            MainContent={() => 
            <MainContent 
              name={name} 
              description={description}
              details={details}
              />}
              backgroundColor="#F1F1F1" 
          />;
  } else {
    return null;
  }
}

export default CareerDetail;