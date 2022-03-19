import { useFilter, useProductProvider } from "../../../Context/index";
import ProductsCard from "./ProductsCard/ProductsCard";
import { finalFilteredData } from "../../../Utils/finalFilteredData";
import "./ProductSection.css";

const ProductsSection = () => {
  const { filterState } = useFilter();
  const { productState } = useProductProvider();

  return (
    <>
      <section className="products">
        <h1>Showing All Products</h1>
        <div className="flex-row flex-wrap">
          {finalFilteredData(productState.products, filterState).length ===
          0 ? (
            <h1 className="noProductError">
              No Products Found For The Selected Options, Try Again.
            </h1>
          ) : (
            finalFilteredData(productState.products, filterState).map(
              (item) => {
                return <ProductsCard item={item} key={item._id} />;
              }
            )
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
