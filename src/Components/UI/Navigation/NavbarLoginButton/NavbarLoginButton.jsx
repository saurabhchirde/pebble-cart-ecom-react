import Button from "../../Button/Button";
import { useAuth, useModal } from "../../../../Context";
import { useNavigate } from "react-router-dom";

const NavbarLoginButton = (props) => {
  const { auth, authDispatch } = useAuth();
  const { setShowLoginModal, setShowSignupModal } = useModal();
  const navigate = useNavigate();

  const onNavbarLoginClickHandler = () => {
    if (!auth.login) {
      setShowLoginModal(true);
      setShowSignupModal(false);
    } else {
      authDispatch({ type: "logout" });
      navigate("/");
      setShowLoginModal(false);
      setShowSignupModal(false);
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
