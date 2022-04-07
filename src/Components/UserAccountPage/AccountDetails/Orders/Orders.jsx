import { useCart, useModal, useTheme } from "../../../../Context";
import { AccountNavBarMobile } from "../../AccountNavBarMobile/AccountNavBarMobile";
import { AccountNavBar } from "../../AccountNavBar/AccountNavBar";
import "./Orders.css";
import SingleProduct from "./SingleProduct/SingleProduct";

const Orders = () => {
  const { showNavMenu } = useModal();
  const { darkTheme } = useTheme();
  const {
    cartState: {
      orderedProduct: { productList, amountPaid, orderNumber, date },
    },
  } = useCart();

  return (
    <div className="orders-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <h2>My Account</h2>
          <h2>Your Orders</h2>
        </div>
        <div className="ordered-product-container">
          {productList.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
          {productList.length > 0 ? (
            <div className="order-card-bottom-section">
              <div className="order-card-bottom-left">
                <div className="order-card-date-section">
                  <p>Order Date</p>
                  <p>{date}</p>
                </div>
                <div className="order-card-details-section">
                  <p>Order details</p>
                  <p>{orderNumber}</p>
                </div>
              </div>
              <div className="order-card-bottom-right">
                <button className="btn primary-outline-btn-md product-track-order-btn">
                  Track Order
                </button>
                <div className="order-card-total-price">
                  <p>Bill Amount</p>
                  <p>Rs.{amountPaid}/-</p>
                </div>
              </div>
            </div>
          ) : (
            <h2 className="title-lg-wt-5 mg-2-top">No Orders</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
