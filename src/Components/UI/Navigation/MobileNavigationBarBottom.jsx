import { useCart } from "../../../Context/CartContext";
import BadgeIconButton from "../Button/BadgeIconButton";
import IconButton from "../Button/IconButton";
import "./MobileNavigationBarBottom.css";
import { Link } from "react-router-dom";

const MobileNavigationBarBottom = () => {
  const { cart } = useCart();
  return (
    <>
      <nav className="mobile-navigation-bar-bottom dark-nav-bar">
      <Link to="wishlist">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="far fa-heart"
            badgeClassName="badge-on-icon"
            badgeValue="3"
            
          /></Link>
        <Link to="/">
          <IconButton btnClassName="btn icon-btn-lg" icon="fas fa-house-user" />
        </Link>
        <Link to="cart">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="fas fa-shopping-cart"
            badgeClassName="badge-on-icon"
            badgeValue={cart.length}
            onClick={() => {}}
          />
       </Link>
      </nav>
    </>
  );
};

export default MobileNavigationBarBottom;
