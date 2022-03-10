import React from "react";
import { usePageProvider } from "../../../Context/PageContext";
import {
  actionCamera,
  polaroidCamera,
  sonyAlphaCamera,
} from "../../../Data/Img/Products/ProductImages";
import HotProductCard from "./HotProductCards/HotProductCard";

const HotProductsSection = () => {
  const { dispatch } = usePageProvider();
  return (
    <>
      <div className="hot-new-products pd-2-tb">
        <h1>Hot New Products</h1>
        <div className="flex-row-center">
          <HotProductCard
            title="Mirrorless Cameras"
            imgSrc={sonyAlphaCamera}
            onClick={() => {
              dispatch({ type: "productListingPage" });
            }}
          />
          <HotProductCard
            title="Action Cameras"
            imgSrc={actionCamera}
            onClick={() => {
              dispatch({ type: "productListingPage" });
            }}
          />
          <HotProductCard
            title="Polaroid Cameras"
            imgSrc={polaroidCamera}
            onClick={() => {
              dispatch({ type: "productListingPage" });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HotProductsSection;
