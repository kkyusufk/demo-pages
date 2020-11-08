import * as React from "react";
import classNames from "classnames";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import { images } from "../../../data";
import "./framerCarousel.scss";
import "../carousel.css";

/**
 * The variant for the carousel image transition.
 * For more information on variants go to https://www.framer.com/api/motion/animation/#variants
 * @type {Object}
 *
 */
const carouselVariants = {
  enter: (direction) => {
    return {
      scale: direction > 0 ? 1 : 0.9,
      x: direction > 0 ? 1500 : 0,
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: (direction) => ({
    zIndex: direction === -1 ? 1 : 0,
    x: direction == -1 && 1500,
    scale: direction == -1 ? 1 : 0.9,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  }),
};

/**
 * The variant for the the image title and subtitle cards
 * @type {Object}
 */
const descriptionCardVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const tabs = [1, 2, 3, 4];

export const Carousel = React.memo(({ compact }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [active, setActive] = useState(0);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection, index) => {
    setPage([page + newDirection, newDirection]);
    index >= images.length
      ? setActive(0)
      : index < 0
      ? setActive(images.length - 1)
      : setActive(index);
  };

  React.useEffect(() => {
    let id;
    id = setTimeout(() => paginate(1, active + 1), 3000);
    return function cleanUp() {
      clearTimeout(id);
    };
  }, [active]);

  return (
    <div className="carousel-container">
      {/**
       * The carousel Images and animations
       */}
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter={false}>
        <motion.img
          className="carousel-image"
          key={page}
          src={images[imageIndex].src}
          custom={direction}
          variants={carouselVariants}
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
              paginate(1, active + 1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1, active - 1);
            }
          }}
        />
      </AnimatePresence>
      {/**
       * The next and previous buttons
       */}
      {compact ? null : (
        <>
          <div className="next" onClick={() => paginate(1, active + 1)}>
            {"‣"}
          </div>
          <div className="prev" onClick={() => paginate(-1, active - 1)}>
            {"‣"}
          </div>
        </>
      )}
      {/**
       * Image title and subtitle cards
       */}
      {compact ? null : (
        <>
          <div className={classNames("image-title")}>
            {images.map((image, index) => {
              return (
                <AnimatePresence key={`animate-presence-${index}`}>
                  {index === active && (
                    <div key={index} id="contents">
                      <motion.h2
                        className="line-120"
                        variants={descriptionCardVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        {image.title}
                      </motion.h2>
                      <motion.h2
                        className="grey line-120"
                        variants={descriptionCardVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        {image.subtitle}
                      </motion.h2>
                    </div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        </>
      )}
      {/**
       * The animating tabs at the bottom
       */}
    </div>
  );
});

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
