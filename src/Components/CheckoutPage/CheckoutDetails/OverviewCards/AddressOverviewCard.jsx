import { useAuth, useTheme } from "Context";
import { useCheckout } from "Context";
import { SingleAddress, NewAddressModal } from "Components";
import "./AddressOverViewCard.css";
import { useEffect } from "react";

export const AddressOverviewCard = () => {
  const { checkoutState, checkoutDispatch } = useCheckout();
  const { addressOverviewCheck } = checkoutState;
  const {
    auth: {
      user: { addresses },
    },
    showAddressModal,
    setShowAddressModal,
  } = useAuth();
  const { darkTheme } = useTheme();

  const onSelectingAddress = () => {
    checkoutDispatch({ type: "addressSelected" });
  };

  const addNewAddressHandler = () => {
    setShowAddressModal(true);
  };

  const checkIconStatus =
    addresses.length > 0
      ? `${
          addressOverviewCheck ? "fas fa-check-circle" : "far fa-check-circle"
        }`
      : "far fa-check-circle";

  useEffect(() => {
    if (addresses.length < 1) {
      checkoutDispatch({ type: "addressDeSelected" });
    }
  }, [addresses.length]);

  return (
    <div
      className={
        darkTheme ? "contact-address" : "contact-address contact-address-light"
      }
    >
      <details>
        <summary>
          <h1>Contact & Delivery Address</h1>
          <i className={checkIconStatus}></i>
        </summary>
        {showAddressModal && (
          <NewAddressModal setShowAddressModal={setShowAddressModal} />
        )}
        <div className="address address-one">
          <div className="radio-input">
            {addresses.length > 0 ? (
              <div className="checkout-address-container">
                {addresses.map((address) => {
                  return (
                    <label
                      key={address._id}
                      htmlFor="address-select"
                      onClick={onSelectingAddress}
                    >
                      <div className="checkout-address-section">
                        <input type="radio" name="radio" id="address-select" />
                        <SingleAddress props={address} />
                      </div>
                    </label>
                  );
                })}
              </div>
            ) : (
              <p className="p-lg mg-point6-lt">
                Please add address to continue
              </p>
            )}
          </div>
        </div>
        <button
          onClick={addNewAddressHandler}
          className="btn primary-text-btn-md"
        >
          Add new address
        </button>
      </details>
    </div>
  );
};
