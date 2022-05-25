import { AlertToast } from "Components";
import { useAuth, useAxiosCalls, useCart, useModal, useTheme } from "Context";
import { useCheckout } from "Context/Checkout/CheckoutProvider";
import "./OrderSummary.css";

export const OrderSummary = ({ setOrderDetails }) => {
  const { cartState, cartDispatch } = useCart();
  const { checkoutState, checkoutDispatch } = useCheckout();
  const { addressOverviewCheck } = checkoutState;
  const { darkTheme } = useTheme();
  const { auth } = useAuth();
  const { emptyAllCartFromServer } = useAxiosCalls();
  const { setShowConfirmPayment } = useModal();

  const amountPaid = Math.trunc(cartState.totalPrice - cartState.discount);
  const orderNumber = `258-PEBBLE-49-${Math.random() * 50}`;

  const cartConfig = {
    url: "/api/user/cart",
    body: {},
    headers: { headers: { authorization: auth.token } },
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const makePaymentClickHandler = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("You are offline!, please check your internet");
        return;
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_API,
        amount: amountPaid * 100,
        currency: "INR",
        name: "Pebble Cart",
        description: "Make Payment For Pebble Cart",

        handler: async function (response) {
          setOrderDetails({
            orderId: orderNumber,
            paymentId: response.razorpay_payment_id,
          });
          cartDispatch({
            type: "makePayment",
            payload: {
              productList: cartState.cart,
              amountPaid: amountPaid,
              orderNumber: orderNumber,
            },
          });
          setShowConfirmPayment(true);
          emptyAllCartFromServer(cartConfig);
          checkoutDispatch({ type: "clearSelections" });
        },
        prefill: {
          name: "Pebble Cart",
          email: "buy@pebblecart.com",
          contact: "9999999999",
        },
        notes: {
          address: "Pebble Cart Office",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      AlertToast("error", error);
    }
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
        {addressOverviewCheck && (
          <button
            onClick={makePaymentClickHandler}
            className="btn primary-btn-md"
          >
            Make Payment
          </button>
        )}
      </div>
      <p className="text-center">Select delivery address to make payment.</p>
    </div>
  );
};
