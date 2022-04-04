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
  ThemeProvider,
} from "./index";
import { BrowserRouter } from "react-router-dom";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
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
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
