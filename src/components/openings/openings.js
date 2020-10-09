import React, { useState } from 'react';
import { Link } from "gatsby"

import './openings.scss';
import { openings } from '../../data';
import { Card } from '../card/card';
import { Button } from '../button/Button/Button';
import rightSVG from '../../Assets/icons/right.svg';


const OpeningCards = () => {
  const [X, setX] = useState(0);
  
  const goRight = () => setX(X => X - 400)
  const goLeft = () => setX(X => X + 400)

  return (
    <div className="opening-cards-container">
      {openings.map(data => {
        return (
          <div style={{
            transition: '0.5s',
            transform: `translateX(${X}px)`
          }}>
            <Link
              to={'/careers/careerDetail'}
              className="nav-items"
              state={data} 
            >
              <Card 
                TopContent={() => <span className="name">{data.name}</span>}
                BottomContent={() => {
                  return (
                    <>
                      <span className="description">{data.description}</span> 
                      <span className="details" onClick={() => console.log('clicked')}>See details &#x2192;</span>
                    </> 
                  )
                }}
              />
            </Link>
          </div>
        )
      })}
      <Button 
        className='shaded-right-button' 
        src={rightSVG}
        onClick={goRight}
        hidden={X === -800}
        />
        <Button 
          className='shaded-left-button' 
          src={rightSVG}
          onClick={goLeft}
          hidden={X === 0}
        />
    </div>
  )
}

export { OpeningCards }