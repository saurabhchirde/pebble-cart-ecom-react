import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import SearchBar from "./SearchBar/SearchBar";
import logoIcon from "../../../Data/logo/icon.svg";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import { useAuth, useFilter, useModal, useTheme } from "../../../Context";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileNavigationBar = () => {
  const { auth, authDispatch, showProfileMenu, setShowProfileMenu } = useAuth();
  const { filterDispatch, searchInput, setSearchInput } = useFilter();
  const location = useLocation();
  const navigate = useNavigate();
  const { setError, setShowError } = useModal();
  const { darkTheme } = useTheme();

  const showSearch = location.pathname.includes("products") ? true : false;

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    filterDispatch({ type: "bySearch", payload: searchInput });
  };

  const onSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const logoutClickHandler = () => {
    authDispatch({ type: "logout" });
    setError("Logged out successfully");
    setShowError(true);
    if (
      location.pathname.includes(
        "checkout" || "user" || "profile" || "settings"
      )
    ) {
      navigate("/products");
    }
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((show) => !show);
  };

  const navBarClass = darkTheme
    ? "mobile-navigation-bar dark-nav-bar"
    : "mobile-navigation-bar";

  return (
    <>
      <nav className={navBarClass}>
        <Link to="/">
          <img className="logo" src={logoIcon} alt="logo" />
        </Link>
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
          {!auth.login && (
            <NavbarLoginButton
              label={auth.login ? "Logout" : "Login"}
              btnClassName="btn primary-btn-md"
            />
          )}
        </div>
        {auth.login && (
          <div>
            <NavbarAvatar
              onClick={toggleProfileMenu}
              avatarWrapper="badge-container"
              avatarClassName="avatar text-avatar-xsm-round"
              imgDisplay="hide"
              src={auth.user.dp !== "" ? auth.user.dp.toUpperCase() : ""}
            />
            {showProfileMenu && (
              <div className="profile-hover-menu card-shadow-two">
                <h2>Profile</h2>
                <h2>Support</h2>
                <h2>Settings</h2>
                <h2 onClick={logoutClickHandler}>Logout</h2>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileNavigationBar;
