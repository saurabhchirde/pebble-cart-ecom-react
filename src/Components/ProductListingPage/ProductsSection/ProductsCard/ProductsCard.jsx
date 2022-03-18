import { useCart } from "../../../../Context/CartContext";
import { useWishlist } from "../../../../Context/WishlistContext";

const ProductsCard = ({ item }) => {
  const { title, price, rating, totalRating, src, newestArrival, inStock } =
    item;
  const { cartState, cartDispatch } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  const addCartClick = () => {
    cartDispatch({ type: "addToCart", payload: item });
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
        {newestArrival ? (
          <div className="badge-on-card top-left">
            <h2>New Arrival</h2>
          </div>
        ) : (
          false
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
                onClick={addCartClick}
                className="btn primary-btn-sm add-cart"
              >
                Add to Cart
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
        {!inStock ? (
          <div className="overlay-area-type-1">
            <h1 className="card-title">SOLD OUT</h1>
          </div>
        ) : (
          true
        )}
      </div>
    </>
  );
};
export default ProductsCard;
