import { useModal, useTheme } from "../../../../Context";
import { AccountNavBarMobile } from "../../AccountNavBarMobile/AccountNavBarMobile";
import { AccountNavBar } from "../../AccountNavBar/AccountNavBar";
import "./Payments.css";
import { CreditCard } from "./CreditCard/CreditCard";
import Button from "../../../UI/Button/Button";
import {
  visaWhite,
  mastercard,
} from "../../../../Data/Img/Payment/PaymentIcon";

const Payments = () => {
  const { showNavMenu } = useModal();
  const { darkTheme } = useTheme();

  const cardDetails = [
    {
      _id: 1,
      gradientAngle: "45deg",
      color1: "rgba(29,118,249,1) 23%",
      color2: "rgba(46,189,247,1) 58%",
      color3: "rgba(27,121,201,1) 95%",
      card: "Platinium",
      type: mastercard,
      bank: "HDFC",
      holderName: "Saurabh Chirde",
      cardNumber: "1234 5678 2587 9632",
      expDate: "08",
      expYear: "26",
    },
    {
      _id: 2,
      gradientAngle: "135deg",
      color1: "rgba(0, 0, 0, 0.71) 48%",
      color2: "rgba(73, 73, 73, 1) 92%",
      color3: "rgba(125, 125, 125, 0.598) 100%",
      card: "Platinium",
      type: visaWhite,
      bank: "ICICI BANK",
      holderName: "Saurabh Chirde",
      cardNumber: "1234 5678 2587 9632",
      expDate: "03",
      expYear: "24",
    },
    {
      _id: 3,
      gradientAngle: "311deg",
      color1: "rgba(179,129,0,1) 0%",
      color2: "rgba(187,163,0,1) 51%",
      color3: "rgba(196,129,1,1) 100%",
      card: "Gold",
      type: visaWhite,
      bank: "Axis BANK",
      holderName: "Saurabh Chirde",
      cardNumber: "1234 5678 2587 9632",
      expDate: "01",
      expYear: "22",
    },
  ];

  const upiAddresses = [
    {
      _id: 1,
      address: "saurabhchirde@upi",
    },
    {
      _id: 2,
      address: "saurabhchirde@okhdfcbank",
    },
    {
      _id: 3,
      address: "saurabhchirde@oksbi",
    },
    {
      _id: 4,
      address: "saurabhchirde@okaxisbank",
    },
  ];

  return (
    <div className="payment-page-container">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
        <div className="address-title">
          <h2>My Account</h2>
          <h2>Payment Details</h2>
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
            <div>
              <Button label="Edit" btnClassName="btn primary-text-btn-md" />
              <Button label="Delete" btnClassName="btn secondary-text-btn-md" />
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

export default Payments;
