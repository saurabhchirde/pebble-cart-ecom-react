import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useTheme } from "Context";
import { couponCheck } from "Utils/couponCheck";
import { AlertToast } from "Components";
import "./PriceCard.css";

export const PriceCard = () => {
  const { cartState, cartDispatch } = useCart();
  const { totalQty, totalPrice, coupon, discount, discountPercentage } =
    cartState;
  const [errorCoupon, setErrorCoupon] = useState(false);
  const { darkTheme } = useTheme();

  const onCouponInputHHandler = (e) => {
    const coupon = e.target.value;
    cartDispatch({ type: "couponCode", payload: coupon });
  };

  const selectCouponPebble = () => {
    cartDispatch({ type: "couponCode", payload: "PEBBLE" });
  };

  const selectCouponOther = () => {
    cartDispatch({ type: "couponCode", payload: "SAURABH" });
  };

  const onCouponApplyHandler = () => {
    if (coupon === "PEBBLE" || coupon === "SAURABH") {
      setErrorCoupon(false);
      AlertToast("success", "Coupon Applied Successfully");
    } else {
      setErrorCoupon(true);
    }
    const updatePrice = couponCheck(totalPrice, coupon);
    cartDispatch({
      type: "couponCheck",
      payload: updatePrice,
    });
    cartDispatch({ type: "emptyCoupon" });
  };

  // to update price after changing qty
  useEffect(() => {
    const updatedPriceDetails = {
      totalQty: cartState.cart.reduce((acc, curr) => {
        return acc + curr.qty;
      }, 0),
      totalPrice: cartState.cart.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0),
    };
    cartDispatch({
      type: "updateCartOnServer",
      payload: updatedPriceDetails,
    });
  }, [cartState.cart, cartDispatch]);

  // to update total price after changing qty
  useEffect(() => {
    cartDispatch({
      type: "updatedDiscount",
      payload: discount === 0 ? 0 : (totalPrice * discountPercentage) / 100,
    });
  }, [cartState.totalQty, cartDispatch]);

  const cartPriceTableClass = darkTheme
    ? "cart-price-table price-table-dark"
    : "cart-price-table";

  return (
    <div className={cartPriceTableClass}>
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
