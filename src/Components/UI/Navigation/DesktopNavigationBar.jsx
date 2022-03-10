import React from "react";
import logoLight from "../../../Data/logo/logo-light.svg";
import BadgeIconButton from "../Button/BadgeIconButton";
import SearchBar from "./SearchBar/SearchBar";
import NavbarLoginButton from "./NavbarLoginButton/NavbarLoginButton";
import NavbarAvatar from "./Avatar/NavbarAvatar";

const DesktopNavigationBar = () => {
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
            btnClassName="btn badge-icon-btn-md"
            icon="far fa-heart"
            badgeClassName="badge-on-icon"
            badgeValue="3"
            onClick={() => {}}
          />
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-md"
            icon="fas fa-shopping-cart"
            badgeClassName="badge-on-icon"
            badgeValue="1"
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
