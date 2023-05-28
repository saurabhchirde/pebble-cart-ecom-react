import { FilterSection, ProductsSection } from "Components";

export const Camera = () => {
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
