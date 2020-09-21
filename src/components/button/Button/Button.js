import React, { memo } from "react";
import classNames from 'classnames';

import "./Button.css";
import svg from "../../../../public/icons/right.svg";

const Button = memo(({ onClick, disabled, className, hidden }) => {
  return (
    <button
      className={classNames('button', className)}
      onClick={() => onClick()}
      disabled={disabled}
      hidden={hidden}
    >
      <img src={svg} alt="direction button" width="20px" height="20px" />
    </button>
  );
});

export { Button };
  