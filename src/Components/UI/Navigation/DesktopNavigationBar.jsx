import logoLight from "../../../Data/logo/logo-light.svg";
import BadgeIconButton from "../Button/BadgeIconButton";
import SearchBar from "./SearchBar/SearchBar";
import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import { useCart, useWishlist, useFilter, useAuth } from "../../../Context";
import { Link } from "react-router-dom";

const DesktopNavigationBar = () => {
  const { cartState } = useCart();
  const { wishlist } = useWishlist();

  const { filterDispatch, searchInput, setSearchInput } = useFilter();
  const { auth } = useAuth();

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    filterDispatch({ type: "bySearch", payload: searchInput });
  };

  const onSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const cartItems = auth.login ? auth.cart.items : cartState.cart;
  const wishlistItems = auth.login ? auth.wishlist : wishlist;

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
        />
        <div className="nav-bar-btns">
          <NavbarLoginButton label={auth.login ? "Logout" : "Login"} />
          <Link to="wishlist">
            <BadgeIconButton
              btnWrapper="badge-container"
              btnClassName="btn badge-icon-btn-lg"
              icon="far fa-heart"
              badgeClassName="badge-on-icon"
              badgeValue={wishlistItems.length}
            />
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
          {auth.login && (
            <NavbarAvatar
              avatarWrapper="badge-container"
              avatarClassName="avatar text-avatar-xsm-round"
              imgDisplay="hide"
              src={auth.user.dp !== "" ? auth.user.dp : "IN"}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigationBar;
