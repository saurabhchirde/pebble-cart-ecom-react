import { useCart } from "../../../Context/CartContext";
import { useFilter } from "../../../Context/FilterContext";
import { useWishlist } from "../../../Context/WishlistContext";
import ProductsCard from "./ProductsCard/ProductsCard";
import { finalFilteredData } from "../../../Utils/finalFilteredData";
import "./ProductSection.css";

const ProductsSection = () => {
  const { setCart } = useCart();
  const { setWishlist } = useWishlist();
  const { state } = useFilter();

  const onAddCartClickHandler = (item) => {
    setCart((oldCart) => {
      return [...oldCart, item];
    });
  };

  const onAddWishlistHandler = (item) => {
    setWishlist((oldWishlist) => {
      return [...oldWishlist, item];
    });
  };

  return (
    <>
      <section className="products">
        <h1>Showing All Products</h1>
        <div className="flex-row flex-wrap">
          {finalFilteredData(state).length === 0 ? (
            <h1 className="noProductError">
              No Products Found For The Selected Options, Try Again.
            </h1>
          ) : (
            finalFilteredData(state).map((item) => {
              return (
                <ProductsCard
                  item={item}
                  key={item._id}
                  onAddCartClick={onAddCartClickHandler}
                  onAddWishlist={onAddWishlistHandler}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
