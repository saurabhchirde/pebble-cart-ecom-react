import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";

const HorizontalProductsCard = (props) => {
  const { setWishlist } = useWishlist();
  const { setCart } = useCart();

  const onMoveToCartClickHandler = () => {
    setCart((oldCart) => {
      return [...oldCart, props];
    });
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((item) => {
        return item._id !== props._id;
      });
    });
  };

  const onRemoveWishlistClickHandler = () => {
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((item) => {
        return item._id !== props._id;
      });
    });
  };

  return (
    <>
      <div className="card-horizontal card-dark">
        <div className="card-img-container">
          <img src={props.imgSrc} alt="product" loading="lazy" />
        </div>
        <div className="card-body">
          <div className="card-text">
            <h1 className="card-title title-sm">{props.title}</h1>
            <h2 className="card-price">Rs. {props.price}/-</h2>
          </div>
          <div className="card-nav">
            <div className="card-cta-btn">
              <button
                onClick={onMoveToCartClickHandler}
                className="btn primary-btn-sm add-to-cart"
              >
                Move to Cart
              </button>
              <div className="card-nav-icon">
                <button
                  onClick={onRemoveWishlistClickHandler}
                  className="btn primary-text-btn-sm icon-md"
                >
                  <i className="fas fa-heart"></i>
                </button>
                <button className="btn primary-text-btn-sm icon-md">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductsCard;
