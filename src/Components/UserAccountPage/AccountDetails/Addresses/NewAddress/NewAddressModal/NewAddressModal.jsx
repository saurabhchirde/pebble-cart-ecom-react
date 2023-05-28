import { useAuth, useAxiosCalls } from "Context";
import { InputTypeOne, Button, AlertToast } from "Components";

export const NewAddressModal = () => {
  const {
    auth,
    newAddress,
    setNewAddress,
    initialAddressState,
    setShowAddressModal,
  } = useAuth();
  const { addAddressOnServer } = useAxiosCalls();

  const addressConfig = {
    url: "/api/user/addresses",
    body: {
      address: { ...newAddress },
    },
    headers: { headers: { authorization: auth.token } },
  };

  const numberValidate = /^(\+\d{1,3}[- ]?)|0?\d{10}$/;
  const pinValidate = /^[0-9]{6}$/;

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();
    if (newAddress.fullName.trim() !== "" || newAddress.address.trim() !== "") {
      if (newAddress.pinCode.match(pinValidate)) {
        if (newAddress.mobile.match(numberValidate)) {
          addAddressOnServer(addressConfig);
          AlertToast("success", "New Address Added ");
          setShowAddressModal(false);
          setNewAddress(initialAddressState);
        } else {
          AlertToast("error", "Enter valid Mobile number");
        }
      } else {
        AlertToast("error", "Enter valid Pin code");
      }
    } else {
      AlertToast("error", "Enter valid details");
    }
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
    setShowAddressModal(false);
  };

  return (
    <>
      {/* using signup modal to avoid repeating css */}
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
            required="required"
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
            required="required"
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
            autoComplete="postal-code"
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
            autoComplete="tel"
            placeholder="Enter your Mobile"
            inputWrapper="outline-tel-input"
            onChange={onInputChangeHandler}
            value={newAddress.mobile}
          />
          <Button
            btnWrapper="signup-btn"
            type="submit"
            btnClassName="btn primary-btn-md"
            label=" Add"
          />
        </form>
      </div>
    </>
  );
};
