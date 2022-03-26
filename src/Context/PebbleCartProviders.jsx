import {
  ModalProvider,
  ProductsProvider,
  CartProvider,
  WishlistProvider,
  CheckoutProvider,
  FilterProvider,
  ScrollToTop,
  AuthProvider,
  AxiosCallProvider,
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
                    <WishlistProvider>
                      <AxiosCallProvider>{children}</AxiosCallProvider>
                    </WishlistProvider>
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
