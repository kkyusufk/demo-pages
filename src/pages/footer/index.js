import React from "react"

import { Card } from '../../components/card/card';
import { Grid } from '../../components/grid/grid';

const TopContent1 = () => <span>Quaterly updates from us via email</span>
const BottomContent1 = () => <span>Sign Up</span>

const TopContent2 = () => <span>Join our instagram</span>
const BottomContent2 = () => <span>Now</span>

export const TopContent3 = () => <span>Awesome pics</span>
export const BottomContent3 = () => <span>@opposite.hq</span>

const Footer = () => (
    <Grid>
      <Card BottomContent={BottomContent1} TopContent={TopContent1} />
      <Card BottomContent={BottomContent2} TopContent={TopContent2} />
      <Card BottomContent={BottomContent3} TopContent={TopContent3} />
    </Grid>
)

export default Footer
