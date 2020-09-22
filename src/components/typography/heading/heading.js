import React from 'react';

import './heading.css';

const Heading = ({ innerHtml }) => {
  return <h1 className="heading">{innerHtml}</h1>
}

export { Heading }