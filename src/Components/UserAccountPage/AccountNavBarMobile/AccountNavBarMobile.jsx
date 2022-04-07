import { useAuth, useTheme } from "../../../Context";
import { NavLink, useLocation } from "react-router-dom";
import "./AccountNavBarMobile.css";

const AccountNavBarMobile = () => {
  const { auth } = useAuth();
  const { darkTheme } = useTheme();
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={
          darkTheme
            ? "account-nav-bar-dark nav-bar nav-bar-mobile "
            : "account-nav-bar-light nav-bar nav-bar-mobile-light card-shadow-two"
        }
      >
        <NavLink to="/account">
          <div className="user-name">
            <div className="avatar text-avatar-sm-round">{auth.user.dp}</div>
            <h1>
              {`${auth.user.firstName[0].toUpperCase()}${auth.user.firstName.slice(
                1
              )}`}
              {` ${auth.user.lastName[0].toUpperCase()}${auth.user.lastName.slice(
                1
              )}`}
            </h1>
          </div>{" "}
        </NavLink>
        <div className="nav-menu">
          <NavLink to={pathname.includes("orders") ? "" : "/account/orders"}>
            <div className="nav-orders">
              <i className="fas fa-box-open"></i>
              <h2 className="nav-menu-title">Your Orders</h2>
            </div>
          </NavLink>
          <NavLink
            to={pathname.includes("payments") ? "" : "/account/payments"}
          >
            <div className="nav-payment-details">
              <i className="fas fa-credit-card"></i>
              <h2 className="nav-menu-title">Payment Details</h2>
            </div>
          </NavLink>
          <NavLink
            to={pathname.includes("addresses") ? "" : "/account/addresses"}
          >
            <div className="nav-addresses">
              <i className="fas fa-address-book"></i>
              <h2 className="nav-menu-title">Addresses</h2>
            </div>
          </NavLink>
          <NavLink to={pathname.includes("support") ? "" : "/account/support"}>
            <div className="nav-support">
              <i className="fas fa-question-circle"></i>
              <h2 className="nav-menu-title">Support</h2>
            </div>
          </NavLink>
          <NavLink
            to={pathname.includes("settings") ? "" : "/account/settings"}
          >
            <div className="nav-settings">
              <i className="fas fa-cog"></i>
              <h2 className="nav-menu-title">Settings</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export { AccountNavBarMobile };
