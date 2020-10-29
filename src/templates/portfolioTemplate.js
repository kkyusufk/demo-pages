import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../components/typography/heading/heading";
import { SubHeading } from "../components/typography/subHeading/subHeading";
import { Image } from "../components/image/image";
import { BlogParagraph } from "../components/blog/blogParagraph";
import { SideBySide } from "../components/mediaComponents/sideBySide/sideBySide";
import { Credits } from "../components/mediaComponents/credits/credits";
import { Div } from "../components/Div/Div";
import { SIZES } from "../constants";
import './template.scss'

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
          <Div type={SIZES.ML}>
            <Heading innerHtml="Stockal" align="center" justify="center" />
          </Div>
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
      case "Portfolio-content-paragraphs": {
        sections.content.forEach((content, index) => {
          if (index === 0) {
            components.push(
                <BlogParagraph text={content} marginTop="100px" color="white" />
            )
          } else {
            components.push(
              <BlogParagraph text={content} color="white" />
            )
          }
        });
        break;
      }
      case "Full-width-image": {
        components.push(
            <Image
              src={sections.source}
              width={sections.width}
              height={sections.height}
            />
        );
        break;
      }
      case "Side-by-Side": {
        components.push(
          <Div type={SIZES.M}>
            <SideBySide source1={sections.src1} source2={sections.src2} />
          </Div>
        )
        break;
      }
      case "credits": {
        components.push(
            <Credits list={sections.credits} />
        )
      }
      default:
        return null;
    }
  });
  return (
    <div
      className="portfolio-template"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, #F1F1F1 0 5%, #162B5F 5% 100%)",
        paddingBottom: "100px"
      }}
    >
      {/**
       *  Mapping over the array and displaying all the components
       */}
      {components.map((children) => children)}
      {/**
       * additional stuff can be added below here which are unique to this page.
       */}
       <div style={{ width: '770px' }}>
        <h2 style={{ color: 'white' }}>See Website</h2>
       </div>
    </div>
  );
};

PortfolioTemplate.propTypes = {
  data: PropTypes.array,
};

export { PortfolioTemplate };
