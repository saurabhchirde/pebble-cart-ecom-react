import { useWishlist } from "../../../Context";

const ProductImageSection = ({ item }) => {
  const { wishlist, setWishlist } = useWishlist();
  const { src1, src2, src3, src4, src5 } = item;

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
