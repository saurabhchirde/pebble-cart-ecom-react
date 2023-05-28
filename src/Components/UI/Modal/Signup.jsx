import "./Signup.css";
import { useAxiosCalls, useModal } from "Context";
import { useRef } from "react";
import { SignupInputForm } from "./SignupInputForm/SignupInputForm";
import { AlertToast, IconButton } from "Components";

export const Signup = () => {
  const { setShowLogin, setShowSignup } = useModal();
  const { userSignup } = useAxiosCalls();

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmRef = useRef("");

  const emailValidate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();

    const signupConfig = {
      url: "/api/auth/signup",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };

    if (
      passwordRef.current.value.match(passwordValidate) &&
      emailRef.current.value.match(emailValidate)
    ) {
      if (passwordRef.current.value === confirmRef.current.value) {
        userSignup(signupConfig);
        setShowSignup(false);
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmRef.current.value = "";
      } else {
        AlertToast("error", "Password mismatched");
        confirmRef.current.value = "";
      }
    } else {
      AlertToast(
        "error",
        "Minimum 8 char, 1 Uppercase, 1 Lowercase, 1 number & 1 Special Character required"
      );
    }
  };

  const firstNameChangeHandler = (e) => {
    firstNameRef.current.value = e.target.value;
  };

  const lastNameChangeHandler = (e) => {
    lastNameRef.current.value = e.target.value;
  };

  const emailChangeHandler = (e) => {
    emailRef.current.value = e.target.value;
  };

  const passwordChangeHandler = (e) => {
    passwordRef.current.value = e.target.value;
  };

  const confirmChangeHandler = (e) => {
    confirmRef.current.value = e.target.value;
  };

  const onCloseClick = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const onLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="signup-modal-one">
        <h1>Sign Up</h1>
        <p>Please provide your details.</p>
        <a onClick={onCloseClick}>
          <i className="fas fa-times"></i>
        </a>
        <SignupInputForm
          onSignupFormSubmitHandler={onSignupFormSubmitHandler}
          firstNameRef={firstNameRef}
          lastNameRef={lastNameRef}
          emailRef={emailRef}
          passwordRef={passwordRef}
          confirmRef={confirmRef}
          firstNameChangeHandler={firstNameChangeHandler}
          lastNameChangeHandler={lastNameChangeHandler}
          emailChangeHandler={emailChangeHandler}
          passwordChangeHandler={passwordChangeHandler}
          confirmChangeHandler={confirmChangeHandler}
        />
        <div className="existing-account-btn" onClick={onLoginClick}>
          <h2>
            already have an account
            <span>Login</span>
            <i className="fas fa-angle-right"></i>
          </h2>
        </div>
      </div>
    </>
  );
};
