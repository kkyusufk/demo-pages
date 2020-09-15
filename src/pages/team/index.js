import React from "react";

import { Card } from "../../components/card/card";
import { Grid } from "../../components/grid/grid";
import { team } from "../../data";
import "./page3.css";

const Team = () => {
  return (
    <Grid>
      {team.map((Top) => {
        return (
          <Card
            BottomContent={() => {
              return (
                <>
                  <span className="description">{Top.description}</span>
                  <span className="details">See details &#x2192;</span>
                </>
              );
            }}
            TopContent={() => <span className="name">{Top.name}</span>}
          />
        );
      })}
    </Grid>
  );
};

export default Team;
