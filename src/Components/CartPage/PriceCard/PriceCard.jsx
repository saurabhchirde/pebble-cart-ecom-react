import { useEffect } from "react";
import { useCart } from "../../../Context/CartContext";
import { couponCheck } from "../../../Utils/couponCheck";
import "./PriceCard.css";

const PriceCard = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { cart, totalPrice, coupon, discount, couponError } = cartState;

  const onCouponInputHHandler = (e) => {
    const coupon = e.target.value;
    cartDispatch({ type: "couponCode", payload: coupon });
  };

  const onCouponApplyHandler = () => {
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
        <h3>{cart.qty}</h3>
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
      {couponError ? (
        discount === 0 ? (
          <h3 className="couponError">Enter Valid Coupon Code</h3>
        ) : (
          <h3 className="couponSuccess">Coupun Applied Successfully</h3>
        )
      ) : (
        false
      )}
      <div className="cart-btns">
        <button className="btn primary-outline-btn-md">Edit Cart</button>
        <button className="btn primary-btn-md">Place Order</button>
      </div>
    </div>
  );
};

export default PriceCard;
