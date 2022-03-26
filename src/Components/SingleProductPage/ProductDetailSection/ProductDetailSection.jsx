import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useModal } from "../../../Context";
import { ratingStarCheck } from "../../../Utils/FilterFunctions/ratingStarCheck";
import axios from "axios";

const ProductDetailSection = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { title, brand, rating, totalRating, price, delivery } = item;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { setShowLogin, setError, setShowError } = useModal();

  const addCartClick = () => {
    if (auth.login) {
      addToCartOnServer();
      cartDispatch({ type: "addToCart", payload: item });
    } else {
      setShowLogin(true);
    }
  };

  const onBuyNowClickHandler = () => {
    if (auth.login) {
      if (!cartState.cart.includes(item)) {
        cartDispatch({ type: "addToCart", payload: item });
        addToCartOnServer();
      }
      navigate("/cart");
    } else {
      setShowLogin(true);
    }
  };

  const removeFromCart = () => {
    auth.login && cartDispatch({ type: "removeFromCart", payload: item });
  };

  // add to server cart
  const addToCartOnServer = async () => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product: { ...item },
        },
        { headers: { authorization: auth.token } }
      );
      console.log("cart", response.data.cart);
    } catch (error) {
      removeFromCart();
      setError(error.message);
      setShowError(true);
    }
  };

  const goToCart = () => {
    auth.login && navigate("/cart");
  };

  const cartButtonStatus = () => {
    cartState.cart.includes(item) ? goToCart() : addCartClick();
  };

  const cartButtonState = `${
    cartState.cart.includes(item) ? "Go to Cart" : "Add to Cart"
  }`;

  return (
    <div className="single-product-detail">
      <div className="product-details-header">
        <h1>{title}</h1>
        <h3>Brand: {brand}</h3>
        <div className="flex-row flex-justify-space-between">
          <div className="rating-star-container">
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked={ratingStarCheck(rating) > 0.5}
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked={ratingStarCheck(rating) > 1.7}
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked={ratingStarCheck(rating) > 2.7}
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked={ratingStarCheck(rating) > 3.7}
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked={ratingStarCheck(rating) > 4.7}
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <span className="rating-star-separator">|</span>
            <span className="rating-star-number">{totalRating}</span>
          </div>
          <p>Delivery in {delivery}</p>
        </div>
      </div>
      <div className="product-details-body">
        <div>
          <h2 className="product-details-price">Rs. {price}/-</h2>
          <div className="product-details-cta">
            <button
              onClick={cartButtonStatus}
              className="btn primary-outline-btn-md"
            >
              {cartButtonState}
            </button>
            <button
              onClick={onBuyNowClickHandler}
              className="btn primary-btn-md"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="product-details-feature">
          <div>
            <i className="fas fa-box-open"></i>
            <p>10 Days replacement</p>
          </div>
          <div>
            <i className="fas fa-truck"></i>
            <p>Free Delivery</p>
          </div>
          <div>
            <i className="fas fa-file-signature"></i>
            <p>Warranty Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
