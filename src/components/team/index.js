import React from "react";
import { AnimatePresence } from "framer-motion";

import Modal from "../modal/teamModal";
import { Cards } from "./team-cards";

import "./team.scss";

export function Team({ match }) {
  const { id } = match.params;

  return (
    <>
      <Cards selectedId={id} />
      <AnimatePresence exitBeforeEnter>
        {id && <Modal cardID={id} key="modal" match={match} />}
      </AnimatePresence>
    </>
  );
}
