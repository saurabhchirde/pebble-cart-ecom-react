import { useTheme } from "Context";
import "./OrderDetails.css";

export const OrderDetails = ({ order }) => {
  const { amountPaid, orderNumber, date } = order;

  const { darkTheme } = useTheme();

  const cardClassBottomSection = darkTheme
    ? "order-card-bottom-section"
    : "order-card-bottom-section-light";

  return (
    <div className={cardClassBottomSection}>
      <div className="order-card-bottom-left">
        <div className="order-card-date-section">
          <p>Order Date</p>
          <p>{date}</p>
        </div>
        <div className="order-card-details-section">
          <p>Order details</p>
          <p>{orderNumber}</p>
        </div>
      </div>
      <div className="order-card-bottom-right">
        <div className="order-card-total-price">
          <p>Bill Amount</p>
          <p>Rs.{amountPaid}/-</p>
        </div>
      </div>
    </div>
  );
};
