import { PaymentSuccess } from "Components";
import { useModal, useTheme } from "Context";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { IconButton } from "../Button/IconButton";
import "./PaymentConfirmModal.css";

export const PaymentConfirmModal = ({ orderDetails }) => {
  const { setShowConfirmPayment } = useModal();
  const { darkTheme } = useTheme();

  const hideConfirmPaymentModal = () => {
    setShowConfirmPayment(false);
  };

  const wrapperClass = darkTheme
    ? "payment-confirm-wrapper"
    : "payment-confirm-wrapper-light";

  return (
    <>
      <div className="modal-backdrop"></div>
      {!orderDetails?.orderId ? (
        <div className={wrapperClass}>
          <Link to="/products" replace>
            <IconButton
              onClick={hideConfirmPaymentModal}
              icon="fas fa-times"
              btnClassName="btn icon-btn-md close-icon"
            />
          </Link>
          <div className="payment-confirm-container">
            <PaymentSuccess />
            <h1 className="payment-confirm-title">
              Order Placed Successfully!
            </h1>
            <h2 className="payment-confirm-message">
              You will receive an email once it get shipped.
            </h2>
            <p className="orderId">
              Ordrer Id : <strong>{orderDetails?.orderId}</strong>
            </p>
            <p className="paymentId">
              Payment Id : <strong>{orderDetails?.paymentId}</strong>
            </p>
          </div>
          <div className="payment-confirm-cta">
            <Link to="/products" replace>
              <Button
                onClick={hideConfirmPaymentModal}
                btnClassName="btn primary-btn-md"
                label="Shop More"
              />
            </Link>
            <Link to="/account/orders" replace>
              <Button
                onClick={hideConfirmPaymentModal}
                btnClassName="btn primary-outline-btn-md"
                label="View Orders"
              />
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
