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
import { useAnimation, useAuth, useTheme } from "./Context";
import AnimateCamera from "./Components/Animations/AnimateCamera";
import AnimateLoader from "./Components/Animations/AnimateLoader";
import NotFound from "./Pages/NotFound/NotFound";
import { useEffect } from "react";
import AccountPage from "./Pages/AccountPage/AccountPage";
import Orders from "./Components/UserAccountPage/AccountDetails/Orders/Orders";
import Settings from "./Components/UserAccountPage/AccountDetails/Settings/Settings";
import Payments from "./Components/UserAccountPage/AccountDetails/Payments/Payments";
import Addresses from "./Components/UserAccountPage/AccountDetails/Addresses/Addresses";
import Support from "./Components/UserAccountPage/AccountDetails/Support/Support";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { showLogin, showSignup, showSignupAlert, showAlert } = useModal();
  const { loader, loaderCamera } = useAnimation();
  const { auth } = useAuth();
  const { darkTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("pebbleCartTheme", JSON.stringify(darkTheme));
    darkTheme
      ? document.body.classList.remove("lightTheme")
      : document.body.classList.add("lightTheme");
  }, [darkTheme]);

  return (
    <>
      <ToastContainer />
      {loader && <AnimateLoader />}
      {showLogin && <Login />}
      {showSignup && <Signup />}
      {showSignupAlert && <SignupAlertModal />}
      {showAlert && <AlertModal />}
      {loaderCamera && <AnimateCamera />}
      {!loaderCamera && (
        <div className="app">
          <DesktopNavigationBar />
          <MobileNavigationBar />
          <MobileNavigationBarBottom />
          <BodyWrapper>
            <Routes>
              {/* public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="products" element={<ProductListingPage />} />
              <Route path="/products/search" element={<ProductListingPage />} />
              <Route path="/products/camera" element={<Camera />} />
              <Route path="/products/lenses" element={<Lens />} />
              <Route path="/products/tripods" element={<Tripod />} />
              <Route path="/products/accessories" element={<Accessories />} />
              <Route path="/products/:productID" element={<SingleProduct />} />
              {/* private routes */}
              {auth.login && <Route path="account" element={<AccountPage />} />}
              {auth.login && (
                <Route path="account/addresses" element={<Addresses />} />
              )}
              {auth.login && (
                <Route path="account/orders" element={<Orders />} />
              )}
              {auth.login && (
                <Route path="account/payments" element={<Payments />} />
              )}
              {auth.login && (
                <Route path="account/settings" element={<Settings />} />
              )}
              {auth.login && (
                <Route path="account/support" element={<Support />} />
              )}
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="cart" element={<CartPage />} />
              {auth.login && (
                <Route path="cart/checkout" element={<CheckoutPage />} />
              )}
              <Route path="mockman" element={<Mockman />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BodyWrapper>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
