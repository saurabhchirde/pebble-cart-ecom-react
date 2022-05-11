import "./Signup.css";
import { InputTypeOne, Button } from "Components";
import { useAxiosCalls, useModal } from "Context";
import { useState } from "react";

const initialSignupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const Signup = () => {
  const { setShowLogin, setShowSignup, setAlertText, setShowAlert } =
    useModal();
  const [user, setUser] = useState(initialSignupState);
  const { userSignup } = useAxiosCalls();
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupConfig = {
    url: "/api/auth/signup",
    data: user,
  };

  const emailValidate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();
    if (
      user.password.match(passwordValidate) &&
      user.email.match(emailValidate)
    ) {
      if (user.password === confirmPassword) {
        userSignup(signupConfig);
        setShowSignup(false);
        setUser(initialSignupState);
        setConfirmPassword("");
      } else {
        setAlertText("Password mismatched");
        setConfirmPassword("");
        setShowAlert(true);
      }
    } else {
      setAlertText(
        "Minimum 8 char, 1 Uppercase, 1 Lowercase, 1 number & 1 Special Character required"
      );
      setShowAlert(true);
    }
  };

  const onInputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
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
        <form onSubmit={onSignupFormSubmitHandler}>
          <InputTypeOne
            label="First Name"
            type="text"
            name="firstName"
            autoComplete="on"
            placeholder="Enter your first name"
            inputWrapper="outline-text-input"
            onChange={onInputChangeHandler}
            value={user.firstName}
          />
          <InputTypeOne
            label="Last Name"
            type="text"
            name="lastName"
            autoComplete="on"
            placeholder="Enter your last name"
            inputWrapper="outline-text-input"
            onChange={onInputChangeHandler}
            value={user.lastName}
          />
          <InputTypeOne
            label="Email *"
            type="email"
            name="email"
            required="required"
            autoComplete="email"
            placeholder="Enter your email *"
            inputWrapper="outline-email-input"
            onChange={onInputChangeHandler}
            value={user.email}
          />
          <InputTypeOne
            label="Password *"
            type="password"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password"
            inputWrapper="outline-password-input"
            onChange={onInputChangeHandler}
            value={user.password}
          />
          <InputTypeOne
            label="Confirm Password *"
            type="text"
            name="confirm-password"
            required="required"
            placeholder="Confirm password"
            inputWrapper="outline-password-input"
            onChange={onConfirmPasswordHandler}
            value={confirmPassword}
          />
          <p>
            By continuing you agree to our Terms of Service and
            <span> Privacy Policy</span>
          </p>
          <Button
            btnWrapper="signup-btn"
            type="submit"
            btnClassName="btn primary-btn-md"
            label=" Sign Up"
          />
          <div className="existing-account-btn" onClick={onLoginClick}>
            <h2>
              already have an account
              <span>Login</span>
              <i className="fas fa-angle-right"></i>
            </h2>
          </div>
        </form>
      </div>
    </>
  );
};
