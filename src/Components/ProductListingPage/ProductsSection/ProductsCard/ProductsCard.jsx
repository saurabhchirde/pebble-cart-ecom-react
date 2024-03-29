import { useAuth, useCart, useModal, useAxiosCalls, useTheme } from "Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";
import { useEffect, useState } from "react";
import { AlertToast } from "Components";

export const ProductsCard = ({ item }) => {
  const { title, price, rating, totalRating, src1, newestArrival, inStock } =
    item;
  const {
    cartState: { cart, wishlist },
  } = useCart();
  const { auth } = useAuth();
  const { setShowLogin } = useModal();
  const navigate = useNavigate();
  const {
    addToCartOnServer,
    increaseCartItemQtyOnServer,
    addToWishlistOnServer,
    removeWishlistItemFromServer,
  } = useAxiosCalls();
  const [addButton, setAddButton] = useState("Add to Cart");
  const [addWishlist, setAddWishlist] = useState("far fa-heart");
  const { darkTheme } = useTheme();

  const [showCopied, setShowCopied] = useState(false);

  // copy URLto clipboard
  const urlClickHandler = () => {
    navigator.clipboard.writeText(
      `https://cart.pebbleui.com/products/${item?._id}`
    );
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...item },
    },
    headers: { headers: { authorization: auth?.token } },
    item: item,
  };

  const wishlistConfig = {
    url: "/api/user/wishlist",
    body: {
      product: { ...item },
    },
    headers: { headers: { authorization: auth?.token } },
    item: item,
  };

  const addCartClick = () => {
    if (auth.login) {
      if (cart.findIndex((el) => el._id === item?._id) !== -1) {
        increaseCartItemQtyOnServer(cartConfig);
        AlertToast("info", "Quantity Updated");
      } else {
        addToCartOnServer(cartConfig);
        AlertToast("success", "Item Added to Cart");
      }
    } else {
      setShowLogin(true);
    }
  };

  const addWishlistClick = () => {
    if (auth?.login) {
      addToWishlistOnServer(wishlistConfig);
      AlertToast("success", "Added to Wishlist");
    } else {
      setShowLogin(true);
    }
  };

  const removeFromWishlist = () => {
    if (auth?.login) {
      setAddWishlist("far fa-heart");
      removeWishlistItemFromServer(wishlistConfig);
      AlertToast("info", "Item Removed from Wishlist");
    }
  };

  const goToCart = () => {
    auth?.login && navigate("/cart");
  };

  const cartButtonStatus = () => {
    addButton === "Add to Cart" ? addCartClick() : goToCart();
  };

  const wishlistButtonStatus = () => {
    if (addWishlist === "fas fa-heart") {
      removeFromWishlist();
    } else {
      addWishlistClick();
    }
  };

  useEffect(() => {
    if (cart.findIndex((el) => el._id === item?._id) !== -1) {
      setAddButton("Go to Cart");
    } else {
      setAddButton("Add to Cart");
    }

    if (wishlist.findIndex((el) => el._id === item?._id) !== -1) {
      setAddWishlist("fas fa-heart");
    } else {
      setAddWishlist("far fa-heart");
    }
  }, [cart, wishlist, setAddButton, setAddWishlist]);

  const productCardClass = darkTheme
    ? "card-vertical card-dark"
    : "card-vertical card-light";

  return (
    <>
      <div className={productCardClass}>
        {showCopied && <p className="copied-clipboard">Copied!</p>}
        <button
          className="btn primary-text-btn-sm icon-md"
          onClick={urlClickHandler}
        >
          <i className="fas fa-share-alt"></i>
        </button>
        {newestArrival && (
          <div className="badge-on-card top-left">
            <h2>New Arrival</h2>
          </div>
        )}
        <Link to={`/products/${item?._id}`}>
          <div className="card-img-container">
            <img src={src1} alt="product" loading="lazy" />
          </div>
        </Link>
        <div className="card-body">
          <Link to={`/products/${item?._id}`}>
            <div className="card-text">
              <h1 className="card-title">{title}</h1>
              <div className="card-price-rating">
                <h2 className="card-price">Rs. {price}/-</h2>
                <div className="rating-badge">
                  <span className="rating-badge-number">{rating}</span>
                  <span className="rating-badge-star">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="rating-badge-number">|</span>
                  <span className="rating-badge-number">{totalRating}</span>
                </div>
              </div>
            </div>
          </Link>
          <div className="card-nav">
            <div className="card-cta-btn">
              <button
                onClick={cartButtonStatus}
                className={
                  addButton === "Add to Cart"
                    ? "btn primary-btn-sm"
                    : "btn primary-outline-btn-sm"
                }
              >
                {addButton}
              </button>
              <div className="card-nav-icon">
                <button
                  onClick={wishlistButtonStatus}
                  className="btn primary-text-btn-sm icon-lg"
                >
                  <i className={addWishlist}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {inStock < 1 ? (
          <div className="overlay-area-type-1">
            <h1 className="card-title">SOLD OUT</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};
