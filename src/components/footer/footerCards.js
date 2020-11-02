import React from "react";

import "./footer.css";
import { Card } from "../card/card";
import { Reel } from "../reel/reel";
import InstgramSvg from "../../Assets/icons/instagram.svg";
import { InputEmail } from "../input/input";

// TODO: Cleanup code (maybe handle things better)
const TopContent1 = () => <h1>Join the team</h1>;
const BottomContent1 = () => (
  <img src={InstgramSvg} className="instagram" alt="direction button" />
);

const TopContent2 = () => (
  <h1>Quaterly updates from us via Email</h1>
);
const BottomContent2 = () => (
  <>
    <h1 className="signUp hover-signUp">Sign up</h1>
  </>
);

const HiddenContent = () => (
  <div className="hoverableSignUp">
    <InputEmail />
  </div>
);

export const TopContent3 = () => (
  <div className="reel_footer">
    <span className="footer_reel">
      <Reel />
    </span>
    <div>
      <img className="instagram overlap" src={InstgramSvg} />
    </div>
  </div>
);
export const BottomContent3 = () => (
  <span className="footer_desc">@opposite.hq</span>
);

const Footer = () => (
  <div className="footer-grid">
    <Card BottomContent={BottomContent1} TopContent={TopContent1} />
    <Card BottomContent={BottomContent3} TopContent={TopContent3} />
    <Card
      BottomContent={BottomContent2}
      TopContent={TopContent2}
      HiddenContent={HiddenContent}
    />
  </div>
);

export { Footer };
