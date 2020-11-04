import React, { forwardRef } from 'react';
import classNames from "classnames";

const ShareIt = forwardRef(({ toast, ref }) => {
  return (
    <div className={classNames("share-it-container", { "share-it-container-toast": toast })} ref={ref}>
      <div className={classNames("share-it-content", { "share-it-content-toast": toast })}>
        <h2>Liked it? Share it</h2>
        <h2>Button</h2>
      </div>
    </div>
  )
});

export { ShareIt }