import { Button } from "Components";

export const SignupInputForm = ({
  onSignupFormSubmitHandler,
  firstNameRef,
  lastNameRef,
  emailRef,
  passwordRef,
  confirmRef,
  firstNameChangeHandler,
  lastNameChangeHandler,
  emailChangeHandler,
  passwordChangeHandler,
  confirmChangeHandler,
}) => {
  return (
    <form onSubmit={onSignupFormSubmitHandler}>
      <div className="outline-text-input">
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            autoComplete="on"
            ref={firstNameRef}
            placeholder="Enter your first name"
            onChange={firstNameChangeHandler}
          />
        </label>
      </div>
      <div className="outline-text-input">
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            autoComplete="on"
            ref={lastNameRef}
            placeholder="Enter your last name"
            onChange={lastNameChangeHandler}
          />
        </label>
      </div>
      <div className="outline-email-input">
        <label>
          Email *
          <input
            type="email"
            name="email"
            required="required"
            autoComplete="email"
            ref={emailRef}
            placeholder="Enter your email *"
            onChange={emailChangeHandler}
          />
        </label>
      </div>
      <div className="outline-password-input">
        <label>
          Password *
          <input
            type="password"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password"
            ref={passwordRef}
            onChange={passwordChangeHandler}
          />
        </label>
      </div>
      <div className="outline-password-input">
        <label>
          Confirm Password
          <input
            type="text"
            name="confirm-password"
            ref={confirmRef}
            required="required"
            placeholder="Confirm password"
            onChange={confirmChangeHandler}
          />
        </label>
      </div>
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
    </form>
  );
};
