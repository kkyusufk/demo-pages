import React from "react";

import { Carousel } from "../../components/carousel/carousel";
import { Layout } from "../../components/layoutC/layout";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { ALIGNMENT } from '../../constants';
import { FOOTER, HOME } from '../../data';
import { Footer } from "../../components/footer";
import { Grid2 } from "../../components/grid/grid2";

// image imports
import BloomHotels from '../../Assets/Highlight Images/BloomHotels.png'
import Kapiva from '../../Assets/Highlight Images/Kapiva.png'
import TheKen from '../../Assets/Highlight Images/TheKen.png'
import AntidoteCoffee from '../../Assets/Highlight Images/AntidoteCoffee.png'
import SugarSheetMask from '../../Assets/Highlight Images/SugarSheetMask.png'
import HomePageImage from '../../Assets/Highlight Images/home-page-image.png'

import './style.css';
import '../../components/fonts.css';
import { Grid1 } from "../../components/grid/grid1";

const MainContent = () => (
  <>
    <Heading 
      align={ALIGNMENT.LEFT} 
      innerHtml={HOME.headingOne}
      width='970px' 
      justify='center'
      />
    <Grid1><Carousel /></Grid1>
    <Grid2>
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
    </Grid2>
    <Grid1>
      <Portfolio
          width="1170px"
          src={TheKen}
          title="The Ken"
          subtitle="Brand creation & Packaging Design"
          />
    </Grid1>
    <Grid2>
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
    </Grid2>
    <u style={{ cursor: 'pointer' }}><Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingTwo} /></u>
    <Grid1><img src={HomePageImage} /></Grid1>
    <Heading 
      align={ALIGNMENT.CENTER} 
      innerHtml={HOME.headingThree} 
      justify='center'
      />
    <div style={{ marginTop: '100px' }}><Footer /></div>
    <div style={{ marginTop: '100px' }}>
      <Heading 
        align={ALIGNMENT.CENTER} 
        innerHtml={FOOTER.home} 
        justify='center'
        />
    </div>
  </>
)

const IndexPage = () => {
  return <Layout MainContent={MainContent} />
};

export default IndexPage;
