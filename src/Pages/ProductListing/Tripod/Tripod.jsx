import FilterSection from "../../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../../Components/ProductListingPage/ProductsSection/ProductsSection";

const Tripod = () => {
  return (
    <div className="product-page-main mg-3-bot">
      <FilterSection
        camera={false}
        lens={false}
        tripod={true}
        accessories={false}
      />
      <ProductsSection />
    </div>
  );
};

export default Tripod;
