import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../components/typography/heading/heading";
import { SubHeading } from "../components/typography/subHeading/subHeading";
import { Image } from "../components/image/image";

/**
 * The way this will work is this:
 * Data will come in an array like this. [ { id: 'ComponentId', ...data}, {...otherComponents} ]
 * I am adding a loop and pushing all components in an array called 'Components'.
 * Then in 'render', I am mapping over components and displaying the children.
 * This way depending on the data which comes from backend, this page will update.
 */
const PortfolioTemplate = ({ data = [] }) => {
  /**
   * The array of all components (eg: 'Side-Scrolling-Image', 'Image+Content')
   */
  const components = [];
  data.forEach((sections) => {
    switch (sections.id) {
      case "Hero-unit": {
        components.push(
          <Heading innerHtml="Stockal" align="center" justify="center" />
        );
        components.push(
          <SubHeading
            innerHtml="Web Design for Fintech"
            align="center"
            justify="center"
          />
        );
        break;
      }
      case "Width-defined-image": {
        components.push(
          <Image
            src={sections.source}
            width={sections.width}
            height={sections.height}
          />
        );
        break;
      }
      default:
        return null;
    }
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/**
       *  Mapping over the array and displaying all the components
       */}
      {components.map((children) => children)}
      {/**
       * additional stuff can be added below here which are unique to this page.
       */}
    </div>
  );
};

PortfolioTemplate.propTypes = {
  data: PropTypes.array,
};

export { PortfolioTemplate };
