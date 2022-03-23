import ProductDetailSection from "../../Components/SingleProductPage/ProductDetailSection/ProductDetailSection";
import ProductDescription from "../../Components/SingleProductPage/ProductDescription/ProductDescription";
import ProductImageSection from "../../Components/SingleProductPage/ProductImageSection/ProductImageSection";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const { item } = location.state ?? null;

  return (
    <section className="single-product">
      <div className="flex-row flex-wrap">
        <ProductImageSection item={item} />
        <ProductDetailSection item={item} />
      </div>
      <ProductDescription item={item} />
    </section>
  );
};

export default SingleProduct;
