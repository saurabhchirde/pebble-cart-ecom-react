import { useCart, useModal, useTheme } from "../../../../Context";
import { AccountNavBarMobile } from "../../AccountNavBarMobile/AccountNavBarMobile";
import { AccountNavBar } from "../../AccountNavBar/AccountNavBar";
import "./Orders.css";
import SingleProduct from "./SingleProduct/SingleProduct";
import { Link } from "react-router-dom";
import OrderDetails from "./OrderDetails/OrderDetails";

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
        {productList?.length > 0 ? (
          <div className="ordered-product-container">
            {productList.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
            {productList.length > 0 ? (
              <OrderDetails details={{ amountPaid, orderNumber, date }} />
            ) : null}
          </div>
        ) : (
          <div>
            <h2 className="title-lg-wt-5 text-center mg-2-tb">No Orders</h2>
            <Link to="/products">
              <button className="btn primary-btn-md">Shop Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
