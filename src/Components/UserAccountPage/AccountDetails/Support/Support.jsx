import { useModal, useTheme } from "../../../../Context";
import { AccountNavBarMobile } from "../../AccountNavBarMobile/AccountNavBarMobile";
import { AccountNavBar } from "../../AccountNavBar/AccountNavBar";
import "./Support.css";

const Support = () => {
  const { showNavMenu } = useModal();
  const { darkTheme } = useTheme();

  return (
    <div className="support-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <h2>My Account</h2>
          <h2>Support</h2>
        </div>
        <h1 className="title-lg-wt-5 text-center mg-4-top">
          Under Construction...
        </h1>
      </div>
    </div>
  );
};

export default Support;
