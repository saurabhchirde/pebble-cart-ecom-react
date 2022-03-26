import { useCart } from "../../../Context";
import { useCheckout } from "../../../Context/Checkout/CheckoutProvider";
import "./OrderSummary.css";

const OrderSummary = () => {
  const { cartState } = useCart();
  const { checkoutState } = useCheckout();
  const { addressOverviewCheck, paymentOverviewCheck } = checkoutState;

  return (
    <div className="cart-price-table checkout-price-table price-table-dark">
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
          <button className="btn primary-btn-md">Make Payment</button>
        )}
      </div>
      <p className="text-center">
        Select delivery address and Payment method to continue checking out.
      </p>
    </div>
  );
};

export default OrderSummary;
