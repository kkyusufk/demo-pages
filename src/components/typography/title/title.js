import React from "react";

const Title = ({ content, hover, heading }) => {
  if (heading === "h3") {
    return (
      <h3 id="portfolio-title" className="alternative">
        {content}
      </h3>
    );
  } else {
    return <h2 id="portfolio-title">{content}</h2>;
  }
};

export { Title };
