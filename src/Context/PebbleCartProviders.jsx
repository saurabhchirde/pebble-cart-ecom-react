import {
  ModalProvider,
  ProductsProvider,
  CartProvider,
  CheckoutProvider,
  FilterProvider,
  ScrollToTop,
  AuthProvider,
  AxiosCallProvider,
  AnimationProvider,
  AlertProvider,
} from "./index";
import { BrowserRouter } from "react-router-dom";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimationProvider>
          <AlertProvider>
            <ModalProvider>
              <ScrollToTop>
                <ProductsProvider>
                  <CartProvider>
                    <FilterProvider>
                      <CheckoutProvider>
                        <AxiosCallProvider>{children}</AxiosCallProvider>
                      </CheckoutProvider>
                    </FilterProvider>
                  </CartProvider>
                </ProductsProvider>
              </ScrollToTop>
            </ModalProvider>
          </AlertProvider>
        </AnimationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
