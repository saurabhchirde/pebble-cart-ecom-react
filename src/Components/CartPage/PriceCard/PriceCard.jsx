import { useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { couponCheck } from "../../../Utils/couponCheck";
import "./PriceCard.css";

const PriceCard = () => {
  const { cartState, cartDispatch } = useCart();
  const { qty, totalPrice, coupon, discount } = cartState;
  const [errorCoupon, setErrorCoupon] = useState(false);
  const [successCoupon, setSuccessCoupon] = useState(false);

  const onCouponInputHHandler = (e) => {
    const coupon = e.target.value;
    cartDispatch({ type: "couponCode", payload: coupon });
  };

  const onCouponApplyHandler = () => {
    if (coupon === "PEBBLE" || coupon === "SAURABH") {
      setErrorCoupon(false);
      setSuccessCoupon(true);
    } else {
      setErrorCoupon(true);
      setSuccessCoupon(false);
    }
    couponCheck(totalPrice, coupon, cartDispatch);
  };

  return (
    <div className="cart-price-table price-table-dark">
      <h2>Price Details</h2>
      <hr className="break-line" />
      <div className="cart-price">
        <h3>Price</h3>
        <h3>{totalPrice}/-</h3>
      </div>
      <div className="cart-product-qty">
        <h3>Total Qty</h3>
        <h3>{qty}</h3>
      </div>
      <div className="cart-discount">
        <h3>Discount</h3>
        <h3>{discount}/-</h3>
      </div>
      <hr className="break-line" />
      <div className="cart-total">
        <h3>Total</h3>
        <h3>Rs.{totalPrice - discount}/-</h3>
      </div>
      <hr className="break-line" />
      <div className="cart-coupon">
        <h3>Coupun code (if any)</h3>
        <div className="cart-coupon-apply">
          <input
            onChange={onCouponInputHHandler}
            type="text"
            placeholder="code"
            value={coupon}
          />
          <button
            onClick={onCouponApplyHandler}
            className="btn secondary-outline-btn-md"
          >
            APPLY
          </button>
        </div>
      </div>
      <hr className="break-line" />
      {successCoupon && (
        <p className="couponSuccess">Coupon applied successfully.</p>
      )}
      {errorCoupon && <p className="couponError">Enter a valid coupon.</p>}
      <div className="cart-btns">
        <button className="btn primary-outline-btn-md">Edit Cart</button>
        <button className="btn primary-btn-md">Place Order</button>
      </div>
      <div className="availableCoupons">
        <p>Available coupons</p>
        <div>
          <div
            onClick={() => {
              cartDispatch({ type: "couponCode", payload: "PEBBLE" });
            }}
          >
            PEBBLE
          </div>
          <div
            onClick={() => {
              cartDispatch({ type: "couponCode", payload: "SAURABH" });
            }}
          >
            SAURABH
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
