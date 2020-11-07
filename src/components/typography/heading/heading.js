import React from "react";
import classNames from 'classnames';

import "./heading.scss";

const Heading = ({ innerHtml, align, justify, maxWidth = "100%", hover }) => {
  const textArray = innerHtml.split("<br />");
  return (
    <div
      className="heading"
      style={{
        textAlign: align,
        justifyContent: justify,
        maxWidth,
        display: "flex",
      }}
    >
      <h1
        className={classNames({"hover-h1": hover })}
        style={{ textAlign: align }}
      >
        { textArray.map( text => <> {text} <br /> </> ) }
      </h1>
    </div>
  );
};

export { Heading };
