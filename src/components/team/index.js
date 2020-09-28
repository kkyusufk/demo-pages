import React, { useState } from "react";

import { Card } from "../card/card";
import { Grid } from "../grid/grid";
import { TeamModal } from "../modal/teamModal";
import { Portal } from "../portal/portal";
import { team } from "../../data";
import "./page3.css";

const Team = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  const displayModal = () => {
    setShowDetails(true);
  }

  return (
    <Grid>
      {team.map((Top) => {
        return (
          <>
          <Card
            TopContent={() => <span className="name">{Top.name}</span>}
            BottomContent={() => {
              return (
                <>
                  <span className="description" onClick={() => displayModal()}>{Top.description}</span>
                  <span className="details" onClick={() => displayModal()}>See details &#x2192;</span>
                </>
              );
            }}
          />
          </>
        );
      })}
      <Portal children={<TeamModal showModal={showDetails} hideModal={() => setShowDetails(false)} />} />
    </Grid>
  );
};

export { Team };
