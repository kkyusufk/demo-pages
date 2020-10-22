import React, { useState } from "react";
import { Link } from "gatsby";

import "./openings.scss";
import { openings } from "../../data";
import { Card } from "../card/card";
import { Button } from "../button/Button/Button";
import rightSVG from "../../Assets/icons/right.svg";
import { motion } from "framer-motion";

const OpeningCards = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <>
    <motion.div 
      className="opening-cards-container" 
      drag="x"
      onDrag={
        (event, info) => console.log(info.point.x, info.point.y)
      }
      dragConstraints={{ 
        left: -800, 
        right: 0, 
        modifyTarget: target => Math.round(target / 50) * 50
      }}
      >
      {openings.map((data) => {
        return (
          <div>
            <Link
              //to={"/careers/careerDetail"}
              className="nav-items"
              state={data}
            >
              <Card
                TopContent={() => <span className="name">{data.name}</span>}
                BottomContent={() => {
                  return (
                    <>
                      <span className="description">{data.description}</span>
                      <span
                        className="details"
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
    <Button
    className="shaded-right-button"
    src={rightSVG}
    //onClick={goRight}
    hidden={hidden}
  />
  <Button
    className="shaded-left-button"
    src={rightSVG}
    //onClick={goLeft}
    hidden={!hidden}
  />
  </>
  );
};

export { OpeningCards };
