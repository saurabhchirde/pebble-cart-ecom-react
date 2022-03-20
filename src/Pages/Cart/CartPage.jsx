import CartItemCard from "../../Components/CartPage/ProductCard/CartItemCard";
import { useCart } from "../../Context";
import "./CartPage.css";
import { Link } from "react-router-dom";
import PriceCard from "../../Components/CartPage/PriceCard/PriceCard";

const CartPage = () => {
  const { cartState } = useCart();

  return (
    <>
      <div className="cart">
        <h1 className="title-xl-wt-5 mg-2-bot text-center">
          Shopping Cart ({cartState.cart.length})
        </h1>
        {cartState.cart.length === 0 ? (
          <div className="emptyWishlistMsg">
            <h1>Your cart is empty</h1>
            <Link to="/products">
              <button className="btn primary-btn-md">Shop now</button>
            </Link>
          </div>
        ) : (
          <div className="flex-row flex-justify-space-between">
            <div className="cart-products">
              {cartState.cart.map((item) => {
                return <CartItemCard item={item} key={item._id} />;
              })}
            </div>
            <PriceCard />
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
