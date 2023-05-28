import { useTheme } from "Context";
import "./PaymentOverviewCard.css";
import { CreditCard } from "Components";
import { cardDetails } from "Data/payment";
import { useState } from "react";

export const PaymentOverviewCard = () => {
  const [paymentOverviewCheck, setPaymentOverviewCheck] = useState();
  const { darkTheme } = useTheme();

  const checkIconStatus = `${
    paymentOverviewCheck ? "fas fa-check-circle" : "far fa-check-circle"
  }`;

  return (
    <div
      className={
        darkTheme ? "payment-method" : "payment-method payment-method-light"
      }
    >
      <details>
        <summary>
          <h1>
            Available Payment Methods
            <span>(right now we only accept Gpay)</span>
          </h1>
          <i className={checkIconStatus}></i>
        </summary>
        <div>
          <p className="mg-1-lt">Your saved cards</p>
          <div className="payment-cards-detail pd-point6-lt">
            {cardDetails.map((card) => (
              <CreditCard key={card._id} details={card} />
            ))}
          </div>
        </div>
      </details>
    </div>
  );
};
