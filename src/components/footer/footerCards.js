import React from "react";

import "./footer.css";
import { Card } from "../card/card";
import { Grid } from "../grid/grid";
import { Reel } from "../reel/reel";
import InstgramSvg from "../../Assets/icons/instagram.svg";
import { InputEmail } from "../input/input";

const TopContent1 = () => <span className="name">Join the team</span>;
const BottomContent1 = () => (
  <img src={InstgramSvg} className="instagram" alt="direction button" />
);

const TopContent2 = () => (
  <span className="name">Quaterly updates from us via Email</span>
);
const BottomContent2 = () => (
  <>
    <span className="signUp">Sign up</span>
  </>
);
 
const HiddenContent = () => (
  <div className="hoverableSignUp">
    <InputEmail />
  </div>
)

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
  <Grid>
    <Card BottomContent={BottomContent1} TopContent={TopContent1} />
    <Card BottomContent={BottomContent3} TopContent={TopContent3} />
    <Card BottomContent={BottomContent2} TopContent={TopContent2} HiddenContent={HiddenContent} />
  </Grid>
);

export { Footer };