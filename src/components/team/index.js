import React, { useState } from "react";

import { Card } from "../card/card";
import { Grid } from "../grid/grid";
import { TeamModal } from "../modal/teamModal";
import { Portal } from "../portal/portal";
import { team } from "../../data";
import "./page3.css";

const Team = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [style, setStyle] = useState({});

  const displayModal = (index) => {
    const cards = document.querySelectorAll(".cardContainer");
    setStyle(cards[index].getBoundingClientRect());
    setShowDetails(true);
  };

  return (
    <Grid>
      {team.map((Top, index) => {
        return (
          <>
            <Card
              uniqueKey={index}
              TopContent={() => <span className="name">{Top.name}</span>}
              BottomContent={() => {
                return (
                  <>
                    <span
                      className="description"
                      onClick={() => displayModal(index)}
                    >
                      {Top.description}
                    </span>
                    <span
                      className="details"
                      onClick={() => displayModal(index)}
                    >
                      See details &#x2192;
                    </span>
                  </>
                );
              }}
            />
          </>
        );
      })}
      <Portal
        children={
          <TeamModal
            style={style}
            showModal={showDetails}
            hideModal={() => setShowDetails(false)}
          />
        }
      />
    </Grid>
  );
};

export { Team };
