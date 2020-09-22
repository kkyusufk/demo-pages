import React from 'react';

import './heading.css';

const Heading = ({ innerHtml, align, width = '100%' }) => {
  const textArray = innerHtml.split("<br />");
  return ( 
    <div className="heading" style={{ textAlign: align, width }}>
      <h1 className="heading-h1" style={{ textAlign: align }}>
        {textArray[0]} <br/> {textArray[1]}
      </h1> 
     </div> 
  )
}

export { Heading }