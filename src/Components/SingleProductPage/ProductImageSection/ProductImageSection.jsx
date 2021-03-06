import {
  useAlert,
  useAuth,
  useAxiosCalls,
  useCart,
  useModal,
} from "../../../Context";
import { useState } from "react";
import Alert from "../../Alert/Alert";

const ProductImageSection = ({ item }) => {
  const { src1, src2, src3, src4, src5 } = item;
  const { auth } = useAuth();
  const { setShowLogin } = useModal();
  const [currentImg, setCurrentImg] = useState(src1);
  const { addToWishlistOnServer, removeWishlistItemFromServer } =
    useAxiosCalls();
  const {
    cartState: { wishlist },
    addWishlist,
    setAddWishlist,
  } = useCart();
  const {
    alertDispatch,
    alertState: { addToWishlistAlert, removeFromWishlistAlert },
  } = useAlert();

  const wishlistConfig = {
    url: "/api/user/wishlist",
    body: {
      product: { ...item },
    },
    headers: { headers: { authorization: auth.token } },
    item: item,
  };

  const addWishlistClick = () => {
    if (auth.login) {
      if (wishlist.findIndex((el) => el._id === item._id) !== -1) {
        alertDispatch({ type: "alreadyInWishlist" });
      } else {
        addToWishlistOnServer(wishlistConfig);
      }
    } else {
      setShowLogin(true);
    }
  };

  const removeFromWishlist = () => {
    if (auth.login) {
      removeWishlistItemFromServer(wishlistConfig);
      setAddWishlist("far fa-heart");
    }
  };

  const wishlistButtonStatus = () => {
    if (addWishlist === "fas fa-heart") {
      removeFromWishlist();
    } else {
      addWishlistClick();
    }
  };

  const onClick1 = () => {
    setCurrentImg(src1);
  };
  const onClick2 = () => {
    setCurrentImg(src2);
  };
  const onClick3 = () => {
    setCurrentImg(src3);
  };
  const onClick4 = () => {
    setCurrentImg(src4);
  };
  const onClick5 = () => {
    setCurrentImg(src5);
  };

  return (
    <>
      {addToWishlistAlert && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Item Added to Wishlist"
          dispatchType="hideAddToWishlistAlert"
        />
      )}
      {removeFromWishlistAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Item Removed from Wishlist"
          dispatchType="hideRemoveFromWishlistAlert"
        />
      )}
      <div className="single-product-image">
        <button
          onClick={wishlistButtonStatus}
          className="btn primary-text-btn-sm icon-md"
        >
          <i className={addWishlist}></i>
        </button>
        <img
          className="main-image"
          src={currentImg}
          alt="product-image"
          loading="lazy"
        />
        <div className="single-product-image-options">
          <img
            src={src1}
            alt="product-image"
            loading="lazy"
            onClick={onClick1}
          />
          <img
            src={src2}
            alt="product-image"
            loading="lazy"
            onClick={onClick2}
          />
          <img
            src={src3}
            alt="product-image"
            loading="lazy"
            onClick={onClick3}
          />
          <img
            src={src4}
            alt="product-image"
            loading="lazy"
            onClick={onClick4}
          />
          <img
            src={src5}
            alt="product-image"
            loading="lazy"
            onClick={onClick5}
          />
        </div>
      </div>
    </>
  );
};

export default ProductImageSection;
