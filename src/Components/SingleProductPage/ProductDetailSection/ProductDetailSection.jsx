import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Context";
import { ratingStarCheck } from "../../../Utils/ratingStarCheck";

const ProductDetailSection = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { title, brand, rating, totalRating, price } = item;
  const navigate = useNavigate();

  const addCartClick = () => {
    cartDispatch({ type: "addToCart", payload: item });
  };

  const removeFromCart = () => {
    cartDispatch({ type: "removeFromCart", payload: item });
  };

  const onBuyNowClickHandler = () => {
    cartDispatch({ type: "addToCart", payload: item });
    navigate("/cart");
  };

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
          <p>Delivery in 7 - 8 days</p>
        </div>
      </div>
      <div className="product-details-body">
        <div>
          <h2 className="product-details-price">Rs. {price}/-</h2>
          <div className="product-details-cta">
            <button
              onClick={
                cartState.cart.includes(item) ? removeFromCart : addCartClick
              }
              className="btn primary-outline-btn-md"
            >
              {cartState.cart.includes(item) ? "In your Cart" : "Add to Cart"}
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
