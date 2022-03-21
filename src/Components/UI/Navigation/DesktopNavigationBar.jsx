import logoLight from "../../../Data/logo/logo-light.svg";
import BadgeIconButton from "../Button/BadgeIconButton";
import SearchBar from "./SearchBar/SearchBar";
import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import { useState } from "react";
import { useCart, useWishlist, useFilter } from "../../../Context";
import { Link } from "react-router-dom";

const DesktopNavigationBar = () => {
  const { cartState } = useCart();
  const { wishlist } = useWishlist();
  const [searchInput, setSearchInput] = useState();
  const { filterDispatch } = useFilter();

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    filterDispatch({ type: "bySearch", payload: searchInput });
  };

  const onSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

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
          onChange={onSearchInputHandler}
          onSubmit={onSearchSubmitHandler}
        />

        <div className="nav-bar-btns">
          <NavbarLoginButton />
          <Link to="wishlist">
            <BadgeIconButton
              btnWrapper="badge-container"
              btnClassName="btn badge-icon-btn-lg"
              icon="far fa-heart"
              badgeClassName="badge-on-icon"
              badgeValue={wishlist.length}
            />
          </Link>
          <Link to="cart">
            <BadgeIconButton
              btnWrapper="badge-container"
              btnClassName="btn badge-icon-btn-lg"
              icon="fas fa-shopping-cart"
              badgeClassName="badge-on-icon"
              badgeValue={cartState.cart.length}
            />
          </Link>
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
