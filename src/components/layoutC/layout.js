import React, { useState } from 'react';
import { team } from '../../data';
import { Card } from '../card/card';
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
              className={active === menu ? 'active' : ''} 
              onClick={() => setActive(menu)}>
                {menu}
              </span>
          })}
        </div>
      </div>
      <div id="main-body">
        <div><Grid>
      {team.map((Top) => {
        return (
          <Card
            BottomContent={() => {
              return (
                <>
                  <span className="description">{Top.description}</span>
                  <span className="details">See details &#x2192;</span>
                </>
              );
            }}
            TopContent={() => <span className="name">{Top.name}</span>}
          />
        );
      })}
    </Grid></div>
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