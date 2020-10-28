import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "./input.css";

const InputEmail = () => {
  const inputRef = useRef();
  const confirmRef = useRef();
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

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
    const emailInput = document.getElementById("emailInput");
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
    }
  };

  return (
    <div className="emailFunctionality" id="mainDiv">
      <div id="emailInput">
        <input
          className="typeEmail"
          type="email"
          placeholder="Your Email Address"
          onFocus={handleOnFocus}
          onChange={enableButton}
          onBlur={handleOnBlur}
          ref={inputRef}
        />
        <div className="fail" id="hidden">
          That's not a legit email ID :-/
        </div>
        <motion.button
          id="goRightSignUp"
          onClick={confirmationMessage}
          disabled={disabled}
          whileHover={{
            textDecoration: "underline",
            textDecorationSkipInk: "none",
            color: "black",
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
