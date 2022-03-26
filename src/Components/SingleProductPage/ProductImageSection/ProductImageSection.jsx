import { useAuth, useModal, useWishlist } from "../../../Context";
import axios from "axios";

const ProductImageSection = ({ item }) => {
  const { wishlist, setWishlist } = useWishlist();
  const { src1, src2, src3, src4, src5 } = item;
  const { auth } = useAuth();
  const { setError, setShowError, setShowLogin } = useModal();

  const addWishlistClick = () => {
    if (auth.login) {
      addToWishlistOnServer();
      setWishlist((oldCart) => {
        return [...new Set([...oldCart, item])];
      });
    } else {
      setShowLogin(true);
    }
  };

  const removeFromWishlist = () => {
    if (auth.login) {
      removeWishlistItemFromServer();
      setWishlist((oldWishlist) => {
        return oldWishlist.filter((el) => {
          return el._id !== item._id;
        });
      });
    }
  };

  // add to server wishlist
  const addToWishlistOnServer = async () => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product: { ...item },
        },
        { headers: { authorization: auth.token } }
      );
      console.log("wishlist", response.data.wishlist);
    } catch (error) {
      removeFromWishlist();
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

  return (
    <div className="single-product-image">
      <button
        onClick={
          wishlist.includes(item) ? removeFromWishlist : addWishlistClick
        }
        className="btn primary-text-btn-sm icon-md"
      >
        <i
          className={wishlist.includes(item) ? "fas fa-heart" : "far fa-heart"}
        ></i>
      </button>
      <img src={src1} alt="product-image" loading="lazy" />
      <div className="single-product-image-options">
        <img src={src1} alt="product-image" loading="lazy" />
        <img src={src2} alt="product-image" loading="lazy" />
        <img src={src3} alt="product-image" loading="lazy" />
        <img src={src4} alt="product-image" loading="lazy" />
        <img src={src5} alt="product-image" loading="lazy" />
      </div>
    </div>
  );
};

export default ProductImageSection;
