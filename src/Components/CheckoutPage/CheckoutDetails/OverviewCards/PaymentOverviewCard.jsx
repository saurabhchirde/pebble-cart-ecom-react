const PaymentOverviewCard = () => {
  return (
    <div className="payment-method">
      <details>
        <summary>
          <h1>Payment Method</h1>
          <i className="far fa-check-circle"></i>
        </summary>
        <div className="payment-icons">
          <img
            src="./src/assets/images/payment/ApplePay.svg"
            alt="applePay-icon"
            className="apple-pay"
          />
          <img
            src="./src/assets/images/payment/GooglePay.svg"
            alt="applePay-icon"
            className="google-pay"
          />
          <img
            src="./src/assets/images/payment/Mastercard.svg"
            alt="applePay-icon"
            className="master-pay"
          />
          <img
            src="./src/assets/images/payment/Visa.svg"
            alt="applePay-icon"
            className="visa-pay"
          />
          <img
            src="./src/assets/images/payment/PayPal.svg"
            alt="applePay-icon"
            className="paypal-pay"
          />
        </div>
      </details>
    </div>
  );
};

export default PaymentOverviewCard;
