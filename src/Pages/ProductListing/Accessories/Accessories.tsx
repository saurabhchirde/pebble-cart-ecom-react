import { FilterSection, ProductsSection } from "Components";

export const Accessories = () => {
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
