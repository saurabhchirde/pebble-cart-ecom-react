import Button from "../../Button/Button";
import { useAuth, useModal } from "../../../../Context";
import { useNavigate } from "react-router-dom";

const NavbarLoginButton = (props) => {
  const { auth, authDispatch } = useAuth();
  const { setShowLogin, setShowSignup, setError, setShowError } = useModal();
  const navigate = useNavigate();

  const onNavbarLoginClickHandler = () => {
    if (!auth.login) {
      setShowLogin(true);
      setShowSignup(false);
    } else {
      setError(`Logged out successfully`);
      setShowError(true);
      authDispatch({ type: "logout" });
      navigate("/products");
      setShowLogin(false);
      setShowSignup(false);
    }
  };

  return (
    <>
      <Button
        btnWrapper="signin"
        label={props.label}
        btnClassName="btn primary-btn-md"
        onClick={onNavbarLoginClickHandler}
      />
    </>
  );
};

export default NavbarLoginButton;
