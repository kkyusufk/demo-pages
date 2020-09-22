import React from "react";

import { Carousel } from "../../components/carousel/carousel";
import { Layout } from "../../components/layoutC/layout";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { FOOTER, HOME } from '../../constants';
import { Footer } from "../footer";

import './style.css';
import '../../components/fonts.css';

const MainContent = () => (
  <>
    <Heading innerHtml={HOME.headingOne} />
    <Carousel />
    <div className="portfolio-home-page">
      <Portfolio
        width="540px" 
        src="https://source.unsplash.com/user/erondu/1600x900"
        title="Bloom Hotels"
        subtitle="UX/UI Design for Hospitality"
        />
      <Portfolio
        width="540px"
        src="https://source.unsplash.com/user/erondu/1600x900" 
        title="Kapiva"
        subtitle="Brand Creation & Packaging Design"
        />
    </div>
    <Portfolio
        width="1170px"
        src="https://source.unsplash.com/user/erondu/1600x900" 
        title="The Ken"
        subtitle="Brand creation & Packaging Design"
        />
        <div className="portfolio-home-page">
      <Portfolio
        width="540px" 
        src="https://source.unsplash.com/user/erondu/1600x900"
        title="Antidote Coffee"
        subtitle="Brand and Packaging"
        />
      <Portfolio
        width="540px"
        src="https://source.unsplash.com/user/erondu/1600x900" 
        title="Sugar Sheet Mask"
        subtitle="Packaging"
        />
    </div>
    <Heading innerHtml={HOME.headingTwo} />
    <Carousel />
    <Heading innerHtml={HOME.headingThree} />
    <Footer />
    <Heading innerHtml={FOOTER.home} />
  </>
)

const IndexPage = () => {
  return <Layout MainContent={MainContent} />
};

export default IndexPage;
