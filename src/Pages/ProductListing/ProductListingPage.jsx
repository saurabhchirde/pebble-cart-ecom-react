import { FilterSection, ProductsSection, FloatingButton } from "Components";

export const ProductListingPage = () => {
  return (
    <>
      <div className="product-page-main mg-3-bot">
        <FilterSection
          camera={true}
          lens={true}
          tripod={true}
          accessories={true}
        />
        <ProductsSection />
      </div>
      <FloatingButton href="#" icon="fas fa-arrow-up" />
    </>
  );
};
