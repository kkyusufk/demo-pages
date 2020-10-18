import React from "react";
import PropTypes from "prop-types";

import { ContentAndImages } from "../components/contentAndImages/contentAndImages";
import { SideBySide } from "../components/mediaComponents/sideBySide/sideBySide";
import { SideScrollingImage } from "../components/mediaComponents/sideScrollingImage/sideScrollingImage";

/**
 * The way this will work is this:
 * Data will come in an array like this. [ { id: 'ComponentId', ...data}, {...otherComponents} ]
 * I am adding a loop and pushing all components in an array called 'Components'.
 * Then in 'render', i am mapping over components and displaying the children.
 * This way depending on the data which comes from backend, this page will update.
 */
const PortfolioTemplate = ({ data = [] }) => {
  /**
   * The array of all components (eg: 'Side-Scrolling-Image', 'Image+Content')
   */
  const components = [];
  data.forEach((sections) => {
    switch (sections.id) {
      case "Side-Scrolling-Image": {
        components.push(<SideScrollingImage />);
        break;
      }
      case "Side-by-Side": {
        components.push(
          <SideBySide source1={sections.src1} source2={sections.src2} />
        );
        break;
      }
      case "Image+Content": {
        components.push(<ContentAndImages />);
        break;
      }
      default:
        return null;
    }
  });
  return (
    <div style={{ backgroundColor: "blue" }}>
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
