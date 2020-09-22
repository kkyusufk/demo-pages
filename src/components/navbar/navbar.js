import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { NAVITEMS } from '../../constants'; 
import './navbar.css';
import { Button } from '../button/Button/Button';

const Navbar = () => {
  const [active, setActive] = useState(NAVITEMS.HOME)
  const [isOpen, setIsOpen] = useState(false)
  const navItems = Object.values(NAVITEMS);

  const noScroll = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    toggleMenu()
    if (isOpen) {
      window.addEventListener('scroll', noScroll)
    }
    return () => window.removeEventListener('scroll', noScroll)
  }, [isOpen]);

  const toggleMenu = () => {
    const style = isOpen ? 'flex' : 'none';
    const navBar = document.getElementsByClassName('nav-items')[0];
    navBar.style.display = style
  }
  return (
    <>
      <ul className="nav-items">
        {navItems.map(nav => {
          return ( 
            <li className={classNames({ 'nav-active': active === nav })} onClick={() => setActive(nav)}>{nav}</li>
          )
        })}
      </ul> 
      <Button 
        className="hamburger"
        onClick={() => setIsOpen(isOpen => !isOpen)}
        src="https://img.icons8.com/ios-filled/20/000000/menu.png"
      />
    </>
  )
};
        
export { Navbar }