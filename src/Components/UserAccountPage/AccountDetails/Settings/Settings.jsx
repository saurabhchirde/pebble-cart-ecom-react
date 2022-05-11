import { useModal, useTheme } from "Context";
import { AccountNavBarMobile, AccountNavBar } from "Components";
import "./Settings.css";

export const Settings = () => {
  const { showNavMenu } = useModal();
  const { darkTheme } = useTheme();

  return (
    <div className="settings-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <h2>My Account</h2>
          <h2>Settings</h2>
        </div>
        <h1 className="title-lg-wt-5 text-center mg-2-top">
          Under Construction...
        </h1>
      </div>
    </div>
  );
};
