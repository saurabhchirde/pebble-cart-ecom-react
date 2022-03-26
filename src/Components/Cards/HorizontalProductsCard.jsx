import { useWishlist, useCart, useModal, useAuth } from "../../Context";
import axios from "axios";

const HorizontalProductsCard = ({ item }) => {
  const { title, price, src1 } = item;
  const { setWishlist } = useWishlist();
  const { cartDispatch } = useCart();
  const { setError, setShowError } = useModal();
  const { auth } = useAuth();

  const onMoveToCartClickHandler = () => {
    addToCartOnServer();
    cartDispatch({ type: "addToCart", payload: item });

    removeWishlistItemFromServer();
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((el) => {
        return el._id !== item._id;
      });
    });
  };

  const removeFromCart = () => {
    auth.login && cartDispatch({ type: "removeFromCart", payload: item });
  };

  // add to server cart
  const addToCartOnServer = async () => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product: { ...item },
        },
        { headers: { authorization: auth.token } }
      );
      console.log("cart", response.data.cart);
    } catch (error) {
      removeFromCart();
      setError(error.message);
      setShowError(true);
    }
  };

  // remove wishlit item from server
  const removeWishlistItemFromServer = async () => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
        headers: { authorization: auth.token },
      });
      console.log("wishlist", response.data.wishlist);
    } catch (error) {
      setWishlist((oldCart) => {
        return [...new Set([...oldCart, item])];
      });
      setError(error.message);
      setShowError(true);
    }
  };

  const onRemoveWishlistClickHandler = () => {
    removeWishlistItemFromServer();
    setWishlist((oldWishlist) => {
      return oldWishlist.filter((el) => {
        return el._id !== item._id;
      });
    });
  };

  return (
    <>
      <div className="card-horizontal card-dark">
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
