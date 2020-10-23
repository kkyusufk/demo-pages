import React from "react";
import { AnimatePresence } from "framer-motion";

import { Modal } from "../modal/teamModal";
import { Cards } from "./team-cards";

import "./team.css";

export function Team({ match }) {
  const { id } = match.params;

  return (
    <>
      <Cards selectedId={id} />
      <AnimatePresence exitBeforeEnter>
        {id && <Modal id={id} key="modal" />}
      </AnimatePresence>
    </>
  );
}
