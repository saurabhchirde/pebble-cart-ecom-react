import ProductDetailSection from "../../Components/SingleProductPage/ProductDetailSection/ProductDetailSection";
import ProductDescription from "../../Components/SingleProductPage/ProductDescription/ProductDescription";
import ProductImageSection from "../../Components/SingleProductPage/ProductImageSection/ProductImageSection";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <section className="single-product">
      <div className="flex-row flex-wrap">
        <ProductImageSection
          item={item}
          mainImg={item.src}
          img1={item.src}
          img2={item.src}
          img3={item.src}
          img4={item.src}
          img5={item.src}
        />
        <ProductDetailSection
          item={item}
          title={item.title}
          brand={item.brand}
          totalRating={item.totalRating}
          price={item.price}
        />
      </div>
      <ProductDescription />
    </section>
  );
};

export default SingleProduct;
