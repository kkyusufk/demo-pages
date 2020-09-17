import React, { useEffect, useRef, useState } from 'react';
import './input.css'

const InputEmail = () => {
  const inputRef = useRef();
  const confirmRef = useRef();
  const [email, setEmail] = useState('');
  const removeTransition = () => {
    const hidden = document.getElementById('hidden')
    hidden.style.display = 'none';
    inputRef.current.classList.remove('moveUp')
  }
  const applyTransition = () => {
    console.log('applied', inputRef.current.classList)
  }
  const confirmationMessage = () => {
    const { value } = inputRef.current;
    const emailInput = document.getElementById('emailInput')
    const hidden = document.getElementById('hidden')
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
  const getRef = () => inputRef.current.value;

  useEffect(() => {
    const emailInput = document.getElementById('emailInput');
    const main = document.getElementsByClassName('cardContainer')[2];
    main.addEventListener('mouseover', () => {
      setTimeout(() => {
        emailInput.classList.remove('translateOut');
        confirmRef.current.classList.remove('translateUp');
      }, 1000)
    })
    return () => clearTimeout()
  }, [email]);

  
  return (
    <div className="emailFunctionality" id="mainDiv" >
      <div id="emailInput">
        <input
          className="typeEmail" 
          type="email"
          placeholder="Your Email Address"
          onFocus={removeTransition}
          onBlur={applyTransition}
          ref={inputRef}
        />
        <div id="hidden">That's not a legit email ID :-/</div>
        <p id="goRightSignUp" onClick={confirmationMessage}>Sign up &#x2192;</p>
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