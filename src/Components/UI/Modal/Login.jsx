import axios from "axios";
import { useState } from "react";
import { useAuth, useCart, useModal, useWishlist } from "../../../Context";
import Button from "../Button/Button";
import InputTypeOne from "../Input/InputTypeOne";
import "./Login.css";

const Login = () => {
  const { cartDispatch } = useCart();
  const { setWishlist } = useWishlist();
  const { authDispatch } = useAuth();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const { setShowLoginModal, setShowSignupModal } = useModal();

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
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

  const onLoginClickFormHandler = () => {
    if (loginInput.name === "" || loginInput.password === "") {
      return;
    } else {
      loginAuthentication();
    }
  };

  const onTestButtonClickFormHandler = () => {
    setLoginInput(() => {
      return {
        email: "test@gmail.com",
        password: "test@123",
      };
    });
    loginAuthentication();
  };

  const loginAuthentication = async () => {
    try {
      const response = await axios.post("/api/auth/login", loginInput);
      authDispatch({
        type: "login",
        payload: response.data,
      });
      cartDispatch({
        type: "authCartInitiate",
        payload: response.data.foundUser.cart,
      });
      setWishlist(response.data.foundUser.wishlist);
      setShowLoginModal(false);
    } catch (error) {
      console.error(error.message);
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
            // required="required"    commented for development
            autoComplete="email"
            placeholder="Enter your email *"
            iconWrapper="input-icon"
            icon="far fa-envelope"
            inputWrapper="outline-email-input"
            onChange={onModalInputHandler}
            value={loginInput.email}
          />
          <InputTypeOne
            type="password"
            name="password"
            // required="required"     commented for development
            autoComplete="current-password"
            placeholder="Enter your password *"
            iconWrapper="input-icon"
            icon="fas fa-key"
            inputWrapper="outline-password-input"
            onChange={onModalInputHandler}
            value={loginInput.password}
          />
          <Button
            btnWrapper="signin-btn"
            type="submit"
            label="Sign In"
            btnClassName="btn primary-btn-md"
            onClick={onLoginClickFormHandler}
          />
          <Button
            btnWrapper="signin-btn"
            type="submit"
            label="Test User (double click)"
            btnClassName="btn primary-outline-btn-md"
            onClick={onTestButtonClickFormHandler}
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
