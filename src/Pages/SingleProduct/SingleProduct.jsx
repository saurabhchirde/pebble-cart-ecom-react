import axios from "axios";
import {
  ProductDetailSection,
  ProductDescription,
  ProductImageSection,
  AlertToast,
} from "Components";
import { useAnimation } from "Context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { productID } = useParams();
  const { showLoader } = useAnimation();

  const [item, setItem] = useState({});

  useEffect(() => {
    (async () => {
      try {
        showLoader();
        const response = await axios.get(`/api/products/${productID}`);
        showLoader();
        setItem(response.data.product);
      } catch (error) {
        AlertToast("error", error.message);
        showLoader();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productID]);

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
