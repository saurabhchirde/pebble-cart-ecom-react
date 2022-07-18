import { FilterSection, ProductsSection } from "Components";

export const Lens = () => {
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
