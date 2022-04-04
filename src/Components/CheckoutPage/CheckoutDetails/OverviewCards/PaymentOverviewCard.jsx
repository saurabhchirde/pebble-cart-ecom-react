import {
  applePay,
  googlePay,
  visa,
  payPal,
  mastercard,
} from "../../../../Data/Img/Payment/PaymentIcon";
import { useCheckout } from "../../../../Context/Checkout/CheckoutProvider";
import "./PaymentOverviewCard.css";
import { useTheme } from "../../../../Context";

const PaymentOverviewCard = () => {
  const { checkoutState, checkoutDispatch } = useCheckout();
  const { paymentOverviewCheck } = checkoutState;
  const { darkTheme } = useTheme();

  const checkIconStatus = `${
    paymentOverviewCheck ? "fas fa-check-circle" : "far fa-check-circle"
  }`;

  const paymentModeActive = `${paymentOverviewCheck ? "" : "inActivePayment"}`;

  return (
    <div
      className={
        darkTheme ? "payment-method" : "payment-method payment-method-light"
      }
    >
      <details>
        <summary>
          <h1>
            Payment Method <span>(right now we only accept Gpay)</span>
          </h1>
          <i className={checkIconStatus}></i>
        </summary>
        <div className="payment-icons">
          <img
            src={applePay}
            alt="applePay-icon"
            className="apple-pay inActivePayment"
            onClick={() => {
              checkoutDispatch({ type: "applePay", payload: "apple" });
            }}
          />
          <img
            src={googlePay}
            alt="googlePay-icon"
            className={paymentModeActive}
            onClick={() => {
              checkoutDispatch({ type: "gpayPay", payload: "gpay" });
            }}
          />
          <img
            src={mastercard}
            alt="mastercard-icon"
            className="master-pay inActivePayment"
            onClick={() => {
              checkoutDispatch({ type: "masterPay", payload: "master" });
            }}
          />
          <img
            src={visa}
            alt="visa-icon"
            className="visa-pay inActivePayment"
            onClick={() => {
              checkoutDispatch({ type: "visaPay", payload: "visa" });
            }}
          />
          <img
            src={payPal}
            alt="paypal-icon"
            className="paypal-pay inActivePayment"
            onClick={() => {
              checkoutDispatch({ type: "paypalPay", payload: "paypal" });
            }}
          />
        </div>
      </details>
    </div>
  );
};

export default PaymentOverviewCard;
