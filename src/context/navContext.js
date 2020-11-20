import React, {
  createContext,
  useState,
  memo,
  useMemo,
  useEffect,
} from "react";
import { environmentUtil } from "../utils/environmentUtil";
import { NAVITEMS } from "../constants";

const GlobalContext = createContext();

const Provider = memo(({ children }) => {
  const page = environmentUtil.isWindowDefined()
    ? window.location.pathname.split("/")[1]
    : "home";
  const [currentPage, setCurrentPage] = useState(
    page === "" ? NAVITEMS["HOME"] : NAVITEMS[page.toUpperCase()]
  );
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(
    environmentUtil.isWindowDefined() ? window.innerWidth : 1000
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
      setCurrentPage,
    }),
    [currentPage, browserWidth]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
});

export { Provider, GlobalContext };
