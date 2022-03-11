import logoLight from "../../../Data/logo/logo-light.svg";
import BadgeIconButton from "../Button/BadgeIconButton";
import SearchBar from "./SearchBar/SearchBar";
import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import { useCart } from "../../../Context/CartContext";
import { useWishlist } from "../../../Context/WishlistContext";

const DesktopNavigationBar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <>
      <nav className="desktop-navigation-bar dark-nav-bar">
        <a href="/">
          <img className="company-logo" src={logoLight} alt="logo" />
        </a>

        <SearchBar
          searchWrapper="search-container"
          micIcon="hide"
          searchIcon="fas fa-search"
          placeholder="Search"
          onChange={() => {}}
          onIconClick={() => {}}
        />

        <div className="nav-bar-btns">
          <NavbarLoginButton />
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="far fa-heart"
            badgeClassName="badge-on-icon"
            badgeValue={wishlist.length}
            onClick={() => {}}
          />
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-lg"
            icon="fas fa-shopping-cart"
            badgeClassName="badge-on-icon"
            badgeValue={cart.length}
            label="Cart"
            onClick={() => {}}
          />
          <NavbarAvatar
            avatarWrapper="badge-container"
            avatarClassName="avatar text-avatar-xsm-round"
            imgDisplay="hide"
            src=""
            statusBadge="hide"
          />
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigationBar;
