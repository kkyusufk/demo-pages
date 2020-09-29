import React from 'react';

import './subHeading.css';

const SubHeading = ({ innerHtml, width, justify }) => {
  return <h2 className="heading-h2" style={{ width, justifyContent: justify }}>{innerHtml}</h2>
}

export { SubHeading };