import FilterSection from "../../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../../Components/ProductListingPage/ProductsSection/ProductsSection";

const Accessories = () => {
  return (
    <div className="product-page-main mg-3-bot">
      <FilterSection
        camera={false}
        lens={false}
        tripod={false}
        accessories={true}
      />
      <ProductsSection />
    </div>
  );
};

export default Accessories;
