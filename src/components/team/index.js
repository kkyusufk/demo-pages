import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Modal } from "../modal/teamModal";
import { Cards } from "./team-cards";
import './team.css'


export function Team({ match }) {
  console.log(match)
  let { id } = match.params;

  return (
    <>
      <Cards selectedId={id} />
      <AnimatePresence>
        {id && <Modal id={id} key="modal" />}
      </AnimatePresence>
    </>
  );
}