import React, { useEffect, useRef, useState } from 'react';
import './input.css'

const InputEmail = () => {
  let timer;
  let timerArray = [];
  const inputRef = useRef();
  const confirmRef = useRef();
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const removeTransition = () => {
    const hidden = document.querySelector('.fail')
    hidden.style.display = 'none';
    inputRef.current.classList.remove('moveUp')
    setDisabled(true)
    inputRef.current.value = ''
  }
  const applyTransition = () => {
    console.log('applied', inputRef.current.classList)
  }
  const confirmationMessage = () => {
    const { value } = inputRef.current;
    const emailInput = document.getElementById('emailInput')
    const hidden = document.querySelector('.fail')
    // eslint-disable-next-line
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (RegEx.test(value)) {
      setEmail(value)
      emailInput.classList.add('translateOut');
      confirmRef.current.classList.add('translateUp');
      inputRef.current.value = '';
    } else {
      inputRef.current.classList.add('moveUp');
      hidden.style.display = 'block';
    }
  }
  
  const handleMouseOver = () => {
    const emailInput = document.getElementById('emailInput');
    timer = setTimeout(() => {
      emailInput.classList.remove('translateOut');
      confirmRef.current.classList.remove('translateUp');
    }, 10000)
    timerArray.push(timer)
  }

  useEffect(() => {
    // const main = document.getElementsByClassName('cardContainer')[2];
    // main.addEventListener('mouseover', handleMouseOver);
    // return () => { 
    //   console.log('effet 1')
    //   main.removeEventListener('mouseover', () => {});
    // }
  }, [email]);

  useEffect(() => {
    return () => {
      timerArray.forEach(timer => {
        clearTimeout(timer)
      })
    }; 
  },[])

  const enableButton = () => {
    if (inputRef.current.value.length > 0) {
      setDisabled(false)
    }
  }

  
  return (
    <div className="emailFunctionality" id="mainDiv" >
      <div id="emailInput">
        <input
          className="typeEmail" 
          type="email"
          placeholder="Your Email Address"
          onFocus={removeTransition}
          onChange={enableButton}
          onBlur={applyTransition}
          ref={inputRef}
        />
        <div className="fail" id="hidden">That's not a legit email ID :-/</div>
        <button id="goRightSignUp" onClick={confirmationMessage} disabled={disabled}>Sign up &#x2192;</button>
      </div>
      <div ref={confirmRef} id="confirm" style={{ position: 'relative', top: '20px' }}>
        {inputRef.current && 
        <>
          <p style={{ fontSize: '32px' }}>
            <strong>Almost Done!</strong> <br /> </p>
            <p style={{ marginTop: '-15px', fontSize: '19px' }}>We have sent a confirmation on <br />
            {email} - <br />
            click it to confirm :-)</p>
          </>
          }
      </div>
    </div>
  )
};

export { InputEmail }