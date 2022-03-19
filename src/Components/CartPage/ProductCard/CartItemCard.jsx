import { useCart, useWishlist } from "../../../Context/index";
import "./CartItemCard.css";

const CartItemCard = ({ item }) => {
  const { title, price, src } = item;
  const { cartDispatch } = useCart();
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
          src={src}
          className="img-responsive"
          alt="product"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="card-text">
          <h1 className="card-title">{title}</h1>
          <h2 className="card-price">Rs. {price}/-</h2>
        </div>
        <div className="card-nav">
          <button
            onClick={onRemoveClickHandler}
            className="btn secondary-outline-btn-sm pd-point6-all"
          >
            Remove
          </button>
          <div className="card-nav-icon">
            <h2 className="cartQty">Qty - 1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
