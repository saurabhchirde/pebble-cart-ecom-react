import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import SearchBar from "./SearchBar/SearchBar";
import logoIcon from "../../../Data/logo/icon.svg";
import NavbarAvatar from "./Avatar/NavbarAvatar";

const MobileNavigationBar = () => {
  return (
    <>
      <nav className="mobile-navigation-bar dark-nav-bar">
        <a href="/">
          <img className="logo" src={logoIcon} alt="logo" />
        </a>
        <SearchBar
          searchWrapper="search-container"
          micIcon="fas fa-microphone"
          searchIcon="fas fa-search"
          placeholder="Search"
          onChange={() => {}}
          onIconClick={() => {}}
        />
        <div className="nav-bar-btns">
          <NavbarLoginButton />
        </div>
        <NavbarAvatar
          avatarWrapper="badge-container"
          avatarClassName="avatar text-avatar-xsm-round"
          imgDisplay="hide"
          src=""
          statusBadge="hide"
        />
      </nav>
    </>
  );
};

export default MobileNavigationBar;
