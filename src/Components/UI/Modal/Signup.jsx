import Button from "../Button/Button";
import "./Signup.css";
import InputTypeOne from "../Input/InputTypeOne";
import { useModal } from "../../../Context";

const Signup = () => {
  const { setShowLoginModal, setShowSignupModal } = useModal();

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="signup-modal-one">
        <h1>Sign Up</h1>
        <p>Please provide your details.</p>
        <a
          onClick={() => {
            setShowLoginModal(false);
            setShowSignupModal(false);
          }}
        >
          <i className="fas fa-times"></i>
        </a>
        <form onSubmit={onSignupFormSubmitHandler}>
          <InputTypeOne
            label="Full Name"
            type="text"
            name="text"
            autoComplete="name"
            placeholder="Enter your name"
            inputWrapper="outline-text-input"
          />
          <InputTypeOne
            label="Email *"
            type="email"
            name="email"
            required="required"
            autoComplete="email"
            placeholder="Enter your email *"
            inputWrapper="outline-email-input"
          />
          <InputTypeOne
            label="Phone no"
            type="tel"
            name="tel"
            autoComplete="tel"
            placeholder="Enter phone number"
            inputWrapper="outline-tel-input"
          />
          <InputTypeOne
            label="Password *"
            type="text"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password"
            inputWrapper="outline-password-input"
          />
          <InputTypeOne
            label="Re-enter Password *"
            type="password"
            name="password"
            required="required"
            placeholder="Re-enter your password"
            inputWrapper="outline-password-input"
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
          <a
            className="existing-account-btn"
            onClick={() => {
              setShowLoginModal(true);
              setShowSignupModal(false);
            }}
          >
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
