import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { GlobalContext } from '../../context/navContext';

import './navbar.css';
import { NAVITEMS } from '../../constants'; 
import { Button } from '../button/Button/Button';
import hamburger from '../../Assets/icons/hamburger.svg'
import { environmentUtil } from '../../utils/environmentUtil';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [style, setStyle] = useState({})
  const { currentPage, shouldComponentAnimate, setCurrentPage, setScrollY, setAnimateFalse } = useContext(GlobalContext);
  const navItems = Object.values(NAVITEMS);

  const noScroll = () => window.scrollTo(0, 0);

  // handling mobile effects
  useEffect(() => {
    if (isOpen && environmentUtil.isMobile()) {
      toggleMenu()
      window.addEventListener('scroll', noScroll)
      return () => window.removeEventListener('scroll', noScroll)
    }
  }, [isOpen]);

  // handling desktop effects
  useEffect(() => { 
    const gatsby = document.getElementById('gatsby-focus-wrapper');
    let activeElement;
    const menuElements = document.querySelectorAll('a') || [];
    const homeElementLeft = menuElements[0].getBoundingClientRect().left;
    menuElements.forEach(menu => {
      if(menu.innerText === (currentPage ? currentPage : 'Home')) {
        activeElement = menu
        return;
      }
    });
    setStyle({
      width: `${activeElement.getBoundingClientRect().width}px`,
      left: activeElement.getBoundingClientRect().left - homeElementLeft
    })
  }, [currentPage]);

  const toggleMenu = () => {
    // For mobile only
    const navBar = document.querySelector('.nav-header');
    if (isOpen) {
      navBar.classList.add('nav-open')
    } else {
      navBar.classList.remove('nav-open')

    }
  }

  return (
    <>
      <ul className="nav-header">
        <div className={classNames("nav-position", { "nav-slide-in": isOpen })}> 
          {navItems.map(nav => {
            const newNav = nav.split(' ').join('');
            return (
              <Link
                to={`/${newNav.toLowerCase()}/`} 
                className='nav-items' 
                onClick={() => {
                  setCurrentPage(nav)
                  setIsOpen(false)
                  setScrollY(window.scrollY) 
                  setAnimateFalse()
                }}
              >
                {nav}
              </Link>
              )
          })}
        </div>
       <div style={{ width: '1170px' }}>
          <div className="nav-bar-underline" style={style}></div>
        </div>
      </ul> 
      <Button 
        className="hamburger"
        onClick={() => {
          setIsOpen(isOpen => !isOpen)
        }}
        src={hamburger}
      />
    </>
  )
};
        
export { Navbar }