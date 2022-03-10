import React from "react";
import {
  actionCamera,
  polaroidCamera,
  sonyAlphaCamera,
} from "../../../Data/Img/Products/ProductImages";
import HotProductCard from "./HotProductCards/HotProductCard";

const HotProductsSection = () => {
  return (
    <>
      <div className="hot-new-products pd-2-tb">
        <h1>Hot New Products</h1>
        <div className="flex-row-center">
          <HotProductCard
            title="Mirrorless Cameras"
            imgSrc={sonyAlphaCamera}
            onClick={() => {}}
          />
          <HotProductCard
            title="Action Cameras"
            imgSrc={actionCamera}
            onClick={() => {}}
          />
          <HotProductCard
            title="Polaroid Cameras"
            imgSrc={polaroidCamera}
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default HotProductsSection;
