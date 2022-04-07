import { Link } from "react-router-dom";
import CheckoutDetails from "../../Components/CheckoutPage/CheckoutDetails/CheckoutDetails";
import OrderSummary from "../../Components/CheckoutPage/OrderSummary/OrderSummary";
import Button from "../../Components/UI/Button/Button";
import { useCart, useTheme } from "../../Context";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { darkTheme } = useTheme();
  const { cartState } = useCart();

  return (
    <div className={darkTheme ? "cart" : "cart cart-light"}>
      <h1 className="title-xl-wt-5 mg-2-bot text-center">Checkout</h1>
      <div className="flex-row flex-justify-space-between">
        {cartState.cart.length < 1 ? (
          <div className="checkout-empty-cart">
            <h2 style={{ color: darkTheme ? "#fff" : "#333" }}>
              Your cart is Empty
            </h2>
            <div className="flex-row-center">
              <Link to="/products">
                <Button label="Show Now" btnClassName="btn primary-btn-lg" />
              </Link>
              <Link to="/account/orders">
                <button className="btn primary-outline-btn-lg">
                  Check Orders
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <CheckoutDetails />
            <OrderSummary />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
