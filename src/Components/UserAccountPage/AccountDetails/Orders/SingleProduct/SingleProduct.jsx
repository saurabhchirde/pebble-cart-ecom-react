import { AlertToast, Button } from "Components";
import { useAuth, useAxiosCalls, useCart, useTheme } from "Context";
import { useEffect, useState } from "react";
import "./SingleProduct.css";

export const SingleProduct = ({ product }) => {
  const { delivery, title, src1, qty } = product;
  const { auth } = useAuth();
  const {
    cartState: { cart },
  } = useCart();
  const { addToCartOnServer } = useAxiosCalls();
  const { darkTheme } = useTheme();
  const [reOrderButton, setReOrderButton] = useState("Re-Order");

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...product, qty: 1 },
    },
    headers: { headers: { authorization: auth.token } },
  };

  const reorderProductHandler = () => {
    addToCartOnServer(cartConfig);
    AlertToast("success", "Item Added to Cart");
  };

  useEffect(() => {
    if (cart.findIndex((el) => el._id === product._id) !== -1) {
      setReOrderButton("In Cart");
    } else {
      setReOrderButton("Re-Order");
    }
  }, [cart, reOrderButton]);

  const cardClassTopSection = darkTheme
    ? "order-card-top-section"
    : "order-card-top-section-light";

  return (
    <div className={cardClassTopSection}>
      <div className="order-card-image-description">
        <img src={src1} />
        <div className="ordered-product-details">
          <p>{title}</p>
          <Button
            onClick={reorderProductHandler}
            btnClassName="btn primary-btn-md product-reorder-btn"
            label={reOrderButton}
          />
        </div>
      </div>
      <div className="ordered-product-delivery">
        <p className="ordered-product-delivery-details">
          Est. delivery: {delivery}
        </p>
        <p>Qty : {qty} </p>
      </div>
    </div>
  );
};
