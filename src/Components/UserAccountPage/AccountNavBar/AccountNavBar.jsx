import { useAuth, useTheme } from "../../../Context";
import "./AccountNavBar.css";

const AccountNavBar = () => {
  const { auth } = useAuth();
  const { darkTheme } = useTheme();

  return (
    <>
      <div
        className={
          darkTheme
            ? "account-nav-bar-dark nav-bar nav-desktop"
            : "account-nav-bar-light nav-bar nav-desktop"
        }
      >
        <div className="user-name">
          <div className="badge-container">
            <div className="avatar text-avatar-sm-round">{auth.user.dp}</div>
            <span className="status-badge status-online"></span>
          </div>
          <h1>
            {`${auth.user.firstName[0].toUpperCase()}${auth.user.firstName.slice(
              1
            )}`}
            {` ${auth.user.lastName[0].toUpperCase()}${auth.user.lastName.slice(
              1
            )}`}
          </h1>
        </div>
        <div className="nav-menu">
          <div className="nav-orders">
            <i className="fas fa-box-open"></i>
            <h2>Your Orders</h2>
          </div>
          <div className="nav-payment-details">
            <i className="fas fa-credit-card"></i>
            <h2>Payment Details</h2>
          </div>
          <div className="nav-addresses">
            <i className="fas fa-address-book"></i>
            <h2>Addresses</h2>
          </div>
          <div className="nav-support">
            <i className="fas fa-question-circle"></i>
            <h2>Support</h2>
          </div>
          <div className="nav-settings">
            <i className="fas fa-cog"></i>
            <h2>Settings</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export { AccountNavBar };
