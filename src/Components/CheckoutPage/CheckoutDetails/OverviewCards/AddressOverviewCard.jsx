import { useAuth, useTheme } from "../../../../Context";
import { useCheckout } from "../../../../Context/Checkout/CheckoutProvider";
import SingleAddress from "../../../UserAccountPage/AccountDetails/Addresses/SingleAddress/SingleAddress";
import NewAddressModal from "../../../UserAccountPage/AccountDetails/Addresses/NewAddress/NewAddressModal/NewAddressModal";
import "./AddressOverViewCard.css";

const AddressOverviewCard = () => {
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
    addresses.length > 1
      ? `${
          addressOverviewCheck ? "fas fa-check-circle" : "far fa-check-circle"
        }`
      : "far fa-check-circle";

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
          <div className="radio-input" onClick={onSelectingAddress}>
            {addresses.length > 0 ? (
              <>
                {addresses.map((address) => {
                  return (
                    <div className="checkout-address-section">
                      <label htmlFor="address-select">
                        <input type="radio" name="radio" id="address-select" />
                        <SingleAddress key={address._id} props={address} />
                      </label>
                    </div>
                  );
                })}
              </>
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

export default AddressOverviewCard;
