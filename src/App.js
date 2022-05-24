import {
  DesktopNavigationBar,
  Login,
  Signup,
  MobileNavigationBar,
  MobileNavigationBarBottom,
  Footer,
  BodyWrapper,
  SignupAlertModal,
  AlertModal,
  AnimateCamera,
  AnimateLoader,
  Orders,
  Settings,
  Payments,
  Addresses,
  Support,
} from "Components";
import {
  LandingPage,
  ProductListingPage,
  WishlistPage,
  CartPage,
  CheckoutPage,
  SingleProduct,
  NotFound,
  AccountPage,
  Accessories,
  Camera,
  Lens,
  Tripod,
} from "Pages";
import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { useAnimation, useAuth, useTheme, useModal } from "./Context";
import { useEffect } from "react";
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
      <ToastContainer className="toast-container"/>
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
