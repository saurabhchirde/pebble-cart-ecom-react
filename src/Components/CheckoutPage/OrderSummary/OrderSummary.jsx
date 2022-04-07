import { useAnimation, useCart, useModal, useTheme } from "../../../Context";
import { useCheckout } from "../../../Context/Checkout/CheckoutProvider";
import "./OrderSummary.css";

const OrderSummary = () => {
  const { cartState, cartDispatch } = useCart();
  const { checkoutState } = useCheckout();
  const { addressOverviewCheck, paymentOverviewCheck } = checkoutState;
  const { darkTheme } = useTheme();
  const { setAlertText, setShowAlert } = useModal();
  const { showLoader } = useAnimation();

  const amountPaid = Math.trunc(cartState.totalPrice - cartState.discount);
  const orderNumber = `258-487489-${Math.random() * 50}`;

  const makePaymentClickHandler = () => {
    showLoader();
    setTimeout(() => {
      showLoader();
      setAlertText("Successfully placed your order");
      setShowAlert(true);
      cartDispatch({
        type: "makePayment",
        payload: {
          productList: cartState.cart,
          amountPaid: amountPaid,
          orderNumber: orderNumber,
        },
      });
    }, 4000);
  };

  const overviewSummaryClass = darkTheme
    ? "cart-price-table checkout-price-table price-table-dark"
    : "cart-price-table checkout-price-table price-table-light";

  return (
    <div className={overviewSummaryClass}>
      <h2>Order Summary</h2>
      <hr className="break-line" />
      <div className="cart-product-qty">
        <h3>Items</h3>
        <h3>{cartState.totalQty}</h3>
      </div>
      <div className="cart-discount">
        <h3>Discount</h3>
        <h3>Rs.{Math.trunc(cartState.discount)}/-</h3>
      </div>
      <hr className="break-line" />
      <div className="cart-total">
        <h3>Final Amount</h3>
        <h3>Rs.{Math.trunc(cartState.totalPrice - cartState.discount)}/-</h3>
      </div>
      <hr className="break-line" />
      <div className="payment-btn">
        {addressOverviewCheck && paymentOverviewCheck && (
          <button
            onClick={makePaymentClickHandler}
            className="btn primary-btn-md"
          >
            Make Payment
          </button>
        )}
      </div>
      <p className="text-center">
        Select delivery address and Payment method to continue checking out.
      </p>
    </div>
  );
};

export default OrderSummary;
