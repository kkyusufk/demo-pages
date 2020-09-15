import React, { useReducer, useEffect } from "react";
import './reel.css';
import { images as data } from '../../data';
import { reelReducer } from './reelReducer';

const initialState = {
  currentSlide: 0,
  numberOfSlides: data.length,
  nextSlide: 1,
  previousSlide: data.length - 1,
}

const Reel = () => {
  const [state, dispatch] = useReducer(reelReducer, initialState);
  
  // handling effect of changing the slide every 3 sec
  useEffect(() => {
    const id = setTimeout(() => { 
      return dispatch({ type: 'NEXT' }) 
    }, 3000);
    return () => clearTimeout(id);
  }, [state.currentSlide, state.nextSlide])

  // handling resetting logic
  useEffect(() => {
    if(state.nextSlide + 1 > state.numberOfSlides) {
      dispatch({ type: 'RESET' })
    }
  }, [state.nextSlide, state.numberOfSlides])

  const getImageClasses = (index) => {
    let className = 'imageObject';
    // all other images hidden
    if (state.currentSlide !== index) {
      className = className.concat(' hidden')
    }
    return className;
  }

  return (
    <div className="reelContainer">
      {data.map((content, index) => {
        return (
          <img
            key={index} 
            alt={content.alt || "hi this is an image"} 
            src={content.src} 
            className={getImageClasses(index)}
          />
        )
      })
      }
    </div>
  );
};

export { Reel };