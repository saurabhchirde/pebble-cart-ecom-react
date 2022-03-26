import FilterSection from "../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../Components/ProductListingPage/ProductsSection/ProductsSection";
import FloatingButton from "../../Components/UI/Button/FloatingButton";

const ProductListingPage = () => {
  return (
    <>
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
