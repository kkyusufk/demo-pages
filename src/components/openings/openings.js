import React from 'react';
import { Link } from "gatsby"

import { openings } from '../../data';
import { Card } from '../card/card';
import { Grid } from '../grid/grid';


const OpeningCards = () => {
  return (
    <Grid>
      {openings.map(data => {
        return (
          <Link
            to={'/careers/careerDetail'}
            className="nav-items"
            state={{ name: data.name }}
          >
            <Card 
              TopContent={() => <span className="name">{data.name}</span>}
              BottomContent={() => {
                return (
                  <>
                    <span className="description">{data.description}</span> 
                    <span className="details" onClick={() => console.log('clicked')}>See details &#x2192;</span>
                  </> 
                )
              }}
            />
          </Link>
        )
      })}
    </Grid>
  )
}

export { OpeningCards }