import React, { useRef, useEffect, useState } from 'react';
import './animation.scss'

const AnimationWrapper = ({ children }) => {
  const mainDiv = useRef();

  return (
    <div className="root-div" ref={mainDiv}>
      {children}
    </div>     
  )
}

export { AnimationWrapper };