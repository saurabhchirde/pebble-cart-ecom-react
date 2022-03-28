import {
  useAuth,
  useCart,
  useModal,
  useWishlist,
  useAxiosCalls,
} from "../../../../Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ item }) => {
  const { title, price, rating, totalRating, src1, newestArrival, inStock } =
    item;
  const { cartState, cartDispatch } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const { auth } = useAuth();
  const { setShowLogin } = useModal();
  const navigate = useNavigate();
  const {
    addToCartOnServer,
    addToWishlistOnServer,
    removeWishlistItemFromServer,
  } = useAxiosCalls();

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...item },
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
    item: item,
  };

  const addCartClick = () => {
    if (auth.login) {
      addToCartOnServer(cartConfig, item);
      cartDispatch({ type: "addToCart", payload: item });
    } else {
      setShowLogin(true);
    }
  };

  const addWishlistClick = () => {
    if (auth.login) {
      addToWishlistOnServer(wishlistConfig);
      setWishlist((oldCart) => {
        return [...new Set([...oldCart, item])];
      });
    } else {
      setShowLogin(true);
    }
  };

  const removeFromWishlist = () => {
    if (auth.login) {
      removeWishlistItemFromServer(wishlistConfig);
      setWishlist((oldWishlist) => {
        return oldWishlist.filter((el) => {
          return el._id !== item._id;
        });
      });
    }
  };

  const goToCart = () => {
    auth.login && navigate("/cart");
  };

  const cartButtonStatus = () => {
    cartState.cart.includes(item) ? goToCart() : addCartClick();
  };

  const wishlistButtonStatus = () => {
    if (wishlist.includes(item)) {
      removeFromWishlist();
    } else {
      addWishlistClick();
    }
  };

  const cartButtonState = `${
    cartState.cart.includes(item) ? "Go to Cart" : "Add to Cart"
  }`;

  const cartClassName = `${
    cartState.cart.includes(item)
      ? "btn primary-outline-btn-sm "
      : "btn primary-btn-sm "
  }`;

  const wishlistClassName = `${
    wishlist.includes(item) ? "fas fa-heart" : "far fa-heart"
  }`;

  return (
    <>
      <div className="card-vertical card-dark">
        <button className="btn primary-text-btn-sm icon-md ">
          <i className="fas fa-share-alt"></i>
        </button>
        {newestArrival && (
          <div className="badge-on-card top-left">
            <h2>New Arrival</h2>
          </div>
        )}
        <Link to="/products/product-details" state={{ item: item }}>
          <div className="card-img-container">
            <img src={src1} alt="product" loading="lazy" />
          </div>
        </Link>
        <div className="card-body">
          <Link to="/products/product-details" state={{ item: item }}>
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
              <button onClick={cartButtonStatus} className={cartClassName}>
                {cartButtonState}
              </button>
              <div className="card-nav-icon">
                <button
                  onClick={wishlistButtonStatus}
                  className="btn primary-text-btn-sm icon-lg"
                >
                  <i className={wishlistClassName}></i>
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
export default ProductsCard;
