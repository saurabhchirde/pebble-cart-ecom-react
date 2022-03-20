import FilterSection from "../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../Components/ProductListingPage/ProductsSection/ProductsSection";
import { FilterProvider } from "../../Context";
import "./ProductListingPage.css";
import FloatingButton from "../../Components/UI/Button/FloatingButton";

const ProductListingPage = () => {
  return (
    <>
      <FilterProvider>
        <div className="product-page-main mg-3-bot">
          <FilterSection />
          <ProductsSection />
        </div>
        <FloatingButton href="#" icon="fas fa-arrow-up" />
      </FilterProvider>
    </>
  );
};

export default ProductListingPage;
