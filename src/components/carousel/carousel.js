import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../data';
import './carousel.css';
import { DirectionButton } from '../button/directionButton/directionButton';
import { DIRECTIONS } from '../../constants';

// TODO: useReducer instead
const Carousel = () => {
  const tab = useRef();
  const [X, setX] = useState(0);
  const [activeEl, setAcitveEl] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const goRight = () => {
    setAcitveEl(activeEl + 1); 
    setX(X - 100);
    setImageIndex(imageIndex + 1)
  }
  const goLeft = () => { 
    setAcitveEl(activeEl - 1);
    setX(X + 100)
    setImageIndex(imageIndex - 1)
  }

  const reset = () => {
    setImageIndex(0);
    setAcitveEl(0); 
    setX(0);
  }

  useEffect(() => {
    let id;
    id = setTimeout(() => {
      if(imageIndex === images.length - 1) {
        reset()
      } else {
        setAcitveEl(activeEl => activeEl + 1); 
        setImageIndex(imageIndex => imageIndex + 1)
        setX(X => X - 100);
      }
    },3000)
    return () => clearTimeout(id);
  }, [X])

  return (
    <div className="carousel">
      {images.map((image, index) => {
          return (
            <div
              key={index} 
              className="slider"
              id="slider"
              style={{ transform: `translateX(${X}%)` }}
              >
              <img src={image.src} className="carousel-images"/>
            </div>
          )
      })}
      <div className="image-title">
      {images.map((image, index) => {
        const hidden = imageIndex === index ? 'notHidden' : 'hidden'; 
        return (<div key={index} id="contents">
          <span id={hidden} className="imageTitle">{image.title}</span>
          <span id={hidden} className="imageSubTitle">{image.subtitle}</span>
          </div>
        )
      })} 
      </div>
      <div className="tabs">
        {images.map((src, index) => {
          if(index === activeEl) {
            return <div key={index}><div ref={tab} className="active"></div></div>
          } else {
            return <div key={index}><div></div></div>
          }
        })}
      </div>
      <div className="leftButton">
        <DirectionButton 
          onClick={goLeft} 
          direction={DIRECTIONS.LEFT} 
          hidden={imageIndex === 0 ? true : false}
          />
      </div>
      <div className="rightButton">
        <DirectionButton 
          onClick={goRight} 
          direction={DIRECTIONS.RIGHT}
          hidden={imageIndex === images.length - 1 ? true: false}
          />
      </div>
    </div>
  );
};

export { Carousel }