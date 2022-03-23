import { useCart, useCheckout } from "../../../../Context";
import ProductCard from "./PorductCard/ProductCard";

const ProductOverviewCard = () => {
  const { cartState } = useCart();
  const { checkoutDispatch } = useCheckout();

  return (
    <div className="checkout-item-overview">
      <details>
        <summary>
          <h1>Item Overview</h1>
          <i
            onClick={() => {
              checkoutDispatch({ type: "productOverviewToggle" });
            }}
            className="fas fa-check-circle"
          ></i>
        </summary>
        {cartState.cart.map((item) => {
          return <ProductCard key={item._id} item={item} />;
        })}
      </details>
    </div>
  );
};

export default ProductOverviewCard;
