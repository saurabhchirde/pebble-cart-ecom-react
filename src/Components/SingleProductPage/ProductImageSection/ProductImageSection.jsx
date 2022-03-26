import {
  useAuth,
  useAxiosCalls,
  useModal,
  useWishlist,
} from "../../../Context";
import { useState } from "react";

const ProductImageSection = ({ item }) => {
  const { wishlist, setWishlist } = useWishlist();
  const { src1, src2, src3, src4, src5 } = item;
  const { auth } = useAuth();
  const { setShowLogin } = useModal();
  const [currentImg, setCurrentImg] = useState(src1);
  const { addToWishlistOnServer, removeWishlistItemFromServer } =
    useAxiosCalls();

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
      setWishlist((oldCart) => {
        return [...new Set([...oldCart, item])];
      });
    } else {
      setShowLogin(true);
    }
  };

  const removeFromWishlist = () => {
    if (auth.login) {
      removeWishlistItemFromServer(wishlistConfig);
      setWishlist((oldWishlist) => {
        return oldWishlist.filter((el) => {
          return el._id !== item._id;
        });
      });
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

export default ProductImageSection;
