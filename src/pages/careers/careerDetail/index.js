import React from "react";

import "./careerDetails.scss";
import { SemiBoldHeading } from "../../../components/typography/semiBoldHeading/semiBoldHeading";
import { Heading } from "../../../components/typography/heading/heading";
import { SubHeading } from "../../../components/typography/subHeading/subHeading";
import { Spacing } from "../../../components/spacing/spacing";
import { Grid1 } from "../../../components/grid/grid1";
import { NAVITEMS, PAGES, SIZES } from "../../../constants";
import { ContentAndImages } from "../../../components/contentAndImages/contentAndImages";
import { FooterLinks } from "../../../components/footer/footerLinks";
import { CAREERS, openings } from "../../../data";

const CareerDetail = ({ location }) => {
  if (location.state === null) {
    location.state = openings[1];
  }
  const { state = {} } = location;
  const { name = "", description = "", details = {} } = state;
  return (
    <>
      <Spacing marginTop={SIZES.ML}>
        <div className="career-details-heading-container">
          <div className="career-details-heading-card">
            <div className="career-details-heading">
              <Heading innerHtml={name} Tag="h1" />
              <SubHeading innerHtml={description} />
            </div>
            <div className="career-details-downarrow">&#x2193;</div>
          </div>
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <div className="about-top-heading">
          <SemiBoldHeading innerHtml={details.headingOne} justify="center" />
          <div
            style={{
              maxWidth: "1170px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 className="career-details-criteria-heading">
              {details.headingTwo}
            </h2>
          </div>
        </div>
        <div className="careers-criteria-container">
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaOne}</p>
          </div>
          <hr className="break-lines" />
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaTwo}</p>
          </div>
          <hr className="break-lines" />
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaThree}</p>
          </div>
          <hr className="break-lines" />
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaFour}</p>
          </div>
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <img
          src="https://source.unsplash.com/random"
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        />
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <div className="about-top-heading">
          <SemiBoldHeading innerHtml={details.headingThree} justify="center" />
          <div
            style={{
              maxWidth: "1170px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 className="career-details-criteria-heading">
              {details.headingFour}
            </h2>
          </div>
        </div>
        <div className="careers-criteria-container">
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaOne}</p>
          </div>
          <hr className="break-lines" />
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaTwo}</p>
          </div>
          <hr className="break-lines" />
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaThree}</p>
          </div>
          <hr className="break-lines" />
          <div className="careers-criteria-detail">
            <div className="criteria-icon"></div>
            <p className="crteria-heading">{details.criteriaFour}</p>
          </div>
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <ContentAndImages
          content={CAREERS.headingFour}
          src="https://source.unsplash.com/random"
        />
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <ContentAndImages
          content={CAREERS.headingFive}
          src="https://source.unsplash.com/random"
          reverse={true}
        />
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <ContentAndImages
          content={CAREERS.headingSix}
          src="https://source.unsplash.com/random"
        />
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <Grid1>
          <div className="footer-details">
            <div className="contact-us-card">
              <h3 className="contact-us-heading">
                Send your application to <br />{" "}
                <u className="career-details-email">careers@oppositehq.com</u>
              </h3>
              <p className="contact-us-sub-heading">
                Don’t forget to send your Resume/CV, our portfolio and tell us
                why you want to work with us. Shortlisted profiles hear from us
                within one week.
              </p>
            </div>
          </div>
        </Grid1>
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <FooterLinks page={PAGES.CAREERS} to={NAVITEMS.ABOUT} />{" "}
      </Spacing>
    </>
  );
};

export default CareerDetail;
