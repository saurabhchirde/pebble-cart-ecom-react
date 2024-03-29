import { useAuth, useAxiosCalls, useCart, useModal } from "Context";
import { useEffect, useState } from "react";
import { AlertToast } from "Components";

export const ProductImageSection = ({ item }) => {
  const { src1, src2, src3, src4, src5 } = item;
  const { auth } = useAuth();
  const { setShowLogin } = useModal();
  const [currentImg, setCurrentImg] = useState(src1);
  const { addToWishlistOnServer, removeWishlistItemFromServer } =
    useAxiosCalls();
  const { addWishlist, setAddWishlist } = useCart();

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
      addToWishlistOnServer(wishlistConfig);
      AlertToast("success", "Added to Wishlist");
    } else {
      setShowLogin(true);
    }
  };

  const removeFromWishlist = () => {
    if (auth.login) {
      removeWishlistItemFromServer(wishlistConfig);
      AlertToast("info", "Item Removed from Wishlist");
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

  useEffect(() => {
    if (!currentImg) {
      setCurrentImg(src1);
    }
  }, [currentImg, item]);

  return (
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
        <img src={src1} alt="product-image" loading="lazy" onClick={onClick1} />
        <img src={src2} alt="product-image" loading="lazy" onClick={onClick2} />
        <img src={src3} alt="product-image" loading="lazy" onClick={onClick3} />
        <img src={src4} alt="product-image" loading="lazy" onClick={onClick4} />
        <img src={src5} alt="product-image" loading="lazy" onClick={onClick5} />
      </div>
    </div>
  );
};
