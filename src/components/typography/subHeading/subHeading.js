import React from 'react';

import './subHeading.css';

const SubHeading = ({ innerHtml, width }) => {
  return <h2 className="heading-h2" style={{ width }}>{innerHtml}</h2>
}

export { SubHeading };