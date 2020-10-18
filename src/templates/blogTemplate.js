import React from "react";
import PropTypes from "prop-types";
import { BlogQuote } from "../components/blog/blogQuote";
import { BlogParagraph } from "../components/blog/blogParagraph";
import { Div } from "../components/Div/Div";
import { SIZES } from "../constants";

/**
 * The way this will work is this:
 * Data will come in an array like this. [ { id: 'ComponentId', ...data}, {...otherComponents} ]
 * I am adding a loop and pushing all components in an array called 'Components'.
 * Then in 'render', I am mapping over components and displaying the children.
 * This way depending on the data which comes from backend, this page will update.
 */
const BlogTemplate = ({ data }) => {
  /**
   * The array of all components (eg: 'Blog-Text', 'Blog-Quotes')
   */
  const components = [];
  data.forEach((section) => {
    switch (section.id) {
      case "Blog-Text": {
        components.push(<BlogParagraph text={section.text} />);
        break;
      }
      case "Blog-Quotes": {
        components.push(<BlogQuote QuotedText={section.quotedText} />);
        break;
      }
      case "Image": {
        components.push(<img src={section.src} width="100%" height="300px" />);
        break;
      }
      default:
        return null;
    }
  });
  return (
    <div className="blog-content-container">
      {/**
       *  Mapping over the array and displaying all the components
       */}
      {components.map((children, index) => {
        // There should be no margin top for first paragraph
        if (index === 0) return children;
        return <Div type={SIZES.L}>{children}</Div>;
      })}
    </div>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.array,
};

export { BlogTemplate };
