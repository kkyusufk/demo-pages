import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
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
      window.addEventListener('scroll', noScroll)
    }
    return () => window.removeEventListener('scroll', noScroll)
  }, [isOpen]);

  const toggleMenu = () => {
    const navBar = document.querySelector('.nav-items');
    if (isOpen) {
      navBar.classList.add('nav-open')
    } else {
      navBar.classList.remove('nav-open')
    }
  }
  return (
    <>
      <ul className="nav-items">
        <div className={classNames("nav-position", { "nav-slide-in": isOpen })}> 
          {navItems.map(nav => {
            return (
                <li className={classNames({ 'nav-active': active === nav })} onClick={() => setActive(nav)}>{nav}</li>
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