import {
  useAuth,
  useAxiosCalls,
  useCart,
  useModal,
  useWishlist,
} from "../../../Context";
import { couponCheck } from "../../../Utils/couponCheck";
import { useEffect } from "react";

const CartItemCard = ({ item }) => {
  const { title, price, src1 } = item;
  const { cartState, cartDispatch } = useCart();
  const { totalPrice, coupon } = cartState;
  const { setWishlist } = useWishlist();
  const { auth } = useAuth();
  const { setError, setShowError } = useModal();
  const {
    addToWishlistOnServer,
    removeCartItemFromServer,
    increaseCartItemQtyOnServer,
    decreaseCartItemQtyOnServer,
  } = useAxiosCalls();

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...item },
    },
    actionIncrement: {
      action: { type: "increment" },
    },
    actionDecrement: {
      action: { type: "decrement" },
    },
    headers: { headers: { authorization: auth.token } },
    item: item,
  };

  const wishlistConfig = {
    url: "/api/user/wishlist",
    body: {
      product: { ...item },
    },
    headers: { headers: { authorization: auth.token } },
    dispatch: { setWishlist, setError, setShowError },
    item: item,
  };

  const onWishlistClickHandler = () => {
    if (auth.login) {
      addToWishlistOnServer(wishlistConfig);
      setWishlist((oldWishlist) => {
        return [...oldWishlist, item];
      });
      removeCartItemFromServer(cartConfig);
      cartDispatch({ type: "removeFromCart", payload: item });
    }
  };

  const onRemoveClickHandler = () => {
    removeCartItemFromServer(cartConfig);
    cartDispatch({ type: "removeFromCart", payload: item });
  };

  const increaseQty = () => {
    cartDispatch({ type: "addToCart", payload: item });
    increaseCartItemQtyOnServer(cartConfig);
  };

  const decreaseQty = () => {
    cartDispatch({ type: "decreaseQty", payload: item });
    decreaseCartItemQtyOnServer(cartConfig);
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
