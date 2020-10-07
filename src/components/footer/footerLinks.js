import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ALIGNMENT, NAVITEMS } from '../../constants';
import { GlobalContext } from '../../context/navContext';
import * as DATA from '../../data';
import { Heading } from '../typography/heading/heading';

const FooterLinks = ({ page, to = '' }) => {
  const { setCurrentPage } = useContext(GlobalContext);
  return (
    <>
      <Heading 
        align={ALIGNMENT.CENTER} 
        innerHtml={DATA.FOOTER[page].headingOne} 
        justify='center'
        />
      <Link 
        to={`/${to.toLowerCase()}/`} 
        onClick={() => setCurrentPage(NAVITEMS[to])}
        className="nav-items"
        >
          <u><Heading 
          align={ALIGNMENT.CENTER} 
          innerHtml={DATA.FOOTER[page].headingTwo} 
          /></u>
        </Link>
    </>
  )
}

export { FooterLinks }