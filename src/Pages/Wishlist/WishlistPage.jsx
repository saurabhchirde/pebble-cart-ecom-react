import HorizontalProductsCard from "../../Components/Cards/HorizontalProductsCard";
import { useAuth, useWishlist } from "../../Context";
import { Link } from "react-router-dom";
import "./WishlistPage.css";
import FloatingButton from "../../Components/UI/Button/FloatingButton";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  const { auth } = useAuth();

  const wishlistItems = auth.login ? auth.wishlist : wishlist;

  return (
    <>
      <div className="wishlist">
        <h1 className="title-xl-wt-5 mg-2-bot text-center">My Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <div className="emptyWishlistMsg">
            <h1>Your wishlist is empty</h1>
            <Link to="/products">
              <button className="btn primary-btn-md">Browse Products</button>
            </Link>
          </div>
        ) : (
          <div className="flex-row-center flex-wrap">
            {wishlistItems.map((item) => {
              return <HorizontalProductsCard item={item} key={item._id} />;
            })}
          </div>
        )}
      </div>
      <NewArrivals />
      <FloatingButton href="#" icon="fas fa-arrow-up" />
    </>
  );
};

export default WishlistPage;
