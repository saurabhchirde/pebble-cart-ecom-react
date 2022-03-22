import DesktopNavigationBar from "../src/Components/UI/Navigation/DesktopNavigationBar";
import LandingPage from "./Pages/Landing/LandingPage";
import { useModal } from "./Context/ModalContext";
import Login from "../src/Components/UI/Modal/Login";
import Signup from "../src/Components/UI/Modal/Signup";
import MobileNavigationBar from "../src/Components/UI/Navigation/MobileNavigationBar";
import MobileNavigationBarBottom from "../src/Components/UI/Navigation/MobileNavigationBarBottom";
import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import BodyWrapper from "./Components/UI/Wrapper/BodyWrapper";
import ProductListingPage from "./Pages/ProductListing/ProductListingPage";
import WishlistPage from "./Pages/Wishlist/WishlistPage";
import CartPage from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

const App = () => {
  const { showLoginModal, showSignupModal } = useModal();

  return (
    <>
      {showLoginModal === true ? <Login /> : false}
      {showSignupModal === true ? <Signup /> : false}
      <DesktopNavigationBar />
      <MobileNavigationBar />
      <MobileNavigationBarBottom />
      <BodyWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="cart/checkout" element={<CheckoutPage />} />
          <Route path="mockman" element={<Mockman />} />
          <Route path="products/product-details" element={<SingleProduct />} />
        </Routes>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default App;
