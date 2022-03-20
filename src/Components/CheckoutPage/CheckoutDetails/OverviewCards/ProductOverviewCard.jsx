import { useCart } from "../../../../Context";
import ProductCard from "./PorductCard/ProductCard";
import { useCheckout } from "../../../../Context/CheckoutContext";

const ProductOverviewCard = () => {
  const { cartState } = useCart();
  const { checkoutState } = useCheckout();
  const { productOverviewCheck } = checkoutState;

  return (
    <div className="checkout-item-overview">
      <details>
        <summary>
          <h1>Item Overview</h1>
          <i
            onClick={() => {}}
            className={
              productOverviewCheck
                ? "fas fa-check-circle"
                : "far fa-check-circle"
            }
          ></i>
        </summary>
        {cartState.cart.map((item) => {
          return (
            <ProductCard
              key={item._id}
              item={{ ...item, delivery: " 7 - 8 " }}
            />
          );
        })}
      </details>
    </div>
  );
};

export default ProductOverviewCard;
