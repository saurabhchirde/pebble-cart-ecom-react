import FilterSection from "../../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../../Components/ProductListingPage/ProductsSection/ProductsSection";

const Lens = () => {
  return (
    <div className="product-page-main mg-3-bot">
      <FilterSection
        camera={false}
        lens={true}
        tripod={false}
        accessories={false}
      />
      <ProductsSection />
    </div>
  );
};

export default Lens;
