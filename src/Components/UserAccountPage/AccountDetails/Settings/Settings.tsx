import { useAuth, useModal, useTheme } from "Context";
import { AccountNavBarMobile, AccountNavBar } from "Components";
import "./Settings.css";
import { Link } from "react-router-dom";

export const Settings = () => {
  const { showNavMenu } = useModal();
  const { darkTheme } = useTheme();
  const { auth } = useAuth();

  return (
    <div className="settings-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <Link to="/account">
            <h2>My Account</h2>
          </Link>
          {" > "}
          <h2 className="mg-point6-lt">Settings</h2>
        </div>
        <div className="setting-edit-container">
          <div className="setting-title">
            <h2>Name</h2>
          </div>
          <div className="setting-title-content">
            <h2>
              {auth?.user?.firstName} {auth?.user?.lastName}
            </h2>
          </div>
        </div>
        <div className="setting-edit-container">
          <div className="setting-title">
            <h2>Email</h2>
          </div>
          <div className="setting-title-content">
            <h2> {auth?.user?.email}</h2>
          </div>
        </div>
        <div className="setting-edit-container">
          <div className="setting-title">
            <h2>Phone Number</h2>
          </div>
          <div className="setting-title-content">
            <h2>8989898989</h2>
          </div>
        </div>
        {/* <div className="setting-edit-container">
          <div className="setting-title">
            <h2>Change Password</h2>
            <Button label="Edit" btnClassName="btn primary-text-btn-md" />
          </div>
          <div className="no-outline-password-input">
            <input
              type="text"
              name="password"
              placeholder="Enter new password"
            />
          </div>
        </div>
        <div className="setting-save-buttons">
          <Link to="/account">
            <Button
              label="Cancel"
              btnClassName="btn secondary-outline-btn-md"
            />
          </Link>
          <Button label="Save" btnClassName="btn primary-btn-md" />
        </div> */}
      </div>
    </div>
  );
};
