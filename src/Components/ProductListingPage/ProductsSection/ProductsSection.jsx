import React from "react";
import { useCart } from "../../../Context/CartContext";
import { useFilter } from "../../../Context/FilterContext";
import { useWishlist } from "../../../Context/WishlistContext";
import { allProductList } from "../../../Data/productList/allProductList";
import ProductsCard from "./ProductsCard/ProductsCard";

const ProductsSection = () => {
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const { state, dispatch } = useFilter();

  const onAddCartClickHandler = (item) => {
    setCart((oldCart) => {
      return [...oldCart, item];
    });
  };
  // console.log(cart);

  const onAddWishlistHandler = (item) => {
    setWishlist((oldWishlist) => {
      return [...oldWishlist, item];
    });
  };
  // console.log(wishlist);
  // console.log(state.products);

  return (
    <>
      <section className="products">
        <h1>Showing All Products</h1>
        <div className="flex-row flex-wrap">
          {allProductList.map((item) => {
            return (
              <ProductsCard
                key={item.id}
                id={item.id}
                category={item.category}
                brand={item.brand}
                title={item.title}
                price={item.price}
                rating={item.rating}
                totalRating={item.totalRating}
                src={item.src}
                onAddCartClick={onAddCartClickHandler}
                onAddWishlist={onAddWishlistHandler}
                newestArrival={item.newestArrival}
                inStock={item.inStock}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
