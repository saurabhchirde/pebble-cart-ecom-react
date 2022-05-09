import { useState } from "react";
import IconButton from "../../../../UI/Button/IconButton";
import "./CreditCard.css";

export const CreditCard = ({ details }) => {
  const {
    color1,
    color2,
    color3,
    gradientAngle,
    card,
    type,
    bank,
    holderName,
    cardNumber,
    expDate,
    expYear,
  } = details;
  const [showOption, setShowOption] = useState(false);

  const onCardOptionClickHandler = () => {
    setShowOption((show) => !show);
  };

  return (
    <div
      className="atm-card-wrapper"
      style={{
        background: `linear-gradient(${gradientAngle}, ${color1}, ${color2}, ${color3})`,
      }}
    >
      <IconButton
        onClick={onCardOptionClickHandler}
        icon="fa fa-ellipsis-v"
        btnClassName="btn icon-btn-sm"
      />
      {showOption && (
        <div
          className="card-option-menu"
          onMouseLeave={() => {
            setShowOption(false);
          }}
        >
          <h2>Edit</h2>
          <h2>Delete</h2>
        </div>
      )}
      <div className="atm-card-header">
        <p>{bank}</p>
        <p>{card}</p>
      </div>
      <div className="atm-card-body">
        <h1>{cardNumber}</h1>
        <h2>
          Expiry
          <span className="mg-2-lt">
            {expDate}/{expYear}
          </span>
        </h2>
        <span className="atm-card-footer">
          <h2>{holderName}</h2>
          <img src={type} alt="card-type" className="atm-card-type" />
        </span>
      </div>
    </div>
  );
};