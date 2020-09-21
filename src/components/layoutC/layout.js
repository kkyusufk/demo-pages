import React, { useState } from 'react';
import { team } from '../../data';
import { Card } from '../card/card';
import { Carousel } from '../carousel/carousel';
import { Grid } from '../grid/grid';
import { SVG } from '../oppositeSvg';

import './layoutCss.css';

const menuItems = ['Home', 'Our Work', 'About', 'Careers', 'Blog', 'Contact']
const Layout = () => {
  const [active, setActive] = useState('Home');
  return (
    <div id="main-div">
      <div id="opposite-svg-header">
        <SVG />
      </div>
      <div id="main-header">
        <div className="nav-items">
          {menuItems.map(menu => {
            return <span 
              className={active === menu ? 'nav active' : 'nav'} 
              onClick={() => setActive(menu)}>
                {menu}
              </span>
          })}
          <p style={{
            position: 'absolute',
            top: '0px'
          }}>Hamburger</p>
        </div>
      </div>
      <div id="main-body">
        <Grid><Carousel /></Grid>
      </div>
      <div id="main-footer">
      <div id="opposite-svg-footer">
        <SVG />
      </div>
      </div>
    </div>
  );
}

export { Layout }