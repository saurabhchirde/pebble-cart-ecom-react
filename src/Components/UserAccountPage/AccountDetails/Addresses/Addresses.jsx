import { useAuth, useTheme, useModal } from "Context";
import "./Addresses.css";
import {
  NewAddress,
  SingleAddress,
  AccountNavBar,
  AccountNavBarMobile,
} from "Components";
import { Link } from "react-router-dom";

export const Addresses = () => {
  const {
    auth: {
      user: { addresses },
    },
  } = useAuth();
  const { darkTheme } = useTheme();
  const { showNavMenu } = useModal();

  return (
    <div className="address-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <Link to="/account">
            <h2>My Account</h2>
          </Link>
          {" > "}
          <h2 className="mg-point6-lt">Addresses</h2>
        </div>
        <NewAddress />
        {addresses.map((address) => {
          return <SingleAddress key={address._id} props={address} />;
        })}
      </div>
    </div>
  );
};
