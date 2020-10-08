import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { ALIGNMENT, NAVITEMS } from '../../constants';
import { GlobalContext } from '../../context/navContext';
import * as DATA from '../../data';
import { Heading } from '../typography/heading/heading';

const FooterLinks = ({ page, to = '', marginTop }) => {
  const [nextPage, setNextPage] = useState('');
  const { setCurrentPage } = useContext(GlobalContext);
  useEffect(() => {
    setNextPage(to.toLowerCase());
  })
  const handleAnimation = () => {

  }
  return (
    <div style={{ marginTop }}>
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