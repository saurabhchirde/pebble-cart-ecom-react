import {
  ProductDetailSection,
  ProductDescription,
  ProductImageSection,
} from "Components";
import { useLocation } from "react-router-dom";

export const SingleProduct = () => {
  const location = useLocation();
  const { item } = location.state ?? null;

  return (
    <>
      <section className="single-product">
        <div className="flex-row flex-wrap">
          <ProductImageSection item={item} />
          <ProductDetailSection item={item} />
        </div>
        <ProductDescription item={item} />
      </section>
    </>
  );
};
