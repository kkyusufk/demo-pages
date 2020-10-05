import React from 'react';

import './careerDetails.scss';
import { Layout } from '../../../components/layoutC/layout';
import { SemiBoldHeading } from '../../../components/typography/semiBoldHeading/semiBoldHeading';
import { Heading } from '../../../components/typography/heading/heading';
import { SubHeading } from '../../../components/typography/subHeading/subHeading';
import { ALIGNMENT } from '../../../constants';

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
  <div className="footer-details">
    
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