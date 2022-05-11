import { useTheme } from "Context";

export const ProductCard = ({ item }) => {
  const { title, src1, delivery } = item;
  const { darkTheme } = useTheme();

  const checkoutItemClass = darkTheme
    ? "cart-item-card checkout-item-card card-dark card-shadow-two"
    : "cart-item-card checkout-item-card checkout-item-card-light card-light ";

  return (
    <div className={checkoutItemClass}>
      <div className="card-img-container">
        <img
          src={src1}
          className="img-responsive"
          alt="product"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="card-text">
          <h1 className="card-title">{title}</h1>
          <h2 className="delivery-period">Delivery: {delivery}</h2>
        </div>
      </div>
    </div>
  );
};
