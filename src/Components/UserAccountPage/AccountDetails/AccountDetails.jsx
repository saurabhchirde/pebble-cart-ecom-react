import "./AccountDetails.css";
import { Link } from "react-router-dom";
import { useTheme } from "Context";

export const AccountDetails = () => {
  const { darkTheme } = useTheme();

  return (
    <div className={darkTheme ? "account-body-dark" : "account-body-light"}>
      <Link to="orders" className="account-menu-overview">
        <i className="fas fa-box-open"></i>
        <h2>Orders</h2>
      </Link>
      <Link to="payments" className="account-menu-overview">
        <i className="fas fa-credit-card"></i>
        <h2>Payment</h2>
      </Link>
      <Link to="addresses" className="account-menu-overview">
        <i className="fas fa-address-book"></i>
        <h2>Addresses</h2>
      </Link>
      <Link to="settings" className="account-menu-overview">
        <i className="fas fa-cog"></i>
        <h2>Settings</h2>
      </Link>
    </div>
  );
};
