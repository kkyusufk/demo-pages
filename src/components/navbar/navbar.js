import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'

import { NAVITEMS } from '../../constants'; 
import './navbar.css';
import { Button } from '../button/Button/Button';
import hamburger from '../../../public/icons/hamburger.svg'

const Navbar = () => {
  const [active, setActive] = useState(NAVITEMS.HOME)
  const [isOpen, setIsOpen] = useState(false)
  const navItems = Object.values(NAVITEMS);

  const noScroll = () => window.scrollTo(0, 0);

  useEffect(() => {
    toggleMenu()
    if (isOpen) {
      noScroll() // TODO: maybe handle things better
      window.addEventListener('scroll', noScroll)
    }
    return () => window.removeEventListener('scroll', noScroll)
  }, [isOpen]);

  useEffect(() => {
    const path = window.location.pathname.split("/")[1]
    setActive(NAVITEMS[path.toUpperCase()]);
  });

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
                <TransitionLink
                  exit={{
                    trigger: ({ node }) => { 
                      node.style.position = 'relative'
                      node.style['z-index'] = -100 
                    },
                    length: 1
                  }}
                  entry={{
                    trigger: ({ node }) => node.id = 'root-div-active'
                  }}
                  to={`/${newNav.toLowerCase()}/`} 
                  className={classNames('nav-items', { 'nav-active': active === nav })} 
                  onClick={() => setActive(nav)}>
                    {nav}
                </TransitionLink>
              )
          })}
        </div>
      </ul> 
      <Button 
        className="hamburger"
        onClick={() => setIsOpen(isOpen => !isOpen)}
        src={hamburger}
      />
      
    </>
  )
};
        
export { Navbar }