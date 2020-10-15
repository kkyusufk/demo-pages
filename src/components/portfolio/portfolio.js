import React, { useContext } from "react";
import classnames from "classnames";
import { Title } from "../typography/title/title";
import { Subtitile } from "../typography/subtitle/subtitle";
import { GlobalContext } from "../../context/navContext";

import "../fonts.css";
import "./portfolio.scss";
import { environmentUtil } from "../../utils/environmentUtil";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = ({
  id,
  src,
  title,
  subtitle,
  width,
  justify,
  height,
  titleClass,
  subtitleClass,
}) => {
  const { browserWidth } = useContext(GlobalContext);
  if (environmentUtil.isMobile(browserWidth)) {
    height = "325px";
    justify = "space-between";
  }
  return (
      <motion.div 
      layout
      className="portfolioContainer"
      style={{ width, height }}
      initial={{ opacity: 0  }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
        <motion.div 
        className="portfolioContent"
        layoutId={`portfolio-content-${id}`}
        >
          <div>
            <img src={src} className="portfolioImage" width={width} />
          </div>
          <div
            style={{ marginTop: !environmentUtil.isMobile(browserWidth) && 20 }}
          >
            <div className={classnames("portfolioTitle", `${titleClass}`)}>
              <Title content={title} />
            </div>
            <div className={classnames("portfolioSubtitle", `${subtitleClass}`)}>
              <Subtitile content={subtitle} />
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
};

export { Portfolio };
