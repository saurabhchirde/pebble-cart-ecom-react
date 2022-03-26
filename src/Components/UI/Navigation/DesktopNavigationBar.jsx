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
import { Link } from "react-router-dom";

const DesktopNavigationBar = () => {
  const { cartState } = useCart();
  const { wishlist } = useWishlist();
  const { setShowLogin } = useModal();

  const { filterDispatch, searchInput, setSearchInput } = useFilter();
  const { auth } = useAuth();

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

  const dp = auth.user.dp !== "" ? auth.user.dp.toUpperCase() : "";
  const cartBadgeValue = auth.login ? cartState.cart.length : null;
  const wishlistBadgeValue = auth.login ? wishlist.length : null;
  const loginButtonStatus = auth.login ? "Logout" : "Login";
  const cartBadgeVisible = `${
    cartState.cart.length !== 0 ? "badge-on-icon" : "hide"
  }`;
  const wishlistBadgeVisible = `${
    wishlist.length !== 0 ? "badge-on-icon" : "hide"
  }`;

  return (
    <>
      <nav className="desktop-navigation-bar dark-nav-bar">
        <Link to="/">
          <img className="company-logo" src={logoLight} alt="logo" />
        </Link>
        <SearchBar
          searchWrapper="search-container"
          micIcon="hide"
          searchIcon="fas fa-search"
          placeholder="Search"
          onChange={onSearchInputHandler}
          onSubmit={onSearchSubmitHandler}
          value={searchInput}
        />
        <div className="nav-bar-btns">
          <NavbarLoginButton label={loginButtonStatus} />
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
