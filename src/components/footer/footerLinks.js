import React, { useContext } from 'react';
import { ALIGNMENT } from '../../constants';
import { GlobalContext } from '../../context/navContext';
import * as DATA from '../../data';
import { Heading } from '../typography/heading/heading';

const FooterLinks = ({ page, to = '' }) => {
  const { setContextStates } = useContext(GlobalContext);
  return (
    <div>
      <Heading 
        align={ALIGNMENT.CENTER} 
        innerHtml={DATA.FOOTER[page].headingOne} 
        justify='center'
        />
      <a
        href='#' 
        onClick={() => setContextStates({
          scrollY: window.scrollY,
          currentPage: to
        })}
        className="nav-items"
        >
          <u><Heading 
          align={ALIGNMENT.CENTER} 
          innerHtml={DATA.FOOTER[page].headingTwo}
          justify='center' 
          /></u>
      </a>
    </div>
  )
}

export { FooterLinks }