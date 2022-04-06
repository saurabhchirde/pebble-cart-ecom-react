import { useNavigate } from "react-router-dom";
import {
  useAlert,
  useAuth,
  useAxiosCalls,
  useCart,
  useModal,
  useTheme,
} from "../../../Context";
import { ratingStarCheck } from "../../../Utils/FilterFunctions/ratingStarCheck";
import { useEffect } from "react";
import Alert from "../../Alert/Alert";

const ProductDetailSection = ({ item }) => {
  const {
    cartState: { cart, wishlist },
    addButton,
    setAddButton,
    setAddWishlist,
  } = useCart();
  const { title, brand, rating, totalRating, price, delivery } = item;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { setShowLogin } = useModal();
  const { addToCartOnServer, increaseCartItemQtyOnServer } = useAxiosCalls();
  const {
    alertState: { addToCartAlert },
  } = useAlert();
  const { darkTheme } = useTheme();

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...item },
    },
    headers: { headers: { authorization: auth.token } },
    item: item,
  };

  const addCartClick = () => {
    if (auth.login) {
      if (cart.findIndex((el) => el._id === item._id) !== -1) {
        increaseCartItemQtyOnServer(cartConfig);
      } else {
        addToCartOnServer(cartConfig);
      }
    } else {
      setShowLogin(true);
    }
  };

  const onBuyNowClickHandler = () => {
    if (auth.login) {
      if (!cart.findIndex((el) => el._id === item._id) !== -1) {
        addToCartOnServer(cartConfig);
      }
      navigate("/cart");
    } else {
      setShowLogin(true);
    }
  };

  const goToCart = () => {
    auth.login && navigate("/cart");
  };

  const cartButtonStatus = () => {
    addButton === "Add to Cart" ? addCartClick() : goToCart();
  };

  useEffect(() => {
    if (cart.findIndex((el) => el._id === item._id) !== -1) {
      setAddButton("Go to Cart");
    } else {
      setAddButton("Add to Cart");
    }

    if (wishlist.findIndex((el) => el._id === item._id) !== -1) {
      setAddWishlist("fas fa-heart");
    } else {
      setAddWishlist("far fa-heart");
    }
  }, [cart, wishlist, setAddButton, setAddWishlist]);

  return (
    <>
      {addToCartAlert && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Item Added to Cart"
          dispatchType="hideAddToCartAlert"
        />
      )}
      <div className="single-product-detail">
        <div
          className={
            darkTheme
              ? "product-details-header"
              : "product-details-header product-details-header-light"
          }
        >
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
        <div
          className={
            darkTheme
              ? "product-details-body"
              : "product-details-body  product-details-body-light"
          }
        >
          <div>
            <h2 className="product-details-price">Rs. {price}/-</h2>
            <div className="product-details-cta">
              <button
                onClick={cartButtonStatus}
                className="btn primary-outline-btn-md"
              >
                {addButton}
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
    </>
  );
};

export default ProductDetailSection;
