import React from "react";
import classNames from "classnames";

import "./heading.scss";

const Heading = ({
  innerHtml,
  align,
  justify,
  maxWidth = "100%",
  hover,
  Tag = "div",
}) => {
  const textArray = innerHtml.split("<br />");
  return (
    <div
      className="heading"
      style={{
        display: "flex",
        textAlign: align,
        justifyContent: justify,
        maxWidth,
      }}
    >
      <Tag
        className={classNames({
          "hover-h1": hover,
          "heading-h1": Tag === "div",
        })}
      >
        {textArray.map((text, index) => (
          <React.Fragment key={`${text} - ${index}`}>
            {" "}
            {text} <br />{" "}
          </React.Fragment>
        ))}
      </Tag>
    </div>
  );
};

export { Heading };
