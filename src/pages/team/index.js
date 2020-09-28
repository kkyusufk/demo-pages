import React, { useState } from "react";

import { Card } from "../../components/card/card";
import { Grid } from "../../components/grid/grid";
import { TeamModal } from "../../components/modal/teamModal";
import { Portal } from "../../components/portal/portal";
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
            BottomContent={() => {
              return (
                <>
                  <span className="description">{Top.description}</span>
                  <span className="details" onClick={() => displayModal()}>See details &#x2192;</span>
                </>
              );
            }}
            TopContent={() => <span className="name">{Top.name}</span>}
          />
          </>
        );
      })}
      <Portal children={<TeamModal showModal={showDetails} hideModal={() => setShowDetails(false)} />} />
    </Grid>
  );
};

export { Team };
