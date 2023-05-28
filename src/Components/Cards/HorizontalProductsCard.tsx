import { useAuth, useAxiosCalls, useCart, useTheme } from "Context";
import { AlertToast } from "Components";
import "./HorizontalProductsCard.css";
import { ProductProps } from "Components/types";

interface HorizontalProductsCardProps {
  item: ProductProps;
}

export const HorizontalProductsCard: React.FC<HorizontalProductsCardProps> = ({
  item,
}) => {
  const { title, price, src1 } = item;
  const { auth } = useAuth();
  const {
    addToCartOnServer,
    increaseCartItemQtyOnServer,
    removeWishlistItemFromServer,
  } = useAxiosCalls();
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
    if (cart.findIndex((el: ProductProps) => el._id === item._id) !== -1) {
      increaseCartItemQtyOnServer(cartConfig);
      AlertToast("info", "Quantity Updated");
    } else {
      addToCartOnServer(cartConfig);
      AlertToast("success", "Item Moved to Cart");
    }
    removeWishlistItemFromServer(wishlistConfig);
  };

  const onRemoveWishlistClickHandler = () => {
    removeWishlistItemFromServer(wishlistConfig);
    AlertToast("info", "Item Removed from Wishlist");
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
