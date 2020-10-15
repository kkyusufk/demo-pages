import React from "react";
import { BlogQuote } from "../components/blog/blogQuote";
import { BlogText } from "../components/blog/blogText";

/**
 * The way this will work is this:
 * Data will come in an array like this. [ { id: 'ComponentId', ...data}, {...otherComponents} ]
 * I am adding a loop and pushing all components in an array called 'Components'.
 * Then in 'render', I am mapping over components and displaying the children.
 * This way depending on the data which comes from backend, this page will update.
 */
const BlogDetails = ({ data }) => {
  /**
   * The array of all components (eg: 'Blog-Text', 'Blog-Quotesloca')
   */
  const components = [];
  data.forEach((sections) => {
    switch (sections.id) {
      case "Blog-Text": {
        components.push(<BlogText />);
        break;
      }
      case "Blog-Quotes": {
        components.push(<BlogQuote />);
      }
      default:
        return null;
    }
  });
  return (
    <div>
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

export { BlogDetails };
