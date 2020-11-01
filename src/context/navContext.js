import React, {
  createContext,
  useState,
  memo,
  useMemo,
  useEffect,
} from "react";
import { NAVITEMS } from "../constants";
import { environmentUtil } from "../utils/environmentUtil";

const GlobalContext = createContext();

const Provider = memo(({ children }) => {
  const page = environmentUtil.isWindowDefined()
    ? window.location.pathname.split("/")[1]
    : "home";
  const [currentPage, setCurrentPage] = useState(NAVITEMS[page.toUpperCase()]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(
    environmentUtil.isWindowDefined() ? window.innerWidth : 1000
  );
  const [scrollY, setScrollY] = useState(
    environmentUtil.isWindowDefined() ? window.scrollY : 0
  );

  useEffect(() => {
    window.addEventListener("resize", () => setBrowserWidth(window.innerWidth));
  }, []);

  const value = useMemo(
    () => ({
      browserWidth,
      shouldAnimate,
      setShouldAnimate,
      currentPage,
      scrollY,
      setCurrentPage,
      setScrollY,
    }),
    [scrollY, currentPage, browserWidth]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
});

export { Provider, GlobalContext };
