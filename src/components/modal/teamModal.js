import React, { useEffect, useRef } from "react";
import classNames from 'classnames';

import "./team-modal.scss";
import { Grid1 } from "../grid/grid1";
import { Carousel } from "../carousel/carousel";

const TeamModal = ({ showModal, hideModal }) => {
  const modalRef = useRef();

  useEffect(() => { 
    let gatsby;
    if (showModal) {
      gatsby = document.getElementsByClassName('container')[0];
      gatsby.classList.add('disappear');
      modalRef.current.classList.remove('close-modal');
      modalRef.current.classList.add('open-modal');
    }
  }, [showModal])

  const hideTheModal = () => {
    modalRef.current.classList.add('close-modal')
    //modalRef.current.classList.remove('open-modal')
    const gatsby = document.getElementsByClassName('container')[0];
    gatsby.classList.remove('disappear');
    hideModal()
  }
  
  return (
    <div className={classNames("team-modal-wrapper")} ref={modalRef}>
      <div className="team-modal">
        <div>
          <h1 className="team-modal-title">Abhisek Sarda</h1>
          <h2 className="team-modal-subtitle">Founder {`&`} Creative Director</h2>
        </div>
        <div>
        <p className="team-modal-content">Abhisek brings 12+ years of experience in design and managing entrepreneurial ventures. Over this period, he has led branding and web design projects, launched and grown a niche brand of handmade soaps, designed low-cost furniture, shot portraits for a football team, advised founders and CEOs and built a presentation design studio that counts Facebook, Coca-Cola, Pepsi, Unilever, L'oreal and Cisco as clients. </p>
        <p className="team-modal-content">
        He spends 80% of his time answering emails (if you don't hear back from us, you know who to blame!). In the other 20% he looks after Villa P (our studio), directs branding and web projects and meddles in everyone's work. He compulsively draws out ideas to make a point, not sparing any scrap of paper lying around, even cheque books!</p>
        </div>
        <div className="team-modal-social">
          <spans><u>Facebook</u></spans>
          <spans><u>Instagram</u></spans>
          <spans><u>Linkedin</u></spans>
        </div>
      </div>
      <div className="team-modal-carousel"><Carousel compact={true}/></div>
      <span 
        onClick={() => hideTheModal()}
        className="close-button">
          X
      </span>
    </div>
  );
};

export { TeamModal };
