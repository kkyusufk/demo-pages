import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../components/typography/heading/heading";
import { SubHeading } from "../components/typography/subHeading/subHeading";
import { Image } from "../components/image/image";
import { BlogParagraph } from "../components/blog/blogParagraph";
import { SideBySide } from "../components/mediaComponents/sideBySide/sideBySide";
import { Credits } from "../components/mediaComponents/credits/credits";
import { Spacing } from "../components/spacing/spacing";
import { SIZES } from "../constants";
import "./template.scss";
import { HeadingAndContent } from "../components/mediaComponents/headingAndContent/headingAndContent";
import { SideScrollingImage } from "../components/mediaComponents/sideScrollingImage/sideScrollingImage";

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
          <Spacing marginTop={SIZES.ML}>
            <Heading innerHtml="Stockal" align="center" justify="center" />
          </Spacing>
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
      case "side-scrolling-image": {
        components.push(<SideScrollingImage />);
        break;
      }
      case "Portfolio-small-heading-and-content": {
        components.push(
          <Spacing marginTop={SIZES.XL}>
            <HeadingAndContent
              heading={sections.heading}
              content={sections.content}
              color="white"
            />
          </Spacing>
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
            );
          } else {
            components.push(<BlogParagraph text={content} color="white" />);
          }
        });
        break;
      }
      case "Full-width-image": {
        components.push(
          <Image
            type="full-width"
            src={sections.source}
            width={sections.width}
            height={sections.height}
          />
        );
        break;
      }
      case "Side-by-Side": {
        components.push(
          <Spacing marginTop={SIZES.M}>
            <SideBySide
              source1={sections.src1}
              source2={sections.src2}
              content={sections.content}
            />
          </Spacing>
        );
        break;
      }
      case "credits": {
        components.push(<Credits list={sections.credits} />);
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
        background: "linear-gradient(180deg, #F1F1F1 0 70vh, #162B5F 70vh)",
        paddingBottom: "100px",
      }}
    >
      {/**
       *  Mapping over the array and displaying all the components
       */}
      {components.map((children) => children)}
      {/**
       * additional stuff can be added below here which are unique to this page.
       */}
      <Spacing marginTop={SIZES.L}>
        <div
          style={{
            maxWidth: "770px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2 style={{ color: "white" }}>See Website</h2>
        </div>
      </Spacing>
    </div>
  );
};

PortfolioTemplate.propTypes = {
  data: PropTypes.array,
};

export { PortfolioTemplate };
