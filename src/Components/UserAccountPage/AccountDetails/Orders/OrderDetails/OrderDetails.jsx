import "./OrderDetails.css";

const OrderDetails = ({ details }) => {
  const { amountPaid, orderNumber, date } = details;

  return (
    <div className="order-card-bottom-section">
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
        <button className="btn primary-outline-btn-md product-track-order-btn">
          Track Order
        </button>
        <div className="order-card-total-price">
          <p>Bill Amount</p>
          <p>Rs.{amountPaid}/-</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
