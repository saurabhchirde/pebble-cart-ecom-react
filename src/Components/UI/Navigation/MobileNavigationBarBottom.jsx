import { useAuth, useCart } from "../../../Context";
import BadgeIconButton from "../Button/BadgeIconButton";
import IconButton from "../Button/IconButton";
import "./MobileNavigationBarBottom.css";
import { Link } from "react-router-dom";

const MobileNavigationBarBottom = () => {
  const {
    cartState: { cart, wishlist },
  } = useCart();
  const { auth } = useAuth();

  return (
    <>
      <nav className="mobile-navigation-bar-bottom dark-nav-bar">
        <Link to="wishlist">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="far fa-heart"
            badgeClassName={wishlist.length !== 0 ? "badge-on-icon" : "hide"}
            badgeValue={auth.login ? wishlist.length : null}
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
            badgeClassName={cart.length !== 0 ? "badge-on-icon" : "hide"}
            badgeValue={auth.login ? cart.length : null}
          />
        </Link>
      </nav>
    </>
  );
};

export default MobileNavigationBarBottom;
