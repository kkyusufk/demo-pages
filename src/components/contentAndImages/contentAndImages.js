import React from 'react';
import { SIZES } from '../../constants';
import { CAREERS } from '../../data';
import { Div } from '../Div/Div';
import { Heading } from '../typography/heading/heading';
import { SubHeading } from '../typography/subHeading/subHeading';
import './contentAndImages.scss';

const ContentAndImages = () => {
  return (
    <> 
      
      <div className="careers-image-with-content">
        <div className="careers-content-left-of-image">
          <Heading innerHtml={CAREERS.headingFour} width="inherit" />
          <SubHeading innerHtml={CAREERS.headingFive} width="inherit" justify='center' />
        </div>
        <img src="https://source.unsplash.com/random" className="careers-image-right-of-content" />
      </div>
      <Div type={SIZES.XL}>
        <div className="careers-image-with-content">
          <img src="https://source.unsplash.com/random" className="careers-image-right-of-content" />
          <div className="careers-content-left-of-image">
            <Heading innerHtml={CAREERS.headingSix} width="inherit" />
            <SubHeading innerHtml={CAREERS.headingSeven} width="inherit" justify='center' />
          </div>
        </div>
      </Div>
      <Div type={SIZES.XL}>
        <div className="careers-image-with-content">
          <div className="careers-content-left-of-image">
            <Heading innerHtml={CAREERS.headingEight} width="inherit" />
            <SubHeading innerHtml={CAREERS.headingNine} width="inherit" justify='center' />
          </div>
          <img src="https://source.unsplash.com/random" className="careers-image-right-of-content" />
        </div>
      </Div>
    </>
  )
}

export { ContentAndImages }