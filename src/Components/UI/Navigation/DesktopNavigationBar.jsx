import logoLight from "../../../Data/logo/logo-light.svg";
import BadgeIconButton from "../Button/BadgeIconButton";
import SearchBar from "./SearchBar/SearchBar";
import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import {
  useCart,
  useWishlist,
  useFilter,
  useAuth,
  useModal,
} from "../../../Context";
import { Link, useLocation } from "react-router-dom";

const DesktopNavigationBar = () => {
  const { cartState } = useCart();
  const { wishlist } = useWishlist();
  const { setShowLogin } = useModal();

  const { filterDispatch, searchInput, setSearchInput } = useFilter();
  const { auth } = useAuth();
  const location = useLocation();

  const showSearch = location.pathname.includes("products") ? true : false;
  const hideOnCheckout = location.pathname.includes("/checkout") ? false : true;

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    filterDispatch({ type: "bySearch", payload: searchInput });
  };

  const onSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onWishlistClickHandler = () => {
    if (!auth.login) {
      setShowLogin(true);
    }
  };

  const onCartClickHandler = () => {
    if (!auth.login) {
      setShowLogin(true);
    }
  };

  const loginButtonStatus = auth.login ? "Logout" : "Login";
  const loginButtonState = hideOnCheckout
    ? loginButtonStatus === "Login"
      ? "btn primary-btn-md"
      : "btn secondary-outline-btn-md"
    : "btn secondary-text-btn-md";

  const dp = auth.user.dp !== "" ? auth.user.dp.toUpperCase() : "";

  const cartBadgeValue = auth.login ? cartState.cart.length : null;
  const cartBadgeVisible = `${
    cartState.cart.length !== 0 ? "badge-on-icon" : "hide"
  }`;

  const wishlistBadgeValue = auth.login ? wishlist.length : null;
  const wishlistBadgeVisible = `${
    wishlist.length !== 0 ? "badge-on-icon" : "hide"
  }`;

  return (
    <>
      <nav className="desktop-navigation-bar dark-nav-bar">
        <Link to="/">
          <img className="company-logo" src={logoLight} alt="logo" />
        </Link>
        {showSearch && (
          <SearchBar
            searchWrapper="search-container"
            micIcon="hide"
            searchIcon="fas fa-search"
            placeholder="Search"
            onChange={onSearchInputHandler}
            onSubmit={onSearchSubmitHandler}
            value={searchInput}
          />
        )}
        <div className="nav-bar-btns">
          <NavbarLoginButton
            label={loginButtonStatus}
            btnClassName={loginButtonState}
          />
          {hideOnCheckout && (
            <Link to="wishlist">
              <BadgeIconButton
                btnWrapper="badge-container"
                btnClassName="btn badge-icon-btn-lg"
                icon="far fa-heart"
                badgeClassName={wishlistBadgeVisible}
                badgeValue={wishlistBadgeValue}
                onClick={onWishlistClickHandler}
              />
            </Link>
          )}
          {hideOnCheckout && (
            <Link to="cart">
              <BadgeIconButton
                btnWrapper="badge-container"
                btnClassName="btn badge-icon-btn-lg"
                icon="fas fa-shopping-cart"
                badgeClassName={cartBadgeVisible}
                badgeValue={cartBadgeValue}
                onClick={onCartClickHandler}
              />
            </Link>
          )}
          {auth.login && (
            <NavbarAvatar
              avatarWrapper="badge-container"
              avatarClassName="avatar text-avatar-xsm-round"
              imgDisplay="hide"
              src={dp}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigationBar;
