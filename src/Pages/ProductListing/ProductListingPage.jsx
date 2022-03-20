import FilterSection from "../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../Components/ProductListingPage/ProductsSection/ProductsSection";
import "./ProductListingPage.css";
import FloatingButton from "../../Components/UI/Button/FloatingButton";

const ProductListingPage = () => {
  return (
    <>
      <div className="product-page-main mg-3-bot">
        <FilterSection />
        <ProductsSection />
      </div>
      <FloatingButton href="#" icon="fas fa-arrow-up" />
    </>
  );
};

export default ProductListingPage;
