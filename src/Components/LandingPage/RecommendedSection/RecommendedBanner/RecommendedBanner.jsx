import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAxiosCalls, useCart, useModal } from "../../../../Context";
import { useProductProvider } from "../../../../Context/ProductList/ProductsProvider";
import { canon6dCamera } from "../../../../Data/Img/Products/ProductImages";

const RecommendedBanner = (props) => {
  const { productState } = useProductProvider();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { setShowLogin } = useModal();
  const { addToCartOnServer } = useAxiosCalls();

  const cartConfig = {
    url: "/api/user/cart",
    body: {
      product: { ...productState.products[1], qty: 1 },
    },
    headers: { headers: { authorization: auth.token } },
    item: { ...productState.products[1], qty: 1 },
  };

  const onBuyNowClickHandler = () => {
    if (auth.login) {
      if (!cartState.cart.includes(productState.products[1])) {
        addToCartOnServer(cartConfig);
      }
      navigate("/cart");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      <div className="recommended-banner">
        <div>
          <p>{props.subTitle} </p>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button onClick={onBuyNowClickHandler} className="btn primary-btn-md">
            {props.btnLabel}
          </button>
          <Link
            to="products/product-details"
            state={{ item: { ...productState.products[1], qty: 1 } }}
          >
            <button className="btn primary-text-btn-md">
              {props.readMoreLabel}
            </button>
          </Link>
        </div>
        <img
          src={canon6dCamera}
          alt="camera"
          loading="lazy"
          className="img-responsive"
        />
      </div>
    </>
  );
};
export default RecommendedBanner;
