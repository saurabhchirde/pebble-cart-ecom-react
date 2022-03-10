import React from "react";
import FilterSection from "../../Components/ProductListingPage/FilterSection/FilterSection";
import ProductsSection from "../../Components/ProductListingPage/ProductsSection/ProductsSection";
import { FilterProvider } from "../../Context/FilterContext";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <>
      <FilterProvider>
        <div className="product-page-main mg-3-bot">
          <FilterSection />
          <ProductsSection />
        </div>
      </FilterProvider>
    </>
  );
};

export default ProductListingPage;
