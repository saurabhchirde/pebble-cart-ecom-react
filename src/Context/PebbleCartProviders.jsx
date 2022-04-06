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
                <ProductsProvider>
                  <CartProvider>
                    <FilterProvider>
                      <ScrollToTop>
                        <CheckoutProvider>
                          <AxiosCallProvider>{children}</AxiosCallProvider>
                        </CheckoutProvider>{" "}
                      </ScrollToTop>
                    </FilterProvider>
                  </CartProvider>
                </ProductsProvider>
              </ModalProvider>
            </AlertProvider>
          </AnimationProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
