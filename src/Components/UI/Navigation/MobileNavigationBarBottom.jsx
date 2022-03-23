import { useAuth, useCart, useWishlist } from "../../../Context";
import BadgeIconButton from "../Button/BadgeIconButton";
import IconButton from "../Button/IconButton";
import "./MobileNavigationBarBottom.css";
import { Link } from "react-router-dom";

const MobileNavigationBarBottom = () => {
  const { cartState } = useCart();
  const { wishlist } = useWishlist();
  const { auth } = useAuth();

  const cartItems = auth.login ? auth.cart.items : cartState.cart;
  const wishlistItems = auth.login ? auth.wishlist : wishlist;

  return (
    <>
      <nav className="mobile-navigation-bar-bottom dark-nav-bar">
        <Link to="wishlist">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="far fa-heart"
            badgeClassName="badge-on-icon"
            badgeValue={wishlistItems.length}
          />
        </Link>
        <Link to="/">
          <IconButton btnClassName="btn icon-btn-lg" icon="fas fa-house-user" />
        </Link>
        <Link to="cart">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="fas fa-shopping-cart"
            badgeClassName="badge-on-icon"
            badgeValue={cartItems.length}
          />
        </Link>
      </nav>
    </>
  );
};

export default MobileNavigationBarBottom;
