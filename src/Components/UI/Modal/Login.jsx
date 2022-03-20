import { useState } from "react";
import { useModal } from "../../../Context";
import Button from "../Button/Button";
import InputTypeOne from "../Input/InputTypeOne";
import "./Login.css";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const { setShowLoginModal, setShowSignupModal, setLoginButton } = useModal();

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onModalInputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputField((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const onLoginCLickFormHandler = () => {
    if (inputField.name === "" || inputField.password === "") {
      return;
    } else {
      setLoginButton("Logout");
      setShowLoginModal(false);
      setShowSignupModal(false);
    }
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="signin-modal">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your account</p>
        <a
          onClick={() => {
            setShowLoginModal(false);
            setShowSignupModal(false);
          }}
        >
          <i className="fas fa-times"></i>
        </a>
        <form onSubmit={onLoginSubmitHandler}>
          <InputTypeOne
            type="email"
            name="email"
            required="required"
            autoComplete="email"
            placeholder="Enter your email *"
            iconWrapper="input-icon"
            icon="far fa-envelope"
            inputWrapper="outline-email-input"
            onChange={onModalInputHandler}
            value={inputField.email}
          />
          <InputTypeOne
            type="password"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password *"
            iconWrapper="input-icon"
            icon="fas fa-key"
            inputWrapper="outline-password-input"
            onChange={onModalInputHandler}
            value={inputField.password}
          />
          <Button
            btnWrapper="signin-btn"
            type="submit"
            label="Sign In"
            btnClassName="btn primary-btn-md"
            onClick={onLoginCLickFormHandler}
          />
          <p>
            Forgot your password?{" "}
            <span>
              <a> Reset Password </a>
            </span>
          </p>
          <a
            className="create-account-btn"
            onClick={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
          >
            <h2>
              Create New Account <i className="fas fa-angle-right"></i>
            </h2>
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
