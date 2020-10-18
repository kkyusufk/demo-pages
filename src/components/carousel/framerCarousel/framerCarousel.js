import * as React from "react";
import classNames from 'classnames';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import { images } from "../../../data";
import "./framerCarousel.scss";
import "../carousel.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    zIndex: 0,
    scale: 0.9,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

const tabs = [1, 2, 3, 4];

const tabVariants = {
  enter: {
    backgroundColor: "white",
  },
  center: {
    width: ["0px", "33px", "66px", "300px"],
    backgroundColor: ['black']
  },
  exit: {
    backgroundColor: "white",
  },
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [active, setActive] = useState(0);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection, index) => {
    setPage([page + newDirection, newDirection]);
    setActive(index);
  };

  return (
    <div className="example-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="carousel-image"
          key={page}
          src={images[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          whileHover={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1, active + 1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1, active - 1)}>
        {"‣"}
      </div>
      <div className={classNames("image-title")}>
        {images.map((image, index) => {
          return (
            <div key={index} id="contents">
              <span className="imageTitle">
                {image.title}
              </span>
              <span className="imageSubTitle">
                {image.subtitle}
              </span>
            </div>
          );
        })}
      </div>
      <div className="tabs">
        {tabs.map((tab, index) => {
          return (
            <AnimatePresence key={tab}>
              <motion.div
                variants={tabVariants}
                initial={false}
                animate="center"
              >
                <div className="tab"></div>
                </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
