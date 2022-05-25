import { useAuth, useAxiosCalls, useModal } from "Context";
import { AlertToast, Button } from "Components";
import { useState } from "react";
import "./Login.css";
import { LoginInputForm } from "./LoginInputForm/LoginInputForm";

export const Login = () => {
  const { loginInput, setLoginInput } = useAuth();
  const { setShowLogin, setShowSignup } = useModal();
  const { userLogin } = useAxiosCalls();
  const [showPassword, setShowPassword] = useState(false);

  const loginConfig = {
    url: "/api/auth/login",
    data: loginInput,
  };

  const guestLoginConfig = {
    url: "/api/auth/login",
    data: {
      email: "guest@gmail.com",
      password: "guest@123",
    },
  };

  const emailValidate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onLoginClickFormHandler = () => {
    if (loginInput.email.trim() === "" || loginInput.password.trim() === "") {
      AlertToast("error", "Input cannot be blank, try again");
    } else {
      if (loginInput.email.match(emailValidate)) {
        userLogin(loginConfig);
      } else {
        AlertToast("info", "Entered email is wrong, please try again");
      }
    }
  };

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    onLoginClickFormHandler();
  };

  const onModalInputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInput((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const guestButtonClickHandler = () => {
    userLogin(guestLoginConfig);
  };

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          setShowLogin(false);
        }}
      ></div>
      <div className="signin-modal">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your account</p>
        <a
          onClick={() => {
            setShowLogin(false);
            setShowSignup(false);
          }}
        >
          <i className="fas fa-times"></i>
        </a>
        <LoginInputForm
          onLoginSubmitHandler={onLoginSubmitHandler}
          onModalInputHandler={onModalInputHandler}
          loginInput={loginInput}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Button
          btnWrapper="signin-btn guest-user-btn"
          label="Guest User"
          btnClassName="btn primary-outline-btn-md"
          onClick={guestButtonClickHandler}
        />
        <p>
          Forgot your password? <span>Reset Password</span>
        </p>
        <button
          className="btn primary-text-btn-sm create-account-btn"
          onClick={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        >
          <h2>
            Create New Account <i className="fas fa-angle-right"></i>
          </h2>
        </button>
      </div>
    </>
  );
};
