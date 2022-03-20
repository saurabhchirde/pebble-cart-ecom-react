import { useCheckout } from "../../../../Context/CheckoutContext";

const AddressOverviewCard = () => {
  const { checkoutState } = useCheckout();
  const { addressOverviewCheck } = checkoutState;

  return (
    <div className="contact-address">
      <details>
        <summary>
          <h1>Contact & Delivery Address</h1>
          <i
            onClick={() => {}}
            className={
              addressOverviewCheck
                ? "fas fa-check-circle"
                : "far fa-check-circle"
            }
          ></i>
        </summary>
        <div className="address address-one">
          <div className="radio-input">
            <input type="radio" name="radio" />
            <label>
              Kashika Agnani, House No. 55, Near Ambika Lane, Betageri Market,
              Building No. 68, Vellora, Kannur, Kerala, Pincode-646039
            </label>
          </div>
          <button className="btn primary-text-btn-sm">edit address</button>
        </div>

        <div className="address address-two">
          <div className="radio-input">
            <input type="radio" name="radio" />
            <label>
              Kashika Agnani, House No. 55, Near Ambika Lane, Betageri Market,
              Building No. 68, Vellora, Kannur, Kerala, Pincode-646039
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
