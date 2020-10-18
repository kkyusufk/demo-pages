import { navigate } from "gatsby";
import React, {
  createContext,
  useState,
  useEffect,
  memo,
  useMemo,
} from "react";
import { NAVITEMS } from "../constants";
import { environmentUtil } from "../utils/environmentUtil";

const GlobalContext = createContext();

const Provider = memo(({ children }) => {
  const page = environmentUtil.isWindowDefined()
    ? window.location.pathname.split("/")[1]
    : "home";
  const [currentPage, setCurrentPage] = useState(NAVITEMS[page.toUpperCase()]);
  const [scrollY, setScrollY] = useState(
    environmentUtil.isWindowDefined() ? window.scrollY : 0
  );

  const value = useMemo(
    () => ({
      currentPage,
      scrollY,
      setCurrentPage,
      setScrollY,
    }),
    [scrollY, currentPage]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
});

export { Provider, GlobalContext };
