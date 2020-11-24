/** @jsx */
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { environmentUtil } from "../../utils/environmentUtil";

import "./input.scss";

/**
 * The InputEmail element with all the checkings
 * The flow will be as follows:
 *  - Once the big `Sign Up` button is hovered (clicked in mobile), this element is translated into view.
 *  - If the input is focused, the element wont translate back. If not focused, it will translate back on mouse leave.
 *  - If the email entered does not match the regex in confirmationMessage method, there will be an error displayed
 *    after clicking `sign up ->`.
 *  - If the email matches the regex, there will be a confirmation email sent as well as a confirmation successful message.
 * @returns {React.FC}
 */
const InputEmail = () => {
  const inputRef = useRef();
  const confirmRef = useRef();
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const emailInput =
    environmentUtil.isWindowDefined() && document.getElementById("emailInput");

  const disableHover = (type) => {
    const inputClass = document.getElementsByClassName("hoverableSignUp")[0];
    const hoverableSignUp = document.getElementsByClassName("hover-signUp")[0];
    if (type === "focus" || type === "invalidEmail") {
      inputClass.classList.add("hoverableSignUp-stay");
      hoverableSignUp.classList.add("hover-signUp-stay");
    } else if (type === "blur") {
      inputClass.classList.remove("hoverableSignUp-stay");
      hoverableSignUp.classList.remove("hover-signUp-stay");
    }
  };

  const handleOnFocus = () => {
    disableHover("focus");
    const hidden = document.querySelector(".fail");
    hidden.style.display = "none";
    inputRef.current.classList.remove("moveUp");
    setDisabled(true);
    inputRef.current.value = "";
  };

  const handleOnBlur = () => disableHover("blur");

  const confirmationMessage = () => {
    const { value } = inputRef.current;
    const hidden = document.querySelector(".fail");
    // eslint-disable-next-line
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (RegEx.test(value)) {
      setEmail(value);
      emailInput.classList.add("translateOut");
      confirmRef.current.classList.add("translateUp");
      inputRef.current.value = "";
    } else {
      inputRef.current.classList.add("moveUp");
      hidden.style.display = "block";
      disableHover("invalidEmail");
    }
  };

  const enableButton = () => {
    if (inputRef.current.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true)
    }
  };

  return (
    <div className="emailFunctionality" id="mainDiv">
      <div id="emailInput">
        {/* the email input element */}
        <input
          className="typeEmail"
          type="email"
          placeholder="Your Email Address"
          onFocus={handleOnFocus}
          onChange={enableButton}
          onBlur={handleOnBlur}
          ref={inputRef}
        />
        {/* the fail message if the email is not following the correct order */}
        <div className="fail" id="hidden">
          That's not a legit email ID :-/
        </div>
        <motion.button
          id="goRightSignUp"
          style={ disabled ? {} : { color: '#333333' }}
          onClick={confirmationMessage}
          disabled={disabled}
          whileHover={!disabled && {
            textDecoration: "underline",
            textDecorationSkipInk: "none",
            textDecorationSkip: "none",
            cursor: "pointer",
          }}
        >
          Sign up &#x2192;
        </motion.button>
      </div>
      <div
        ref={confirmRef}
        id="confirm"
        style={{ position: "relative", top: "20px" }}
      >
        {inputRef.current && (
          <>
            <p style={{ fontSize: "32px" }}>
              <strong>Almost Done!</strong> <br />{" "}
            </p>
            <p style={{ marginTop: "-15px", fontSize: "19px" }}>
              We have sent a confirmation on <br />
              {email} - <br />
              click it to confirm :-)
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export { InputEmail };
