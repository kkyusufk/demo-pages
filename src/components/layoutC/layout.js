import React, { memo, useContext } from "react";

import "./layoutCss.css";
import { isPortfolioDetails } from "../../utils/pagesUtil";
import { NewNavbar } from "../navbar/newNavbar";
import { Logo } from "../logo/logo";

const Container = ({ location, children }) => {
  return (
    <div className="container">
      <header className="header column">
        <div className="header-wrapper">
          <div className="opposite-svg-header">
            <Logo />
          </div>
          <NewNavbar />
        </div>
      </header>
      <main
        className="content column"
        style={{
          padding: `${isPortfolioDetails(location.pathname) ? 0 : ' 0% 9.3% 0% 9.3%'}`,
        }}
      >
        <section className="main-content">{children}</section>
      </main>
      <footer className="footer column">
        <div className="opposite-svg-footer">
          <Logo />
        </div>
      </footer>
    </div>
  )
}

const Layout = ({ location, children }) => {
  return (
    <Container 
      location={location}
      children={children}
    />
  );
};

export { Layout };
