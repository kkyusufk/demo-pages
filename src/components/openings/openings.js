import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

import "./openings.scss";
import { openings } from "../../data";
import { Card } from "../card/card";
import { Button } from "../button/Button/Button";
import rightSVG from "../../Assets/icons/right.svg";
import { AnimateSharedLayout, motion } from "framer-motion";

const OpeningCards = () => {
  const [X, setX] = useState(0);
  const cardContainerRef = useRef();

  const goRight = () => setX((X) => X - 400);
  const goLeft = () => setX((X) => X + 400);

  const calculateDragLeft = () => {
    /**
     * @todo get 400 from logic rather than hard coding
     * 400 = card.width (370px) + column gap (30px)
     */
    return 400 * (openings.length - 3);
  };

  useEffect(() => {
    cardContainerRef.current.addEventListener("scroll", () =>
      console.log("dssds")
    );
  });

  return (
    <AnimateSharedLayout>
      <motion.div
        className="opening-cards-container"
        drag="x"
        ref={cardContainerRef}
        dragConstraints={{ left: -calculateDragLeft(), right: 0 }}
      >
        {openings.map((data, index) => {
          return (
            <div
              id="inside-container"
              key={`inside-container-${index}`}
              style={{
                transition: "0.5s",
                transform: `translateX(${X}px)`,
              }}
            >
              <Link
                to="/careers/careerDetail"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
                state={data}
              >
                <Card
                  TopContent={() => <h1>{data.name}</h1>}
                  BottomContent={() => {
                    return (
                      <>
                        <h2 className="grey description">{data.description}</h2>
                        <span
                          className="details animate-details"
                          onClick={() => console.log("clicked")}
                        >
                          See details &#x2192;
                        </span>
                      </>
                    );
                  }}
                />
              </Link>
            </div>
          );
        })}
      </motion.div>
      {/* <Button
        className="shaded-right-button"
        src={rightSVG}
        onClick={goRight}
        hidden={X === -800}
        />
        <Button
          className="shaded-left-button"
          src={rightSVG}
          onClick={goLeft}
          hidden={X === 0}
        /> */}
    </AnimateSharedLayout>
  );
};

export { OpeningCards };
