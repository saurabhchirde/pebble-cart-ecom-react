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
import { AnimationProvider } from "./Animation/AnimationProvider";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimationProvider>
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
        </AnimationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
