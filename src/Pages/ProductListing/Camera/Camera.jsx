import FilterSection from "../../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../../Components/ProductListingPage/ProductsSection/ProductsSection";

const Camera = () => {
  return (
    <div className="product-page-main mg-3-bot">
      <FilterSection
        camera={true}
        lens={false}
        tripod={false}
        accessories={false}
      />
      <ProductsSection />
    </div>
  );
};

export default Camera;
