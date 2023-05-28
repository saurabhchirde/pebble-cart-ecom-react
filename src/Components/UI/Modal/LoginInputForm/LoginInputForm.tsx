import { InputTypeOne, InputTypePassword, Button } from "Components";
import { LoginInputFormProps } from "../modal-types";

export const LoginInputForm: React.FC<LoginInputFormProps> = ({
  onLoginSubmitHandler,
  debounce,
  loginInput,
  showPassword,
  setShowPassword,
}) => {
  return (
    <form onSubmit={onLoginSubmitHandler}>
      <InputTypeOne
        type="email"
        name="email"
        required
        placeholder="Enter your email *"
        iconWrapper="input-icon"
        icon="far fa-envelope"
        inputWrapper="outline-email-input"
        onChange={debounce}
        value={loginInput.email}
      />
      <InputTypePassword
        type={showPassword ? "text" : "password"}
        name="password"
        required
        placeholder="Enter your password *"
        iconWrapper="input-icon"
        icon="fas fa-key"
        eyeIcon={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
        inputWrapper="outline-password-input password-input-field"
        onChange={debounce}
        onEyeClick={() => {
          setShowPassword((preData) => !preData);
        }}
        value={loginInput.password}
      />
      <Button
        btnWrapper="signin-btn"
        type="submit"
        label="Sign In"
        btnClassName="btn primary-btn-md"
      />
    </form>
  );
};

LoginInputForm.defaultProps = {
  onLoginSubmitHandler: () => {},
  debounce: () => {},
  loginInput: { email: "", password: "" },
  showPassword: false,
};
