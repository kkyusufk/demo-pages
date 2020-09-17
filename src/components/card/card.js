import React from "react";
import "./card.css";
import "../layout.css";
const Card = ({ TopContent, BottomContent, HiddenContent }) => {
  return (
    <div className="cardContainer">
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
