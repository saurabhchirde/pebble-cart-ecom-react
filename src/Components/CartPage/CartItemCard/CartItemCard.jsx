import {
  useAlert,
  useAuth,
  useAxiosCalls,
  useCart,
  useModal,
  useTheme,
} from "../../../Context";
import { couponCheck } from "../../../Utils/couponCheck";
import { useEffect } from "react";

const CartItemCard = ({ item }) => {
  const { title, price, src1 } = item;
  const {
    cartState: { wishlist, totalPrice, coupon },
  } = useCart();
  const { auth } = useAuth();
  const { setError, setShowError } = useModal();
  const {
    addToWishlistOnServer,
    removeCartItemFromServer,
    increaseCartItemQtyOnServer,
    decreaseCartItemQtyOnServer,
  } = useAxiosCalls();
  const { alertDispatch } = useAlert();
  const { darkTheme } = useTheme();

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
      product: { ...item, qty: 1 },
    },
    headers: { headers: { authorization: auth.token } },
    dispatch: { setError, setShowError },
    item: item,
  };

  const onWishlistClickHandler = () => {
    if (wishlist.findIndex((el) => el._id === item._id) !== -1) {
      alertDispatch({ type: "alreadyInWishlist" });
    } else {
      addToWishlistOnServer(wishlistConfig);
    }
    removeCartItemFromServer(cartConfig);
    alertDispatch({ type: "addToWishlistAlert" });
  };

  const onRemoveClickHandler = () => {
    alertDispatch({ type: "removeFromCartAlert" });
    removeCartItemFromServer(cartConfig);
  };

  const increaseQty = () => {
    alertDispatch({ type: "cartEditedAlert" });
    increaseCartItemQtyOnServer(cartConfig);
  };

  const decreaseQty = () => {
    alertDispatch({ type: "cartEditedAlert" });
    decreaseCartItemQtyOnServer(cartConfig);
  };

  useEffect(() => {
    couponCheck(totalPrice, coupon);
    return () => {
      // to unmount useEffect
    };
  }, [totalPrice, coupon]);

  const cartItemCartClass = darkTheme
    ? "cart-item-card card-dark"
    : "cart-item-card card-light cart-item-card-light";

  return (
    <div className={cartItemCartClass}>
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
