import {
  ModalProvider,
  ProductsProvider,
  CartProvider,
  WishlistProvider,
  CheckoutProvider,
  FilterProvider,
  ScrollToTop,
  AuthProvider,
} from "./index";
import { BrowserRouter } from "react-router-dom";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <ScrollToTop>
            <ProductsProvider>
              <CartProvider>
                <FilterProvider>
                  <CheckoutProvider>
                    <WishlistProvider>{children}</WishlistProvider>
                  </CheckoutProvider>
                </FilterProvider>
              </CartProvider>
            </ProductsProvider>
          </ScrollToTop>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
