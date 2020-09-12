import React, { useState } from 'react';
import './card.css'
import { Modal } from '../../modal/team';

const Card = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  }
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card-content">
          <div className="top-content">
            <h1>Name</h1>
            <h1>Surname</h1>
            <h1>Surname</h1>
          </div>
          <div className="bottom-content">
            <h1 className="subtitle">lorem epsum is the best one yet</h1>
            <div className="vanish">
              <input type="email" required/>
              <h1>Sign Up {'->'}</h1>
          </div>
          </div>
        </div>
      </div>
      {modal && <Modal />}
    </div>
  )
}

export { Card };