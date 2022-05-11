import { FilterSection, ProductsSection } from "Components";

export const Tripod = () => {
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
