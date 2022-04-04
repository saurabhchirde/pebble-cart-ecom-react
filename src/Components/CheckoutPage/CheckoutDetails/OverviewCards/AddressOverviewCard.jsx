import { useAuth, useTheme } from "../../../../Context";
import { useCheckout } from "../../../../Context/Checkout/CheckoutProvider";

const AddressOverviewCard = () => {
  const { checkoutState, checkoutDispatch } = useCheckout();
  const { addressOverviewCheck } = checkoutState;
  const { auth } = useAuth();
  const { darkTheme } = useTheme();

  const onSelectingAddress = () => {
    checkoutDispatch({ type: "addressSelected" });
  };

  const checkIconStatus = `${
    addressOverviewCheck ? "fas fa-check-circle" : "far fa-check-circle"
  }`;

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

        <div className="address address-one">
          <div className="radio-input" onClick={onSelectingAddress}>
            <input type="radio" name="radio" id="addressOne" />
            <label htmlFor="addressOne">
              {auth.user.firstName} {auth.user.lastName}, House No. 55, Near
              Ambika Lane, Betageri Market, Building No. 68, Vellora, Kannur,
              Kerala, Pincode-646039
            </label>
          </div>
          <button className="btn primary-text-btn-sm">edit address</button>
        </div>

        <div className="address address-two">
          <div className="radio-input" onClick={onSelectingAddress}>
            <input type="radio" name="radio" id="addressTwo" />
            <label htmlFor="addressTwo">
              {auth.user.firstName} {auth.user.lastName}, House No. 55, Near
              Ambika Lane, Betageri Market, Building No. 68, Vellora, Kannur,
              Kerala, Pincode-646039
            </label>
          </div>
          <button className="btn primary-text-btn-sm">edit address</button>
        </div>

        <button className="btn primary-text-btn-sm">Add new address</button>
      </details>
    </div>
  );
};

export default AddressOverviewCard;
