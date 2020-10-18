import { Link } from "gatsby";
import React, { useContext } from "react";
import { ALIGNMENT } from "../../constants";
import { GlobalContext } from "../../context/navContext";
import * as DATA from "../../data";
import { Heading } from "../typography/heading/heading";

const FooterLinks = ({ page, to = "" }) => {
  const { setCurrentPage, setScrollY } = useContext(GlobalContext);
  return (
    <div>
      <Heading
        align={ALIGNMENT.CENTER}
        innerHtml={DATA.FOOTER[page].headingOne}
        justify="center"
      />
      <Link
        to={`/${to.toLowerCase()}/`}
        onClick={() => {
          setScrollY(window.scrollY);
          setCurrentPage(to);
        }}
        className="nav-items"
      >
        <u>
          <Heading
            align={ALIGNMENT.CENTER}
            innerHtml={DATA.FOOTER[page].headingTwo}
            justify="center"
          />
        </u>
      </Link>
    </div>
  );
};

export { FooterLinks };
