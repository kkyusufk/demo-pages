import React, { memo } from "react";
import classNames from 'classnames';

import "./Button.css";

const Button = memo(({ onClick, disabled, className, hidden, src }) => {
  return (
    <button
      className={classNames('button', className)}
      onClick={() => onClick()}
      disabled={disabled}
      hidden={hidden}
    >
      <img src={src} alt="direction button" width="20px" height="20px" />
    </button>
  );
});

export { Button };
  