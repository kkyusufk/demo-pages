import React from "react"

import './footer.css';
import { Card } from '../../components/card/card';
import { Grid } from '../../components/grid/grid';
import { Reel } from "../../components/reel/reel";
import InstgramSvg from '../../../public/icons/instagram.svg'

const TopContent1 = () => <span className="name">Join the team</span>
const BottomContent1 = () => <img src={InstgramSvg} className="instagram" alt="direction button"/>

const TopContent2 = () => <span className="name">Quaterly updates from us via Email</span>
const BottomContent2 = () => (
  <span className="signUp">Sign up</span>
)

export const TopContent3 = () => <span><Reel /></span>
export const BottomContent3 = () => <span>@opposite.hq</span>

const Footer = () => (
  <Grid>
    <Card BottomContent={BottomContent1} TopContent={TopContent1} />
    <Card BottomContent={BottomContent3} TopContent={TopContent3} />
    <Card BottomContent={BottomContent2} TopContent={TopContent2} />
  </Grid>
)

export default Footer
