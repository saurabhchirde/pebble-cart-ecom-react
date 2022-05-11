import { Link } from "react-router-dom";
import { useProductProvider, useTheme } from "Context";
import {
  actionCamera,
  polaroidCamera,
  sonyAlphaCamera,
} from "Data/Img/Products/ProductImages";
import { HotProductCard } from "Components";

export const HotProductsSection = () => {
  const { darkTheme } = useTheme();
  const { productState } = useProductProvider();

  const mirrorless = productState.products[5];
  const action = productState.products[7];
  const polaroid = productState.products[4];

  return (
    <div
      className={
        darkTheme
          ? "hot-new-products pd-2-tb"
          : "hot-new-products pd-2-tb hot-new-products-light"
      }
    >
      <h1>Hot New Products</h1>
      <div className="flex-row-center">
        <Link
          to={`/products/${mirrorless._id}`}
          state={{ item: { ...mirrorless, qty: 1 } }}
        >
          <HotProductCard title="Mirrorless Cameras" imgSrc={sonyAlphaCamera} />
        </Link>
        <Link
          to={`/products/${action._id}`}
          state={{ item: { ...action, qty: 1 } }}
        >
          <HotProductCard title="Action Cameras" imgSrc={actionCamera} />
        </Link>
        <Link
          to={`/products/${polaroid._id}`}
          state={{ item: { ...polaroid, qty: 1 } }}
        >
          <HotProductCard title="Polaroid Cameras" imgSrc={polaroidCamera} />
        </Link>
      </div>
    </div>
  );
};
