import React, { useState, useRef, useEffect } from 'react';
import { images } from '../../data';
import './carousel.css';
import { DirectionButton } from '../button/directionButton/directionButton';
import { DIRECTIONS } from '../../constants';

let clientX = 0;
const Carousel = () => {
  const imgRef = useRef();
  const [X, setX] = useState(0);
  const [activeEl, setAcitveEl] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const goRight = () => {
    setAcitveEl(activeEl + 1); 
    setX(X -100);
    setImageIndex(imageIndex + 1)
  }
  const goLeft = () => { 
    setAcitveEl(activeEl - 1);
    setX(X + 100)
    setImageIndex(imageIndex - 1)
  }

  useEffect(() => {
    const sliders = document.querySelectorAll('#slider');
    sliders.forEach(slider => {
      slider.addEventListener('touchstart', (e) => { 
        clientX = e.touches[0].clientX 
        console.log(clientX)
      });
      slider.addEventListener('touchmove', (e) => { 
        //setX(X + (e.touches[0].clientX - clientX))
        const lol = e.touches[0].clientX - clientX;
        console.log(lol)
        e.target.style.transform = `translateX(${lol}%)`
        if(Math.abs(lol) > 50) setX(X - 100)
        console.log(e.target.style.transform)
      });
      slider.addEventListener('touchend', (e) => { 
        console.log(e.target)
        //e.target.style.transform = `translateX(0%)`
      })
    });
  })

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
        return (<div id="contents">
          <h1 id={hidden}>{image.text}</h1>
          </div>
        )
      })} 
      </div>
      <div className="tabs">
        {images.map((src, index) => {
          if(index === activeEl) {
            return <div className="active"></div>
          } else {
            return <div></div>
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