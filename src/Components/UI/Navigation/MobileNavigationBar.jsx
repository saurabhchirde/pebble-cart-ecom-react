import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import SearchBar from "./SearchBar/SearchBar";
import logoIcon from "../../../Data/logo/icon.svg";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import { useAuth, useFilter } from "../../../Context";
import { useLocation } from "react-router-dom";

const MobileNavigationBar = () => {
  const { auth } = useAuth();
  const { filterDispatch, searchInput, setSearchInput } = useFilter();
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

  const dp = auth.user.dp !== "" ? auth.user.dp.toUpperCase() : "";
  const loginButtonStatus = auth.login ? "Logout" : "Login";
  const loginButtonState = hideOnCheckout
    ? loginButtonStatus === "Login"
      ? "btn primary-btn-md"
      : "btn secondary-outline-btn-md"
    : "btn secondary-text-btn-md";

  return (
    <>
      <nav className="mobile-navigation-bar dark-nav-bar">
        <a href="/">
          <img className="logo" src={logoIcon} alt="logo" />
        </a>
        {showSearch && (
          <SearchBar
            searchWrapper="search-container"
            micIcon="hide"
            searchIcon="fas fa-search"
            placeholder="Search"
            onChange={onSearchInputHandler}
            onSubmit={onSearchSubmitHandler}
          />
        )}
        <div className="nav-bar-btns">
          <NavbarLoginButton
            label={loginButtonStatus}
            btnClassName={loginButtonState}
          />
        </div>
        {auth.login && (
          <NavbarAvatar
            avatarWrapper="badge-container"
            avatarClassName="avatar text-avatar-xsm-round"
            imgDisplay="hide"
            src={dp}
          />
        )}
      </nav>
    </>
  );
};

export default MobileNavigationBar;
