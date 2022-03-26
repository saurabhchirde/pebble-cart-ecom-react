import { useModal } from "../../../Context";
import "./SignupAlertModal.css";
import Button from "../Button/Button";

const SignupAlertModal = () => {
  const { setShowLogin, setShowDiscard } = useModal();

  const loginClickHandler = () => {
    setShowLogin(true);
    setShowDiscard(false);
  };

  const closeClickHandler = () => {
    setShowDiscard(false);
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="discard-modal-md">
        <p>
          Your account has been created successfully!
          <br />
          please login to continue
        </p>
        <div className="discard-modal-btn">
          <Button
            onClick={closeClickHandler}
            btnClassName="btn primary-outline-btn-md"
            label="Close"
          />
          <Button
            onClick={loginClickHandler}
            btnClassName="btn primary-btn-md"
            label="Login"
          />
        </div>
      </div>
    </>
  );
};

export default SignupAlertModal;
