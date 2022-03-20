import { useCart, useWishlist } from "../../../../Context";

const ProductsCard = ({ item }) => {
  const { title, price, rating, totalRating, src, newestArrival, inStock } =
    item;
  const { cartState, cartDispatch } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  const addCartClick = () => {
    cartDispatch({ type: "addToCart", payload: item });
  };

  const removeFromCart = () => {
    cartDispatch({ type: "removeFromCart", payload: item });
  };

  const addWishlistClick = () => {
    setWishlist((oldCart) => {
      return [...new Set([...oldCart, item])];
    });
  };

  const removeFromWishlist = () => {
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((el) => {
        return el._id !== item._id;
      });
    });
  };

  return (
    <>
      <div className="card-vertical card-dark">
        {newestArrival && (
          <div className="badge-on-card top-left">
            <h2>New Arrival</h2>
          </div>
        )}
        <div className="card-img-container">
          <img src={src} alt="product" loading="lazy" />
        </div>
        <div className="card-body">
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
          <div className="card-nav">
            <div className="card-cta-btn">
              <button
                onClick={
                  cartState.cart.includes(item) ? removeFromCart : addCartClick
                }
                className={
                  cartState.cart.includes(item)
                    ? "btn primary-outline-btn-sm add-cart"
                    : "btn primary-btn-sm add-cart"
                }
              >
                {cartState.cart.includes(item) ? "In your Cart" : "Add to Cart"}
              </button>
              <div className="card-nav-icon">
                <button
                  onClick={
                    wishlist.includes(item)
                      ? removeFromWishlist
                      : addWishlistClick
                  }
                  className="btn primary-text-btn-sm icon-md"
                >
                  <i
                    className={
                      wishlist.includes(item) ? "fas fa-heart" : "far fa-heart"
                    }
                  ></i>
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
