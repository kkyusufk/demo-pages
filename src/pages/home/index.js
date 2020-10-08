import React, { useContext } from "react";
import { Link } from "gatsby";

import { GlobalContext } from '../../context/navContext';
import { Carousel } from "../../components/carousel/carousel";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Heading } from "../../components/typography/heading/heading";
import { ALIGNMENT, NAVITEMS, PAGES } from '../../constants';
import { HOME } from '../../data';
import { Footer } from "../../components/footer/footerCards";
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
import { FooterLinks } from "../../components/footer/footerLinks";

const IndexPage = () => {
  const { setCurrentPage } = useContext(GlobalContext);
  return (
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
      <Link 
        to='/ourwork/'
        onClick={() => setCurrentPage(NAVITEMS.OURWORK)}
        className="nav-items"
      >
        <u><Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingTwo} justify="center"/></u>
      </Link>
      <Grid1><img src={HomePageImage} /></Grid1>
      <div>
        <Heading 
          align={ALIGNMENT.CENTER} 
          innerHtml={HOME.headingThree} 
          justify='center'
          />
          <Link 
          to='/about/'
          onClick={() => setCurrentPage(NAVITEMS.ABOUT)}
          className="nav-items"
          >
            <u><Heading align={ALIGNMENT.CENTER} innerHtml={HOME.headingFour} /></u>
          </Link>
      </div>
      <div style={{ marginTop: '100px' }}><Footer /></div>
      <div style={{ marginTop: '100px' }}>
        <FooterLinks 
          page={PAGES.HOME}
          to={PAGES.CONTACT}
          />
      </div>
    </>
  );
}

export default IndexPage;
