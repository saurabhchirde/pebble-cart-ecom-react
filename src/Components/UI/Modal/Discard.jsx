import { useModal } from "../../../Context";
import "./Discard.css";
import Button from "../Button/Button";

const Discard = () => {
  const { setShowLoginModal, setShowDiscardModal } = useModal();

  const loginClickHandler = () => {
    setShowLoginModal(true);
    setShowDiscardModal(false);
  };

  const closeClickHandler = () => {
    setShowDiscardModal(false);
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

export default Discard;
