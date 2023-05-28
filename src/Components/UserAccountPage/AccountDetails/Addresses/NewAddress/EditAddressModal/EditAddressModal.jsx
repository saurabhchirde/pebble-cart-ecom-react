import { useAuth, useAxiosCalls } from "Context";
import { AlertToast, Button } from "Components";

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
    url: "/api/user/addresses",
    body: {
      address: { ...newAddress },
    },
    headers: { headers: { authorization: auth.token } },
  };

  const numberValidate = /^(\+\d{1,3}[- ]?)|0?\d{10}$/;
  const pinValidate = /^[0-9]{6}$/;

  const updateAddressHandler = (e) => {
    e.preventDefault();
    if (newAddress.fullName.trim() !== "" || newAddress.address.trim() !== "") {
      if (newAddress.pinCode.match(pinValidate)) {
        if (newAddress.mobile.match(numberValidate)) {
          updateAddressOnServer(updateAddressConfig);
          setShowEditAddressModal(false);
          setNewAddress(initialAddressState);
          AlertToast("success", "Address Updated ");
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
        <form onSubmit={updateAddressHandler}>
          <div className="outline-text-input">
            <label>
              Full Name
              <input
                type="text"
                name="fullName"
                required="required"
                autoComplete="on"
                placeholder="Enter your name"
                onChange={onInputChangeHandler}
                value={newAddress.fullName}
              />
            </label>
          </div>
          <div className="outline-text-input">
            <label>
              Address
              <input
                type="address"
                name="address"
                required="required"
                autoComplete="on"
                placeholder="Enter your address"
                onChange={onInputChangeHandler}
                value={newAddress.address}
              />
            </label>
          </div>
          <div className="outline-number-input">
            <label>
              Pin Code
              <input
                type="number"
                name="pinCode"
                required="required"
                autoComplete="pin"
                placeholder="Enter your pin code"
                onChange={onInputChangeHandler}
                value={newAddress.pinCode}
              />
            </label>
          </div>
          <div className="outline-tel-input">
            <label>
              Mobile
              <input
                type="tel"
                name="mobile"
                required="required"
                autoComplete="mobile"
                placeholder="Enter your Mobile"
                onChange={onInputChangeHandler}
                value={newAddress.mobile}
              />
            </label>
          </div>
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
