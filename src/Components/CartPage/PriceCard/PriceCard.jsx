import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context";
import { couponCheck } from "../../../Utils/couponCheck";
import "./PriceCard.css";

const PriceCard = () => {
  const { cartState, cartDispatch } = useCart();
  const { totalQty, totalPrice, coupon, discount, discountPercentage } =
    cartState;
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

  const selectCouponPebble = () => {
    cartDispatch({ type: "couponCode", payload: "PEBBLE" });
  };

  const selectCouponOther = () => {
    cartDispatch({ type: "couponCode", payload: "SAURABH" });
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
        <h3>{totalQty}</h3>
      </div>
      <div className="cart-discount">
        <h3>Discount</h3>
        {discount > 0 && <h3>{discountPercentage}% OFF</h3>}
        <h3>{Math.trunc(discount)}/-</h3>
      </div>
      <hr className="break-line" />
      <div className="cart-total">
        <h3>Total</h3>
        <h3>Rs.{Math.trunc(totalPrice - discount)}/-</h3>
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
        <p className="coupon-success">Coupon applied successfully.</p>
      )}
      {errorCoupon && <p className="coupon-error">Enter a valid coupon.</p>}
      <div className="cart-btns">
        <Link to="/products" className="edit-cart-link">
          <button className="btn primary-outline-btn-md">add more items</button>
        </Link>
        <Link to="checkout" className="btn primary-btn-md">
          Place Order
        </Link>
      </div>
      <div className="available-coupons">
        <p>Available coupons</p>
        <div>
          <div onClick={selectCouponPebble}>PEBBLE</div>
          <div onClick={selectCouponOther}>SAURABH</div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
