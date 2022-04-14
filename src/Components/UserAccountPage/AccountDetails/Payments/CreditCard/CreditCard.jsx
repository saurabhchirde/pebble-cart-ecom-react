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

  return (
    <div
      className="atm-card-wrapper"
      style={{
        background: `linear-gradient(${gradientAngle}, ${color1}, ${color2}, ${color3})`,
      }}
    >
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
