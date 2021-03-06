import {
  useAlert,
  useAuth,
  useAxiosCalls,
  useCart,
  useTheme,
} from "../../Context";
import "./HorizontalProductsCard.css";

const HorizontalProductsCard = ({ item }) => {
  const { title, price, src1 } = item;
  const { auth } = useAuth();
  const {
    addToCartOnServer,
    increaseCartItemQtyOnServer,
    removeWishlistItemFromServer,
  } = useAxiosCalls();
  const { alertDispatch } = useAlert();
  const {
    cartState: { cart },
  } = useCart();
  const { darkTheme } = useTheme();

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...item },
    },
    actionIncrement: {
      action: { type: "increment" },
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
    if (cart.findIndex((el) => el._id === item._id) !== -1) {
      increaseCartItemQtyOnServer(cartConfig);
      alertDispatch({ type: "alreadyInCart" });
    } else {
      addToCartOnServer(cartConfig);
      alertDispatch({ type: "addToCartAlert" });
    }
    removeWishlistItemFromServer(wishlistConfig);
  };

  const onRemoveWishlistClickHandler = () => {
    removeWishlistItemFromServer(wishlistConfig);
  };

  const cartContainerClass = darkTheme
    ? "card-horizontal card-dark"
    : "card-horizontal card-light";

  return (
    <>
      <div className={cartContainerClass}>
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
