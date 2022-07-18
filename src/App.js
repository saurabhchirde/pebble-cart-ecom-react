import {
  DesktopNavigationBar,
  MobileNavigationBar,
  MobileNavigationBarBottom,
  Footer,
  BodyWrapper,
  AnimateCamera,
  AnimateLoader,
  Orders,
  Settings,
  Addresses,
  ProtectedRoute,
} from "Components";
import {
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
  LandingPage,
} from "Pages";
import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { useAnimation, useTheme } from "./Context";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { loader, loaderCamera } = useAnimation();
  const { darkTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("pebbleCartTheme", JSON.stringify(darkTheme));
    darkTheme
      ? document.body.classList.remove("lightTheme")
      : document.body.classList.add("lightTheme");
  }, [darkTheme]);

  return (
    <>
      <ToastContainer className="toast-container" />
      {loader && <AnimateLoader />}
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
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/products/search" element={<ProductListingPage />} />
              <Route path="/products/camera" element={<Camera />} />
              <Route path="/products/lenses" element={<Lens />} />
              <Route path="/products/tripods" element={<Tripod />} />
              <Route path="/products/accessories" element={<Accessories />} />
              <Route path="/products/:productID" element={<SingleProduct />} />
              {/* private routes */}
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/addresses"
                element={
                  <ProtectedRoute>
                    <Addresses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/orders"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart/checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />

              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
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
