import { Link, useNavigate } from "react-router-dom";
import {
  useAuth,
  useAxiosCalls,
  useCart,
  useModal,
  useTheme,
  useProductProvider,
} from "Context";
import { canon6dCamera } from "Data/Img/Products/ProductImages";

interface RecommendedBannerProps {
  subTitle: string;
  title: string;
  description: string;
  btnLabel: string;
  readMoreLabel: string;
}

export const RecommendedBanner: React.FC<RecommendedBannerProps> = (props) => {
  const { productState } = useProductProvider();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { setShowLogin } = useModal();
  const { addToCartOnServer } = useAxiosCalls();
  const { darkTheme } = useTheme();

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
    <div
      className={
        darkTheme
          ? "recommended-banner"
          : "recommended-banner recommended-banner-light"
      }
    >
      <div>
        <p>{props.subTitle} </p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={onBuyNowClickHandler} className="btn primary-btn-md">
          {props.btnLabel}
        </button>
        <Link
          to={`products/${productState.products[1]._id}`}
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
  );
};
