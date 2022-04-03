import Alert from "../../Components/Alert/Alert";
import FilterSection from "../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../Components/ProductListingPage/ProductsSection/ProductsSection";
import FloatingButton from "../../Components/UI/Button/FloatingButton";
import { useAlert } from "../../Context";

const ProductListingPage = () => {
  const {
    alertState: {
      addToCartAlert,
      alreadyInCart,
      addToWishlistAlert,
      removeFromWishlistAlert,
      alreadyInWishlist,
    },
  } = useAlert();

  return (
    <>
      {addToCartAlert && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Item Added to Cart"
          dispatchType="hideAddToCartAlert"
        />
      )}
      {alreadyInCart && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Already in Cart"
          dispatchType="hideAlreadyInCart"
        />
      )}

      {addToWishlistAlert && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Item Added to Wishlist"
          dispatchType="hideAddToWishlistAlert"
        />
      )}
      {alreadyInWishlist && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Already in Wishlist"
          dispatchType="hideAlreadyInWishlist"
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
      <div className="product-page-main mg-3-bot">
        <FilterSection
          camera={true}
          lens={true}
          tripod={true}
          accessories={true}
        />
        <ProductsSection />
      </div>
      <FloatingButton href="#" icon="fas fa-arrow-up" />
    </>
  );
};

export default ProductListingPage;
