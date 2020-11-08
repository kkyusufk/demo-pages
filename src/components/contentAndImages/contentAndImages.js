import React from "react";
import { CAREERS } from "../../data";
import { Heading } from "../typography/heading/heading";
import { SubHeading } from "../typography/subHeading/subHeading";
import "./contentAndImages.scss";

const ContentAndImages = ({ content, src, flexDirection }) => {
  return (
    <div className="careers-image-with-content" style={{ flexDirection }}>
      <div className="careers-content-left-of-image">
        <Heading innerHtml={content} width="inherit" />
        <SubHeading
          innerHtml={CAREERS.headingFive}
          width="inherit"
          justify="center"
        />
      </div>
      <img
        src={src}
        className="careers-image-right-of-content"
      />
    </div>
  );
};

export { ContentAndImages };
