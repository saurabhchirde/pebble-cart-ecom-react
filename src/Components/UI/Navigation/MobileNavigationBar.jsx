import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import SearchBar from "./SearchBar/SearchBar";
import logoIcon from "../../../Data/logo/icon.svg";
import NavbarAvatar from "./Avatar/NavbarAvatar";
import { useAuth, useFilter } from "../../../Context";

const MobileNavigationBar = () => {
  const { auth } = useAuth();
  const { filterDispatch, searchInput, setSearchInput } = useFilter();

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    filterDispatch({ type: "bySearch", payload: searchInput });
  };

  const onSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const dp = auth.user.dp !== "" ? auth.user.dp.toUpperCase() : "";

  return (
    <>
      <nav className="mobile-navigation-bar dark-nav-bar">
        <a href="/">
          <img className="logo" src={logoIcon} alt="logo" />
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
