import {
  applePay,
  googlePay,
  visa,
  payPal,
  mastercard,
} from "../../../../Data/Img/Payment/PaymentIcon";
import { useCheckout } from "../../../../Context/CheckoutContext";

const PaymentOverviewCard = () => {
  const { checkoutState } = useCheckout();
  const { paymentOverviewCheck } = checkoutState;

  return (
    <div className="payment-method">
      <details>
        <summary>
          <h1>Payment Method</h1>
          <i
            onClick={() => {}}
            className={
              paymentOverviewCheck
                ? "fas fa-check-circle"
                : "far fa-check-circle"
            }
          ></i>
        </summary>
        <div className="payment-icons">
          <img src={applePay} alt="applePay-icon" className="apple-pay" />
          <img src={googlePay} alt="googlePay-icon" className="google-pay" />
          <img src={mastercard} alt="mastercard-icon" className="master-pay" />
          <img src={visa} alt="visa-icon" className="visa-pay" />
          <img src={payPal} alt="paypal-icon" className="paypal-pay" />
        </div>
      </details>
    </div>
  );
};

export default PaymentOverviewCard;
