import { useProductProvider, useTheme } from "../../Context";
import ProductsCard from "../ProductListingPage/ProductsSection/ProductsCard/ProductsCard";

const NewArrivals = () => {
  const { productState } = useProductProvider();
  const { darkTheme } = useTheme();
  return (
    <div
      className={
        darkTheme
          ? "similar-products"
          : "similar-products similar-products-light"
      }
    >
      <h1 className="title-lg-wt-5 mg-2-bot text-center">New Arrivals</h1>
      <div className="flex-row-center">
        {productState.products.map((item) => {
          return (
            item.newestArrival && (
              <ProductsCard key={item._id} item={{ ...item, qty: 1 }} />
            )
          );
        })}
        ;
      </div>
    </div>
  );
};

export default NewArrivals;
