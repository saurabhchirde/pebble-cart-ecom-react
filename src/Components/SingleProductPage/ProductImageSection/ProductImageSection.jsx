import { useWishlist } from "../../../Context";

const ProductImageSection = ({ item }) => {
  const { wishlist, setWishlist } = useWishlist();
  const { src } = item;

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
      <img src={src} alt="product-image" loading="lazy" />
      <div className="single-product-image-options">
        <img src={src} alt="product-image" loading="lazy" />
        <img src={src} alt="product-image" loading="lazy" />
        <img src={src} alt="product-image" loading="lazy" />
        <img src={src} alt="product-image" loading="lazy" />
        <img src={src} alt="product-image" loading="lazy" />
      </div>
    </div>
  );
};

export default ProductImageSection;
