import { useAuth, useCart, useModal, useWishlist } from "../../../Context";
import { couponCheck } from "../../../Utils/couponCheck";
import { useEffect } from "react";
import axios from "axios";

const CartItemCard = ({ item }) => {
  const { title, price, src1 } = item;
  const { cartState, cartDispatch } = useCart();
  const { totalPrice, coupon } = cartState;
  const { setWishlist } = useWishlist();
  const { auth } = useAuth();
  const { setError, setShowError } = useModal();

  const onWishlistClickHandler = () => {
    if (auth.login) {
      addToWishlistOnServer();
      setWishlist((oldWishlist) => {
        return [...oldWishlist, item];
      });
      removeCartItemFromServer();
      cartDispatch({ type: "removeFromCart", payload: item });
    }
  };

  const removeFromWishlist = () => {
    auth.login &&
      setWishlist((oldWishlist) => {
        return oldWishlist.filter((el) => {
          return el._id !== item._id;
        });
      });
  };

  // remove item from server cart
  const removeCartItemFromServer = async () => {
    try {
      const response = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: { authorization: auth.token },
      });
    } catch (error) {
      cartDispatch({ type: "addToCart", payload: item });
      setError(error.message);
      setShowError(true);
    }
  };

  // add to server wishlist
  const addToWishlistOnServer = async () => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product: { ...item },
        },
        { headers: { authorization: auth.token } }
      );
    } catch (error) {
      removeFromWishlist();
      cartDispatch({ type: "addToCart", payload: item });
      setError(error.message);
      setShowError(true);
    }
  };

  const onRemoveClickHandler = () => {
    removeCartItemFromServer();
    cartDispatch({ type: "removeFromCart", payload: item });
  };

  const increaseQty = () => {
    cartDispatch({ type: "addToCart", payload: item });
    increaseCartItemQtyOnServer();
  };

  // increase item qty on cart server wishlist
  const increaseCartItemQtyOnServer = async () => {
    try {
      const response = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: { type: "increment" },
        },
        { headers: { authorization: auth.token } }
      );
    } catch (error) {
      decreaseQty();
      setError(error.message);
      setShowError(true);
    }
  };

  const decreaseQty = () => {
    cartDispatch({ type: "decreaseQty", payload: item });
    decreaseCartItemQtyOnServer();
  };

  // decrease item qty on cart server wishlist
  const decreaseCartItemQtyOnServer = async () => {
    try {
      const response = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: { type: "decrement" },
        },
        { headers: { authorization: auth.token } }
      );
    } catch (error) {
      increaseQty();
      setError(error.message);
      setShowError(true);
    }
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
