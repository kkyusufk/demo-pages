import React, { createContext, useState, useEffect } from 'react';
import { NAVITEMS } from '../constants';

const defaultState = {
  currentPage: NAVITEMS.HOME,
}

const GlobalContext = createContext(defaultState);

const Provider = ({ children }) => {
  const [uiState, setState] = useState(GlobalContext);
  const setCurrentPage = currentPage => setState({ ...uiState, currentPage });

  return (
    <GlobalContext.Provider
      value={{
        ...uiState,
        setCurrentPage
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { Provider, GlobalContext }