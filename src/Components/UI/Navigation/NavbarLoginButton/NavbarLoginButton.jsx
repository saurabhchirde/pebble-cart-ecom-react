import { AlertToast, Button } from "Components";
import { useAuth, useModal } from "Context";
import { useNavigate } from "react-router-dom";

export const NavbarLoginButton = (props) => {
  const { auth, authDispatch } = useAuth();
  const { setShowLogin, setShowSignup } = useModal();
  const navigate = useNavigate();

  const onNavbarLoginClickHandler = () => {
    if (!auth.login) {
      setShowLogin(true);
      setShowSignup(false);
    } else {
      AlertToast("info", "Logged out successfully");
      authDispatch({ type: "logout" });
      navigate("/products");
      setShowLogin(false);
      setShowSignup(false);
    }
  };

  return (
    <Button
      btnWrapper="signin"
      label={props.label}
      btnClassName={props.btnClassName}
      onClick={onNavbarLoginClickHandler}
    />
  );
};
