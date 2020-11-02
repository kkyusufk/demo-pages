import React from "react";

import './credits.scss';

const Credits = ({ list }) => {
  return (
    <div className="credits-container">
      {list.map((section) => {
        return (
          <div
            style={{
              flex: "0 0 33.333333%",
            }}
          >
            <h3 className="bold" style={{ fontWeight: "bold" }}>
              {section.title}
            </h3>
            {typeof section.name === `object` ? (
              section.name.map((person) => <h3>{person}</h3>)
            ) : (
              <h3>{section.name}</h3>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { Credits };
