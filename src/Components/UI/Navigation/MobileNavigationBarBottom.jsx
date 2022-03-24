import { useAuth, useCart, useWishlist } from "../../../Context";
import BadgeIconButton from "../Button/BadgeIconButton";
import IconButton from "../Button/IconButton";
import "./MobileNavigationBarBottom.css";
import { Link } from "react-router-dom";

const MobileNavigationBarBottom = () => {
  const { cartState } = useCart();
  const { wishlist } = useWishlist();
  const { auth } = useAuth();

  const cartBadgeValue = auth.login ? cartState.cart.length : 0;
  const wishlistBadgeValue = auth.login ? wishlist.length : 0;

  return (
    <>
      <nav className="mobile-navigation-bar-bottom dark-nav-bar">
        <Link to="wishlist">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="far fa-heart"
            badgeClassName="badge-on-icon"
            badgeValue={wishlistBadgeValue}
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
            badgeValue={cartBadgeValue}
          />
        </Link>
      </nav>
    </>
  );
};

export default MobileNavigationBarBottom;
