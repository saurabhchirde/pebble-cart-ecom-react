import { useCart, useTheme } from "Context";
import { ProductCard } from "Components";

export const ProductOverviewCard = () => {
  const { cartState } = useCart();
  const { darkTheme } = useTheme();

  return (
    <div
      className={
        darkTheme
          ? "checkout-item-overview"
          : "checkout-item-overview checkout-item-overview-light"
      }
    >
      <details>
        <summary>
          <h1>Item Overview</h1>
          <i className="fas fa-check-circle"></i>
        </summary>
        {cartState.cart.map((item) => {
          return <ProductCard key={item._id} item={item} />;
        })}
      </details>
    </div>
  );
};
