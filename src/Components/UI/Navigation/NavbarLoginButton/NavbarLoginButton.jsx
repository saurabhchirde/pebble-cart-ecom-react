import Button from "../../Button/Button";
import { useModal } from "../../../../Context/ModalContext";

const NavbarLoginButton = () => {
  const { setShowLoginModal, setShowSignupModal, loginButton, setLoginButton } =
    useModal();

  const onNavbarLoginClickHandler = () => {
    if (loginButton === "Login") {
      setShowLoginModal(true);
      setShowSignupModal(false);
    } else {
      setLoginButton("Login");
      setShowLoginModal(false);
      setShowSignupModal(false);
    }
  };
  return (
    <>
      <Button
        btnWrapper="signin"
        label={loginButton}
        btnClassName="btn primary-btn-md"
        onClick={onNavbarLoginClickHandler}
      />
    </>
  );
};
export default NavbarLoginButton;
