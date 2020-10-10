import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ALIGNMENT, NAVITEMS } from '../../constants';
import { GlobalContext } from '../../context/navContext';
import * as DATA from '../../data';
import { Heading } from '../typography/heading/heading';

const FooterLinks = ({ page, to = '' }) => {
  const { setCurrentPage } = useContext(GlobalContext);
  const handleAnimation = () => {
    setCurrentPage(to);
  }
  return (
    <div>
      <Heading 
        align={ALIGNMENT.CENTER} 
        innerHtml={DATA.FOOTER[page].headingOne} 
        justify='center'
        />
      <Link
        to={`/${to.toLowerCase()}/`} 
        onClick={handleAnimation}
        className="nav-items"
        >
          <u><Heading 
          align={ALIGNMENT.CENTER} 
          innerHtml={DATA.FOOTER[page].headingTwo}
          justify='center' 
          /></u>
      </Link>
    </div>
  )
}

export { FooterLinks }