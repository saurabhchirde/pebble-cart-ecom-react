import HorizontalProductsCard from "../../Components/Cards/HorizontalProductsCard";
import { useAlert, useAuth, useCart, useTheme } from "../../Context";
import { Link } from "react-router-dom";
import "./WishlistPage.css";
import FloatingButton from "../../Components/UI/Button/FloatingButton";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import Alert from "../../Components/Alert/Alert";

const WishlistPage = () => {
  const { auth } = useAuth();
  const {
    cartState: { wishlist },
  } = useCart();
  const {
    alertState: { addToCartAlert, removeFromWishlistAlert, alreadyInCart },
  } = useAlert();
  const { darkTheme } = useTheme();

  return (
    <>
      {addToCartAlert && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Item Moved to Cart"
          dispatchType="hideAddToCartAlert"
        />
      )}
      {alreadyInCart && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Already in your Cart"
          dispatchType="hideAlreadyInCart"
        />
      )}
      {removeFromWishlistAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Item Removed from Wishlist"
          dispatchType="hideRemoveFromWishlistAlert"
        />
      )}
      {!auth.login && (
        <h1 className="notLoggedIn">
          Please login, to add items in your wishlist
        </h1>
      )}
      {auth.login && (
        <div>
          <div className={darkTheme ? "wishlist" : "wishlist wishlist-light"}>
            <h1 className="title-xl-wt-5 mg-2-bot text-center">My Wishlist</h1>
            {wishlist.length === 0 ? (
              <div className="emptyWishlistMsg">
                <h1>Your wishlist is empty</h1>
                <Link to="/products">
                  <button className="btn primary-btn-md">
                    Browse Products
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex-row-center flex-wrap">
                {wishlist.map((item) => {
                  return <HorizontalProductsCard item={item} key={item._id} />;
                })}
              </div>
            )}
          </div>
          <NewArrivals />
          <FloatingButton href="#" icon="fas fa-arrow-up" />
        </div>
      )}
    </>
  );
};

export default WishlistPage;
