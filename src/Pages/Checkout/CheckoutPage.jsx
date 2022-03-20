import CheckoutDetails from "../../Components/CheckoutPage/CheckoutDetails/CheckoutDetails";
import OrderSummary from "../../Components/CheckoutPage/OrderSummary/OrderSummary";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="cart">
      <h1 className="title-xl-wt-5 mg-2-bot text-center">Checkout</h1>
      <div className="flex-row flex-justify-space-between">
        <CheckoutDetails />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
