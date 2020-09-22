import React from "react";

import { Carousel } from "../../components/carousel/carousel";
import { Layout } from "../../components/layoutC/layout";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { FOOTER, HOME, ALIGNMENT } from '../../constants';
import { Footer } from "../footer";

// image imports
import BloomHotels from '../../Assets/Highlight Images/BloomHotels.png'
import Kapiva from '../../Assets/Highlight Images/Kapiva.png'
import TheKen from '../../Assets/Highlight Images/TheKen.png'
import AntidoteCoffee from '../../Assets/Highlight Images/AntidoteCoffee.png'
import SugarSheetMask from '../../Assets/Highlight Images/SugarSheetMask.png'

import './style.css';
import '../../components/fonts.css';

const MainContent = () => (
  <>
    <Heading align={ALIGNMENT.LEFT} innerHtml={HOME.headingOne} width='970px' />
    <Carousel />
    <div className="portfolio-home-page">
      <Portfolio
        width="540px" 
        src={BloomHotels}
        title="Bloom Hotels"
        subtitle="UX/UI Design for Hospitality"
        />
      <Portfolio
        width="540px"
        src={Kapiva} 
        title="Kapiva"
        subtitle="Brand Creation & Packaging Design"
        />
    </div>
    <Portfolio
        width="1170px"
        src={TheKen}
        title="The Ken"
        subtitle="Brand creation & Packaging Design"
        />
        <div className="portfolio-home-page">
      <Portfolio
        width="540px" 
        src={AntidoteCoffee}
        title="Antidote Coffee"
        subtitle="Brand and Packaging"
        />
      <Portfolio
        width="540px"
        src={SugarSheetMask}
        title="Sugar Sheet Mask"
        subtitle="Packaging"
        />
    </div>
    <u style={{ cursor: 'pointer' }}><Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingTwo} /></u>
    <Carousel />
    <Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingThree} />
    <Footer />
    <Heading align={ALIGNMENT.CENTER} innerHtml={FOOTER.home} />
  </>
)

const IndexPage = () => {
  return <Layout MainContent={MainContent} />
};

export default IndexPage;
