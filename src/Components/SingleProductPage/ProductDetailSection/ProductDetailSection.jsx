import { useCart, useWishlist } from "../../../Context";

const ProductDetailSection = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  console.log(item);

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
    <div className="single-product-detail">
      <div className="product-details-header">
        <h1>{item.title}</h1>
        <h3>Brand: {item.brand}</h3>
        <div className="flex-row flex-justify-space-between">
          <div className="rating-star-container">
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input
                className="rating-star-input"
                type="checkbox"
                checked
                disabled
              />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <label>
              <input className="rating-star-input" type="checkbox" disabled />
              <i className="fas fa-star rating-star-icon"></i>
            </label>
            <span className="rating-star-separator">|</span>
            <span className="rating-star-number">{item.totalRating}</span>
          </div>
          <p>Delivery in 7 - 8 days</p>
        </div>
      </div>
      <div className="product-details-body">
        <div>
          <h2 className="product-details-price">Rs. {item.price}/-</h2>
          <div className="product-details-cta">
            <button onClick={addCartClick} className="btn secondary-btn-md">
              Add to cart
            </button>
            <button className="btn primary-btn-md">Buy Now</button>
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
