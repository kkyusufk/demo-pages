import React from "react";
import "./card.css";
import "../layout.css";
import '../team/page3.css'
const Card = ({ TopContent, BottomContent, HiddenContent, uniqueKey }) => {
  return (
    <div className="cardContainer" key={uniqueKey}>
      <div className="card">
        <div className="card-content">
          <TopContent />
          <BottomContent />
        </div>
        {HiddenContent && <HiddenContent />}
      </div>
    </div>
  );
};

export { Card };