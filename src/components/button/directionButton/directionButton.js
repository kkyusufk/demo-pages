import React from "react";

import "./directionButton.css";
import { DIRECTIONS } from "../../../constants";
import svg from "../../../../public/icons/right.svg";

const DirectionButton = ({ onClick, disabled, direction, hidden }) => {
  const directionClass = direction === DIRECTIONS.LEFT ? "left" : "";
  return (
    <button
      className={`direction-button ${directionClass}`}
      onClick={() => onClick()}
      disabled={disabled}
      hidden={hidden}
    >
      <img src={svg} alt="direction button" width="20px" height="20px" />
    </button>
  );
};

export { DirectionButton };
