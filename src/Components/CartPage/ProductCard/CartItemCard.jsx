import { useCart, useWishlist } from "../../../Context";
import { couponCheck } from "../../../Utils/couponCheck";
import { useEffect } from "react";

const CartItemCard = ({ item }) => {
  const { title, price, src1 } = item;
  const { cartState, cartDispatch } = useCart();
  const { totalPrice, coupon } = cartState;
  const { setWishlist } = useWishlist();

  const onWishlistClickHandler = () => {
    setWishlist((oldWishlist) => {
      return [...oldWishlist, item];
    });
    cartDispatch({ type: "removeFromCart", payload: item });
  };

  const onRemoveClickHandler = () => {
    cartDispatch({ type: "removeFromCart", payload: item });
  };

  const increaseQty = () => {
    cartDispatch({ type: "addToCart", payload: item });
  };

  const decreaseQty = () => {
    cartDispatch({ type: "decreaseQty", payload: item });
  };

  useEffect(() => {
    couponCheck(totalPrice, coupon, cartDispatch);
  }, [cartState.cart]);

  return (
    <div className="cart-item-card card-dark">
      <button
        onClick={onWishlistClickHandler}
        className="btn primary-text-btn-sm icon-lg cart-wishlist-icon"
      >
        <i className="far fa-heart"></i>
      </button>
      <div className="card-img-container">
        <img
          src={src1}
          className="img-responsive"
          alt="product"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="card-text">
          <h1 className="card-title">{title}</h1>
          <h2 className="card-price">Rs.{price}/-</h2>
        </div>
        <div className="card-nav">
          <button
            onClick={onRemoveClickHandler}
            className="btn secondary-outline-btn-sm pd-point6-all"
          >
            Remove
          </button>

          <div className="card-nav-icon">
            <div className="cart-qty">
              {item.qty > 1 ? (
                <button onClick={decreaseQty}>
                  <i className="fas fa-minus"></i>
                </button>
              ) : null}
              {item.qty}
              <button onClick={increaseQty}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
