import React from 'react';

import './filter.scss';

const Filter = () => {

  return (
    <div className="filter-container">
      <button className="filter-buttons">
        Branding
      </button>
      <button className="filter-buttons">
        Packaging
      </button>
      <button className="filter-buttons">
        Communication
      </button>
      <button className="filter-buttons">
        User Experience
      </button>
      <button className="filter-buttons">
         Web Design
      </button>
    </div>
  )
}

export { Filter }