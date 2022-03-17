import { useCart } from "../../../Context/CartContext";
import { useFilter } from "../../../Context/FilterContext";
import { useWishlist } from "../../../Context/WishlistContext";
import ProductsCard from "./ProductsCard/ProductsCard";
import { finalFilteredData } from "../../../Utils/finalFilteredData";
import "./ProductSection.css";
import { useProductProvider } from "../../../Context/ProductsProvider";

const ProductsSection = () => {
  const { state } = useFilter();
  const { products } = useProductProvider();

  return (
    <>
      <section className="products">
        <h1>Showing All Products</h1>
        <div className="flex-row flex-wrap">
          {finalFilteredData(products, state).length === 0 ? (
            <h1 className="noProductError">
              No Products Found For The Selected Options, Try Again.
            </h1>
          ) : (
            finalFilteredData(products, state).map((item) => {
              return <ProductsCard item={item} key={item._id} />;
            })
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
