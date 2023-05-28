import { useModal, useTheme } from "Context";
import {
  AccountNavBarMobile,
  AccountNavBar,
  CreditCard,
  Button,
} from "Components";
import "./Payments.css";
import { cardDetails } from "Data/payment";
import { upiAddresses } from "Data/payment";
import { Link } from "react-router-dom";

export const Payments = () => {
  const { showNavMenu } = useModal();
  const { darkTheme } = useTheme();

  return (
    <div className="payment-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <Link to="/account">
            <h2>My Account</h2>
          </Link>
          {" > "}
          <h2 className="mg-point6-lt">Payment Details</h2>
        </div>
        <div className="payment-cards-container">
          <div className="payment-cards-title">
            <div>
              <h2>Credit & Debit Cards</h2>
              <Button
                label="Add New"
                btnClassName="btn primary-outline-btn-md"
              />
            </div>
          </div>
          <div className="payment-cards-detail">
            {cardDetails.map((card) => (
              <CreditCard key={card._id} details={card} />
            ))}
          </div>
        </div>
        <div className="payment-upi-container">
          <div className="payment-upi-title">
            <div>
              <h2>Saved UPI Addresses</h2>
              <Button
                label="Add New"
                btnClassName="btn primary-outline-btn-md"
              />
            </div>
            <div>
              <Button label="Edit" btnClassName="btn primary-text-btn-md" />
              <Button label="Delete" btnClassName="btn secondary-text-btn-md" />
            </div>
          </div>
          <ol className="list-basic list-style-number payment-upi-detail">
            {upiAddresses.map((address) => (
              <li key={address._id}>{address.address}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
