import { useLocation } from "react-router-dom";
import {
  AccountDetails,
  AccountNavBar,
  AccountNavBarMobile,
} from "../../Components/UserAccountPage";
import { useModal, useTheme } from "../../Context";
import "./AccountPage.css";

const AccountPage = () => {
  const { showNavMenu } = useModal();
  const { pathname } = useLocation();
  const { darkTheme } = useTheme();

  const hideNav = pathname === "/account" ? false : true;
  return (
    <div className="account-page-main">
      {showNavMenu && <AccountNavBarMobile />}
      {hideNav && <AccountNavBar />}
      <div className="my-account-section">
        <h1
          className={
            darkTheme ? "my-account-title-dark" : "my-account-title-light"
          }
        >
          My Account
        </h1>
        <AccountDetails />
      </div>
    </div>
  );
};

export default AccountPage;
