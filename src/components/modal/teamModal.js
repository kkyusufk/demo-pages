import React, { useEffect } from "react";
import classNames from 'classnames';

import "./team-modal.css";

const TeamModal = ({ showModal, hideModal }) => {

  useEffect(() => { 
    let gatsby;
    if (showModal) {
      gatsby = document.getElementsByClassName('container')[0];
      gatsby.classList.add('disappear');
      const modal = document.getElementsByClassName('team-modal-wrapper')[0]
      modal.classList.add('open-modal')
    }
  }, [showModal])

  const hideTheModal = () => {
    const modal = document.getElementsByClassName('team-modal-wrapper')[0]
    modal.classList.remove('open-modal')
    const gatsby = document.getElementsByClassName('container')[0];
    gatsby.classList.remove('disappear');
    hideModal()
  }
  
  return (
    <div className={classNames("team-modal-wrapper")}>
      <div className="team-modal">
        <span style={{ fontSize: '64px' }}>Abhisek Sarda</span>
        <span style={{ fontSize: '32px' }}>Founder {`&`} Creative Director</span>
      </div>
      <span 
        onClick={() => hideTheModal()}
        style={{
          float: 'right',
          cursor: 'pointer'
        }}>X</span>
    </div>
  );
};

export { TeamModal };
