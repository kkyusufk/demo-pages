import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from '../components/card/team/team';
import { Grid } from '../components/grid/grid';
import { Modal } from "../components/modal/team";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Grid><Card /></Grid>
    <Grid><marquee direction="right">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}> 
      <h1>Hi</h1>
      <h1>What</h1>
      </div>
      </marquee></Grid>
  </Layout>
)

export default SecondPage
