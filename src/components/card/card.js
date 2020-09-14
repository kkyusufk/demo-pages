import React from 'react';
import './card.css'

const Card = ({ TopContent, BottomContent }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card-content">
            <TopContent />
            <BottomContent />
        </div>
      </div>
    </div>
  )
}

export { Card };