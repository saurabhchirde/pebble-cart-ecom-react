import { useWishlist, useCart, useAuth, useAxiosCalls } from "../../Context";
import "./HorizontalProductsCard.css";

const HorizontalProductsCard = ({ item }) => {
  const { title, price, src1 } = item;
  const { setWishlist } = useWishlist();
  const { cartDispatch } = useCart();
  const { auth } = useAuth();
  const { addToCartOnServer, removeWishlistItemFromServer } = useAxiosCalls();

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

  const onMoveToCartClickHandler = () => {
    addToCartOnServer(cartConfig);
    cartDispatch({ type: "addToCart", payload: item });

    removeWishlistItemFromServer(wishlistConfig);
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((el) => {
        return el._id !== item._id;
      });
    });
  };

  const onRemoveWishlistClickHandler = () => {
    removeWishlistItemFromServer(wishlistConfig);
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((el) => {
        return el._id !== item._id;
      });
    });
  };

  return (
    <>
      <div className="card-horizontal card-dark">
        <button className="btn primary-text-btn-sm icon-md">
          <i className="fas fa-share-alt"></i>
        </button>
        <div className="card-img-container">
          <img src={src1} alt="product" loading="lazy" />
        </div>
        <div className="card-body">
          <div className="card-text">
            <h1 className="card-title title-sm">{title}</h1>
            <h2 className="card-price">Rs. {price}/-</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductsCard;
