import CartItemCard from "../../Components/CartPage/CartItemCard/CartItemCard";
import { useAlert, useAuth, useCart } from "../../Context";
import "./CartPage.css";
import { Link } from "react-router-dom";
import PriceCard from "../../Components/CartPage/PriceCard/PriceCard";
import Alert from "../../Components/Alert/Alert";

const CartPage = () => {
  const { cartState } = useCart();
  const { auth } = useAuth();
  const {
    alertState: { cartEditedAlert, removeFromCartAlert, addToWishlistAlert },
  } = useAlert();

  return (
    <>
      {addToWishlistAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Added to Wishlist"
          dispatchType="hideAddToWishlistAlert"
        />
      )}
      {cartEditedAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Quantity Updated"
          dispatchType="hideCartEditedAlert"
        />
      )}
      {removeFromCartAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Item Removed from Cart"
          dispatchType="hideRemoveFromCartAlert"
        />
      )}
      {!auth.login && (
        <h1 className="notLoggedIn">Please login, to add items in your cart</h1>
      )}
      {auth.login && (
        <div className="cart">
          <h1 className="title-xl-wt-5 mg-2-bot text-center">
            Shopping Cart ({cartState.cart.length})
          </h1>
          {auth.login && cartState.cart.length === 0 ? (
            <div className="emptyWishlistMsg">
              <h1>Your cart is empty</h1>
              <Link to="/products">
                <button className="btn primary-btn-md">Shop now</button>
              </Link>
            </div>
          ) : (
            <div className="flex-row flex-justify-space-between">
              <div className="cart-products">
                {cartState.cart.map((item) => {
                  return <CartItemCard item={item} key={item._id} />;
                })}
              </div>
              <PriceCard />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartPage;
