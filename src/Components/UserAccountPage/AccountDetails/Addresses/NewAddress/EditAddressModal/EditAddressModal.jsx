import { useAuth, useAxiosCalls } from "Context";
import { InputTypeOne, Button } from "Components";

export const EditAddressModal = () => {
  const {
    auth,
    newAddress,
    setNewAddress,
    initialAddressState,
    setShowEditAddressModal,
  } = useAuth();
  const { updateAddressOnServer } = useAxiosCalls();

  const updateAddressConfig = {
    url: "/api/addresses",
    body: {
      address: { ...newAddress },
    },
    headers: { headers: { authorization: auth.token } },
  };

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();
    updateAddressOnServer(updateAddressConfig);
    setShowEditAddressModal(false);
    setNewAddress(initialAddressState);
  };

  const onInputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewAddress((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const onCloseClick = () => {
    setShowEditAddressModal(false);
  };

  return (
    <>
      {/* using signup modal to avoid writing unnecessary css */}
      <div
        onClick={onCloseClick}
        className="modal-backdrop address-modal"
      ></div>
      <div className="signup-modal-one">
        <h1>Address</h1>
        <p>Please provide details.</p>
        <button
          className="btn icon-btn-sm address-modal-close-btn"
          onClick={onCloseClick}
        >
          <i className="fas fa-times"></i>
        </button>
        <form onSubmit={onSignupFormSubmitHandler}>
          <InputTypeOne
            label="Full Name"
            type="text"
            name="fullName"
            autoComplete="on"
            placeholder="Enter your name"
            inputWrapper="outline-text-input"
            onChange={onInputChangeHandler}
            value={newAddress.fullName}
          />
          <InputTypeOne
            label="Address"
            type="address"
            name="address"
            autoComplete="on"
            placeholder="Enter your address"
            inputWrapper="outline-text-input"
            onChange={onInputChangeHandler}
            value={newAddress.address}
          />
          <InputTypeOne
            label="Pin Code"
            type="number"
            name="pinCode"
            required="required"
            autoComplete="pin"
            placeholder="Enter your pin code"
            inputWrapper="outline-number-input"
            onChange={onInputChangeHandler}
            value={newAddress.pinCode}
          />
          <InputTypeOne
            label="Mobile"
            type="tel"
            name="mobile"
            required="required"
            autoComplete="mobile"
            placeholder="Enter your Mobile"
            inputWrapper="outline-tel-input"
            onChange={onInputChangeHandler}
            value={newAddress.mobile}
          />
          <Button
            btnWrapper="signup-btn"
            type="submit"
            btnClassName="btn primary-btn-md"
            label="Edit Address"
          />
        </form>
      </div>
    </>
  );
};
