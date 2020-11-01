import React from "react";

const Subtitile = ({ content, heading }) => {
  if (heading === "h3") {
    return (
      <h3 className="alternative" style={{ color: "rgba(51, 51, 51, 0.5)" }}>
        {content}
      </h3>
    );
  } else {
    return <h2 style={{ color: "rgba(51, 51, 51, 0.5)" }}>{content}</h2>;
  }
};

export { Subtitile };
