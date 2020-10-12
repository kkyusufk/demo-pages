import { navigate } from 'gatsby';
import React, { createContext, useState, useEffect } from 'react';
import { NAVITEMS } from '../constants';
import { environmentUtil } from '../utils/environmentUtil';

const GlobalContext = createContext();

const Provider = ({ children }) => {
  const currentPage = environmentUtil.isWindowDefined() ? window.location.pathname.split('/')[1] : 'home';
  const [uiState, setState] = useState({
    currentPage: NAVITEMS[currentPage.toUpperCase()],
    browserWidth: environmentUtil.isWindowDefined() ? window.innerWidth : '1000px',
    scrollY: environmentUtil.isWindowDefined() ? window.scrollY : 0,
    shouldComponentAnimate: false
  });
  const setCurrentPage = currentPage => setState({ ...uiState, currentPage });

  const setScrollY = y => setState(prevState => ({ ...prevState , scrollY: y }));

  const setAnimateFalse = () => setState(prevState => ({ ...prevState, shouldComponentAnimate: false }));

  const setContextStates = (state) => {
    setState(prevState => ({ 
      ...prevState, 
      currentPage: state.currentPage,
      scrollY: state.scrollY,
      shouldComponentAnimate: true
    }))
    navigate(`/${state.currentPage.split(' ').join('').toLowerCase()}/`)
  }

  const updateBrowserWidth = () => setState(prevState => ({ ...prevState , browserWidth: window.innerWidth }))

  useEffect(() => {
    window.addEventListener('resize', updateBrowserWidth)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        ...uiState,
        setCurrentPage,
        setScrollY,
        setContextStates,
        setAnimateFalse
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { Provider, GlobalContext }