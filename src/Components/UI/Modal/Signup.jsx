import Button from "../Button/Button";
import "./Signup.css";
import InputTypeOne from "../Input/InputTypeOne";
import { useAuth, useModal } from "../../../Context";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const { setShowLoginModal, setShowSignupModal, setShowDiscardModal } =
    useModal();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();
    userSignup();
    setShowSignupModal(false);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
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

  const userSignup = async () => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      if (response.status === 201) {
        setShowDiscardModal(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const onCloseClick = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const onLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
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
            type="text"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password"
            inputWrapper="outline-password-input"
            onChange={onInputChangeHandler}
            value={user.password}
          />
          <p>
            By continuing you agree to our Terms of Service and
            <span>
              <a href=""> Privacy Policy</a>
            </span>
          </p>
          <Button
            btnWrapper="signup-btn"
            type="submit"
            btnClassName="btn primary-btn-md"
            label=" Sign Up"
          />
          <a className="existing-account-btn" onClick={onLoginClick}>
            <h2>
              already have an account
              <span>Login</span>
              <i className="fas fa-angle-right"></i>
            </h2>
          </a>
        </form>
      </div>
    </>
  );
};

export default Signup;
