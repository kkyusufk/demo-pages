import React from 'react';

import './highlightPage.css';
import { Grid } from '../../components/grid/grid';
import { Highlight } from '../../components/highlight/highlight';

const HighlightPage = () => {
  return (
    <>
      <Grid>
        <Highlight 
          heading="Antidote Coffee"
          subHeading="Branding and Packaging"
          width="540"
        />
        <Highlight 
          heading="The Ken"
          subHeading="UX/UI Design for Journalism"
          width="540"
        />
      </Grid>
      <div className="temp">
        <Highlight
            src="https://source.unsplash.com/user/erondu/1600x900" 
            heading="Antidote Coffee"
            subHeading="Branding and Packaging"
            width="100%"
        />
        </div>
    </>
  )
}

export default HighlightPage;