import { useAuth, useCart, useModal, useWishlist } from "../../../../Context";
import { Link } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const { title, price, rating, totalRating, src1, newestArrival, inStock } =
    item;
  const { cartState, cartDispatch } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const { auth } = useAuth();
  const { setShowLoginModal } = useModal();

  const addCartClick = () => {
    auth.login
      ? cartDispatch({ type: "addToCart", payload: item })
      : setShowLoginModal(true);
  };

  const removeFromCart = () => {
    auth.login && cartDispatch({ type: "removeFromCart", payload: item });
  };

  const addWishlistClick = () => {
    auth.login
      ? setWishlist((oldCart) => {
          return [...new Set([...oldCart, item])];
        })
      : setShowLoginModal(true);
  };

  const removeFromWishlist = () => {
    auth.login &&
      setWishlist((oldWishlist) => {
        return oldWishlist.filter((el) => {
          return el._id !== item._id;
        });
      });
  };

  const cartButtonStatus = () => {
    cartState.cart.includes(item) ? removeFromCart() : addCartClick();
  };

  const wishlistButtonStatus = () => {
    wishlist.includes(item) ? removeFromWishlist() : addWishlistClick();
  };

  const cartButtonState = `${
    cartState.cart.includes(item) ? "In your Cart" : "Add to Cart"
  }`;

  const cartClassName = `${
    cartState.cart.includes(item)
      ? "btn primary-outline-btn-sm add-cart"
      : "btn primary-btn-sm add-cart"
  }`;

  const wishlistClassName = `${
    wishlist.includes(item) ? "fas fa-heart" : "far fa-heart"
  }`;

  return (
    <>
      <div className="card-vertical card-dark">
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
                  className="btn primary-text-btn-sm icon-md"
                >
                  <i className={wishlistClassName}></i>
                </button>
                <button className="btn primary-text-btn-sm icon-md ">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {!inStock && (
          <div className="overlay-area-type-1">
            <h1 className="card-title">SOLD OUT</h1>
          </div>
        )}
      </div>
    </>
  );
};
export default ProductsCard;
