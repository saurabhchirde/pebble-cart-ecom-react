import Button from "../../Button/Button";
import { useAuth, useModal } from "../../../../Context";

const NavbarLoginButton = (props) => {
  const { auth, authDispatch } = useAuth();
  const { setShowLoginModal, setShowSignupModal } = useModal();

  console.log(auth.login);

  const onNavbarLoginClickHandler = () => {
    if (!auth.login) {
      setShowLoginModal(true);
      setShowSignupModal(false);
    } else {
      authDispatch({ type: "logout" });
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
