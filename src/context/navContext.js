import React, { createContext, useState, useEffect } from 'react';
import { NAVITEMS } from '../constants';
import { isWindowDefined } from '../utils/windowUtil';

const GlobalContext = createContext();

const Provider = ({ children }) => {
  const currentPage = isWindowDefined() ? window.location.pathname.split('/')[1] : 'home';
  const [uiState, setState] = useState({
    currentPage: NAVITEMS[currentPage.toUpperCase()],
    browserWidth: isWindowDefined() ? window.innerWidth : '1000px'
  });
  const setCurrentPage = currentPage => setState({ ...uiState, currentPage });

  const updateBrowserWidth = () => setState(prevState => ({ ...prevState , browserWidth: window.innerWidth }))

  useEffect(() => {
    window.addEventListener('resize', updateBrowserWidth)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        ...uiState,
        setCurrentPage
      }}
    >
      {console.log(uiState)}
      {children}
    </GlobalContext.Provider>
  )
}

export { Provider, GlobalContext }