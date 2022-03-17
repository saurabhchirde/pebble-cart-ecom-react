import { useProductProvider } from "../../Context/ProductsProvider";
import ProductsCard from "../ProductListingPage/ProductsSection/ProductsCard/ProductsCard";

const NewArrivals = () => {
  const { productState } = useProductProvider();
  return (
    <div className="similar-products">
      <h1 className="title-lg-wt-5 mg-2-bot text-center">New Arrivals</h1>
      <div className="flex-row-center">
        {productState.products.map((item) => {
          return item.newestArrival ? (
            <ProductsCard key={item._id} item={item} />
          ) : (
            false
          );
        })}
        ;
      </div>
    </div>
  );
};

export default NewArrivals;
