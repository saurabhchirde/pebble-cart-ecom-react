import DesktopNavigationBar from "../src/Components/UI/Navigation/DesktopNavigationBar";
import LandingPage from "./Pages/Landing/LandingPage";
import { useModal } from "./Context/Modal/ModalProvider";
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
import SignupAlertModal from "./Components/UI/Modal/SignupAlertModal";
import AlertModal from "./Components/UI/Modal/AlertModal";
import Camera from "./Pages/ProductListing/Camera/Camera";
import Lens from "./Pages/ProductListing/Lens/Lens";
import Tripod from "./Pages/ProductListing/Tripod/Tripod";
import Accessories from "./Pages/ProductListing/Accessories/Accessories";

const App = () => {
  const { showLogin, showSignup, showSignupAlert, showError } = useModal();

  return (
    <>
      {showLogin && <Login />}
      {showSignup && <Signup />}
      {showSignupAlert && <SignupAlertModal />}
      {showError && <AlertModal />}
      <DesktopNavigationBar />
      <MobileNavigationBar />
      <MobileNavigationBarBottom />
      <BodyWrapper>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="/products/camera" element={<Camera />} />
          <Route path="/products/lenses" element={<Lens />} />
          <Route path="/products/tripods" element={<Tripod />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="products/product-details" element={<SingleProduct />} />
          {/* private routes */}
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="cart/checkout" element={<CheckoutPage />} />
          <Route path="mockman" element={<Mockman />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default App;
