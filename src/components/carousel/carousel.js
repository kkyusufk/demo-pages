import React, { useEffect, useReducer, memo } from "react";
import { images } from "../../data";
import "./carousel.css";
import { DirectionButton } from "../button/directionButton/directionButton";
import { DIRECTIONS } from "../../constants";
import { initialState, carouselReducer } from "./carouselReducer";

const Carousel = memo(() => {
  const [state, dispatch] = useReducer(carouselReducer, initialState);
  const goRight = () => dispatch({ type: "NEXT" });
  const goLeft = () => dispatch({ type: "PREVIOUS" });

  const reset = () => dispatch({ type: "RESET" });

  useEffect(() => {
    let id;
    id = setTimeout(() => {
      if (state.imageIndex === images.length - 1) {
        reset();
      } else {
        dispatch({ type: "NEXT" });
      }
    }, 3000);
    return () => clearTimeout(id);
  }, [state]);

  return (
    <div className="carousel">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="slider"
            id="slider"
            style={{ transform: `translateX(${state.translateX}%)` }}
          >
            <img src={image.src} className="carousel-images" />
          </div>
        );
      })}
      <div className="image-title">
        {images.map((image, index) => {
          const hidden = state.imageIndex === index ? "notHidden" : "hidden";
          return (
            <div key={index} id="contents">
              <span id={hidden} className="imageTitle">
                {image.title}
              </span>
              <span id={hidden} className="imageSubTitle">
                {image.subtitle}
              </span>
            </div>
          );
        })}
      </div>
      <div className="tabs">
        {images.map((src, index) => {
          if (index === state.activeElement) {
            return (
              <div key={index}>
                <div className="active"></div>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <div></div>
              </div>
            );
          }
        })}
      </div>
      <div className="leftButton">
        <DirectionButton
          onClick={goLeft}
          direction={DIRECTIONS.LEFT}
          hidden={state.imageIndex === 0 ? true : false}
        />
      </div>
      <div className="rightButton">
        <DirectionButton
          onClick={goRight}
          direction={DIRECTIONS.RIGHT}
          hidden={state.imageIndex === images.length - 1 ? true : false}
        />
      </div>
    </div>
  );
});

export { Carousel };
