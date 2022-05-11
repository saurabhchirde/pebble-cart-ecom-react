import {
  HorizontalProductsCard,
  FloatingButton,
  NewArrivals,
} from "Components";
import { useAuth, useCart, useTheme } from "Context";
import { Link } from "react-router-dom";
import "./WishlistPage.css";

export const WishlistPage = () => {
  const { auth } = useAuth();
  const {
    cartState: { wishlist },
  } = useCart();
  const { darkTheme } = useTheme();

  return (
    <>
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
