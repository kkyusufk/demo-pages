import React from 'react';
import './semiBoldHeading.scss';

const SemiBoldHeading = ({ innerHtml, justify }) => (
  <div className="semi-bold-heading-wrapper" style={{ justifyContent: justify }}>
    <h5 className="semi-bold-heading-h5">
      {innerHtml}
    </h5>
  </div>
)

export { SemiBoldHeading };